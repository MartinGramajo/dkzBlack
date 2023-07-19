import React from "react";

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
            {/* <video
              className="videoHome d-block d-sm-none"
              src="https://youtu.be/oX28ph8JiYU"
              autoPlay
              loop
              muted
            ></video> */}
            <div className="videoHome d-block d-sm-none no-clicker">
              <iframe
                width="100%"
                height="515"
                src="https://www.youtube.com/embed/XXX1bgaZJeg?autoplay=1&loop=1&mute=1&controls=0&playlist=XXX1bgaZJeg&showshare=0&showinfo=0&"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay"
                encrypted-media
                allowfullscreen
              ></iframe>
            </div>
          </div>

          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oX28ph8JiYU?autoplay=1&loop=1&mute=1&controls=0&playlist=OtqBf9IRFW4"
            frameborder="0"
            allow="autoplay"
            encrypted-media
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}
