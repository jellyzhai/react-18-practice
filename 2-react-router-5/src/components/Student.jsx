import React from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { Students } from "../constants/students";

export default function Student(props) {
  console.log("Student", props);

  const history = useHistory()
  const location = useLocation()
  const routeMatch = useRouteMatch()
  const routeParams = useParams()

  const { id } = props.match ? props.match.params : routeParams;
  const student = Students.find((item) => item.id == id) || {};

  return (
    <div style={{ border: "1px solid orange" }}>
        <button onClick={() => history.goBack()}>点我返回</button>
      <h1>这里是学生详情</h1>
      {student.id} -- {student.name}
    </div>
  );
}
