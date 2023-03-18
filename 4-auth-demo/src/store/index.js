import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "./api/authApi";
import studentApi from "./api/studentApi";
import { authSlice } from "./reducer/authSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, studentApi.middleware),
});

// 设置以后，将会支持 refetchOnFocus(当浏览器标签页重新获得焦点时) 和 refetchOnReconnect(当浏览器断网需要重连时) 重发请求
setupListeners(store.dispatch);

export default store;
