import {
  PRODUCT_FETCH_END,
  PRODUCT_FETCH_START,
  PRODUCT_FAILURE,
  PRODUCT_SUCCESS,
  SET_PRODUCT,
  PRODUCT_CHANGE,
  PRODUCT_DELETE,
  ADD_PRODUCT,
} from "../actions/types";

const initialState = {
  products: [],
  loading: true,
  error: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT_CHANGE:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case PRODUCT_DELETE:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
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
        error: false,
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
