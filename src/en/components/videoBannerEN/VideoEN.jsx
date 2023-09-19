import React from "react";
import YouTube from "react-youtube";

const VideoEN = () => {
  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playsinline: 1,
    },
  };

  const videoId = "XXX1bgaZJeg"; // Reemplaza con el ID de tu video de YouTube

  return <YouTube className="" videoId={videoId} opts={opts} />;
};

export default VideoEN;
