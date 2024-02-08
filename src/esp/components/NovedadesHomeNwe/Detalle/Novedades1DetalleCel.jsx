import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Button, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

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
  tituloIntermedio: "",
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

export const Novedades1DetalleCel = () => {
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
        <Link className="text-decoration-none text-white" to="/novedades">
          <Button as={Link} to="/novedades" className="boton-naranja-grande">
            <h5 className="peso-bold ps-4 d-lg-none d-block">MÁS NOVEDADES</h5>
            <h3 className="peso-bold pe-3 d-lg-none d-block">➝</h3>
          </Button>
        </Link>
      </div>
    </div>
  );
};
