import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Button, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

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
export default function Novedades6DetallesCelEN() {
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
