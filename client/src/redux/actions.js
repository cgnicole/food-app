import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_ASC_DESC = "ORDER_BY_ASC_DESC";
export const GET_NAME_RECIPES = "GET_NAME_RECIPES";

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

export function getNameRecipes(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/recipes?name=" + name);
      // Aquí puedes realizar acciones adicionales con los datos obtenidos

      return dispatch({
        type: "GET_NAME_RECIPES",
        payload: json.data,
      });
    } catch (error) {
      // Manejo de errores
      console.log(error);
    }
  };
}

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

export const orderByAscDesc = (payload) => {
  return {
    type: "ORDER_BY_ASC_DESC",
    payload: payload,
  };
};

export default getAllRecipes;
