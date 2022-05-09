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
