import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import movieReducer from "./moviesSlice";

import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,

    config: configReducer,
  },
});

export default appStore;
