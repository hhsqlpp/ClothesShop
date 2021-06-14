import {
  BRANDS_FAIlURE,
  BRANDS_FETCH_END,
  BRANDS_FETCH_START,
  BRANDS_SUCCESS,
  SET_BRANDS,
} from "./types";

export function setBrands(data) {
  return {
    type: SET_BRANDS,
    payload: data,
  };
}

export function fetchBrands() {
  return function (dispatch) {
    dispatch({ type: BRANDS_FETCH_START });

    fetch("http://localhost:1717/brands")
      .then((data) => data.json())
      .then((data) => {
        if (typeof data === "string") {
          dispatch({ type: BRANDS_FAIlURE });
        } else {
          dispatch(setBrands(data));
          dispatch({ type: BRANDS_SUCCESS });
        }

        dispatch({ type: BRANDS_FETCH_END });
      });
  };
}
