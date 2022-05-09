import { createStore, combineReducers } from "redux";
import { storeReducer } from "../reducers/productsReducer";
import { cartReducer } from "../reducers/cartReducer"

const reducers = combineReducers({
  store: storeReducer,
  cart: cartReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
