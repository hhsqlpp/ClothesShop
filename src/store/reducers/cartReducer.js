import {
  CART_FAIlURE,
  CART_FETCH_END,
  CART_FETCH_START,
  CART_SUCCESS,
  DELETE_FROM_CART,
  SET_CART,
} from "../actions/types";

const initialState = {
  loading: true,
  error: false,
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
