import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <Link to={`/meal/${meal.idMeal}`}>View Details</Link>
    </div>
  );
};

export default MealCard;
