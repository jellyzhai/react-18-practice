import React, { useEffect, useState } from "react";
import { useDelStudentMutation } from "../../store/api/studentApi";
import StudentForm from "../StudentForm/StudentForm";

export default function Student(props) {
  const { id, student } = props;
  const [isEditable, setIsEditable] = useState(false);
  const [isDelSuccess, setIsDelSuccess] = useState(false);

  // 第一个参数是，操作请求的触发器函数；第二个参数是 结果集
  const delReq = useDelStudentMutation();
  console.log("useDelStudentMutation: ", useDelStudentMutation);
  /**
   * 第二个参数
   * data: {data: {…}, meta: {…}}
   * endpointName: "delStudent"
   * fulfilledTimeStamp: 1678795004727
   * isError: false
   * isLoading: false
   * isSuccess: true
   * isUninitialized: false
   * originalArgs: 6
   * requestId: "BGVQxgBmQUPaMWxMHCTWB"
   * reset: ƒ ()
   * startedTimeStamp: 1678795004692
   * status: "fulfilled"
   */
  const [delStudent, { isSuccess }] = delReq;

  const deleteFun = () => {
    const confirmDel = window.confirm("删除后，不可恢复，请确认！");
    if (confirmDel) {
      delStudent(id);
    }
  };

  const successTipFun = () => {
    if (isSuccess) {
      setIsDelSuccess(true);
      delayHideTip(2000);
    }
   }

  useEffect(() => {
    successTipFun();

    // return () => {
    //   second;
    // };
  }, [isSuccess]);


  const delayHideTip = (timeout) => {
    setTimeout(() => {
      setIsDelSuccess(false);
    }, timeout);
  };

  const updateFun = () => {
    setIsEditable(true);
  };

  return (
    <>
      {isEditable && (
        <StudentForm id={id} student={student} setIsEditable={setIsEditable} />
      )}

      {!isEditable && !isSuccess && (
        <tr>
          <td>{student.name}</td>
          <td>{student.gender}</td>
          <td>{student.age}</td>
          <td>{student.address}</td>
          <td>
            <button onClick={deleteFun}>删除</button>
            <button onClick={updateFun}>修改</button>
          </td>
        </tr>
      )}

      {isDelSuccess && (
        <tr>
          <td colSpan="5">删除成功</td>
        </tr>
      )}
    </>
  );
}
