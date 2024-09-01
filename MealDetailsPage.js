import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";

const MealDetailsPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMealDetails();
  }, [id]);

  const fetchMealDetails = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setMeal(response.data.meals[0]);
  };

  return (
    <div className="meal-details-container">
      {meal && (
        <div>
          <h1 className="meal-title">{meal.strMeal}</h1>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="meal-image"
            />
          </a>
          <h2 className="ingredients-title">Ingredients</h2>
          <ul className="ingredients-list">
            {Object.keys(meal)
              .filter((key) => key.includes("strIngredient"))
              .map(
                (ingredientKey) =>
                  meal[ingredientKey] && (
                    <li key={ingredientKey} className="ingredient-item">
                      {meal[ingredientKey]}
                    </li>
                  )
              )}
          </ul>
          <h2 className="instructions-title">Instructions</h2>
          <p className="instructions">{meal.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default MealDetailsPage;
