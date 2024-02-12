import { Image } from "react-bootstrap";
import NovedadesLista4EN from "./NovedadesLista4EN";

const noticia1 = {
  id: 1,
  seccion: "DKZ",
  titulo: "DKZ JOINED THE ARGENTINE ADVERTISING COUNCIL",
  subtitulo: "",
  descripcion:
    "In a world on the other hand, promoting positive behavior habits in society represents a great challenge. Therefore, DKZ decided to join the Argentine Advertising Council (CPA), becoming the first advertising and communication agency of NOA to integrate this non -profit organization.",
  descripcion1b: "",
  descripcion1c: " ",
  descripcion1d: "",
  tituloIntermedio:
    "“We are really very happy and excited to be part of the Argentine Advertising Council for the public good. We are the first regional agency that has the possibility of being part of this entity that is a non -profit organization, ”said Guillermo Sojo Bollini, @guillermodkz CEO of DKZ.",
  descripcion2:
    "CPA is a community of companies, agencies, media, organizations and institutions that come together to promote social value through communication. “DKZ decided to be part because we believe that, through continuous and effective management, we can transform the lives of some people,” he concluded.",
  descripcion2b: "",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia2_novkwh_wxeuqi.png",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia2_novkwh_wxeuqi.png",
};

export default function Novedades4DetallesEscEN() {
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
            <NovedadesLista4EN />
          </div>
        </div>
      </div>
    </div>
  );
}
