import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/reducer/authSlice";

// 导出 自定义钩子函数，use命名开头，也可以返回内容
export const useAutoLogout = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  /**
   * 一个组件中，可以有多个 useEffect
   * 钩子函数只能放到 自定义 或 内置钩子函数中，或者函数组件的最顶层，不能放到组件函数的子函数内
   */
  useEffect(() => {
    const expirationAfter = auth.expirationTime - Date.now();

    if (expirationAfter <= 0) {
      dispatch(logout());
    }

    const timer = setTimeout(() => {
      dispatch(logout());
    }, expirationAfter);

    return () => {
      clearTimeout(timer);
    };
  }, [auth]);
};
