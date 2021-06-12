import {
  PRODUCT_FETCH_END,
  PRODUCT_FETCH_START,
  PRODUCT_FAILURE,
  PRODUCT_SUCCESS,
  SET_PRODUCT,
} from "../actions/types";

const initialState = {
  product: [],
  loading: true,
  error: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case PRODUCT_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_FETCH_END:
      return {
        ...state,
        loading: false,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
