import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";

import Secondary from "./Secondary";

function Browse() {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  return (
    <div className="overflow-hidden">
      <Header />

      <MainContainer />
      <Secondary />
    </div>
  );
}

export default Browse;
