import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainContainer() {
  const movies = useSelector((store) => store.movie.NowplayingMovies);

  if (!movies) {
    return <div className="pt-36 px-12 text-2xl font-bold">Loading...</div>; // Show a loading indicator if movies are not yet available
  }

  if (movies.length === 0) {
    return <div>No movies available</div>; // Handle the case when no movies are available
  }

  const mainMovie = movies[0];
  console.log(mainMovie); // Log the main movie for debugging
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;
