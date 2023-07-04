import React from "react";
import "../certificaciones/cpa.css";
import LineaNaranja from "../LineaNaranja";
import { Image } from "react-bootstrap";
import banner from "../../assets/img/certificaciones.png";
import bannerCelu from "../../assets/img/certificaciones-celu.png";
import consejo from "../../assets/img/consejologo.png";
import comunidad from "../../assets/img/comunidadCPA.png";
import { Link } from "react-router-dom";

export default function Certificaciones() {
  return (
    <div>
      <div className="container padding-titulo ">
        <div className="mx-3 mx-lg-0">
          <LineaNaranja />
        </div>
        <div className="py-4">
          <h2 className="peso-bold d-none d-lg-block">CERTIFICACIONES</h2>
          <h3 className="peso-bold d-lg-none d-block mx-3">CERTIFICACIONES</h3>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center d-none d-sm-block ">
        <Image className="w-100" src={banner} fluid alt="Certificaciones" />
      </div>
      <div className="d-sm-none d-block">
        <Image className="w-100" src={bannerCelu} fluid alt="Certificaciones" />
      </div>
      <div className="">
        <div className="pt-4 pb-0 pb-lg-4 d-flex justify-content-center">
          <div className="py-4 texto-alineado">
            <div className="d-none d-lg-block">
              <h2 className="peso-bold">FORMAMOS PARTE DEL</h2>
              <h3 className="peso-bold color-naranja">
                consejo publicitario Argentino
              </h3>
            </div>
            <div className="d-lg-none d-block ">
              <h5 className="peso-bold">FORMAMOS PARTE Del</h5>
              <h5 className="peso-bold color-naranja">
                consejo publicitario Argentino
              </h5>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center text-center pb-5">
          <div className="row">
            <div className="col-6 col-md-6">
              <a
                href="https://consejopublicitario.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={consejo}
                  className="logo-cpa"
                  fluid
                  alt="Consejo Publicitario Argentino"
                />
              </a>
            </div>
            <div className="col-6 col-md-6">
              <a
                href="https://consejopublicitario.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="logo-cpa"
                  src={comunidad}
                  fluid
                  alt="Comunidad del Consejo Publicitario Argentino"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
