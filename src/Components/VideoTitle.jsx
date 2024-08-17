import { useSelector } from "react-redux";
import languageData from "../utils/Language";
import { useState, useEffect } from "react";

function VideoTitle({ title, overview }) {
  const languageSelect = useSelector((store) => store.config?.lang);
  const language = languageData[languageSelect] || languageData.en;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="w-full aspect-video pt-[15%] px-2 md:px-4 absolute text-white bg-gradient-to-r from-black to-transparent">
      {isLoading ? (
        <div className="shimmer w-full aspect-video h-full">
          <p className="text-lg md:text-2xl mb-2 shimmer-text"></p>
          <h1 className="text-2xl font-bold md:text-6xl mb-4 shimmer-text"></h1>
          <p className="hidden md:inline-block py-6 text-md shimmer-text"></p>
        </div>
      ) : (
        <>
          <p className="text-lg md:text-2xl mb-2">
            <span className="relative inline-block">
              <span className="relative z-10">Hello! Welcome Back</span>
              <span className="absolute top-0 -right-6 text-sm transform translate-y-1">
                🙏
              </span>
            </span>
          </p>
          <h1 className="text-2xl font-bold md:text-6xl mb-4">{title}</h1>
          <p className="hidden md:inline-block py-6 text-md">{overview}</p>
        </>
      )}
    </div>
  );
}

export default VideoTitle;
