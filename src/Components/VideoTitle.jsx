function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/2">{overview}</p>
      <div className="flex space-x-4 mt-4">
        <div className="flex space-x-4 mt-4 ">
          <button className="px-6 text-white py-2 bg-gray-500 text-black rounded-lg border border-black bg-opacity-75 hover:bg-opacity-100 transition duration-300">
            ▶️ Play
          </button>
          <button className="px-6 text-white py-2 bg-gray-500 text-black rounded-lg border border-black bg-opacity-75 hover:bg-opacity-100 transition duration-300">
            ⓘ More info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
