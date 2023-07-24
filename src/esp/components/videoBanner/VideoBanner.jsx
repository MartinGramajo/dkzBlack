import "./videoBanner.css";

export default function VideoBanner() {
  return (
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
        <div className=" d-block d-sm-none no-clicker">
          <div className="video-container">
            <div className="video-foreground">
              <iframe
                width="100%"
                height="515"
                src="https://www.youtube.com/embed/XXX1bgaZJeg?showinfo=0&showshare=0&autoplay=1&loop=1&mute=1&controls=0&playlist=XXX1bgaZJeg"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay"
                encrypted-media
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
