import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import getAllRecipes from "../redux/actions";
import "../styles/NavBar.css";
// import Filters from "../components/Filters";
import {
  filterRecipesByDiet,
  filterCreated,
  orderByAscDesc,
} from "../redux/actions";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleReloadButton = (event) => {
    event.preventDefault();
    dispatch(getAllRecipes());
  };

  const handleOrderByAscDesc = (event) => {
    // Lógica para manejar la opción de ordenar las recetas
    event.preventDefault();
    dispatch(orderByAscDesc(event.target.value));
    console.log(event.target.value);
  };

  const handleFilterByOrigin = (event) => {
    // Lógica para manejar la opción de filtrar por origen de recetas

    dispatch(filterCreated(event.target.value));
    console.log(event.target.value);
  };

  const handleFilterByDiet = (event) => {
    // Lógica para manejar la opción de filtrar por tipo de dieta

    dispatch(filterRecipesByDiet(event.target.value));
    console.log(event.target.value);
  };

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="navbar">
      <img className="food" src={require("../img/cook.png")} alt="nicole"></img>
      <button
        className="reloadButton"
        onClick={(event) => {
          handleReloadButton(event);
        }}
      >
        Reload Recipes
      </button>
      <Link className="create" to="/recipes">
        Create
      </Link>

      <div className="filters">
        {/* Opciones para ordenar las recetas por orden alfabético ascendente y descendente */}
        <select
          className="mi-select"
          onChange={(event) => {
            handleOrderByAscDesc(event);
          }}
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        {/* Opciones para filtrar por origen de la receta, si viene de API o de DB */}
        <select
          className="mi-select"
          onChange={(event) => {
            handleFilterByOrigin(event);
          }}
        >
          <option value="api">Existing</option>
          <option value="created">Created</option>
          <option value="all">All</option>
        </select>

        {/* Opciones para filtrar por tipo de dieta */}
        <select
          className="mi-select"
          onChange={(event) => {
            handleFilterByDiet(event);
          }}
        >
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

      {/* 
      <Filters
        handleOrderByName={handleOrderByName}
        handleFilterByOrigin={handleFilterByOrigin}
        handleFilterByDiet={handleFilterByDiet}
      /> */}
    </div>
  );
};

export default Navbar;
