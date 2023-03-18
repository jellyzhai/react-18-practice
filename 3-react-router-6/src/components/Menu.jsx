import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.css";

export default function Menu() {
  // 激活样式处理 暂时有问题
  const activeClassNameFun = (isActive) =>
    isActive ? classes.active : classes.inactivate;
  const activeStyleFun = (isActive) =>
    isActive ? { textDecoration: "underline" } : { textDecoration: "none" };

  return (
    <div>
      <ul>
        <li>
          <NavLink
          className={activeClassNameFun}
          style={activeStyleFun}
          to="/">
            主页
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeClassNameFun}
            style={activeStyleFun}
            to="/about"
          >
            关于
          </NavLink>
          <ul>
            <li>
              <NavLink
                className={activeClassNameFun}
                style={activeStyleFun}
                to="/about/hello"
              >
                hello页面
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeClassNameFun}
                style={activeStyleFun}
                to="/about/hi"
              >
                hi页面
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
