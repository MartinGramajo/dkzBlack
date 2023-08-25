import React from "react";
import "../elegirnos/elegirnosEN.css";
import LineaNaranja from "../../../../esp/components/LineaNaranja";

import BeneficiosEN from "./BeneficiosEN";
import BeneficiosCelEN from "./BeneficiosCelEN";

export default function PorQueElegirnosEN() {
  return (
    <div className="color-negroclaro-fondo ">
      <div className=" d-lg-block d-none container ">
        <LineaNaranja />
        <div>
          <h2 className="peso-bold">WHY CHOOSE US?</h2>
          <h4 className="peso-regular py-2">
            Get to know all the benefits DKZ can offer you
          </h4>
        </div>
        <div>
          <BeneficiosEN />
        </div>
      </div>
      <div className="container d-block d-lg-none ">
        <div className="px-2 mx-3">
          <LineaNaranja />
          <div className="py-4">
            <h3 className="peso-bold fs-32">WHY CHOOSE US?</h3>
            <h6 className="peso-regular fs-16  py-2">
              Get to know all the benefits DKZ can offer you
            </h6>
          </div>
        </div>
        <BeneficiosCelEN />
      </div>
    </div>
  );
}
