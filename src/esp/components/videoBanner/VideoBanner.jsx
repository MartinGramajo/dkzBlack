import "./videoBanner.css";

export default function VideoBanner() {
    return (
        <div className="pb-5">
            <div className="d-flex justify-content-center">
                {/* ESCRITORIO */}
                <video
                    className="video d-none d-sm-block"
                    src="https://res.cloudinary.com/dlzcbrqax/video/upload/v1688596296/VIDEOS%20BANNER/videodkz_gtb2fq.mp4"
                    autoPlay
                    loop
                    muted
                ></video>
                {/* CELULAR */}
                <video
                    className="video d-block d-sm-none"
                    src="https://res.cloudinary.com/dlzcbrqax/video/upload/v1688596266/VIDEOS%20BANNER/celular_o9fpoz.mp4"
                    autoPlay
                    loop
                    muted
                ></video>
            </div>
        </div>
    );
}
