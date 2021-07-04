import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoriesReducer from "./categoriesReducer";
import productInfoReducer from "./productInfoReducer";
import brandsReducer from "./brandsReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";
import orderReducer from "./orderReducer";
import orderInfoReducer from "./orderInfoReducer";
import favoriteReducer from "./favoriteReducer";
import historyReducer from "./historyReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  whitelist: ["cart", "favorite", "history"],
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  categories: categoriesReducer,
  productInfo: productInfoReducer,
  brands: brandsReducer,
  cart: cartReducer,
  auth: authReducer,
  filter: filterReducer,
  orders: orderReducer,
  orderInfo: orderInfoReducer,
  favorite: favoriteReducer,
  history: historyReducer,
});

export default persistReducer(persistConfig, rootReducer);
