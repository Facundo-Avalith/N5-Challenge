import { TYPES } from "../types";
import prods from "../../db/data.json";

export const getInitialProducts = () => {
  return (dispatch) => {
    const requestProducts = async () => {
      try {
        const response = await prods;
        await dispatch(initProducts(response));
      } catch (err) {
        console.log(err);
      }
    };
    requestProducts();
  };
};
export const initProducts = (response) => ({
  type: TYPES.INIT,
  payload: {
    loading: true,
    error: false,
    response,
  },
});
