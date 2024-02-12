import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Button, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const noticia1 = {
  id: 1,
  seccion: "Actualidad",
  titulo: "DKZ CELEBRA SU CUARTO ANIVERSARIO Y DESEMBARCA EN ESPAÑA",
  subtitulo: "",
  descripcion:
    "DKZ studio, celebra su cuarto aniversario y conmemora este hito con su exitoso desembarco en la ciudad de Murcia, España. Durante estos cuatro años, DKZ ha experimentado un crecimiento impresionante, convirtiéndose en un referente en el mundo del marketing y la tecnología, y ahora busca extender su experiencia a la región murciana.",
  descripcion1b:
    " Con cuatro años de éxito y crecimiento sostenido, DKZ se proyecta hacia un futuro prometedor. “Es un desafío enorme para todos los miembros de la agencia, pero sin dudas nos encontramos agradecidos y entusiasmados por la oportunidad”, sostiene Guillermo Sojo Bollini, Director General y socio fundador de DKZ.",
  descripcion1c: " ",
  descripcion1d: "",
  descripcion2:
    "La agencia espera seguir evolucionando y ofreciendo soluciones creativas y efectivas que impulsen el éxito de sus clientes en el competitivo mundo digital, haciendo su enfoque como siempre hacia la excelencia, la innovación y la búsqueda constante de la satisfacción de sus clientes.",
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

export default function Novedades2DetCel() {
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
