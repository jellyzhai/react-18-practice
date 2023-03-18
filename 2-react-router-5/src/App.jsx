import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Form from "./components/Form";
import Hello from "./components/Hello";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Student from "./components/Student";

function App() {
  return (
    <div>
      app组件
      <Menu />
      {/*
      默认下，浏览器路径中，每段路径能匹配的组件都会显示, 不会检查子路径
      exact：表示精确匹配，
     */}
      {/*
        component:
          需要直接传递组件的类；
          react 会自动根据类创建组件，并传递路由参数，可通过 props 属性获取:
            match:
              isExact: false 浏览器路径是否与 组件路径完全匹配，与路由中的 exact 属性无关
              params:{id: "123"} 路由路径中传递的占位参数
            location：
              {
                "hash": "", # 后面的hash值
                "pathname": "/about",
                "search": "?name=hi", 查询参数
                "state": undefined 通过 history.push({pathname: '/about', state: {age: 12}}) 传递的值
              }
            history：
              {
                "push": function push(path, state) {...}, 携带 state 数据跳转到path路径
                "replace": function replace(path, state) {...} 在浏览器历史记录中替换上一个记录
              }

      */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/*
        路由嵌套
       */}
        <Route path="/about">
          <About />
          {/* <Route path="/about/hello" children={<Hello />} /> */}
        </Route>
        {/* <Route path="/student/:id" component={Student} /> */}
        {/*
        render:
          需要一个回调函数，返回值为 jsx 的组件
          render 不会自动传递 路由对象(history，location，match)
          可以手动传递 routerProps
       */}
        {/* <Route
        path="/student/:id"
        render={(routerProps) => <Student {...routerProps} />}
      /> */}
        {/*
        children:
          用法：
            1.和render 类似，传递回调函数 返回 组件；问题是，不管路径是否匹配，组件一直显示，一般不用
            2. 直接传递 组件；可以在组件内 使用useMatch 等钩子函数; 建议使用
       */}
        {/* <Route
        path="/student/:id"
        children={(routerProps) => <Student {...routerProps} />}
      /> */}
        {/* <Route path="/student/:id">
        {(routeParams) => <Student {...routeParams} />}
      </Route> */}
        {/* <Route path="/student/:id">
        <Student />
      </Route> */}
        <Route path="/student/:id" children={<Student />} />
        <Route path="/form" children={<Form />} />
        <Redirect from='/abc' to='/form' />
      </Switch>
    </div>
  );
}

export default App;
