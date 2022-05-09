import prods from "../../db/data.json";
import { TYPES } from "../types";

export const storeReducer = (state = { prods }, action) => {
  switch (action.type) {
    case TYPES.INIT:
      return {};
    case TYPES.SUCCES:
      return {};

    default:
      return state;
  }
};
