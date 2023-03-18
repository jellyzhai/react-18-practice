import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Menu.module.css';

export default function Menu() {
    /**
     * 在使用react router 时，一定不要使用 a 标签创建超链接，因为会刷新页面，发请求
     */
  return (
    <div>
      <ul>
        <li>
          {/* <Link to='/'>主页</Link> */}
          <NavLink
            exact
            activeClassName={classes.active}
            activeStyle={{ textDecoration: "underline" }}
            to="/"
          >
            主页
          </NavLink>
        </li>
        <li>
          {/* <Link to='/about'>关于</Link> */}
          <NavLink
            exact
            activeClassName={classes.active}
            activeStyle={{ textDecoration: "underline" }}
            to="/about"
          >
            关于
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName={classes.active}
            activeStyle={{ textDecoration: "underline" }}
            to="/about/hello"
          >
            hello页面
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName={classes.active}
            activeStyle={{ textDecoration: "underline" }}
            to="/form"
          >
            form页面
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
