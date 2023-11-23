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
    getFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    getLastName: (state, action) => {
      state.lastName = action.payload;
    },
    getUserName: (state, action) => {
      state.userName = action.payload;
    },
    // les setter pour le user
  },
});

export const { setToken } = userSlice.actions;
export const { getFirstName } = userSlice.actions;
export const { getLastName } = userSlice.actions;
export const { getUserName } = userSlice.actions;

export default userSlice.reducer;
