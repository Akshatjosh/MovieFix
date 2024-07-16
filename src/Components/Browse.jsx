import { useEffect } from "react";
import { API_options } from "../utils/constant";
import Header from "./Header";

function Browse() {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const json = await data.json();
    console.log(json.results[0]);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default Browse;
