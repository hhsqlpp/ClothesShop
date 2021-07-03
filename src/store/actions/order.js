import { GET_ORDER, ORDER_FALIURE, ORDER_FETCH_END, ORDER_FETCH_START, ORDER_SUCCESS, SET_ORDER } from "./types";

export function setOrder(data) {
  return {
    type: SET_ORDER,
    payload: data,
  };
}

export function fetchGetOrder() {
  return function (dispatch) {
    dispatch({ type: ORDER_FETCH_START })

    fetch("http://localhost:1717/orders")
      .then((data) => data.json())
      .then((data) => {
        if (typeof data === "string") {
          dispatch({ type: ORDER_FALIURE })
        }
        dispatch({ type: GET_ORDER, payload: data });
        dispatch({ type: ORDER_SUCCESS });
        dispatch({ type: ORDER_FETCH_END });
      });
  };
}

export function fetchOrder(body) {
  return function (dispatch) {
    fetch("http://localhost:1717/orders/addItem", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(setOrder(data));
      });
  };
}
