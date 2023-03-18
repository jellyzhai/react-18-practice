import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Student from "./components/Student";
import Hello from "./components/Hello";
import Hi from "./components/Hi";

function App() {
  return (
    <div style={{ border: "1px solid pink", padding: "10px" }}>
      <h1>app</h1>
      <Menu></Menu>
      {/*
        V6 版路由：
          外面只能用 Routes 组件包裹
          每个路由只能用 Route 组件
          导航的组件使用 element 属性，和 jsx 语法
       */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* 可以省略前面的根路径 / */}
        <Route path="about" element={<About/>}>
          <Route path="hello" element={<Hello />}></Route>
          <Route path="hi" element={<Hi />}></Route>
        </Route>
        <Route path="students/:id" element={<Student/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
