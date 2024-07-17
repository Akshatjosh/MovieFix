import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowplayingMovies: null,
    trailerVideo: null,
    popularMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowplayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPopularMovie, addTrailer } =
  moviesSlice.actions;
export default moviesSlice.reducer;
