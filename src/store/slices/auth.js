import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogout: (state, action) => {
      state.token = "";
    },
  },
});

export const { setUser, setToken, setLogout } = authSlice.actions;

export default authSlice.reducer;
