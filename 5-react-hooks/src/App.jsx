import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import Effect from './components/Effect'
import {Some} from './components/Some'
import { sum } from './utils/sum'

let a = 2
let b = 3

function App() {
  const [count, setCount] = useState(0);

  // const total = sum(2, 5)

  if (count % 3 === 0) {
    a += 1;
  }
  /**
   * useMemo 用于缓存函数的执行结果，当函数计算比较复杂时；也可以缓存函数组件
   */
  const total = useMemo(() => sum(a, b), [a, b]);

  const some = useMemo(() => <Some a={a} b={b}/>, [a, b])

  const someChildRef = useRef()

  useEffect(() => {
    console.log("someChildRef", someChildRef);
    someChildRef.current.changeInputValue(total);
  }, [total]);


  return (
    <div>
      count: {count}
      <button onClick={() => setCount((preState) => preState + 1)}>
        点我++
      </button>
      <hr />
      <p>sum函数: {total}</p>
      <hr />
      some组件：{some}
      <hr />
      <Some a={a} b={b} ref={someChildRef} />
      <hr />
      <Effect/>
    </div>
  );
}

export default App
