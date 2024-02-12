import { Image } from "react-bootstrap";
import NovedadesLista1EN from "./NovedadesLista1EN";

const noticia1 = {
  id: 1,
  seccion: "Actualidad",
  titulo: "DKZ CONCLUDES 2023 WITH GREAT SUCCESS",
  subtitulo:
    "The advertising and production agency DKZ studio wrapped up 2024 with significant projects and a notable move towards digital expansion, establishing operational offices in Spain. ",
  descripcion:
    "In a year marked by achievements and growth, DKZ celebrates the closure of an exceptional 2024, solidifying its position as a benchmark in the world of advertising and creativity. Under the motto DKZ Home, they inaugurated their own workspace – a creative hub where magic unfolds through collaboration with talented mentors.",
  descripcion1b:
    "The pinnacle of the year was the organization of the first Regional Advertising Forum in collaboration with the Advertising Council and Tucumán MKT. This event was declared of tourist interest and honored with the prestigious Tucuman Brand.",
  descripcion1c:
    "  The outstanding internal campaign -Speak to your friend- earned them a nomination for the Obrar Federal Awards by the Argentine Advertising Council. This initiative was conceived during an internal creativity competition held for Friendship Day.",
  descripcion1d:
    " The activations and events area was boosted with the inclusion of major brands such as Speed, Beldent, Dilema, and Vino Toro.",
  descripcion2:
    "An unprecedented achievement was the materialization of the first advertising cooperative in northern Argentina, established by and for the DKZ community.The production department participated in over 50 events of various scales and formats, from the Moto Gp to the Seven de Tafi del Valle, showcasing the versatility and reach of DKZ in the national and international scene.",
  descripcion2b:
    " In summary, DKZ celebrates a year full of successes, growth, and significant contributions to the advertising and creative industry, solidifying its position as a leader in the market.",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  tituloIntermedio:
    "Managing over 250 comprehensive projects, DKZ covered a broad spectrum, from traditional advertising to systemic developments, websites, design, consulting, brand activations, events, photography, and videos. Expanding their horizons, DKZ opened operational offices in Spain, marking a significant milestone by making a landing in the old continent. Committed to social responsibility, they collaborated with the Food Bank, producing a poignant public service audiovisual spot titled Playing with food is not a game.",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png",
};

const Novedades1DetallesEscEN = () => {
  const {
    id,
    titulo,
    subtitulo,
    descripcion,
    descripcion1b,
    descripcion1c,
    descripcion1d,
    tituloIntermedio,
    descripcion2,
    descripcion2b,
    imagen1,
    imagen2,
    imagen3,
    fecha,
    textoImagen1,
    textoImagen2,
    textoImagen3,
    imagenMini,
  } = noticia1;

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="color-negro-fondo">
      <div className="mt-5 container d-flex ">
        <div className="col-8">
          <h2 className="text-white peso-bold mx-5 px-5 py-2">{titulo}</h2>
          <h5 className="text-white mx-5 px-5">{subtitulo}</h5>
          <br />
          <Image
            className="w-100"
            src={imagen1}
            alt="imagen de la noticia"
            fluid
          />
          <br />
          <div className="d-flex">
            <h4 className="text-white mt-3 mb-0">
              {textoImagen1}
              <hr className="text-white px-5" />
            </h4>
          </div>
          {/* <h6 className="text-white my-4 py-2 mx-5 px-5">{fecha}</h6> */}
          <h5 className="text-white mt-4 wrap-pre mx-5 px-5">
            {descripcion} <br />
            {descripcion1b} <br />
            {descripcion1c} <br />
            {descripcion1d}
          </h5>
          {imagen2 === "" ? (
            ""
          ) : (
            <div>
              <Image
                className="w-100 mt-5 mb-4"
                src={imagen2}
                alt="imagen de la noticia"
                fluid
              />
            </div>
          )}
          {tituloIntermedio === "" ? (
            ""
          ) : (
            <div>
              <h4 className="text-white text-center mx-4 my-5 peso-bold">
                {tituloIntermedio}
              </h4>
            </div>
          )}
          <div className="pb-5">
            <h5 className="text-white mt-4 wrap-pre mx-5 px-5 mb-5">
              {descripcion2} <br />
              {descripcion2b}
            </h5>
          </div>
        </div>
        <div className="col-4 ms-4">
          <hr className="text-white" />
          <h4 className="text-white tamaño-mas-grande peso-bold">
            All Articles:
          </h4>
          <div>
            <NovedadesLista1EN />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novedades1DetallesEscEN;
