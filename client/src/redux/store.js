//  en el store se crea una instancia del almacenamiento global de la aplicación

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../redux/reducer";

const store = createStore(
  rootReducer,

  // middleware thunkMiddleware
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export default store;
