import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Button, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const noticia1 = {
  id: 1,
  seccion: "Actualidad",
  titulo: "DKZ CONCLUDES 2023 WITH GREAT SUCCESS",
  subtitulo:
    "The advertising and production agency DKZ studio wrapped up 2024 with significant projects and a notable move towards digital expansion, establishing operational offices in Spain. ",
  descripcion:
    "In a year marked by achievements and growth, DKZ celebrates the closure of an exceptional 2024, solidifying its position as a benchmark in the world of advertising and creativity. Under the motto DKZ Home, they inaugurated their own workspace – a creative hub where magic unfolds through collaboration with talented mentors.",
  descripcion1b:
    "The pinnacle of the year was the organization of the first Regional Advertising Forum in collaboration with the Advertising Council and Tucumán MKT. This event was declared of tourist interest and honored with the prestigious Tucuman Brand.",
  descripcion1c:
    "  The outstanding internal campaign -Speak to your friend- earned them a nomination for the Obrar Federal Awards by the Argentine Advertising Council. This initiative was conceived during an internal creativity competition held for Friendship Day.",
  descripcion1d:
    " The activations and events area was boosted with the inclusion of major brands such as Speed, Beldent, Dilema, and Vino Toro.",
  descripcion2:
    "An unprecedented achievement was the materialization of the first advertising cooperative in northern Argentina, established by and for the DKZ community.The production department participated in over 50 events of various scales and formats, from the Moto Gp to the Seven de Tafi del Valle, showcasing the versatility and reach of DKZ in the national and international scene.",
  descripcion2b:
    " In summary, DKZ celebrates a year full of successes, growth, and significant contributions to the advertising and creative industry, solidifying its position as a leader in the market.",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  tituloIntermedio:
    "Managing over 250 comprehensive projects, DKZ covered a broad spectrum, from traditional advertising to systemic developments, websites, design, consulting, brand activations, events, photography, and videos. Expanding their horizons, DKZ opened operational offices in Spain, marking a significant milestone by making a landing in the old continent. Committed to social responsibility, they collaborated with the Food Bank, producing a poignant public service audiovisual spot titled Playing with food is not a game.",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png",
};

export const Novedades1DetallesCelEN = () => {
  const params = useParams();
  const [trabajos, setTrabajos] = useState({});
  const [loading, setLoading] = useState(true);
  const getTrabajos = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=574932737&single=true&output=csv"
    );

    const trabajos = Papa.parse(response.data, { header: true });
    const trabajo1 = trabajos.data;

    const trabajoFiltrado = trabajo1.filter(
      (trabajo) => trabajo.id === params.id
    );
    setTrabajos(trabajoFiltrado[0]);
    setLoading(false);
  };
  useEffect(() => {
    getTrabajos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
};
