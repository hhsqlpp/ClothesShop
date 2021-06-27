import { GET_ORDER, ORDER_FALIURE, ORDER_FETCH_END, ORDER_FETCH_START, ORDER_SUCCESS, SET_ORDER } from "../actions/types";

const initalState = {
  orders: [],
  loading: true,
  error: false
};

export default function orderReducer(state = initalState, action) {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case GET_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case ORDER_SUCCESS:
      return {
        ...state,
        error: false,
      };
    case ORDER_FALIURE:
      return {
        ...state,
        error: true,
      };
    case ORDER_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case ORDER_FETCH_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
