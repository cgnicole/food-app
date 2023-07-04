import {
  GET_RECIPES,
  FILTER_BY_DIET,
  FILTER_CREATED,
  ORDER_BY_ASC_DESC,
} from "./actions";

//CREO MI ESTADO INICIAL, CON LAS
//PROPIEDADES QUE VOY A TRABAJAR
const initialState = {
  recipes: [],
};

//EL REDUCER SIEMPRE RECIBE EL ESTADO INICIAL Y LAS ACCIONES, LO
//IDEAL ES QUE LA LOGICA ESTE EN ESTE COMPONENTE Y NO EN LAS ACTIONS

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        originalRecipes: action.payload,
      };

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

    case FILTER_CREATED:
      const myRecipes = state.recipes; // Verificar si state.recipes es nulo o indefinido y asignar un valor predeterminado en caso afirmativo
      const createdFilter =
        action.payload === "created"
          ? myRecipes.filter((reci) => reci.createdDb)
          : myRecipes.filter((reci) => !reci.createdDb);
      return {
        ...state,
        recipes: action.payload === "all" ? myRecipes : createdFilter,
      };

    case ORDER_BY_ASC_DESC:
      const sortedByName =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
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
