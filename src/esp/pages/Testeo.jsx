import React from "react";
import ReactPlayer from "react-player";
import videoLocal from "../assets/video/MobileCuadradoComprimido.mp4";

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
              src="https://res.cloudinary.com/dlzcbrqax/video/upload/v1689023000/VIDEOS%20BANNER/MobileCuadrado_ec0a4j.mp4"
              autoPlay
              loop
              muted
              playsinline
            ></video>
            {/* MOV */}
            <video
              className="videoHome d-block d-sm-none"
              src="https://res.cloudinary.com/dlzcbrqax/video/upload/v1689789892/VIDEOS%20BANNER/MobileCuadrado_xor9qc.mov"
              autoPlay
              loop
              muted
              playsinline
            ></video>
            {/* M4V */}
            <video
              className="videoHome d-block d-sm-none"
              src="https://res.cloudinary.com/dlzcbrqax/video/upload/v1689790052/VIDEOS%20BANNER/MobileCuadrado_ibjhe7.mp4"
              autoPlay
              loop
              muted
              playsinline
            ></video>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <ReactPlayer
              playing
              loop
              muted
              playsInline={true}
              url="https://res.cloudinary.com/dlzcbrqax/video/upload/v1689023000/VIDEOS%20BANNER/MobileCuadrado_ec0a4j.mp4"
            />
          </div>
          {/* MOV */}
          <div className="d-flex justify-content-center">
            <ReactPlayer
              playing
              loop
              muted
              playsInline={true}
              url="https://res.cloudinary.com/dlzcbrqax/video/upload/v1689789892/VIDEOS%20BANNER/MobileCuadrado_xor9qc.mov"
            />
          </div>
          {/* M4V */}
          <div className="d-flex justify-content-center">
            <ReactPlayer
              playing
              loop
              muted
              playsInline={true}
              url="https://res.cloudinary.com/dlzcbrqax/video/upload/v1689790052/VIDEOS%20BANNER/MobileCuadrado_ibjhe7.mp4"
            />
          </div>
        </div>
        {/* local */}
        <div>
          <video
            className="videoHome d-block d-sm-none"
            src={videoLocal}
            autoPlay
            loop
            muted
            playsInline
            controls={true}
          ></video>
        </div>
        {/* react-player + local */}
        <div className="d-flex justify-content-center">
          <ReactPlayer
            controls
            playing
            loop
            muted
            playsInline
            url={videoLocal}
          />
        </div>
      </div>
    </div>
  );
}
