import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Students } from "../constants/students";

export default function About(props) {
  console.log("about: ", props);
  const nav = useNavigate();

  return (
    <div style={{ border: "1px solid skyblue", padding: "10px" }}>
      <h2>关于我们，其实是师徒4人。点击名称进入详情</h2>

      <ul>
        {Students.map((item) => (
          <li
            key={item.id}
            style={{ cursor: "pointer", color: "#646cff" }}
            onClick={() =>
              nav(`/students/${item.id}`, { state: { password: Date.now() } })
            }
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* // navigate 组件会在进入组件后立即导航到目标路径组件
      <Navigate to="/students/1" replace></Navigate> */}
      <Outlet></Outlet>
    </div>
  );
}
