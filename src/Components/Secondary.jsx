import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function Secondary() {
  const movies = useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      {/* Movie Lists */}
      <div className="px-4 ">
        <div className="-mt-32 relative ">
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
