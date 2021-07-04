import { SET_HISTORY } from "../actions/types";

const initialState = {
  shopping: [],
};

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        shopping: [...state.shopping, action.payload],
      };
    default:
      return state;
  }
}
