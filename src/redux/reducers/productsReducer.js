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
    case TYPES.UPDATE_STOCK: {
      let id = state.prods.products.length;
      let newItemInStock = {
        ...action.payload,
        id: id + 1,
      };
      return state.prods.products.push(newItemInStock);
    }

    default:
      return state;
  }
};
/*
{
        prods: {
          ...state.prods.products,
          id: { newItemInStock },
        },
      };
*/
