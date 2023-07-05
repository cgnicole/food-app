import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import getAllRecipes from "../redux/actions";
import "../styles/NavBar.css";

import {
  filterRecipesByDiet,
  filterCreated,
  orderByAscDesc,
} from "../redux/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleReloadButton = (event) => {
    event.preventDefault();
    dispatch(getAllRecipes());
  };

  const handleOrderByAscDesc = (event) => {
    event.preventDefault();
    dispatch(orderByAscDesc(event.target.value));
    console.log(event.target.value);
    setCurrentPage(1);
    setOrden(`ordenado ${event.target.value}`);
  };

  const handleFilterByOrigin = (event) => {
    dispatch(filterCreated(event.target.value));
    console.log(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterByDiet = (event) => {
    dispatch(filterRecipesByDiet(event.target.value));
    console.log(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="navbar">
      <img className="food" src={require("../img/cook.png")} alt="nicole" />

      <button className="reloadButton" onClick={handleReloadButton}>
        Reload Recipes
      </button>

      <Link className="create" to="/recipes">
        Create New Recipe
      </Link>

      <div className="filters">
        <select className="mi-select" onChange={handleOrderByAscDesc}>
          <option value="g"> - Filter By Order 🔤 </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <select className="mi-select" onChange={handleFilterByOrigin}>
          <option value="g"> - Filter By Origin 📊</option>
          <option value="api">Existing</option>
          <option value="created">Created</option>
          <option value="all">All</option>
        </select>

        <select className="mi-select" onChange={handleFilterByDiet}>
          <option value="default" disabled defaultValue>
            Filter By Diet
          </option>

          <option value="g"> - Filter By Diet 🥗</option>
          <option value="paleolithic">paleolithic</option>
          <option value="vegan">vegan</option>
          <option value="Primal">primal</option>
          <option value="whole 30">whole 30</option>
          <option value="dairy free">dairy free</option>
          <option value="gluten free">gluten free</option>
          <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
          <option value="pescatarian">pescatarian</option>
          <option value="ketogenic">ketogenic</option>
          <option value="fodmap friendly">fodmap friendly</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
