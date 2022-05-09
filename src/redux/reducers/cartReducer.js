import { TYPES } from "../types";

const itemList = {
  item: [],
};

export const cartReducer = (state = itemList, action) => {
  switch (action.type) {
    case TYPES.ADD_PRODUCT:
      let newItem = action.payload;
      let itemInCart = state.item.find((item) => item.id === action.payload.id);

      return itemInCart
        ? {
            ...state,
            item: state.item.map((product) =>
              product.id === newItem.id
                ? { ...product, amount: product.amount + action.payload.amount }
                : product
            ),
          }
        : {
            ...state,
            item: [
              ...state.item,
              { ...newItem, amount: action.payload.amount },
            ],
          };
    case TYPES.REMOVE_ONE_FROM_CART:
      return {};
    case TYPES.REMOVE_ALL_FROM_CART:
      return {};
    case TYPES.CLEAR_CART:
      return action.payload;
    default:
      return state;
  }
};
