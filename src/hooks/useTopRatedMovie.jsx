import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addTopRatedMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_options
      );
      const data = await response.json();
      console.log(data.results); // Log the data for debugging
      dispatch(addTopRatedMovie(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getTopRated();
  }, [dispatch]);
};

export default useTopRatedMovie;
