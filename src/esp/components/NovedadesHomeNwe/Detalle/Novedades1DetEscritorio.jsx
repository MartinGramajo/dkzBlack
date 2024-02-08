import axios from "axios";
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";
import { Image, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NovedadesLista1 from "./NovedadesLista1";

const noticia1 = {
  id: 1,
  seccion: "Actualidad",
  titulo: "DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS",
  subtitulo:
    "La agencia y productora publicitaria DKZ studio, concluyó un 2024 con grandes proyectos y una marcada trascendencia hacia la expansión digital, abriendo oficinas operativas en España. ",
  descripcion:
    "En un año lleno de logros y crecimiento, DKZ celebra el cierre de un 2024 excepcional, consolidándose como referente en el mundo de la publicidad y la creatividad. Bajo el lema DKZ Home, inauguraron sus propias oficinas de trabajo, un espacio creativo donde la magia sucede gracias a la colaboración de talentosos mentores.",
  descripcion1b:
    "El punto álgido del año fue la organización del primer Foro Publicitario regional en colaboración con el Consejo Publicitario y Tucumán MKT. Este evento fue declarado de interés turístico y honrado con la prestigiosa Marca Tucuman 🇦🇷.",
  descripcion1c:
    "  La destacada campaña interna -Habla con tu amigo- les valió una nominación a los premios Obrar Federal por el Consejo Publicitario Argentino. Esta iniciativa fue concebida durante un concurso de creatividad interna celebrado para el Día del Amigo.",
  descripcion1d:
    " El área de activaciones y eventos fue potenciada con la incorporación de grandes marcas como Speed, Beldent, Dilema y Vino Toro.",
  descripcion2:
    "Un logro sin precedentes fue la materialización de la primera cooperativa publicitaria del norte argentino, establecida por y para la comunidad de DKZ. El departamento de producción participó en más de 50 eventos de diversas envergaduras y formatos, desde el Moto Gp hasta el Seven de Tafi del Valle, demostrando la versatilidad y alcance de DKZ en la escena nacional e internacional.",
  descripcion2b:
    " En resumen, DKZ celebra un año lleno de éxitos, crecimiento y contribuciones significativas a la industria publicitaria y creativa, consolidando su posición como líder en el mercado.",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  tituloIntermedio:
    "Con más de 250 proyectos integrales gestionados, DKZ abarcó un espectro amplio, desde publicidad tradicional hasta desarrollos sistémicos, sitios web, diseño, consultoría, activaciones de marcas, eventos, fotografía y videos Expandiendo sus fronteras, DKZ abrió oficinas operativas en España, marcando un hito significativo al desembarcar en el viejo continente. Comprometidos con la responsabilidad social, colaboraron con el Banco de Alimentos, produciendo un emotivo spot audiovisual de bien público titulado `Con la comida no se juega`.",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png",
};

const Novedades1DetEscritorio = () => {
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
            Todos los Artículos:
          </h4>
          <div>
            <NovedadesLista1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novedades1DetEscritorio;
