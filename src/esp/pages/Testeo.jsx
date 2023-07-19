import React from "react";
import ReactPlayer from "react-player";
import videoLocal from "../assets/video/originalsinveneno30.mp4";

export default function Testeo() {
  return (
    <div>
      <div className="color-negro-fondo ">
        <div className="pb-5">
          <div className="d-flex justify-content-center">
            {/* ESCRITORIO */}
            <video
              className="videoHome tamaño-video d-none d-sm-block"
              src="https://res.cloudinary.com/dlzcbrqax/video/upload/v1688596296/VIDEOS%20BANNER/videodkz_gtb2fq.mp4"
              autoPlay
              loop
              muted
            ></video>
            {/* CELULAR */}
            <video
              className="videoHome d-block d-sm-none"
              src="https://youtu.be/oX28ph8JiYU"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
