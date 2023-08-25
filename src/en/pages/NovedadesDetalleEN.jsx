import React from "react";

import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import NovedadesDetalleCelEN from "../components/novedadesEN/NovedadesDetalleCelEN";
import DosBotonesHomeEN from "../components/dosBotonesHome/DosBotonesHomeEN";
import NovedadesDetalleEscEN from "../components/novedadesEN/NovedadesDetalleEscEN";

const NovedadesDetalleEN = () => {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <div className="d-none d-lg-block">
        <NovedadesDetalleEscEN />
      </div>
      <div className="d-lg-none d-block">
        <NovedadesDetalleCelEN />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesHomeEN />
      </div>
    </div>
  );
};

export default NovedadesDetalleEN;
