import { useSelector } from "react-redux";
import languageData from "../utils/Language";

function VideoTitle({ title, overview }) {
  const languageSelect = useSelector((store) => store.config?.lang);
  const language = languageData[languageSelect] || languageData.en;

  return (
    <div className="w-full sm:w-screen aspect-video pt-[15%] px-4 sm:px-20 absolute text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-md sm:w-1/2">{overview}</p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
        <button className="w-full sm:w-auto px-6 text-white py-2 bg-gray-500 text-black rounded-lg border border-black bg-opacity-75 hover:bg-opacity-100 transition duration-300">
          {language["▶️ Play"]}
        </button>
        <button className="w-full sm:w-auto px-6 text-white py-2 bg-gray-500 text-black rounded-lg border border-black bg-opacity-75 hover:bg-opacity-100 transition duration-300 mt-4 sm:mt-0">
          {language["ℹ️ More info"]}
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
