import React, { useState, useEffect } from "react";
import axios from "axios";
import MealCard from "./MealCard";
import "../App.css";

const HomePage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchMeals();
  }, []);
  const fetchMeals = async (query = "") => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    setMeals(response.data.meals);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMeals(search);
  };

  return (
    <div className="Home">
      <section className="common-background">
        <div className="header">
          <a
            href="https://www.hoteljupitermanali.co.in/contact-us/contact-us.html"
            className="header-link"
          >
            Contact us
          </a>
          <a href="/add-restaurant" className="header-link">
            Add Restaurant
          </a>
          <a href="https://dribbble.com/session/new" className="header-link">
            Login
          </a>
          <a href="https://dribbble.com/signup/new" className="header-link">
            Sign Up
          </a>
        </div>
        <center>
          <h1>GEE MEAL</h1>
          <p>Discover the Best Foods and Drinks in Mannai</p>
        </center>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="search-box">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search for a meal..."
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </section>
      <div className="food_grid">
        <div className="res1">
          <a href="https://www.justdial.com/Mannargudi/Restaurants/nct-10408936">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/cetahkvrdg4quk6weyvy"
              alt="Mannargudi Restaurant"
              className="restaurant-image"
            />
          </a>
          <h5>Order Online</h5>
          <p>Stay home and order to your doorstep</p>
        </div>
        <div className="res2">
          <a href="https://www.justdial.com/Mannargudi/Home-Delivery-Restaurants/nct-10250324">
            <img
              src="https://content.jdmagicbox.com/comp/madurai/u6/0452px452.x452.200610211057.i3u6/catalogue/sukkriti-s-food-court-goripalayam-madurai-biryani-delivery-restaurants-2lwr5uxmct.jpg"
              alt="Mannaargudi Dining"
              className="dining-image"
            />
          </a>
          <h5>Dining</h5>
          <p>View the city's favourite dining venues</p>
        </div>
      </div>
      <div className="meal-list">
        {meals &&
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default HomePage;
