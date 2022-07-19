import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModel: (state) => {
      state.isOpen = true;
    },
    closeModel: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModel, closeModel } = modelSlice.actions;

export default modelSlice.reducer;
