import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation, useRegisterMutation } from "../store/api/authApi";
import { login, logout } from "../store/reducer/authSlice";

export default function AuthForm() {
  const nameInp = useRef();
  const passwordInp = useRef();
  const emailInp = useRef();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [registerFun, { error: registerErr }] = useRegisterMutation();
  const [loginFun, { error: loginErr }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const preUrl = location.state?.location?.pathname ?? "/";

  const submitFun = (e) => {
    e.preventDefault();

    const username = nameInp.current.value;
    const password = passwordInp.current.value;

    if (isLoginForm) {
      loginFun({ identifier: username, password }).then((res) => {
        /**
         * 在 store 中存储登录状态（布尔值，token(jwt), 用户信息）
         * 跳转到首页
         */
        console.log("loginFun", res);
        if (!res.error) {
          dispatch(login({ token: res.data.jwt, user: res.data.user }));
          navigate(preUrl, { replace: true });
        }
      });
    } else {
      const email = emailInp.current.value;

      registerFun({ username, password, email }).then((res) => {
        if (!res.error) {
          // 登录成功后，回到登录表单
          setIsLoginForm(true);
        }
      });
    }
  };

  return (
    <div>
      <h2>{isLoginForm ? "登录" : "注册"}</h2>

      <form onSubmit={submitFun}>
        <div>
          <input type="text" placeholder="请输入用户名" ref={nameInp} />
        </div>

        {!isLoginForm && (
          <div>
            <input type="email" placeholder="请输入邮件" ref={emailInp} />
          </div>
        )}

        <div>
          <input type="password" placeholder="请输入密码" ref={passwordInp} />
        </div>

        <div>
          <button>{isLoginForm ? "登录" : "注册"}</button>

          <a href="#" onClick={() => setIsLoginForm(!isLoginForm)}>
            {!isLoginForm ? "已有账号？请登录！" : "没有账号？请注册！"}
          </a>
        </div>
      </form>

      <p style={{ color: "red" }}>
        {registerErr && "用户名或邮件重复！"}
        {/* {registerErr && registerErr.data.error.message} */}
      </p>
      <p style={{ color: "red" }}>{loginErr && "用户名或密码错误！"}</p>
    </div>
  );
}
