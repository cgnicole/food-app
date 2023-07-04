import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllRecipes from "../redux/actions";
import Card from "../components/Card";
import Navbar from "../components/NavBar";
import "../styles/home.css";
import Paginado from "../components/Paginado";

////////////////////////////////////////////////////////////////////////////////////

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  ////////////////////PAGINADO ////////////////////

  // se pone 1 porque siempre va empezar el la primera pagina, declaro el estado local
  const [currentPage, setCurrentPage] = useState(1);

  // estado local, cuantas recetas por pagina
  const recipesPerPage = 9;

  // indice de las ultimas recetas
  const indexOfLastRecipe = currentPage * recipesPerPage;

  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  // slice lo que hace es agarrar un arraglo y tomar un porcion de lo que le paso por parametro, esta es la variable que guarda las recetas que se van a renderizar dependiendo de la pagina

  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  ///////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div className="container">
      <Navbar />
      {/* Componente de paginado */}
      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes}
        currentRecipes={currentRecipes}
        paginado={paginado}
      />
      <div className="card-container">
        {/* Mapeo de las tarjetas */}
        {currentRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            name={recipe.name}
            image={recipe.image}
            diets={recipe.diets}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
