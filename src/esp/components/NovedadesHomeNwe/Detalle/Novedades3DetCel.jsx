import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Button, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const noticia1 = {
  id: 1,
  seccion: "DKZ",
  titulo: "SE REALIZÓ LA PRIMERA EDICIÓN DEL FORO PUBLICITARIO EN TUCUMÁN",
  subtitulo: "",
  descripcion:
    "La primera edición del Foro Publicitario destinado a la comunicación de bien público, en colaboración con el Consejo Publicitario Argentino, ha reunido a destacados profesionales  para promover campañas de bien público. Este evento buscó impulsar mensajes que generen un impacto positivo en la sociedad y fomentar la responsabilidad social en el ámbito publicitario. ",
  descripcion1b:
    " El esperado evento inaugural del Foro Publicitario en asociación con el Consejo Publicitario Argentino reunió a líderes y expertos de la industria para debatir y promover la excelencia creativa, la innovación y la ética en el campo de la publicidad en Argentina.",
  descripcion1c: " ",
  descripcion1d: "",
  tituloIntermedio: "",
  descripcion2:
    "Este encuentro buscó impulsar el intercambio de ideas y conocimientos, así como fomentar el desarrollo de campañas publicitarias impactantes y socialmente responsables. Durante el evento, se destacaron los esfuerzos por elevar los estándares éticos en la publicidad y se compartieron estrategias innovadoras para crear mensajes que conecten de manera más efectiva con la audiencia y generen un cambio positivo en la sociedad argentina.",
  descripcion2b:
    "Además, se exploraron nuevos enfoques para abordar los desafíos actuales del mercado publicitario destinado al bien público y se presentaron casos de éxito que sirvieron de inspiración para los profesionales presentes. El evento también ofreció oportunidades de networking para que los participantes pudieran establecer conexiones valiosas en la industria y colaborar en futuros proyectos que promuevan el bienestar de la sociedad.",
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

export default function Novedades3DetCel() {
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
        <Link className="text-decoration-none text-white" to="/novedades/todas">
          <Button
            as={Link}
            to="/novedades/todas"
            className="boton-naranja-grande"
          >
            <h5 className="peso-bold ps-4 d-lg-none d-block">MÁS NOVEDADES</h5>
            <h3 className="peso-bold pe-3 d-lg-none d-block">➝</h3>
          </Button>
        </Link>
      </div>
    </div>
  );
}
