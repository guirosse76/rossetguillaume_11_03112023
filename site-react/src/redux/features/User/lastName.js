import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const lastNameSlice = createSlice({
  name: "lastName",
  initialState,

  reducers: {
    setLastName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLastName } = lastNameSlice.actions;
export default lastNameSlice.reducer;
