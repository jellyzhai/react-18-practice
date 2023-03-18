import React from 'react';
import Counter from '../../../UI/Counter/Counter';
import classes from './CheckoutItem.module.css'

export default function CheckoutItem(props) {
  return (
    <div className={classes.checkItem}>
      <div className={classes.mealImg}>
        <img src={props.meal.img} alt="" />
      </div>

      <div className={classes.desc}>
        <h2 className={classes.title}>{props.meal.title}</h2>

        <div className={classes.priceOuter}>
          <Counter meal={props.meal}/>
          <b className={classes.price}>{props.meal.price * props.meal.amount}</b>
        </div>
      </div>
    </div>
  );
}
