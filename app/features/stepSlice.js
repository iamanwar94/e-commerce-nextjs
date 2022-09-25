const { createSlice } = require("@reduxjs/toolkit");

const stepSlice = createSlice({
  name: "activeStep",
  initialState: { count: 0, address: {}, payment: {} },
  reducers: {
    next(state) {
      state.count >= 3 ? state.count = 0 : state.count += 1;
    },
    back(state) {
      state.count -= 1;
    },
    addAddress(state, action) {
      state.address = action.payload;
    },
    addPayment(state, action) {
      state.payment = action.payload;
    },
  },
});

export const { next, back, addAddress, addPayment } = stepSlice.actions;
export default stepSlice.reducer;
export const selectStep = (state) => state.activeStep.count;
export const selectAddress = (state) => state.activeStep.address;
export const selectPayment = (state) => state.activeStep.payment;
