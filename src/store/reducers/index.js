import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  product: productReducer,
  categories: categoriesReducer
});
