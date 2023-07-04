import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import getAllRecipes from "../redux/actions";
import "../styles/NavBar.css";
import Filters from "../components/Filters";
import { filterRecipesByDiet, filterCreated } from "../redux/actions";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleReloadButton = (event) => {
    event.preventDefault();
    dispatch(getAllRecipes());
  };

  const handleSortBy = (event) => {
    // Lógica para manejar la opción de ordenar las recetas

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

      <Filters
        handleSortBy={handleSortBy}
        handleFilterByOrigin={handleFilterByOrigin}
        handleFilterByDiet={handleFilterByDiet}
      />
    </div>
  );
};

export default Navbar;
