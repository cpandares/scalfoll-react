import { types } from "../types/types";

const initialState = {
  checking: true,
  ok: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
        checking: false,
        ok: true,
      };

    case types.register:
      return {
        ...state,
        ...action.payload,
        checking: false,
        ok: true,
      };   

    case types.logout:
      return {
        initialState: [],
      };

    default:
      return state;
  }
};
