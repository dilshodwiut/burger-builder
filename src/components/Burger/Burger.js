import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

function burger(props) {
  const transformedIngredients = Object.keys(props.ingredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;
