import React from "react";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";

export default function Meals(props) {
  console.log('meals 执行了');
  return (
    <div className={classes.meals}>
      {props.mealsData.map((item) => (
        <Meal
          key={item.id}
          meal={item}
        />
      ))}
    </div>
  );
}
