import { TYPES } from "../types";

const initialState = {
  loading: false,
  error: false,
  prods: {},
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.INIT:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        prods: action.payload.response,
      };
    case TYPES.SUCCES:
      return {};

    default:
      return state;
  }
};
