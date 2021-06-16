import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./types";

export function getMeAction(token) {
    const request = {
        headers: {
            "X-Auth": token
        }
    }

    return function (dispatch) {
        fetch("http://localhost:1717/me", request)
            .then((data) => data.json())
            .then((data) => {
                if (typeof data === "string") {
                    dispatch({type: LOGIN_FAILURE})
                } else {
                    dispatch({type: LOGIN_SUCCESS})
                }
            })
    }
}