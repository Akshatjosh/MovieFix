import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constant";
import { addNowPlayingMovies, addPopularMovie } from "../utils/moviesSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_options
      );
      const data = await response.json();
      console.log(data.results); // Log the data for debugging
      dispatch(addPopularMovie(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getPopular();
  }, [dispatch]);
};

export default usePopularMovie;
