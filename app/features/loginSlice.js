import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  data: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin(state, action) {
      state.data = action.payload;
      state.login = true;
    },
    setLogout(state) {
      state.data = null;
      state.login = false;
      localStorage.removeItem("user", "token");
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;

export default loginSlice.reducer;

export const selectLoginData = (state) => state.login.data;
