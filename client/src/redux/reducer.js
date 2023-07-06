// Un reducer en Redux es una función que especifica cómo cambia el estado
// Cada caso actualiza el estado según la acción y devuelve un nuevo estado modificado

import {
  GET_RECIPES,
  FILTER_BY_DIET,
  FILTER_CREATED,
  ORDER_BY_ASC_DESC,
  GET_NAME_RECIPES,
} from "./actions";

const axios = require("axios");

//CREO MI ESTADO INICIAL, CON LAS
//PROPIEDADES QUE VOY A TRABAJAR
const initialState = {
  recipes: [],
  foods: [],
  allRecipes: [],
};

//EL REDUCER SIEMPRE RECIBE EL ESTADO INICIAL Y LAS ACCIONES, LO
//IDEAL ES QUE LA LOGICA ESTE EN ESTE COMPONENTE Y NO EN LAS ACTIONS

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };

    /////////////buscar por nombre////////////////

    case GET_NAME_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    /////////////buscar por dieta////////////////

    case FILTER_BY_DIET:
      const allRecipes = state.recipes;

      const filteredRecipes =
        action.payload === "paleolithic"
          ? allRecipes
          : allRecipes.filter((e) => e.diets === action.payload);

      return {
        ...state,
        recipes: filteredRecipes,
      };

    // ❗️ ACA VA LA LOJICA PARA EL FILTRO DE ORGIFEN DE LA RECETA

    //   const myRecipes = state.recipes; // Verificar si state.recipes es nulo o indefinido y asignar un valor predeterminado en caso afirmativo
    //   const createdFilter =
    //     action.payload === "created"
    //       ? myRecipes.filter((reci) => reci.createdDb)
    //       : myRecipes.filter((reci) => !reci.createdDb);
    //   return {
    //     ...state,
    //     recipes: action.payload === "all" ? myRecipes : createdFilter,
    //   };

    case FILTER_CREATED:
      if (action.payload === "created") {
        const filteredDataBaseRecipes = state.allRecipes.filter(
          (recipe) => recipe.createdDb
        );

        return {
          ...state,
          recipes: filteredDataBaseRecipes,
        };
      }

      if (action.payload === "db") {
        const filteredApiRecipes = state.allRecipes.filter(
          (recipe) => recipe.createdDb
        );

        return {
          ...state,
          recipes: filteredApiRecipes,
        };
      }

      return {
        ...state,
        recipes: state.allRecipes,
      };

    ////////////////asc, desc ///////////////

    //  ([...state.recipes]), se crea una nueva matriz con los mismos elementos que la matriz original

    case ORDER_BY_ASC_DESC:
      const sortedByName = [...state.recipes]; // Copia del array original

      sortedByName.sort(function (a, b) {
        if (action.payload === "asc") {
          return a.name.localeCompare(b.name); // Orden ascendente A-Z
        } else {
          return b.name.localeCompare(a.name); // Orden descendente Z-A
        }
      });

      return {
        ...state,
        recipes: sortedByName,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
