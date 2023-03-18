import React from "react";
import { Routes } from "react-router-dom";
import MainMenu from "./MainMenu";
import StudentList from "./StudentList/StudentList";

export default function Layout(props) {
  return (
    <div>
      <MainMenu></MainMenu>
      <Routes>{props.children}</Routes>
    </div>
  );
}
