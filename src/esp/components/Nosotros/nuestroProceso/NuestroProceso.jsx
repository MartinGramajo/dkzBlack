import React from "react";
import "../nuestroProceso/proceso.css";
import LineaNaranja from "../../LineaNaranja";
import { Button, Image } from "react-bootstrap";
import proceso from "../../../assets/img/proceso.png";
import femenino from "../../../assets/img/equipofemenino.jpg";
import masculino from "../../../assets/img/equipomasculino.jpg";

export default function NuestroProceso() {
  return (
    <div className="container padding-titulo padding-abajo">
      <div>
        <LineaNaranja />
      </div>
      <div>
        <h2 className="peso-bold"> NUESTRO PROCESO</h2>
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
                <h4 className="ms-3">Análisis del mercado</h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-b me-5 cursor">
                <h4 className="ms-3">Determinación de objetivos</h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-a me-5 cursor">
                <h4 className="ms-3">Elaboración de estrategias</h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-b me-5 cursor">
                <h4 className="ms-3">Plan de acción</h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-a me-5 cursor">
                <h4 className="ms-3">Establecimiento de presupuesto </h4>
                <h4 className="mx-2 text-white-50">↓</h4>
              </Button>
            </div>
            <div className="">
              <Button className="boton-proceso-b me-5 cursor">
                <h4 className="ms-3">Métodos de control</h4>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
