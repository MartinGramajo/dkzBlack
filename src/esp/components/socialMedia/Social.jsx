import React, { useEffect, useState } from "react";
import LineaNaranja from "../LineaNaranja";
import "../socialMedia/social.css";
import BotonContactanos from "../BotonContactanos";
import { Image, Spinner } from "react-bootstrap";
import socialMedia from "../../assets/img/social-media.png";
import socialMediaCelu from "../../assets/img/redes-sociales-mobile.png";
import axios from "axios";
import Papa from "papaparse";

import OtrosCasos from "../OtrosCasos";
import { Link } from "react-router-dom";

export default function Social() {
  const [trabajos, setTrabajos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getTrabajos = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=857708681&single=true&output=csv"
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
          <h1 className="peso-bold">SOCIAL MEDIA</h1>
          <h4 className="py-4 peso-regular">
            En nuestra agencia, desarrollamos estrategias personalizadas para tu
            empresa con creatividad y compromiso a la hora de ejecutar proyectos
            digitales. Basándonos en una marcada trayectoria a la hora de
            generar contenidos, trabajamos para crear campañas y acciones
            específicas a través de las plataformas y canales de redes sociales,
            de acuerdo con la estrategia global de la empresa.
          </h4>
          <h4 className="py-4 peso-regular">
            Crear una estrategia de social media eficaz puede ayudar a hacer
            crecer tu negocio y crear un compromiso con el público.
          </h4>
        </div>
        <div className="mx-3 d-md-none d-block">
          <LineaNaranja />
          <h3 className="peso-bold py-3">SOCIAL MEDIA</h3>
          <h6 className="py-3 peso-regular">
            En nuestra agencia, desarrollamos estrategias personalizadas para tu
            empresa con creatividad y compromiso a la hora de ejecutar proyectos
            digitales. Basándonos en una marcada trayectoria a la hora de
            generar contenidos, trabajamos para crear campañas y acciones
            específicas a través de las plataformas y canales de redes sociales,
            de acuerdo con la estrategia global de la empresa.
          </h6>
          <h6 className="py-3 peso-regular">
            Crear una estrategia de social media eficaz puede ayudar a hacer
            crecer tu negocio y crear un compromiso con el público.
          </h6>
        </div>
        <div className="texto-estrategia-creatividad py-5 d-none d-md-block">
          <div className="d-flex justify-content-around">
            <h2 className="peso-bold color-naranja py-4">ESTRATEGIA</h2>
            <h2 className="peso-bold color-naranja py-4">CREATIVIDAD</h2>
            <h2 className="peso-bold color-naranja py-4">COMPROMISO</h2>
          </div>
        </div>
        <div className="d-md-none d-block">
          <div className="d-flex justify-content-evenly">
            <h5 className="peso-bold color-naranja py-3">ESTRATEGIA</h5>
            <h5 className="peso-bold color-naranja py-3">CREATIVIDAD</h5>
          </div>
          <div className="d-flex justify-content-center">
            <h5 className="peso-bold color-naranja py-3">COMPROMISO</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="d-none d-md-block">
              {" "}
              <Image
                className="py-1"
                src={socialMedia}
                fluid
                alt="iconos social Media"
              />
            </div>
            <div className="d-md-none d-block">
              <div className="text-center">
                <Image
                  className="py-1"
                  src={socialMediaCelu}
                  fluid
                  alt="iconos social Media"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 contenido-centrado py-1">
            <h4 className="peso-regular d-none d-md-block">
              En DKZ creemos en la importancia de crear estrategias de marketing
              digital personalizadas que cuenten historias únicas que conecten
              con tu audiencia y generen el impacto que buscas.
            </h4>
            <h6 className="peso-regular d-md-none d-block mx-3">
              En DKZ creemos en la importancia de crear estrategias de marketing
              digital personalizadas que cuenten historias únicas que conecten
              con tu audiencia y generen el impacto que buscas.
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
        <>
          <OtrosCasos trabajos={trabajos} tipo="socialmedia" />
        </>
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
