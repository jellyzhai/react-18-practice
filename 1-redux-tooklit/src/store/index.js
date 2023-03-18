import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import studentApi from "./studentApi";

// 创建store
const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
  },
  //   studentApi.middleware 可以使用缓存
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});

// 设置以后，将会支持 refetchOnFocus(当浏览器标签页重新获得焦点时) 和 refetchOnReconnect(当浏览器断网需要重连时) 重发请求
setupListeners(store.dispatch)

export default store;
