import { useEffect } from "react";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";
import languageData from "../utils/Language";

function VideoBackground({ movieId }) {
  const languageSelect = useSelector((store) => store.config?.lang);
  const language = languageData[languageSelect] || languageData.en;
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  useTrailer(movieId);

  if (!trailerVideo) {
    return (
      <div className="flex justify-center items-center h-full">
        <div>{language["Loading..."]}</div>
      </div>
    );
  }

  return (
    <div>
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
    </div>
  );
}

export default VideoBackground;
