import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/cartSlice";
import productReducer from "../Features/productSlice";
import categoryReducer from "../Features/categorySlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer,
  },
});

export default store;
