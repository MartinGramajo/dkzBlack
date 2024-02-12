import { Image } from "react-bootstrap";
import NovedadesLista2EN from "./NovedadesLista2EN";

const noticia1 = {
  id: 1,
  seccion: "",
  titulo: "DKZ CELEBRATES ITS FOURTH ANNIVERSARY AND DISEMBARKS IN SPAIN",
  subtitulo: "",
  descripcion:
    "DKZ studio, celebrates its fourth anniversary and commemorates this milestone with its successful landing in the city of Murcia, Spain. During these four years, DKZ has experienced impressive growth, becoming a benchmark in the world of marketing and technology, and now seeks to extend its expertise to the Murcia region.",
  descripcion1b:
    " With four years of success and sustained growth, DKZ is projecting itself towards a promising future. -It is a huge challenge for all the members of the agency, but we are undoubtedly grateful and excited about the opportunity-, says Guillermo Sojo Bollini, CEO and founding partner of DKZ. ",
  descripcion1c: " ",
  descripcion1d: "",
  tituloIntermedio: "",
  descripcion2:
    "The agency expects to continue to evolve and offer creative and effective solutions that drive its clients' success in the competitive digital world, making its focus as always on excellence, innovation and the constant search for client satisfaction.",
  descripcion2b: "",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg",
};

export default function Novedades2DetallesEscEN() {
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
            <NovedadesLista2EN />
          </div>
        </div>
      </div>
    </div>
  );
}
