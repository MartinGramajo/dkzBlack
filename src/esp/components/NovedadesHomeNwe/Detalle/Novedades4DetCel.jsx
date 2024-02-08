import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Button, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const noticia1 = {
  id: 1,
  seccion: "DKZ",
  titulo: "DKZ SE SUMÓ AL CONSEJO PUBLICITARIO ARGENTINO",
  subtitulo: "",
  descripcion:
    "En un mundo en cambio permanente, promover hábitos de conducta positivos en la sociedad representa un gran desafío. Por eso, DKZ decidió sumarse al Consejo Publicitario Argentino (CPA), convirtiéndose en la primera agencia de publicidad y comunicación del NOA en integrar esta organización sin fines de lucro.",
  descripcion1b:
    " El esperado evento inaugural del Foro Publicitario en asociación con el Consejo Publicitario Argentino reunió a líderes y expertos de la industria para debatir y promover la excelencia creativa, la innovación y la ética en el campo de la publicidad en Argentina.",
  descripcion1c: " ",
  descripcion1d: "",
  tituloIntermedio:
    "“Realmente estamos muy contentos y entusiasmados de formar parte del Consejo Publicitario Argentino para el bien público. Somos la primera agencia regional que tiene la posibilidad de formar parte de esta entidad que es una organización sin fines de lucro”, sostuvo Guillermo Sojo Bollini, @guillermodkz CEO de DKZ.",
  descripcion2:
    "El CPA es una comunidad de empresas, agencias, medios, organizaciones e instituciones que se unen para promover valor social a través de la comunicación. “DKZ decidió formar parte porque creemos que, por medio de una gestión continua y efectiva, podemos transformar la vida de algunas personas”, concluyó.",
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

export default function Novedades4DetCel() {
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
        <Link className="text-decoration-none text-white" to="/novedades">
          <Button as={Link} to="/novedades" className="boton-naranja-grande">
            <h5 className="peso-bold ps-4 d-lg-none d-block">MÁS NOVEDADES</h5>
            <h3 className="peso-bold pe-3 d-lg-none d-block">➝</h3>
          </Button>
        </Link>
      </div>
    </div>
  );
}
