import React, { useContext } from 'react'
import classes from './Counter.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from '../../../store/cartContext';

export default function Counter(props) {
  const cartCtx = useContext(CartContext)

  const addMeal = () => {
    cartCtx.cartDataDispatch({ type: "add", meal: props.meal });
  }

  const subMeal = () => {
    cartCtx.cartDataDispatch({ type: "sub", meal: props.meal });
  };

  return (
    <div className={classes.counter}>
      {props.meal.amount > 0 && (
        <>
          <span className={classes.sub} onClick={subMeal}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className={classes.count}>{props.meal.amount}</span>
        </>
      )}

      <span className={classes.add} onClick={addMeal}>
        <FontAwesomeIcon icon={faPlus} />
      </span>
    </div>
  );
}
