import React from "react";
import "../Contactanos/formcontacto.css";
import LineaNaranja from "../LineaNaranja";
import equipo from "../../assets/img/equipo.png";
import { Image } from "react-bootstrap";
import FormEmail from "./FormEmail";

export default function FormContacto() {
  return (
    <div className="container fondo-contacto ">
      <div className="row">
        <div className="col-12 col-md-6 mx-3">
          <LineaNaranja />
          <div className="d-none d-md-block ">
            <h2 className="peso-bold pt-4">
              ESTAS A UN FORM <br /> DE CONCRETAR TUS IDEAS
            </h2>
            <h3 className="color-naranja peso-bold   mt-0">
              Y comenzar a crecer
            </h3>
          </div>
          <div className="d-block d-md-none ">
            <h3 className="peso-bold pt-4">
              ESTAS A UN FORM <br /> DE CONCRETAR TUS IDEAS
            </h3>
            <h5 className="color-naranja peso-bold mt-4">
              Y comenzar a crecer
            </h5>
          </div>
        </div>
        <div className="pt-3 pb-1 d-none d-md-block ">
          <h4 className="ms-4 mt-4 peso-bold">Tu proyecto</h4>
        </div>
        <div className="d-md-block d-none">
          <FormEmail />
        </div>

        <div className="col-12 col-md-6  d-md-none d-block">
          <Image className="equipo" src={equipo} fluid alt="Equipo" />
        </div>

        <div className="d-block d-md-none">
          <h5 className="py-4 ms-4 peso-bold">Tu proyecto</h5>
          <FormEmail />
        </div>
      </div>
    </div>
  );
}
