import { ORDER_FALIURE, ORDER_FETCH_END, ORDER_INFO_FETCH_START, ORDER_INFO_SUCCESS, SET_ORDER_INFO } from "../actions/types";

const intialState = {
  order: {},
  loading: true,
  error: false
};

export default function orderInfoReducer(state = intialState, action) {
  switch (action.type) {
    case SET_ORDER_INFO:
      return {
        ...state,
        order: action.payload,
      };
    case ORDER_INFO_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case ORDER_FETCH_END:
      return {
        ...state,
        loading: false,
      };
    case ORDER_INFO_SUCCESS:
      return {
        ...state,
        error: false,
      };
    case ORDER_FALIURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
