import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./categorySlice";

const initialState = { data: null, status: STATUSES.IDLE };

const searchSlice = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {
    setSearchProducts(state, action) {
      state.data = action.payload;
    },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
});



export const { setSearchProducts } = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearchProducts = (state) => state.searchProducts.data;
