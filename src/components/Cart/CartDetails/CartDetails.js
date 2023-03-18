import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { CartDetailsEle } from "../../../constant/role-constant";
import CartContext from "../../../store/cartContext";
import Meal from "../../Meals/Meal/Meal";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Confirm from "../../UI/Confirm/Confirm";
import classes from "./CartDetails.module.css";

export default function CartDetails(props) {
  const cartCtx = useContext(CartContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const showConfirmFun = () => {
    setShowConfirm(true);
  };
  const cancelClear = () => {
    setShowConfirm(false);
  };
  const confirmClear = () => {
    cartCtx.cartDataDispatch({type: 'clear'});
  };

  console.log('cartDetails 执行了');
  return (
    <Backdrop hideCartDetails={props.hideCartDetails}>
      <div data-role={CartDetailsEle} className={classes.cartDetails}>
        <header className={classes.header}>
          <h2 className={classes.title}>餐品详情</h2>
          <span className={classes.clear}>
            <FontAwesomeIcon icon={faTrash} />
            <span onClick={showConfirmFun}>清空购物车</span>
          </span>
        </header>

        <div className={classes.mealList}>
          {cartCtx.items.map((item) => (
            <Meal noDesc key={item.id} meal={item} />
          ))}
        </div>
      </div>

      {showConfirm && (
        <Confirm
          confirmText="确认清空购物车吗？"
          onCancel={cancelClear}
          onOk={confirmClear}
        />
      )}
    </Backdrop>
  );
}
