import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/reducer/authSlice";

export default function MainMenu() {
  const authInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <ul
      style={{ border: "1px solid green", padding: "10px", listStyle: "none" }}
    >
      <li>
        <Link to="/">首页</Link>
      </li>

      {!authInfo.isLogged && (
        <li>
          <Link to="/auth-form">登录/注册</Link>
        </li>
      )}

      {authInfo.isLogged && (
        <>
          <li>
            <Link to="/profile">{authInfo.user.username}</Link>
          </li>
          <li>
            <Link to="/student">学生列表</Link>
          </li>
          <li>
            <Link
              to="/auth-form"
              onClick={() => {
                dispatch(logout());
              }}
            >
              登出
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
