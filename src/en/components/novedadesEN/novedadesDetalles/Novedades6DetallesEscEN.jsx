import { Image } from "react-bootstrap";
import NovedadesLista5EN from "./NovedadesLista5EN";

const noticia1 = {
  id: 1,
  seccion: "DKZ",
  titulo: "A tucumano will be a jury of the Argentine Advertising Council",
  subtitulo:
    "Guillermo, @guillermodkz CEO of Dkz Studio was invited to participate as a jury of the CPA for the Federal 2022 Awards",
  descripcion:
    "Guillermo founded Dkz Studio in March 2019 with Ignacio Pintos @nacho_pintos10. The agency has worked in an integral and collaborative way in more than 10 provinces in Argentina and in different parts of the world.",
  descripcion1b:
    " A while ago DKZ began to be actively part of the Council in different areas and, just 6 months after this union, Guillermo was invited as a jury of the Federal Obarr Awards. The Federal Obrar Awards seek to recognize the best communication campaigns with positive impact, which address issues of regional, provincial or local interest, especially aimed at Argentine audiences outside the AMBA.",
  descripcion1c: "",
  descripcion1d: "",
  tituloIntermedio:
    "These awards that have been consolidating in a national way more than 13 years ago, seek to promote through the advertising council, that different companies, institutions, organizations or agencies work on public good messages.",
  descripcion2:
    "This September 16 at the facilities of the Pullman City Center hotel in Rosario will live this great day of the Argentine Advertising Council, “we invite all colleagues and collaborators at the regional level to join the Council, in addition it seems of the utmost importance that they establish campaigns for communication with positive impact,” said Guillermo Sojo Bollini.",
  descripcion2b: "",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663184171/306549749_857291485261505_7534753838600488974_n_-_copia_vbrp7n.jpg",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663185587/306549749_857291485261505_7534753838600488974_n_-_copia_q6sgx5.jpg",
};

export default function Novedades6DetallesEscEN() {
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
            <NovedadesLista5EN />
          </div>
        </div>
      </div>
    </div>
  );
}
