import React, { useCallback, useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartContext from "../../store/cartContext";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";
import PayBtn from "../UI/PayBtn/PayBtn";

export default function Cart() {
  const ctx = useContext(CartContext);
  const [showDetails, setShowDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const toggleCartDetails = () => {
    if (ctx.totalAmount <= 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails(!showDetails);
  };

  const hideCartDetails = () => {
    setShowDetails(false);
  };

  /**
   * useCallback
   * 是什么：用于缓存回调函数，减少因当前组件重新执行，而导致重新赋值，导致作为参数传给子组件时，引起子组件重新执行；
   * 只有依赖变量改变时，才重新计算赋值；不指定依赖数组时，只会创建一次；setState 方法不会变，可以不作为依赖项；
   * 什么场景用：回调函数计算量大；在列表中渲染大量数据时，会生成大量子组件，如果每个子组件都包含了一个未记忆的回调函数 prop，
   * 则会由于创建了大量的函数实例而影响性能。
   */
  const showCheckoutHandler = useCallback(() => {
    if (ctx.totalAmount <= 0) return;
    setShowCheckout(true);
  }, [ctx]);

  const hideCheckout = () => {
    setShowCheckout(false);
  };

  /**
   * 该钩子函数 会在页面渲染完毕后，执行；
   * 对于 useEffect 函数的第二个参数，是一个数组：
   *  1.当没有第二个参数时，每次页面重新渲染(如出现一个新的弹窗)，每次setState的数据变化，
   *    都会 执行 useEffect 函数；【不建议】
   *  2. 当有且第二个参数是空数组时，effect 函数只会在 当前组件渲染完成后 执行一次；
   *    【当调用接口发送请求时使用】
   *  3. 当有且 第二个参数数组中，填写 useEffect 函数使用的变量时，只会在引用的变量发生变化时，
   *     才会执行 useEffect 函数。
   *    【建议】
   */
  useEffect(() => {
    if (ctx.totalAmount <= 0) {
      setShowDetails(false);
      setShowCheckout(false);
    }
  }, [ctx]);

  return (
    <div className={classes.cart}>
      {/* 购物车详情 */}
      {showDetails && <CartDetails hideCartDetails={hideCartDetails} />}
      {/* 结算页 */}
      {showCheckout && <Checkout hideCheckout={hideCheckout} />}
      <div className={classes.icon} onClick={toggleCartDetails}>
        <img src={iconImg} alt="" />
        {ctx.totalAmount > 0 && (
          <span className={classes.totalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalAmount > 0 ? (
        <span className={classes.price}>{ctx.totalPrice}</span>
      ) : (
        <span className={classes.noMeal}>未选购商品</span>
      )}
      <PayBtn disabled={ctx.totalAmount <= 0} onClick={showCheckoutHandler} />
    </div>
  );
}
