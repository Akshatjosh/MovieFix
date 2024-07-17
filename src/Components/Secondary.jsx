import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import languageData from "../utils/Language";

function Secondary() {
  const languageSelect = useSelector((store) => store.config?.lang);
  const movies = useSelector((store) => store.movie);
  const language = languageData[languageSelect] || languageData.en;

  return (
    <div className="bg-black">
      {/* Movie Lists */}
      <div className="px-4 ">
        <div className="-mt-32 relative ">
          <MovieList
            title={language.nowPlaying}
            movies={movies.NowplayingMovies}
          />

          <MovieList title={language.topRated} movies={movies.topRatedMovie} />

          <MovieList title={language.popular} movies={movies.popularMovie} />

          <MovieList
            title={language.upcomingMovie}
            movies={movies.upcomingMovie}
          />
        </div>
      </div>
    </div>
  );
}

export default Secondary;
