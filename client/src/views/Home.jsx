import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllRecipes from "../redux/actions";
import Card from "../components/Card";
import Navbar from "../components/NavBar";
import "../styles/home.css";
import Paginado from "../components/Paginado";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();

  const allRecipes = useSelector((state) => state.recipes) || [];

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div className="container">
      <Navbar />
      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes}
        currentRecipes={currentRecipes}
        paginado={paginado}
        currentPage={currentPage}
      />
      <SearchBar />
      <div className="card-container">
        {Array.isArray(currentRecipes) &&
          currentRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              name={recipe.name}
              image={recipe.image}
              diets={recipe.diet}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import getAllRecipes from "../redux/actions";
// import Card from "../components/Card";
// import Navbar from "../components/NavBar";
// import "../styles/home.css";
// import Paginado from "../components/Paginado";
// import SearchBar from "../components/SearchBar";

// const Home = () => {
//   const dispatch = useDispatch();
//   const allRecipes = useSelector((state) => state.recipes) || [];

//   const [currentPage, setCurrentPage] = useState(1);
//   const recipesPerPage = 9;
//   const indexOfLastRecipe = currentPage * recipesPerPage;
//   const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

//   const currentRecipes = allRecipes.slice(
//     indexOfFirstRecipe,
//     indexOfLastRecipe
//   );

//   const paginado = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     dispatch(getAllRecipes());
//   }, [dispatch]);

//   return (
//     <div className="container">
//       <Navbar />
//       <Paginado
//         recipesPerPage={recipesPerPage}
//         allRecipes={allRecipes}
//         currentRecipes={currentRecipes}
//         paginado={paginado}
//       />
//       <SearchBar />
//       <div className="card-container">
//         {Array.isArray(currentRecipes) &&
//           currentRecipes.map((recipe) => (
//             <Card
//               key={recipe.id}
//               name={recipe.name}
//               image={recipe.image}
//               diets={recipe.diets}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
