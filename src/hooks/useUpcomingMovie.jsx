import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addUpcomingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  const getUpcomingMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_options
      );
      const data = await response.json();
      console.log(data.results); // Log the data for debugging
      dispatch(addUpcomingMovie(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovie();
  }, [dispatch]);
};

export default useUpcomingMovie;
