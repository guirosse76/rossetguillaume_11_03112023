import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const firstNameSlice = createSlice({
  name: "firstName",
  initialState,

  reducers: {
    setFirstName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFirstName } = firstNameSlice.actions;
export default firstNameSlice.reducer;
