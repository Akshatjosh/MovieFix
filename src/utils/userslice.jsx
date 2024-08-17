import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // Save the entire user object
    },
    removeUser: () => {
      return null; // Clear the user object
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
