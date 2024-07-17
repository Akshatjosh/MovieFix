import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    toggle: false,
  },
  reducers: {
    addtoggle: (state, action) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { addtoggle } = searchSlice.actions;
export default searchSlice.reducer;
