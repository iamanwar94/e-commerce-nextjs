const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item._id !== action.payload);
    },
    incQuantity(state, action) {
      return state.map((item) =>
        item._id !== action.payload ? (item.quantity += 1) : item.quantity
      );
    },
    decQuantity(state, action) {
      return state.map((item) =>
        item._id !== action.payload ? (item.quantity -= 1) : item.quantity
      );
    },
  },
});

export const { addToCart, removeFromCart, incQuantity, decQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state) => state.cart;
