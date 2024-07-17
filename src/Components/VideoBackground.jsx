import { useEffect } from "react";

import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useTrailer(movieId);
  if (!trailerVideo) {
    return (
      <div className="flex justify-center items-center h-full">
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div className=" w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
