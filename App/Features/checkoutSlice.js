const { createSlice } = require("@reduxjs/toolkit");

const checkoutSlice = createSlice({
  name: "activeSteps",
  initialState: { checkout: null },
  reducers: {
    addToCheckout(state, action) {
      state.checkout = action.payload;
    },
    // removeFromCart(state, action) {
    //   return state.filter((item) => item.sku !== action.payload);
    // },
    // incQuantity(state, action) {
    //   [
    //     ...state,
    //     state.map((item) => item.sku == action.payload && (item.quantity += 1)),
    //   ];
    // },
    // decQuantity(state, action) {
    //   [
    //     ...state,
    //     state.map(
    //       (item) =>
    //         item.sku == action.payload &&
    //         item.quantity > 1 &&
    //         (item.quantity -= 1)
    //     ),
    //   ];
    // },
  },
});

export const { addToCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
export const selectCheckout = (state) => state.checkout.checkout;
