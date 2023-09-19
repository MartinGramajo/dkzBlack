import VideoEN from "./VideoEN";
import "./videoBannerEN.css";

export default function VideoBannerEN() {
  return (
    <div className="pb-5">
      <div className="d-flex justify-content-center ">
        {/* ESCRITORIO */}
        <video
          className="videoHome tamaño-video d-none d-sm-block"
          src="https://res.cloudinary.com/dlzcbrqax/video/upload/v1688596296/VIDEOS%20BANNER/videodkz_gtb2fq.mp4"
          autoPlay
          loop
          muted
        ></video>
        {/* CELULAR */}
        <div className=" d-block d-sm-none no-clicker ">
          <div className="video-container">
            <div className="video-foreground">
              <VideoEN />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
