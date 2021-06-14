import {
  CART_FETCH_END,
  CART_FETCH_START,
  CART_SUCCESS,
  SET_CART,
} from "./types";

export function setCart(data) {
  return {
    type: SET_CART,
    payload: data,
  };
}

export function fetchCart(body) {
  const request = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  };

  return function (dispatch) {
    dispatch({ type: CART_FETCH_START });

    fetch("http://localhost:1717/addToCart", request)
      .then((data) => data.json())
      .then((data) => {
        dispatch(setCart(data));
        dispatch({ type: CART_SUCCESS });
        dispatch({ type: CART_FETCH_END });
      });
  };
}
