import React from "react";
import "../procesoEN/procesoEN.css";
import LineaNaranja from "../../../../esp/components/LineaNaranja";
import { Button, Image } from "react-bootstrap";

import femenino from "../../../../esp/assets/img/equipofemenino.jpg";
import masculino from "../../../../esp/assets/img/equipomasculino.jpg";

const NuestroProcesoEN = () => {
  return (
    <div className="container padding-titulo padding-abajo">
      <div>
        <LineaNaranja />
      </div>
      <div>
        <h2 className="peso-bold"> OUR PROCESS</h2>
      </div>
      <div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 col-xl-8">
            <div className="py-2">
              <Image
                className="foto-equipo"
                src={masculino}
                alt="Nuestro Proceso"
                fluid
              />
            </div>
            <div className="py-2 ">
              <Image
                className="foto-equipo"
                src={femenino}
                alt="Nuestro Proceso"
                fluid
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6  col-xl-4  pt-5">
            <div className="">
              <Button className="boton-proceso-a me-5 cursor">
                <h4 className="ms-3">Market analysis</h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-b me-5 cursor">
                <h4 className="ms-3">Determining objectives</h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-a me-5 cursor">
                <h4 className="ms-3">Strategy development</h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-b me-5 cursor">
                <h4 className="ms-3">Action plan</h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-a me-5 cursor">
                <h4 className="ms-3">Establishment of budget </h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-b me-5 cursor">
                <h4 className="ms-3">Control methods</h4>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestroProcesoEN;
