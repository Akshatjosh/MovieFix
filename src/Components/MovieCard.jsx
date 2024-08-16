import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../utils/constant";

function MovieCard({ posterPath, movieId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        src={IMG_URL + posterPath}
        alt="Movie Poster"
        className="cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
}

export default MovieCard;
