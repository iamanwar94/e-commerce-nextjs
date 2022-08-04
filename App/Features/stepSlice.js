const { createSlice } = require("@reduxjs/toolkit");

const stepSlice = createSlice({
  name: "activeStep",
  initialState: { count: 0 },
  reducers: {
    next(state) {
      state.count += 1;
    },
    back(state) {
      state.count -= 1;
    },
  },
});

export const { next, back } = stepSlice.actions;
export default stepSlice.reducer;
export const selectStep = (state) => state.activeStep.count;
