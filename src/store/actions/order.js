import { GET_ORDER, SET_ORDER } from "./types";

export function setOrder(data) {
  return {
    type: SET_ORDER,
    payload: data,
  };
}

export function fetchGetOrder() {
  return function (dispatch) {
    fetch("http://localhost:1717/orders")
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: GET_ORDER, payload: data });
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
