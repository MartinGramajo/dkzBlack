import React from "react";
import LineaNaranja from "../components/LineaNaranja";
import FormTrabajaConNosotros from "../components/Contactanos/FormTrabajaConNosotros";

export default function TrabajaConNosotros() {
  return (
    <div className="padding-titulo color-negro-fondo ">
      <div className="container">
        <div>
          <div className="d-none d-md-block">
            <LineaNaranja />
          </div>
          <h2 className="peso-bold py-4 d-none d-md-block">
            Si trabajás en cuentas, planning, digital, sos redactor, director de
            arte, redactor de arte o simplemente creés que tenés que aportar a
            nuestro equipo dejanos tus datos. <br /> Gracias!{" "}
          </h2>
        </div>
        <div>
          <div className="mx-3 d-block d-md-none">
            <LineaNaranja />
          </div>
          <h3 className="py-4 peso-regular d-block d-md-none mx-3 ">
            <span className="peso-bold">Si trabajás en </span> cuentas,
            planning, digital, sos redactor, director de arte, redactor de arte
            o{" "}
            <span className="peso-bold">
              {" "}
              simplemente creés que tenés que aportar a nuestro equipo dejanos
              tus datos. <br /> Gracias!{" "}
            </span>
          </h3>
        </div>
        <div className="d-none d-md-block">
          <h3 className="peso-bold color-naranja py-4">
            Completa con tu información
          </h3>
        </div>
        <div className="d-block d-md-none ">
          <h5 className="peso-bold color-naranja py-4 mx-3">
            Completa con tu información
          </h5>
        </div>
        <div className="py-2">
          <FormTrabajaConNosotros />
        </div>
      </div>
    </div>
  );
}
