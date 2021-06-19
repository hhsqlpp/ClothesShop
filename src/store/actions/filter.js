import { RESET_FILTER, SET_FILTER } from "./types";

export function setFilter(data) {
    return {
        type: SET_FILTER,
        payload: data
    }
}

export function resetFilter(data) {
    return {
        type: RESET_FILTER,
        payload: data
    }
}