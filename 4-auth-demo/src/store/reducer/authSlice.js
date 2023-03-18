import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLogged: false,
  token: "",
  user: null,
  expirationTime: 0,
};

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const expirationTime = localStorage.getItem("expirationTime");

if (token !== 'undefined') {
  initialState = {
    isLogged: true,
    token,
    user: JSON.parse(user),
    expirationTime: +expirationTime,
  };
}

export const authSlice = createSlice({
  name: "auth",
  // initialState 也可以使函数来返回值
  initialState,
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.token = action.payload.token;
      state.user = action.payload.user;

    //   一周后过期
      const expirationAfter = 1000 * 60 * 60 * 24 * 7;
      const expirationTime = Date.now() + expirationAfter;
    //   测试 10秒后过期
      // const expirationTime = Date.now() + 10000

      state.expirationTime = expirationTime;

      localStorage.setItem("expirationTime", expirationTime);
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout(state, action) {
      // 由于 state 是代理对象，不能像下面 其直接赋值，否则检查不到数据变化
      //   state = initialState;

      state.isLogged = false;
      state.token = "";
      state.user = null;

      localStorage.removeItem("expirationTime");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
