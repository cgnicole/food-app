import axios from "axios";

export const getAllRecipes = () => {
  return async function (dispatch) {
    //AL HACER UNA PETICION CON AXIOS, ME DEVUELVE LA RESPUESTA
    //CON VARIAS PROPIEDADES, LA INFORMACION QUE SOLICITE
    //ESTA EN LA PROPIEDAD DATA
    const recipes = await axios.get("http://localhost:3001/recipes");

    dispatch({
      //Dispatch: Es una función que permite lanzar acciones (actions) al store, con la intención de afectar el estado.
      type: "GET_RECIPES",
      payload: recipes.data,
    });
  };
};

export const filterRecipesByDiet = (payload) => {
  return {
    type: "FILTER_BY_DIET",
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: "FILTER_CREATED",
    payload,
  };
};

export default getAllRecipes;
