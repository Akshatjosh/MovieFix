import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice"; // Ensure the filename matches

const appstore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appstore;
