import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/types";

const initialState = {
  logined: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logined: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logined: false,
      };
    default:
      return state;
  }
}
