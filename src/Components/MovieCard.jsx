import { IMG_URL } from "../utils/constant";

function MovieCard({ posterPath }) {
  return (
    <div className="w-36 md:w-48  pr-4 ">
      <img src={IMG_URL + posterPath} alt="Movie Poster" />
    </div>
  );
}

export default MovieCard;
