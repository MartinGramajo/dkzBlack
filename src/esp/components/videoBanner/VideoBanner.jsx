import "./videoBanner.css";
import ReactPlayer from "react-player";
import video1 from "../../assets/video/escritoriolargo.mp4"
import video2 from "../../assets/video/videodkz.mp4"
import video3 from "../../assets/video/celular.mp4"


export default function VideoBanner() {
    
    return (
        <div className="pb-5">
            <div className="tamaño-video">
                {/* PANTALLA GRANDE */}
                <ReactPlayer
                    className="d-none d-xl-block"
                    url={video1}
                    muted
                    loop
                    playing
                    width="100%"
                    height="100%"
                ></ReactPlayer>
                {/* ESCRITORIO */}
                <ReactPlayer
                    className="d-none d-md-block d-xl-none"
                    url={video2}
                    muted
                    loop
                    playing
                    width="100%"
                    height="100%"
                ></ReactPlayer>
                {/* CELULAR */}
                <ReactPlayer
                    className="d-block d-sm-none"
                    url={video3}
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
