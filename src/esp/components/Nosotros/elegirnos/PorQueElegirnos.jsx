import React from "react";
import "../elegirnos/elegirnos.css";
import LineaNaranja from "../../LineaNaranja";
import { BeneficiosCel } from "./BeneficiosCel";
import { Beneficios } from "./Beneficios";

export default function PorQueElegirnos() {
  return (
    <div className="color-negroclaro-fondo ">
      <div className=" d-lg-block d-none container ">
        <LineaNaranja />
        <div>
          <h2 className="peso-bold">¿POR QUÉ ELEGIRNOS?</h2>
          <h4 className="peso-regular py-2">
            Conoce todos los beneficios que DKZ puede ofrecerte
          </h4>
        </div>
        <div>
          <Beneficios />
        </div>
      </div>
      <div className="container d-block d-lg-none ">
        <div className="px-2 mx-3">
          <LineaNaranja />
          <div className="py-4">
            <h3 className="peso-bold fs-32">
              ¿POR QUE <br /> ELEGIRNOS?
            </h3>
            <h6 className="peso-regular fs-16  py-2">
              Conoce todos los beneficios que DKZ puede ofrecerte
            </h6>
          </div>
        </div>
        <BeneficiosCel />
      </div>
    </div>
  );
}
