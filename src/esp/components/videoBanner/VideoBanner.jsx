import "./videoBanner.css";
import ReactPlayer from "react-player";

export default function VideoBanner() {
    
    return (
        <div className="pb-5">
            <div className="tamaño-video">
                {/* PANTALLA GRANDE */}
                <ReactPlayer
                    className="d-none d-xl-block"
                    url="https://res.cloudinary.com/dlzcbrqax/video/upload/v1688596266/VIDEOS%20BANNER/escritoriolargo_ynd1au.mp4"
                    muted
                    loop
                    playing
                    width="100%"
                    height="100%"
                ></ReactPlayer>
                {/* ESCRITORIO */}
                <ReactPlayer
                    className="d-none d-md-block d-xl-none"
                    url="https://res.cloudinary.com/dlzcbrqax/video/upload/v1688596296/VIDEOS%20BANNER/videodkz_gtb2fq.mp4"
                    muted
                    loop
                    playing
                    width="100%"
                    height="100%"
                ></ReactPlayer>
                {/* CELULAR */}
                <ReactPlayer
                    className="d-block d-sm-none"
                    url="https://res.cloudinary.com/dlzcbrqax/video/upload/v1688596266/VIDEOS%20BANNER/celular_o9fpoz.mp4"
                    muted
                    loop
                    playing
                    width="100%"
                    height="100%"
                ></ReactPlayer>
            </div>
        </div>
    );
}
