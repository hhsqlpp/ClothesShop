import {
  SET_PRODUCT,
  PRODUCT_FETCH_START,
  PRODUCT_FETCH_END,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_DELETE,
  PRODUCT_CHANGE,
  ADD_PRODUCT,
} from "./types";

export function setProduct(data) {
  return {
    type: SET_PRODUCT,
    payload: data,
  };
}

export function fetchDeleteProduct(category, productId) {
  return function (dispatch) {
    fetch(
      "http://localhost:1717/category/" + category + "/delete/" + productId,
      {
        method: "DELETE",
      }
    ).then(() => {
      dispatch({ type: PRODUCT_DELETE });
    });
  };
}

export function fetchChangeProduct(category, id, body) {
  return function (dispatch) {
    dispatch({ type: PRODUCT_FETCH_START });

    fetch("http://localhost:1717/category/" + category + "/update/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: PRODUCT_CHANGE, payload: data });
        dispatch({ type: PRODUCT_SUCCESS });
        dispatch({ type: PRODUCT_FETCH_END });
      });
  };
}

export function fetchAddProduct(category, body) {
  return function (dispatch) {
    dispatch({ type: PRODUCT_FETCH_START });

    fetch("http://localhost:1717/category/" + category + "/create/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: ADD_PRODUCT, payload: data });
        dispatch({ type: PRODUCT_SUCCESS });
        dispatch({ type: PRODUCT_FETCH_END });
      });
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
