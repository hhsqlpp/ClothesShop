import { RESET_FILTER, SET_FILTER } from "../actions/types";

const initalState = {
  filters: [],
};

export default function filterReducer(state = initalState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload],
      };
    case RESET_FILTER:
      return {
        ...state,
        filters: state.filters.filter((filter) => filter !== action.payload),
      };
    default:
      return state;
  }
}
