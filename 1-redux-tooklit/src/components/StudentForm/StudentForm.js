import React, { useCallback, useEffect, useState } from "react";
import {
  useAddStudentMutation,
  useGetStudentByIdQuery,
  useUpdateStudentMutation,
} from "../../store/studentApi";
import classes from "./StudentForm.module.css";

export default function StudentForm(props) {
  const { id, setIsEditable, isAdd = false } = props;

  const { data, isLoading, isSuccess, isError } = useGetStudentByIdQuery(id, {
    // 当前 id 不存在时，跳过当前请求执行
    skip: !id,
    // 设置 true 时，当前请求不使用缓存，每次加载组件时，都发请求；设置 时间(秒)时，在时间内使用缓存
    // refetchOnMountOrArgChange: 5
  });

  const addStuObj = useAddStudentMutation();
  console.log("addStuObj", addStuObj);
  const [addStudent, { isSuccess: isAddSuccess }] = addStuObj;

  const [updateStudent, {isSuccess: isUpdateSuccess}] = useUpdateStudentMutation()

  const initialFormData = {
    name: "",
    gender: "",
    age: "",
    address: "",
  };
  const [editableInfo, setEditableInfo] = useState(initialFormData);

  useEffect(() => {
    if (isSuccess) {
      setFormData();
    }
  }, [isSuccess]);

  const setFormData = () => {
    const { name, gender, age, address } = data.attributes;
    setEditableInfo({ name, gender, age, address });
  };

  const onNameChange = (e) => {
    const name = e.target.value;
    setEditableInfo({ ...editableInfo, name });
  };

  const onGenderChange = (e) => {
    const gender = e.target.value;
    setEditableInfo({ ...editableInfo, gender });
  };

  const onAgeChange = (e) => {
    const age = e.target.value;
    setEditableInfo({ ...editableInfo, age });
  };

  const onAddressChange = (e) => {
    const address = e.target.value;
    setEditableInfo({ ...editableInfo, address });
  };

  const cancelUpdateFun = () => {
    setIsEditable(false);
};

const confirmUpdateFun = () => {
    updateStudent({ id, attributes: editableInfo });
    console.log("editableInfo:", editableInfo);
    setEditableInfo(editableInfo);
    setIsEditable(false);
  };

  const addFun = () => {
    addStudent(editableInfo);
    setEditableInfo(initialFormData);
  };

  return (
    <tr className={classes.tr}>
      <td>
        <input type="text" value={editableInfo.name} onChange={onNameChange} />
      </td>
      <td>
        <select value={editableInfo.gender} onChange={onGenderChange}>
          <option value="">请选择</option>
          <option>男</option>
          <option>女</option>
        </select>
      </td>
      <td>
        <input type="number" value={editableInfo.age} onChange={onAgeChange} />
      </td>
      <td>
        <input
          type="text"
          value={editableInfo.address}
          onChange={onAddressChange}
        />
      </td>
      <td>
        {isAdd ? (
          <button
            onClick={addFun}
            disabled={Object.values(editableInfo).some((v) => !v)}
          >
            添加
          </button>
        ) : (
          <>
            <button onClick={cancelUpdateFun}>取消</button>
            <button onClick={confirmUpdateFun}>确认</button>
          </>
        )}
      </td>
    </tr>
  );
}
