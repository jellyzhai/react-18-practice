在React中，自定义钩子函数是一种函数组件，它可以将逻辑和状态重用在不同的组件中。自定义钩子函数是一种将组件逻辑抽象成可重用函数的方式，因此它们非常有用。

自定义钩子函数使用use关键字作为前缀，并返回一个对象，该对象包含钩子的状态和逻辑。例如，下面是一个自定义钩子函数：

```jsx
import { useState, useEffect } from 'react';

function useCustomHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  function incrementCount() {
    setCount(count + 1);
  }

  return { count, incrementCount };
}
```
上面这个自定义钩子函数useCustomHook定义了一个状态变量count和一个函数incrementCount，并且每当count变化时，它会更新页面的标题。

要在组件中使用自定义钩子函数，只需在函数组件中调用该函数即可：

```jsx
import React from 'react';
import { useCustomHook } from './useCustomHook';

function MyComponent() {
  const { count, incrementCount } = useCustomHook();

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}
```
这个例子中，我们导入了自定义钩子函数useCustomHook，并在组件中调用它来获取状态和逻辑。然后，我们可以将状态和逻辑渲染到页面上。