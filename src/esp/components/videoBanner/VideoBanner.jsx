import "./videoBanner.css";
import ReactPlayer from "react-player";

export default function VideoBanner() {
    const youtubeConfig = {
        youtube: {
            playerVars: {
                controls: 0, // Oculta los controles del reproductor
                modestbranding: 1, // Oculta el logo de YouTube
                disablekb: 1, // Desactiva el uso del teclado para pausar el video
                rel: 0, // Desactiva los videos relacionados al final del video
                showinfo: 0, // Oculta el título del video
            },
        },
    };
    return (
        <div className="pb-5">
            <div className="tamaño-video">
                {/* PANTALLA GRANDE */}
                <ReactPlayer
                    className="d-none d-xl-block"
                    url="https://youtu.be/oX28ph8JiYU"
                    muted
                    config={youtubeConfig}
                    loop
                    playing
                    width="100%"
                    height="100%"
                ></ReactPlayer>
                {/* ESCRITORIO */}
                <ReactPlayer
                    className="d-none d-md-block d-xl-none"
                    url="https://www.youtube.com/watch?v=Jdux5Es9gBM&t=1s"
                    muted
                    config={youtubeConfig}
                    loop
                    playing
                    width="100%"
                    height="100%"
                ></ReactPlayer>
                {/* CELULAR */}
                <ReactPlayer
                    className="d-block d-sm-none"
                    url="https://youtu.be/XAjzAefz0pY"
                    muted
                    config={youtubeConfig}
                    loop
                    playing
                    width="100%"
                    height="100%"
                ></ReactPlayer>
            </div>
        </div>
    );
}
