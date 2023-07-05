import { useDispatch } from "react-redux";
import { useState } from "react";
import "../styles/SearchBar.css";
import { getNameRecipes } from "../redux/actions";
import React from "react";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value);
    console.log(name);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getNameRecipes(name));
  }

  return (
    <div className="bar">
      <input
        onChange={(event) => handleInputChange(event)}
        type="text"
        className="searchInput"
        placeholder="Search By Recipe Name"
      />

      <button
        onClick={(event) => handleSubmit(event)}
        type="submit"
        className="searchButton"
      >
        Add
      </button>
    </div>
  );
}

export default SearchBar;
