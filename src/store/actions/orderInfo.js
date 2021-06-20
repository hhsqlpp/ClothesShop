import { SET_ORDER_INFO } from "./types";

export default function fetchOrderInfo(id) {
  return function (dispatch) {
    fetch("http://localhost:1717/orders/" + id)
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: SET_ORDER_INFO, payload: data });
      });
  };
}
