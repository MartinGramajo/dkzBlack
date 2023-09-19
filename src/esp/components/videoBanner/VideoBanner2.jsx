import "./videoBanner.css";

export default function VideoBanner2() {
  return (
    <div className="pb-5">
      <div className="d-flex justify-content-center">
        {/* ESCRITORIO */}
        <video
          className="videoHome tamaño-video "
          src="https://res.cloudinary.com/dlzcbrqax/video/upload/v1688596296/VIDEOS%20BANNER/videodkz_gtb2fq.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
}
