import React from 'react';
import { useGetStudentsQuery } from '../../store/api/studentApi';
import Student from '../Student/Student';
import StudentForm from '../StudentForm/StudentForm';
import classes from "./StudentList.module.css";

export default function StudentList(props) {
  const res = useGetStudentsQuery()
  console.log("useGetStudentsQuery: ", res);
  const {
    data: students ,
    isSuccess,
  } = res;

  return (
    <div className={classes.tableBox}>
      <table className={classes.table}>
        <caption>学生列表</caption>
        <thead>
          <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>地址</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess && students.data.map((item) => {
            const { attributes } = item;
            return <Student key={item.id} id={item.id} student={attributes} />;
          })}
          <StudentForm isAdd={true} />
        </tbody>
      </table>
    </div>
  );
}
