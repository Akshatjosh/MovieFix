import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constant";
import { addTrailer } from "../utils/moviesSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_options
      );
      const json = await data.json();

      const filterTrailer = json.results.filter(
        (video) => video.type === "Teaser"
      );

      const trailer = filterTrailer.length ? filterTrailer[0] : null;
      console.log(trailer);

      dispatch(addTrailer(trailer));
    };

    getMovieVideo();
  }, []);

  // Ensure trailerVideo has loaded before rendering the iframe
};
export default useTrailer;
