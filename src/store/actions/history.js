import { SET_HISTORY } from "./types";

export default function setHistory(data) {
  return {
    type: SET_HISTORY,
    payload: data,
  };
}
