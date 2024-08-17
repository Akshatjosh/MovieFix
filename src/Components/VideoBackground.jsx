import { useEffect, useState } from "react";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  const [isLoading, setIsLoading] = useState(true);

  useTrailer(movieId);

  useEffect(() => {
    if (trailerVideo) {
      setIsLoading(false);
    }
  }, [trailerVideo]);

  return (
    <div className="w-screen aspect-video">
      {isLoading ? (
        <div className="shimmer h-full w-full"></div>
      ) : (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&loop=1&playlist=" +
            trailerVideo?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
}

export default VideoBackground;
