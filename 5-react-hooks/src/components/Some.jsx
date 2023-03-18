import React, { useEffect, useId, useImperativeHandle, useRef } from 'react'

/**
 * React.forwardRef 和 useImperativeHandle 组合使用
 * React.forwardRef 传入一个组件函数，此时 组件函数的第二个参数表示，父组件对当前组件内数据的引用。
 * useImperativeHandle 钩子函数的第一个参数，使用 React.forwardRef 传入的组件函数的第二个参数，
 * 即 父组件对当前组件内数据的引用；第二个参数函数返回的值，赋值给 第一个参数；
 * 父子组件之间进行解耦，不让外部直接获取到内部的数据，而是获取内部定义的 操作数据的方法；控制权在内部。
 * 数据在哪，操作数据的方法，就应该在哪。
 */
export const Some = React.forwardRef((props, childDef) => {
  console.log("Some 组件渲染了");

      const id1 = useId();
      const id2 = useId();
      console.log("Some id1->", id1, "Some id2->", id2);

  const h2Ref = useRef();
  const inputRef = useRef();

  useEffect(() => {
    console.log(h2Ref);
  }, []);

  useImperativeHandle(
    childDef,
    () => {
      return {
        changeInputValue(value) {
            inputRef.current.value = value;
        },
      };
    }
  );

  return (
    <div>
      <h2 ref={h2Ref}>Some</h2>
      <div>{props.a + props.b}</div>
      <input ref={inputRef} type="text" />
    </div>
  );
});
