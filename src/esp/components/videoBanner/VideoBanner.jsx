import "./videoBanner.css";
import ReactPlayer from "react-player";
import videodkz from "../../assets/video/videodkz.mp4"

export default function VideoBanner() {
    return (
        <div className="pb-5">
            <div className="tamaño-video">
                <ReactPlayer
                    className=""
                    url={videodkz}
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
