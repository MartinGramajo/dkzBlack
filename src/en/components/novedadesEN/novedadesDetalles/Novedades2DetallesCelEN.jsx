import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

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
export default function Novedades2DetallesCelEN() {
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

  return (
    <div className="mt-0 container">
      <div className="mx-3 pb-5">
        <h3 className="text-white peso-bold">{titulo}</h3>
        <h5 className="text-white mt-4 ">{subtitulo}</h5>

        <br />
        <Image className="w-100" src={imagen1} alt="" fluid />
        <br />
        <h5 className="text-white mt-1 ms-3">{textoImagen1}</h5>

        <h6 className="text-white my-4 py-2">{fecha} </h6>

        <h5 className="text-white  mt-4 wrap-pre">
          {" "}
          {descripcion} <br />
          {descripcion1b} <br />
          {descripcion1c} <br />
          {descripcion1d}
        </h5>
        {tituloIntermedio === "" ? (
          ""
        ) : (
          <h5 className="text-white  mx-4 my-5 peso-bold">
            {tituloIntermedio}
          </h5>
        )}

        <h5 className="text-white mt-4 wrap-pre">
          {descripcion2} <br />
          {descripcion2b}
        </h5>
      </div>

      <div className="d-flex justify-content-center pt-4">
        <Link className="text-decoration-none text-white" to="/news">
          <Button as={Link} to="/news" className="boton-naranja-grande">
            <h5 className="peso-bold ps-4 d-lg-none d-block">MORE NEWS</h5>
            <h3 className="peso-bold pe-3 d-lg-none d-block">➝</h3>
          </Button>
        </Link>
      </div>
    </div>
  );
}
