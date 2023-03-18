import React, { useEffect, useReducer, useState  } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./filterMeals.module.css";

/* const countReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return state + 1;
    case 'sub':
      return state -1;
    default:
      return state;
  }
}; */

export default function FilterMeals(props) {
  const [keyword, setKeyword] = useState("");

  const onInputChange = (e) => {
    setKeyword(e.target.value.trim());
  };

  /**
   * useEffect 的第一个参数函数 返回的一个函数，会在当前 useEffect 执行完后，执行清理工作，
   * 如 定时器，事件解绑等；返回函数的作用域还是在当前 useEffect 函数中
   */
  useEffect(() => {

    const timer = setTimeout(() => {
      console.log("useEffect");
      props.onFilter(keyword);
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [keyword]);

  /* const [count, countDispatch] = useReducer(countReducer, 1);

  const add = () => countDispatch({type: 'add'});
  const sub = () => countDispatch({type: 'sub'}); */

  console.log('过滤组件渲染了');
  return (
    <div className={classes.filterMeals}>
      {/* <button onClick={sub}>-</button>
      {count}
      <button onClick={add}>+</button> */}
      <div className={classes.inputOuter}>
        <input
          type="text"
          placeholder="请输入关键字搜索"
          className={classes.searchInput}
          value={keyword}
          onChange={onInputChange}
        />
        <FontAwesomeIcon className={classes.searchIcon} icon={faSearch} />
      </div>
    </div>
  );
}
