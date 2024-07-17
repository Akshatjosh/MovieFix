import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Secondary from "./Secondary";

function Browse() {
  useNowPlayingMovies();
  usePopularMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <Secondary />
    </div>
  );
}

export default Browse;
