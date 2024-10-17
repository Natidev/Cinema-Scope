import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const VideoPopup = ({ link }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowVideo(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <FontAwesomeIcon icon={faPlay} className="pr-2" />
        Play Trailer
      </button>
      {showVideo && (
        <div className="fixed inset-0 z-10 flex w-[100%]">
          <div className="absolute inset-0 bg-black opacity-70 w-[100%] justify-center flex items-center"></div>
          <div className="z-20 relative w-[100%] h-screen flex items-center justify-center">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-0 right-0 m-2 bg-white text-black px-2 py-1 rounded-full"
            >
              Close
            </button>
            <iframe
              title="Video"
              className="md:w-3/4 md:h-3/4 h-1/3 w-[100%]"
              src={link}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
