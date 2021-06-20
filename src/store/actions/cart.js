import {
  DELETE_FROM_CART,
  SET_CART,
} from "./types";

export function setCart(data) {
  return {
    type: SET_CART,
    payload: data,
  };
}

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
}
