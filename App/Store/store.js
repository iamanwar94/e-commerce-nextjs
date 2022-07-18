import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/cartSlice";
import productReducer from "../Features/productSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
