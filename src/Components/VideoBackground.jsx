import { useEffect, useState } from "react";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";
import languageData from "../utils/Language";

function VideoBackground({ movieId }) {
  const languageSelect = useSelector((store) => store.config?.lang);
  const language = languageData[languageSelect] || languageData.en;
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  const [isLoading, setIsLoading] = useState(true);

  useTrailer(movieId);

  useEffect(() => {
    if (trailerVideo) {
      setIsLoading(false);
    }
  }, [trailerVideo]);

  if (isLoading) {
    return <div className="w-screen aspect-video shimmer "></div>;
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
