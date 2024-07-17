import { useSelector } from "react-redux";
import languageData from "../utils/Language";

function SearchBar() {
  const languageSelect = useSelector((store) => store.config?.lang);
  const language = languageData[languageSelect] || languageData.en;

  return (
    <div className="pt-[15%] flex justify-center items-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://i.pinimg.com/564x/92/14/8a/92148ae16c20ddbdbe85beb1e9ea6082.jpg"
          alt="bcg"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <form className="w-1/2 grid grid-cols-12 absolute bg-black">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language["What would you like to watch"]}
        />
        <button className="px-4 py-2 m-4 bg-red-500 text-white font-semibold rounded-lg col-span-3">
          {language.Submit}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
