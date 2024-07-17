import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  console.log(movies);
  console.log(title);
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex  overflow-x-auto ">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            className=" w-64 md:w-72 lg:w-80 xl:w-96"
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
