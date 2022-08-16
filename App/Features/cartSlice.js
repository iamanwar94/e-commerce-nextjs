const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "activeSteps",
  initialState: [],
  reducers: {
    addToCart(state, action) {
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
      state.length >= 1
        ? state.map(
            (item) =>
              item.sku === action.payload.sku &&
              (item.quantity += action.payload.quantity)
          )
        : state.push(action.payload);
    },
    // addToCart(state, action) {
    //   state.push(action.payload);
    // },
    removeFromCart(state, action) {
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
