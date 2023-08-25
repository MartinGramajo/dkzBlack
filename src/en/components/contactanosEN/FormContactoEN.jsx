import React from "react";
import "./formcontactoEN.css";
import LineaNaranja from "../../../esp/components/LineaNaranja";

import equipo from "../../../esp/assets/img/equipo.png";
import { Image } from "react-bootstrap";
import FormEmailEN from "./FormEmailEN";
// import FormEmail from "./FormEmail";

export default function FormContactoEN() {
  return (
    <div className="container fondo-contacto ">
      <div className="row">
        <div className="col-12 col-md-6 mx-3">
          <LineaNaranja />
          <div className="d-none d-md-block ">
            <h2 className="peso-bold pt-4">
              YOU ARE ONE FORM <br /> FROM REALIZING YOUR IDEAS
            </h2>
            <h3 className="color-naranja peso-bold   mt-0">
              And begin to grow
            </h3>
          </div>
          <div className="d-block d-md-none ">
            <h3 className="peso-bold pt-4">
              YOU ARE ONE FORM <br /> FROM REALIZING YOUR IDEAS
            </h3>
            <h5 className="color-naranja peso-bold mt-4">And begin to grow</h5>
          </div>
        </div>
        <div className="pt-3 pb-1 d-none d-md-block ">
          <h4 className="ms-4 mt-4 peso-bold">Your project</h4>
        </div>
        <div className="d-md-block d-none">
          <FormEmailEN />
        </div>

        <div className="col-12 col-md-6  d-md-none d-block">
          <Image className="equipo" src={equipo} fluid alt="Equipo" />
        </div>

        <div className="d-block d-md-none">
          <h5 className="py-4 ms-4 peso-bold">Your project</h5>
          <FormEmailEN />
        </div>
      </div>
    </div>
  );
}
