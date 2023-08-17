import React from "react";
import LineaNaranja from "../components/LineaNaranja";
import FormTrabajaConNosotros from "../components/Contactanos/FormTrabajaConNosotros";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";

export default function TrabajaConNosotros() {
  return (
    <div>
      <NavbarReactV2 />

      <div className="padding-titulo color-negro-fondo ">
        <div className="container">
          <div>
            <div className="d-none d-md-block">
              <LineaNaranja />
            </div>
            <h2 className="peso-bold py-4 d-none d-md-block">
              Si trabajás en el mundo de la revolución digital simplemente crees
              que tenes algo que aportar a nuestro equipo, déjanos tus datos.{" "}
              <br /> Gracias!{" "}
            </h2>
          </div>
          <div>
            <div className="mx-3 d-block d-md-none">
              <LineaNaranja />
            </div>
            <h3 className="py-4 peso-regular d-block d-md-none mx-3 ">
              <span className="peso-bold">
                Si trabajás en el mundo de la revolución digital o simplemente
                crees que tenes algo que aportar a nuestro equipo, déjanos tus
                datos. <br /> Gracias!{" "}
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
    </div>
  );
}
