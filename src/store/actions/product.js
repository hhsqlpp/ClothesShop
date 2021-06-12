import {
  SET_PRODUCT,
  PRODUCT_FETCH_START,
  PRODUCT_FETCH_END,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from "./types";

export function setProduct(data) {
  return {
    type: SET_PRODUCT,
    payload: data,
  };
}

export function fetchProduct(id) {
  return function (dispatch) {
    dispatch({ type: PRODUCT_FETCH_START });

    fetch("http://localhost:1717/category/" + id)
      .then((data) => data.json())
      .then((data) => {
        if (typeof data === "string") {
          dispatch({ type: PRODUCT_FAILURE });
        } else {
          dispatch(setProduct(data));
          dispatch({ type: PRODUCT_SUCCESS });
        }

        dispatch({ type: PRODUCT_FETCH_END });
      })
      .catch((e) => console.log(e));
  };
}
