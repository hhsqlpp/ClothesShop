import {
  SET_PRODUCT,
  FETCH_START,
  FETCH_END,
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
    dispatch({ type: FETCH_START });

    fetch("http://localhost:1717/category/" + id)
      .then((data) => data.json())
      .then((data) => {
        if (typeof data === "string") {
          dispatch({ type: PRODUCT_FAILURE });
        } else {
          dispatch(setProduct(data));
          dispatch({ type: PRODUCT_SUCCESS });
        }

        dispatch({ type: FETCH_END });
      })
      .catch((e) => console.log(e));
  };
}
