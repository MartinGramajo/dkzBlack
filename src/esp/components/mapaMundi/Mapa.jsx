import React from "react";
import LineaNaranja from "../LineaNaranja";
import { Image } from "react-bootstrap";
import mapa from "../../assets/img/mapa.png";
import mapaCelu from "../../assets/img/mapa-celu.png";

export default function Mapa() {
  return (
    <div className=" padding-titulo">
      <div className="d-none d-sm-block container">
        <div>
          <LineaNaranja />
        </div>
        <div className="pt-4 pb-2">
          <h2 className="peso-bold">POR EL MUNDO</h2>
          <h3 className="peso-bold color-naranja">transformando empresas</h3>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <Image src={mapa} fluid alt="Mapamundi" />
        </div>
      </div>
      <div className="d-sm-none d-block">
        <div className="container">
          <div className="mx-3">
            <LineaNaranja />
          </div>
          <div className="pt-4 pb-2 mx-3">
            <h3 className="peso-bold">POR EL MUNDO</h3>
            <h5 className="peso-bold color-naranja pt-1">
              Transformando empresas
            </h5>
          </div>
        </div>
        <Image className="w-100" src={mapaCelu} fluid alt="Mapamundi" />
      </div>
    </div>
  );
}
