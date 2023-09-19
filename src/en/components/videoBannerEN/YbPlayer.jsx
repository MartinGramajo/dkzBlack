import React, { useEffect } from "react";

const YbPlayer = () => {
  useEffect(() => {
    // Cargar la API de YouTube cuando el componente se monta
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    // Configurar el reproductor de YouTube cuando la API se cargue
    // script.onload = () => {
    //   new window.YT.Player("youtube-player", {
    //     videoId: "XXX1bgaZJeg", // ID de tu video de YouTube

    //     playerVars: {
    //       autoplay: 0, // No reproducir automáticamente
    //       controls: 0, // Ocultar los controles
    //       loop: 1, // Repetir el video
    //       playsinline: 1, // Reproducir en línea en dispositivos iOS
    //     },
    //   });
    // };
    script.onload = () => {
      new window.YT.Player("youtube-player", {
        width: "100%", // Ancho del 100%
        height: "515", // Altura de 515 píxeles
        videoId: "XXX1bgaZJeg", // ID de tu video de YouTube
        playerVars: {
          autoplay: 0, // No reproducir automáticamente
          controls: 0, // Ocultar los controles
          loop: 1, // Repetir el video
          playsinline: 1, // Reproducir en línea en dispositivos iOS
        },
      });
    };

    // Limpieza al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className=" d-block d-sm-none no-clicker">
      <div className="video-container">
        <div className="video-foreground">
          <div className="">
            <div id="youtube-player">
              {/* El reproductor de YouTube se creará aquí */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YbPlayer;
