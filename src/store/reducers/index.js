import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoriesReducer from "./categoriesReducer";
import productInfoReducer from "./productInfoReducer";
import brandsReducer from "./brandsReducer";
import cartReducer from "./cartReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  blackList: ["product"],
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  categories: categoriesReducer,
  productInfo: productInfoReducer,
  brands: brandsReducer,
  cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer);
