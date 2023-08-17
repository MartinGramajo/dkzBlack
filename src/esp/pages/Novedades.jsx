import React from "react";
import DosBotonesSC from "../components/dosBotonesSC/DosBotonesSC";
import NovedadesContenido from "../components/Novedades/NovedadesContenido/NovedadesContenido";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";

export default function Novedades() {
  return (
    <div>
      <NavbarReactV2 />
      <div className="color-negro-fondo ">
        <NovedadesContenido />
      </div>
      <div className="color-negro-a-negroclaro-fondo">
        <DosBotonesSC />
      </div>
    </div>
  );
}
