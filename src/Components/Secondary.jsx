import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function Secondary() {
  const movies = useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      {/* Movie Lists */}
      <div className="px-4 md:px-12 lg:px-20 xl:px-32">
        <div className="-mt-5 relative sm:-mt-2">
          <MovieList title={"Now Playing"} movies={movies.NowplayingMovies} />

          <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />

          <MovieList title={"Popular"} movies={movies.popularMovie} />

          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovie} />
        </div>
      </div>
    </div>
  );
}

export default Secondary;
