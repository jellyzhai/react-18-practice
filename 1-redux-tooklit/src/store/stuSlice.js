import { createSlice } from "@reduxjs/toolkit";

/**
 * 创建 store 的 slice 切片对象
 * 切片对象 中，包含 切片的名称，初始值，操作数据的reducers, 和 action 对象生成函数
 * createSlice 方法调用后 返回的对象中，包含 actions 对象, 对象中包含 action的生成器函数，与 reducer 中的方法名一致；
 *
 */
const stuSlice = createSlice({
  // name 会作为 action对象中 type 值的前缀
  name: "stu",
  initialState: {
    name: "孙悟空",
    age: 18,
    gender: "男",
    address: "花果山",
  },
  reducers: {
    setName(state, action) {
      // 这里的 state 是个代理对象，可以直接修改
      state.name = action.payload;
    },
    setAge(state, action) {
      // 这里的 state 是个代理对象，可以直接修改
      state.age = action.payload;
    },
  },
});

/**
 * stuSlice.actions; 中包含与 reducer 对象中的方法名称一致的 action 创建器函数，
 * action 创建器函数的参数，是创建后的action对象的 payload 属性值，
 生成的 action 对象：{type: slice的name/action 创建器函数名， payload：action 创建器函数参数}
 * 所以在使用 dispatch 方法时，可以直接传入 action 创建器函数的调用
 */
export const { setName, setAge } = stuSlice.actions;
export const { reducer: stuReducer } = stuSlice;
