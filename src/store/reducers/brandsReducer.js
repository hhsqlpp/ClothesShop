import {
  BRANDS_FAIlURE,
  BRANDS_FETCH_END,
  BRANDS_FETCH_START,
  BRANDS_SUCCESS,
  SET_BRANDS,
} from "../actions/types";

const initialState = {
  loading: true,
  error: false,
  brands: [],
};

export default function brandsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
      break;
    case BRANDS_FETCH_START:
      return {
        ...state,
        loading: true,
      };
      break;
    case BRANDS_FETCH_END:
      return {
        ...state,
        loading: false,
      };
      break;
    case BRANDS_SUCCESS:
      return {
        ...state,
        error: false,
      };
      break;
    case BRANDS_FAIlURE:
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
