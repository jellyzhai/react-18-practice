import React from "react";
import Counter from "../../UI/Counter/Counter";
import classes from "./Meal.module.css";

export default function Meal(props) {
  return (
    <div className={classes.meal}>
      <div className={classes.imgBox}>
        <img src={props.meal.img} alt="" />
      </div>

      <div className={classes.contentBox}>
        <h2 className={classes.title}>{props.meal.title}</h2>

        {!props.noDesc && <p className={classes.desc}>{props.meal.desc}</p>}

        <div className={classes.priceBox}>
          <span className={classes.price}>{props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  );
}
