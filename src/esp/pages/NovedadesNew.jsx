import React from "react";
import DosBotonesSC from "../components/dosBotonesSC/DosBotonesSC";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";
import NovedadesContenidoNew from "../components/NovedadesHomeNwe/NovedadesContenidoNew";

export default function NovedadesNew() {
  return (
    <div>
      <NavbarReactV2 />
      <div className="color-negro-fondo ">
        <NovedadesContenidoNew />
      </div>
      <div className="color-negro-a-negroclaro-fondo">
        <DosBotonesSC />
      </div>
      <FooterReact />
    </div>
  );
}
