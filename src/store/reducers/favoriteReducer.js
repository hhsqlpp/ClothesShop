import { DELETE_FAVORITE, SET_FAVORITE } from "../actions/types";

const initalState = {
  favoriteProducts: [],
};

export default function favoriteReducer(state = initalState, action) {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(
          (name) => name.name !== action.payload
        ),
      };
    default:
      return state;
  }
}
