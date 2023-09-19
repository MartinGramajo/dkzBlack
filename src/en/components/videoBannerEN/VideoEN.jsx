import React from "react";
import YouTube from "react-youtube";

const VideoEN = () => {
  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playsinline: 1,
    },
  };

  const videoId = "XXX1bgaZJeg"; // Reemplaza con el ID de tu video de YouTube

  return <YouTube className="" videoId={videoId} opts={opts} />;
};

export default VideoEN;

// import React, { useEffect, useRef } from "react";

// const VideoEN = () => {
//   const playerRef = useRef(null);
//   const videoId = "XXX1bgaZJeg"; // Reemplaza con el ID de tu video de YouTube

//   useEffect(() => {
//     // Configurar el reproductor de YouTube cuando el componente se monta
//     const player = new window.YT.Player(playerRef.current, {
//       videoId: videoId,
//       playerVars: {
//         autoplay: 1,
//         controls: 0,
//         playsinline: 1,
//       },
//     });

//     // Agregar un evento para reiniciar el video cuando termine
//     player.addEventListener("onStateChange", (event) => {
//       if (event.data === window.YT.PlayerState.ENDED) {
//         player.seekTo(0); // Reinicia el video al finalizar
//       }
//     });

//     // Limpieza al desmontar el componente
//     return () => {
//       player.destroy(); // Detiene y destruye el reproductor al desmontar el componente
//     };
//   }, []);

//   return <div ref={playerRef}></div>;
// };

// export default VideoEN;
