import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

function MovieList({ title, movies }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto overflow-y-hidden">
        <div className="flex">
          {isLoading
            ? Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className="shimmer h-52 w-36 md:w-48 rounded-md mr-4"
                ></div>
              ))
            : movies?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  posterPath={movie.poster_path}
                  movieId={movie.id}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
