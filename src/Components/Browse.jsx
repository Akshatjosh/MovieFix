import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SearchContainer from "./SearchContainer";
import Secondary from "./Secondary";

function Browse() {
  const show = useSelector((store) => store.search.toggle);
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  return (
    <div>
      <Header />
      {show ? (
        <SearchContainer />
      ) : (
        <>
          <MainContainer />
          <Secondary />
        </>
      )}
    </div>
  );
}

export default Browse;
