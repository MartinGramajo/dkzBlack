import React, { useEffect, useState } from "react";
import LineaNaranja from "../LineaNaranja";
import "../audioVisuales/audiovisual.css";
import BotonContactanos from "../BotonContactanos";
import axios from "axios";
import Papa from "papaparse";

import OtrosCasos from "../OtrosCasos";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Eventos() {
  const [trabajos, setTrabajos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrabajos = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=1632136573&single=true&output=csv"
      );
      const imagenes = Papa.parse(response.data, { header: true });
      setTrabajos(imagenes.data);
    };
    getTrabajos();
    setLoading(false);
  }, []);

  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo">
        <div className="d-none d-md-block">
          <LineaNaranja />
          <h1 className="peso-bold">EVENTOS</h1>
          <h4 className="py-4 peso-regular">
            En nuestra agencia, ponemos a tu disposición un equipo de
            profesionales altamente capacitados que son capaces de ejecutar y
            accionar eventos de gran envergadura de acuerdo a los más altos
            estándares de calidad organizativa y estilo.
          </h4>
          <h4 className="py-4 peso-regular">
            Nos aseguramos de que cada evento que organizamos sea una
            experiencia única e inolvidable, con un enfoque especial en la
            atención al detalle y la satisfacción del cliente. Además, ofrecemos
            servicios de cobertura audiovisual para que puedas recordar y
            compartir los momentos más destacados de tu evento. ¡Confía en
            nosotros para llevar tu evento al siguiente nivel!
          </h4>
          <h2 className="peso-bold color-naranja py-4">
            Organización, profesionalismo, calidad y atención al detalle
          </h2>
          <div>
            <h2 className="peso-bold py-4"> Servicio llave en mano:</h2>
            <h4 className="peso-regular">
              Un evento llave en mano es un servicio integral en el que nos
              encargamos de todo el proceso, desde la planificación y diseño
              hasta la ejecución y coordinación del evento en sí mismo. Esto
              significa que DKZ se hace cargo de todos los aspectos, incluyendo
              la selección del lugar, el diseño del escenario, la contratación
              de proveedores, el catering, la logística, la decoración, la
              iluminación, el sonido, la seguridad, entre otros aspectos,
              dejandote libre de preocupaciones.{" "}
            </h4>
          </div>
        </div>
        <div className="d-md-none d-block mx-3">
          <LineaNaranja />
          <h3 className="peso-bold py-4">EVENTOS</h3>
          <h6 className="py-3 peso-regular">
            En nuestra agencia, ponemos a tu disposición un equipo de
            profesionales altamente capacitados que son capaces de ejecutar y
            accionar eventos de gran envergadura de acuerdo a los más altos
            estándares de calidad organizativa y estilo.
          </h6>
          <h6 className="py-3 peso-regular">
            Nos aseguramos de que cada evento que organizamos sea una
            experiencia única e inolvidable, con un enfoque especial en la
            atención al detalle y la satisfacción del cliente. Además, ofrecemos
            servicios de cobertura audiovisual para que puedas recordar y
            compartir los momentos más destacados de tu evento. ¡Confía en
            nosotros para llevar tu evento al siguiente nivel!
          </h6>
          <h5 className="peso-bold color-naranja pt-3">
            Organización, profesionalismo, calidad y atención al detalle
          </h5>
          <div>
            <h5 className="peso-bold py-3"> Servicio llave en mano:</h5>
            <h6 className="peso-regular">
              Un evento llave en mano es un servicio integral en el que nos
              encargamos de todo el proceso, desde la planificación y diseño
              hasta la ejecución y coordinación del evento en sí mismo. Esto
              significa que DKZ se hace cargo de todos los aspectos, incluyendo
              la selección del lugar, el diseño del escenario, la contratación
              de proveedores, el catering, la logística, la decoración, la
              iluminación, el sonido, la seguridad, entre otros aspectos,
              dejandote libre de preocupaciones.{" "}
            </h6>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-white spinner py-5">
          <Spinner
            className="fs-1"
            animation="border"
            role="status"
            variant="light"
          ></Spinner>
        </div>
      ) : (
        <OtrosCasos trabajos={trabajos} tipo="eventos" />
      )}
      <div className="d-flex justify-content-center ">
        <Link
          className="text-decoration-none text-white d-none d-lg-block pb-5"
          to="/servicios"
        >
          <h3 className="peso-bold">{"< < Volver"}</h3>
        </Link>
        <Link
          className="text-decoration-none text-white d-lg-none d-block pt-5 pb-4"
          to="/servicios"
        >
          <h4 className="peso-bold">{"< < Volver"}</h4>
        </Link>
      </div>
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanos />
      </div>
    </div>
  );
}
