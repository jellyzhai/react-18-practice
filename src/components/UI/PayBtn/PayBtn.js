import React, { memo } from 'react'
import classes from './PayBtn.module.css'

function PayBtn(props) {
    console.log("支付按钮执行了, props.children:", props.children);
  return (
    <button
      className={`${classes.btn} ${props.disabled && classes.disabled}`}
      onClick={props.onClick}
    >
      {props.children ?? "去结算"}
    </button>
  );
}

/**
 * memo高阶函数
 * 1. 是什么：将组件包装成缓存组件，只有当 props 对象的属性值，发生值变化或值引用变化时，才重新执行
 * 2. 什么场景用：当组件内容比较多，只依赖父组件传递数据时
 */
export default memo(PayBtn);
