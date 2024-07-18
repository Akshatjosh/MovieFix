import { useSelector } from "react-redux";
import languageData from "../utils/Language";

function VideoTitle({ title, overview }) {
  const languageSelect = useSelector((store) => store.config?.lang);
  const language = languageData[languageSelect] || languageData.en;

  return (
    <div className="w-full  aspect-video pt-[15%] px-2 md:px-4  absolute text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="text-2xl font-bold md:text-6xl ">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md ">{overview}</p>
      <div className="flex flex-col md:flex-row md:gap-4 space-y-4 mt-4">
        <button className="w-full sm:w-auto md:px-6 text-white md:py-2 bg-gray-500 text-black rounded-lg border border-black bg-opacity-75 hover:bg-opacity-100 transition duration-300">
          {language["▶️ Play"]}
        </button>
        <button className=" hidden md:inline-block w-full sm:w-auto md:px-6 text-white md:py-2 bg-gray-500 text-black rounded-lg border border-black bg-opacity-75 hover:bg-opacity-100 transition duration-300">
          {language["ℹ️ More info"]}
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
