import React from "react";

import { Image } from "react-bootstrap";
import mapa from "../../../esp/assets/img/mapa.png";
import mapaCelu from "../../../esp/assets/img/mapa.png";
import LineaNaranja from "../../../esp/components/LineaNaranja";

export default function MapaMundiEN() {
  return (
    <div className=" padding-titulo">
      <div className="d-none d-sm-block container">
        <div>
          <LineaNaranja />
        </div>
        <div className="pt-4 pb-2">
          <h2 className="peso-bold">AROUND THE WORLD </h2>
          <h3 className="peso-bold color-naranja">transforming companies</h3>
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
            <h3 className="peso-bold">AROUND THE WORLD</h3>
            <h5 className="peso-bold color-naranja pt-1">
              transforming companies
            </h5>
          </div>
        </div>
        <Image className="w-100" src={mapaCelu} fluid alt="Mapamundi" />
      </div>
    </div>
  );
}
