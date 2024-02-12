import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const noticia1 = {
  id: 1,
  seccion: "",
  titulo: "THE FIRST EDITION OF THE ADVERTISING FORUM WAS HELD IN TUCUMAN",
  subtitulo: "",
  descripcion:
    "The first edition of the Advertising Forum aimed at public good communication, in collaboration with the Argentine Advertising Council, brought together leading professionals to promote public good campaigns. This event sought to promote messages that generate a positive impact on society and encourage social responsibility in the advertising field.",
  descripcion1b:
    " The highly anticipated inaugural event of the Foro Publicitario in association with the Consejo Publicitario Argentino brought together industry leaders and experts to discuss and promote creative excellence, innovation and ethics in the field of advertising in Argentina. ",
  descripcion1c: " ",
  descripcion1d: "",
  tituloIntermedio: "",
  descripcion2:
    "This meeting sought to promote the exchange of ideas and knowledge, as well as to encourage the development of impactful and socially responsible advertising campaigns. During the event, efforts to raise ethical standards in advertising were highlighted and innovative strategies were shared to create messages that connect more effectively with the audience and generate a positive change in Argentine society.",
  descripcion2b:
    "In addition, new approaches to address current challenges in the public good advertising market were explored and success stories were presented to inspire the professionals in attendance. The event also provided networking opportunities for participants to establish valuable industry connections and collaborate on future projects that promote the welfare of society.",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1686880194/Prensa/guille_y_fabri_mtrdip.jpg",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1686880310/Prensa/guille_y_fabri_MINI_gckvdn.jpg",
};

export default function Novedades3DetallesCelEN() {
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
