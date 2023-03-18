import "./App.css";
import StudentList from "./components/StudentList/StudentList";
import { useGetStudentsQuery } from "./store/studentApi";

function App() {
  const res = useGetStudentsQuery(null, {
    /* selectFromResult(result) {
      // 从单个请求中，过滤响应数据，一般不建议这么做
      console.log('result: ', result);
      if (result.data?.data) {
        const data = result.data.data.filter(
          (item) => item.attributes.age > 18
        );
        console.log(data);
      }
      return result
    } */

    /* // 设置轮询间隔时间，单位为毫秒，当没有该配置项，或值设为0 ，则表示不轮询
    pollingInterval: 0, */

    /* // 设置是否跳过当前请求
    skip: false */

    /* // 设置 true 时，当前请求不使用缓存，每次加载组件时，都发请求；设置 时间(秒)时，在时间内使用缓存
    refetchOnMountOrArgChange: false, */

    /* // 当浏览器标签页重新获得焦点时,是否重发请求; 需要在 store 中使用 setupListeners(store.dispatch) 方法支持
    refetchOnFocus: true, */

    /* // 当浏览器断网后，又获得网络连接时，是否重发请求; 需要在 store 中使用 setupListeners(store.dispatch) 方法支持
    refetchOnReconnect: true, */
  });
  // console.log(res);
  /**
   * currentData:{data: Array(2), meta: {…}} 根据参数的最新数据，参数一变化，在请求成功前，为undefined
   * data:{data: Array(2), meta: {…}} 始终是接口已返回的最新数据，当前请求返回前，则是上一个已返回的数据
   * endpointName:"getStudents"
   * fulfilledTimeStamp:1678784916835
   * isError:false
   * error: {
   *   data: {data: null, error: {…}}
   *   status: 404
   * } 请求错误，即 status 为 rejected 时，才会有
   * isFetching:false 请求是否是在进行中
   * isLoading:false 是否是第一次加载；当 第二次的请求是 调用 refetch 方法时，status: 'pending'时，
   *    isLoading 值为 false，isFetching 为 true
   * isSuccess:true
   * isUninitialized:false
   * refetch:ƒ () 强制刷新，忽略缓存
   * requestId:"McLl4ERbDZn6Za38oDiZ_" 可用来 取消请求
   * startedTimeStamp:1678784916819
   * status:"fulfilled" 还有 pending rejected
   */
  const { data: students, isSuccess, isLoading, refetch } = res;

  const refresh = () => {
    // 强制刷新，忽略缓存
    refetch();
  };

  return (
    <div className="App">
      <button onClick={refresh}>刷新</button>
      {isLoading && <p>正在加载中...</p>}
      {isSuccess && <StudentList students={students.data} />}
    </div>
  );
}

export default App;
