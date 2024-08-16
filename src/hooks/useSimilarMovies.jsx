import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addSimilarMovies } from "../utils/moviesSlice";

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSimilarMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/similar`,
          API_options
        );
        const data = await response.json();
        console.log(data.results); // Log the data for debugging
        dispatch(addSimilarMovies(data.results));
      } catch (error) {
        console.error("Failed to fetch similar movies:", error);
      }
    };

    if (movieId) {
      getSimilarMovies();
    }
  }, [movieId, dispatch]);
};

export default useSimilarMovies;
