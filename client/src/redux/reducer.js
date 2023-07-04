//CREO MI ESTADO INICIAL, CON LAS
//PROPIEDADES QUE VOY A TRABAJAR
const initialState = {
  recipes: [],
  originalRecipes: [],
};

//EL REDUCER SIEMPRE RECIBE EL ESTADO INICIAL Y LAS ACCIONES, LO
//IDEAL ES QUE LA LOGICA ESTE EN ESTE COMPONENTE Y NO EN LAS ACTIONS

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        originalRecipes: action.payload,
      };

    case "FILTER_BY_DIET":
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

    // case "FILTER_CREATED":
    //   const createdFilter = action.payload ==== "created"

    default:
      return { ...state };
  }
};

export default rootReducer;
