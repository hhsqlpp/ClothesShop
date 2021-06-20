import { SET_ORDER_INFO } from "../actions/types";

const intialState = {
  order: {},
};

export default function orderInfoReducer(state = intialState, action) {
  switch (action.type) {
    case SET_ORDER_INFO:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
}
