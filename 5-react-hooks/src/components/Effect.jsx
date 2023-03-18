import React, { useEffect, useId, useInsertionEffect, useLayoutEffect } from 'react'

export default function Effect() {
    // 生成应用内的唯一值，可用户 label的for属性
    const id1 = useId()
    const id2 = useId()
console.log("id1->", id1, "id2->", id2);

    useEffect(() => {
      console.log('useEffect');
    }, [])

    useInsertionEffect(() => {
      console.log("useInsertionEffect");
    }, []);

    useLayoutEffect(() => {
      console.log("useLayoutEffect");
    }, []);

  return (
    <div>
      <h2>
        react组件渲染流程：组件挂载 -> state 改变 -> useInsertionEffect ->
        DOM改变 -> useLayoutEffect -> 绘制屏幕 -> useEffect
      </h2>
      <h3>useInsertionEffect: 在dom改变前执行</h3>
      <h3>useLayoutEffect: 在绘制(css执行)dom到屏幕前执行</h3>
      <h3>useEffect: 在绘制dom完成后执行</h3>
    </div>
  );
}
