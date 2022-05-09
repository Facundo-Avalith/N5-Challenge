import { TYPES } from "../types";

export const add_product_to_cart = (product, productAmount) => {
  return {
    type: TYPES.ADD_PRODUCT,
    payload: {
      name: product.name,
      id: product.id,
      price: product.price,
      amount: productAmount,
    },
  };
};
export const remove_all_from_cart = (id) => {
  return {
    type: TYPES.REMOVE_ALL_FROM_CART,
    payload: {
      id,
    },
  };
};
export const remove_one_from_cart = (id) => {
  return {
    type: TYPES.REMOVE_ONE_FROM_CART,
    payload: {
      id,
    },
  };
};
export const clear_cart = () => {
  return {
    type: TYPES.CLEAR_CART,
    payload: {
      item: [],
    },
  };
};
