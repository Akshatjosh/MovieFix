import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IMG_URL, API_options } from "../utils/constant";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import StarRating from "./StarRating"; // Import the StarRating component

// Placeholder image URL
const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/300x450?text=No+Image+Available";

function MovieDetail() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movies = useSelector((store) => store.movie);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Safely access movie arrays and default to empty arrays if undefined or null
  const nowPlaying = movies.NowplayingMovies || [];
  const topRated = movies.topRatedMovie || [];
  const popular = movies.popularMovie || [];
  const upcoming = movies.upcomingMovie || [];

  useEffect(() => {
    // Find the movie in the Redux store or fetch it from the API if not found
    const movieFromStore = [
      ...nowPlaying,
      ...topRated,
      ...popular,
      ...upcoming,
    ].find((movie) => movie.id === parseInt(movieId));

    if (movieFromStore) {
      setSelectedMovie(movieFromStore);
    } else {
      // Fetch movie details from the API if not found in the store
      const fetchMovieDetails = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          API_options
        );
        const data = await response.json();
        setSelectedMovie(data);
      };

      fetchMovieDetails();
    }

    // Fetch similar movies and trailer
    const fetchSimilarMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar`,
        API_options
      );
      const data = await response.json();
      setSimilarMovies(data.results);
    };

    const fetchTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_options
      );
      const data = await response.json();
      const trailerVideo = data.results.find(
        (video) => video.type === "Trailer"
      );
      setTrailer(trailerVideo);
    };

    fetchSimilarMovies();
    fetchTrailer();
  }, [movieId, nowPlaying, topRated, popular, upcoming]);

  const handleViewDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-900 text-white min-h-screen">
      {selectedMovie ? (
        <>
          <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
            <img
              src={
                selectedMovie.poster_path
                  ? IMG_URL + selectedMovie.poster_path
                  : PLACEHOLDER_IMAGE
              }
              alt={selectedMovie.title}
              className="w-full md:w-1/3 rounded-md shadow-lg mb-6 md:mb-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                {selectedMovie.title}
              </h1>
              <p className="text-base sm:text-lg mb-4">
                {selectedMovie.overview}
              </p>
              <p className="mb-2">
                <strong>Release Date:</strong> {selectedMovie.release_date}
              </p>
              <div className="mb-4">
                <StarRating rating={selectedMovie.vote_average} />
              </div>

              {trailer ? (
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                    Watch Trailer
                  </h2>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${trailer.key}`}
                    controls
                    width="100%"
                    height="315px"
                  />
                </div>
              ) : (
                <div className="mb-6 text-center">
                  <p className="text-gray-400">
                    Unfortunately, there is no trailer available for this movie
                    at the moment.
                  </p>
                </div>
              )}
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Similar Movies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {similarMovies.map((movie) => (
              <div
                key={movie.id}
                className="relative group bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => handleViewDetails(movie.id)}
              >
                <img
                  src={
                    movie.poster_path
                      ? IMG_URL + movie.poster_path
                      : PLACEHOLDER_IMAGE
                  }
                  alt={movie.title}
                  className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer p-4">
                  <h3 className="text-sm sm:text-lg font-bold text-white text-center">
                    {movie.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    {movie.release_date?.substring(0, 4)}
                  </p>
                  <button className="mt-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-lg transition-transform transform hover:scale-110">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-lg sm:text-xl">Movie not found.</p>
      )}
    </div>
  );
}

export default MovieDetail;
