import { AUTHENTICATE, SIGNOUT } from "../actions/auth";

const initialState = {
  isAuth: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuth: action.value && true,
        user: action.value,
        error: null,
      };
    case SIGNOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
