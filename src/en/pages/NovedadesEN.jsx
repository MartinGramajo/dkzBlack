import React from "react";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import NovedadesContenidoEN from "../components/novedadesEN/NovedadesContenidoEN";
import DosBotonesHomeEN from "../components/dosBotonesHome/DosBotonesHomeEN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";

const NovedadesEN = () => {
  return (
    <div>
      <NavbarReactV2EN />
      <div className="color-negro-fondo ">
        <NovedadesContenidoEN />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesHomeEN />
      </div>
      <FooterReactEN />
    </div>
  );
};

export default NovedadesEN;
