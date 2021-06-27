import { ORDER_INFO_FETCH_END, ORDER_INFO_FETCH_START, ORDER_INFO_SUCCESS, SET_ORDER_INFO } from "./types";

export default function fetchOrderInfo(id) {
  return function (dispatch) {
    dispatch({ type: ORDER_INFO_FETCH_START })

    fetch("http://localhost:1717/orders/" + id)
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: SET_ORDER_INFO, payload: data });
        dispatch({ type: ORDER_INFO_SUCCESS })
        dispatch({ type: ORDER_INFO_FETCH_END })
      });
  };
}
