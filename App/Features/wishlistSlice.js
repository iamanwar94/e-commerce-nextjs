const { createSlice } = require("@reduxjs/toolkit");
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist(state, action) {
      state.push(action.payload);
      toast.success("Wish List Updated Successfully", {
        position: "top-center",
      });
    },
    removeToWishlist(state, action) {
      return state.filter((item) => item.sku !== action.payload);
    },
  },
});

export const { addToWishlist, removeToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
export const selectWishlist = (state) => state.wishlist;
