import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  firstName: null,
  lastName: null,
  userName: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // les setter pour le user
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
