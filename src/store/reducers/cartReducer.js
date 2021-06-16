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
      break;
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
      };
      break;
    case CART_FETCH_START:
      return {
        ...state,
        loading: true,
      };
      break;
    case CART_FETCH_END:
      return {
        ...state,
        loading: false,
      };
      break;
    case CART_SUCCESS:
      return {
        ...state,
        error: false,
      };
      break;
    case CART_FAIlURE:
      return {
        ...state,
        error: true,
      };
      break;

    default:
      return state;
      break;
  }
}
