import {
  PRODUCT_FETCH_START,
  PRODUCT_INFO_FAILURE,
  PRODUCT_INFO_FETCH_END,
  PRODUCT_INFO_SUCCESS,
  SET_PRODUCT_INFO,
} from "../actions/types";

const initialState = {
  loading: true,
  error: false,
  productInfo: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_INFO:
      return {
        ...state,
        productInfo: action.payload,
      };
    case PRODUCT_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_INFO_FETCH_END:
      return {
        ...state,
        loading: false,
      };
    case PRODUCT_INFO_SUCCESS:
      return {
        ...state,
        error: false,
      };
    case PRODUCT_INFO_FAILURE:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}
