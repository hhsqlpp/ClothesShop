import {
  PRODUCT_INFO_FAILURE,
  PRODUCT_INFO_FETCH_END,
  PRODUCT_INFO_FETCH_START,
  PRODUCT_INFO_SUCCESS,
  SET_PRODUCT_INFO,
} from "./types";

export function setProductInfo(data) {
  return {
    type: SET_PRODUCT_INFO,
    payload: data,
  };
}

export function fetchProductinfo(category, product) {
  return function (dispatch) {
    dispatch({ type: PRODUCT_INFO_FETCH_START });

    fetch("http://localhost:1717/category/" + category + "/" + product)
      .then((data) => data.json())
      .then((data) => {
        if (typeof data === "string") {
          dispatch({ type: PRODUCT_INFO_FAILURE });
        } else {
          dispatch(setProductInfo(data));
          dispatch({ type: PRODUCT_INFO_SUCCESS });
        }

        dispatch({ type: PRODUCT_INFO_FETCH_END });
      });
  };
}
