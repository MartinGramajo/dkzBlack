import React from "react";

import PorQueElegirnos from "../components/Nosotros/elegirnos/PorQueElegirnos";
import Cabezas from "../components/Nosotros/cabezaTeam/Cabezas";
import NuestroProceso from "../components/Nosotros/nuestroProceso/NuestroProceso";
import Clientes from "../components/Nosotros/clientes/Clientes";
import BotonContactanos from "../components/BotonContactanos";
import { CabezasSlider } from "../components/Nosotros/cabezaTeam/CabezasSlider";
import { NuestroProcesoCel } from "../components/Nosotros/nuestroProceso/NuestroProcesoCel";
import { ClientesCelu } from "../components/Nosotros/clientes/ClientesCelu";

export default function Conocenos() {
  return (
    <div>
      <div className=" color-negro-fondo">
        <div className=" d-lg-block d-none">
          <Cabezas />
        </div>
        <div className="d-block d-lg-none">
          <CabezasSlider />
        </div>
      </div>
      <div>
        <PorQueElegirnos />
      </div>
      <div className=" color-negro-fondo">
        <div className=" d-lg-block d-none">
          {" "}
          <NuestroProceso />
        </div>
        <div className="d-block d-lg-none">
          {" "}
          <NuestroProcesoCel />{" "}
        </div>

        <div className="py-5 d-flex justify-content-center">
          <BotonContactanos />
        </div>
        <div className=" d-lg-block d-none">
          {" "}
          <Clientes />
        </div>
        <div className="d-block d-lg-none">
          {" "}
          <ClientesCelu />
        </div>
      </div>
    </div>
  );
}
