import {
  CATEGORIES_FAIlURE,
  CATEGORIES_FETCH_END,
  CATEGORIES_FETCH_START,
  CATEGORIES_SUCCESS,
  SET_CATEGORIES,
} from "./types";

export function setCategories(data) {
  return {
    type: SET_CATEGORIES,
    payload: data,
  };
}

export function fetchCategories() {
  return function (dispatch) {
    dispatch({ type: CATEGORIES_FETCH_START });

    fetch("http://localhost:1717/categories")
      .then((data) => data.json())
      .then((data) => {
        if (typeof data === "string") {
          dispatch({ type: CATEGORIES_FAIlURE });
        } else {
          dispatch(setCategories(data));
          dispatch({ type: CATEGORIES_SUCCESS });
        }

        dispatch({ type: CATEGORIES_FETCH_END });
      });
  };
}
