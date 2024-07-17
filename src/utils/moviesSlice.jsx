import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowplayingMovies: null,
    trailerVideo: null,
    popularMovie: null,
    topRatedMovie: null,
    upcomingMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowplayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovie,
  addTrailer,
  addTopRatedMovie,
  addUpcomingMovie,
} = moviesSlice.actions;
export default moviesSlice.reducer;
