import React from 'react';
import PayBtn from '../../../UI/PayBtn/PayBtn';
import classes from './Bar.module.css'

export default function Bar(props) {
  return (
    <div className={classes.bar}>
      <div className={classes.totalPrice}>{props.totalPrice}</div>
      {/* <button className={classes.button}></button> */}
      <PayBtn>去支付</PayBtn>
    </div>
  );
}
