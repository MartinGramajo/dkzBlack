import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Button, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

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
export default function Novedades4DetallesCelEN() {
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
