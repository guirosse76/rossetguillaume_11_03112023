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
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setInitialState: (state, action) => {
      state = {
        token: null,
        firstName: null,
        lastName: null,
        userName: null,
      };
    },
    // les setter pour le user
  },
});

export const {
  setToken,
  setInitialState,
  setFirstName,
  setLastName,
  setUserName,
} = userSlice.actions;

export default userSlice.reducer;
