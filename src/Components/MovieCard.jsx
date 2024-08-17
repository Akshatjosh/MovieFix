import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../utils/constant";
import { useState, useEffect } from "react";

function MovieCard({ posterPath, movieId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movieId}`);
  };

  useEffect(() => {
    const image = new Image();
    image.src = IMG_URL + posterPath;
    image.onload = () => setIsLoading(false);
  }, [posterPath]);

  return (
    <div className="w-36 gap-2 md:w-48 pr-4 hover:scale-105">
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
