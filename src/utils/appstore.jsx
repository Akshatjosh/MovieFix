import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import movieReducer from "./moviesSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appstore;
