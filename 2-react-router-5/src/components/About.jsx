import React from 'react'
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import { Students } from "../constants/students";
import Hello from './Hello';

export default function About(props) {
  // 路由组件的props 中，才会有 history，match，replace 属性
  const history = useHistory();
  const {path} = useRouteMatch()
  console.log("About", props);
  const jumpToStudent = (id ) => {
    // history.replace(`/student/${id}`, {password: Date.now()});
    history && history.push(`/student/${id}`, { password: Date.now() });
  };

  return (
    <div style={{ border: "1px solid skyblue", padding: '10px' }}>
      <h2>关于我们，其实是师徒4人。点击名称进入详情</h2>
      <ul>
        {Students.map((item) => (
          <li
            key={item.id}
            style={{ cursor: "pointer", color: "#646cff" }}
            onClick={() => jumpToStudent(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* 路由嵌套 */}
      <Route path={`${path}/hello`} children={<Hello />} />
    </div>
  );
}
