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

import cartReducer from "../Features/cartSlice";
import productReducer from "../Features/productSlice";
import categoryReducer from "../Features/categorySlice";
import checkoutReducer from "../Features/checkoutSlice";
import stepReducer from "../Features/stepSlice";

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
