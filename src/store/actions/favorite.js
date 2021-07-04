import { DELETE_FAVORITE, SET_FAVORITE } from "./types";

export function setFavorite(data) {
  return {
    type: SET_FAVORITE,
    payload: data,
  };
}

export function deleteFavorite(data) {
  return {
    type: DELETE_FAVORITE,
    payload: data,
  };
}
