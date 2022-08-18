const { createSlice } = require("@reduxjs/toolkit");
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  // initialState:
  //   typeof window !== "undefined" && localStorage.getItem("cart")
  //     ? JSON.parse(localStorage.getItem("cart"))
  //     : [],
  reducers: {
    addToCart(state, action) {
      const index = state.findIndex((item) => item.sku === action.payload.sku);
      if (index >= 0) {
        state[index].quantity += action.payload.quantity;
        toast.info("Qty Added of existing item in the Cart", {
          position: "top-center",
        });
      } else {
        state.push(action.payload);
        toast.success("Item Added in the Cart", {
          position: "top-center",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      // if (!state.length) {
      //   state.push(action.payload);
      // } else {
      //   // state.push(action.payload);
      //   state.map((item) =>
      //     item.sku === action.payload.sku
      //       ? (item.quantity += action.payload.quantity)
      //       : state.push(action.payload)
      //   );
      // }
      //   state.length >= 1
      //     ? state.map(
      //         (item) =>
      //           item.sku === action.payload.sku &&
      //           (item.quantity += action.payload.quantity)
      //       )
      //     : state.push(action.payload);
      // },
      // addToCart(state, action) {
      //   state.push(action.payload);
    },
    removeFromCart(state, action) {
      state.filter((item) => item.sku !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
      return state.filter((item) => item.sku !== action.payload);
    },
    incQuantity(state, action) {
      [
        ...state,
        state.map((item) => item.sku == action.payload && (item.quantity += 1)),
      ];
    },
    decQuantity(state, action) {
      [
        ...state,
        state.map(
          (item) =>
            item.sku == action.payload &&
            item.quantity > 1 &&
            (item.quantity -= 1)
        ),
      ];
    },
  },
});

export const { addToCart, removeFromCart, incQuantity, decQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state) => state.cart;
