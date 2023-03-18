import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// 创建关于 student 的api 对象
const studentApi = createApi({
  // api 的标识，不能与其他api或 reducer 重复
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
  }),
//   指定api中标签类型
  tagTypes: ['student'],
  endpoints(build) {
    return {
      getStudents: build.query({
        query() {
          // 最终 getStudents的 url 为 baseUrl + "students"
          return "students";
        },
        // providesTags 属性，用于在 其他请求设置 invalidatesTags 时，触发当前请求的刷新
        providesTags: [{ type: "student", id: "list" }],
      }),
      //   get 方法 使用 build.query
      getStudentById: build.query({
        query(id) {
          return `students/${id}`;
        },
        transformResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data;
        },
        /* // 设置 在一个请求的数据，被结束使用后，距离下次请求的 缓存时间；单位为秒；
        keepUnusedDataFor: 2, */

        // 箭头函数的最后一个参数为，当前对象中，query 方法的参数
        providesTags: (result, error, id) => [{ type: "student", id }],
      }),
      //   非 get 方法，使用build.mutation 方法
      delStudent: build.mutation({
        query(id) {
          // 非 get 方法 需要返回一个对象，在其中配置 请求方法等
          return {
            url: `students/${id}`,
            method: "delete",
          };
        },
      }),
      addStudent: build.mutation({
        query(student) {
          return {
            url: `students`,
            method: "post",
            body: {
              data: student,
            },
          };
        },
        // 当添加数据时，触发列表请求的刷新
        invalidatesTags: [{ type: "student", id: "list" }],
      }),
      updateStudent: build.mutation({
        query(student) {
          return {
            url: `students/${student.id}`,
            method: "put",
            body: {
              data: student.attributes,
            },
          };
        },

        /**
         * 箭头函数的最后一个参数为，当前对象中，query 方法的参数
         * 当更新数据时，触发 列表请求 和 单个数据请求的刷新
         */
        invalidatesTags: (reset, error, stu) => [
          { type: "student", id: stu.id },
          { type: "student", id: "list" },
        ],
      }),
    };
  },
});

/**
 * api 对象创建后，对象中会根据 endpoints 的各种方法 生成对应的钩子函数
 * 通过这些钩子函数可以向服务器发送请求
 * 钩子函数的命名规则:
 *   GET  方法时，getStudents -> useGetStudentsQuery
 *   非 GET方法时，delStudent -> useDelStudentMutation
 */
export const {
  useGetStudentsQuery,
  useGetStudentByIdQuery,
  useDelStudentMutation,
  useAddStudentMutation,
  useUpdateStudentMutation,
} = studentApi;

export default studentApi;
