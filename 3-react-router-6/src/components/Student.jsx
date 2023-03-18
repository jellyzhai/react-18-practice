import React from "react";
import { useLocation } from "react-router-dom";
import { useParams, useNavigate, useMatch } from "react-router-dom";
import { Students } from "../constants/students";

export default function Student(props) {
  /* location
    hash: ""
    key: "jpgbvo3c"
    pathname: "/students/4"
    search: ""
    state: {password: 1678960694873}
  */
  const location = useLocation();
  console.log("Student location", location);

  /* nav 方法中的 第二个参数类型
    interface NavigateOptions {
      replace?: boolean;
        state?: any;
        preventScrollReset?: boolean;
        relative?: RelativeRoutingType;
    }
    */
  const nav = useNavigate();
  console.log("Student nav", nav);

  const routeParams = useParams();
  console.log("Student routeParams", routeParams);

  /* match 对象
  params:
     id: '4'
  pathname: "/students/4"
  pathnameBase: "/students/4"
  pattern:
    path: '/students/:id'
    caseSensitive: false
    end: true
 */
  const match = useMatch("/students/:id");
  console.log("Student match", match);

  console.log("Student props", props);

  const { id } = routeParams;
  const student = Students.find((item) => item.id == id) || {};

  /* useHistory 钩子函数在 v6 中被删除 */
  return (
    <div style={{ border: "1px solid orange" }}>
      <button onClick={() => window.history.back()}>点我返回</button>
      <h1>这里是学生详情</h1>
      {student.id} -- {student.name}
    </div>
  );
}
