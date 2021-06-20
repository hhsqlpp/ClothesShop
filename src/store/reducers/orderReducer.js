import { GET_ORDER, SET_ORDER } from "../actions/types";

const initalState = {
  orders: [],
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
    default:
      return state;
  }
}
