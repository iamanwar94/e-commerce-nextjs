import { configureStore } from "@reduxjs/toolkit";

// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import cartReducer from "../features/cartSlice";
import wishlistReducer from "../features/wishlistSlice";
import productReducer from "../features/productSlice";
import categoryReducer from "../features/categorySlice";
import checkoutReducer from "../features/checkoutSlice";
import stepReducer from "../features/stepSlice";
import searchReducer from "../features/searchSlice";
import loginReducer from "../features/loginSlice";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    // cart: persistedReducer,
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer,
    checkout: checkoutReducer,
    activeStep: stepReducer,
    wishlist: wishlistReducer,
    searchProducts: searchReducer,
    login: loginReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     product: productReducer,
//     category: categoryReducer,
//   },
// });

export default store;
