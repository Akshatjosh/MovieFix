import { IMG_URL } from "../utils/constant";

function MovieCard({ posterPath }) {
  return (
    <div className="flex-shrink-0 w-48 md:w-56 lg:w-64 xl:w-72 pr-4">
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src={IMG_URL + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
}

export default MovieCard;
