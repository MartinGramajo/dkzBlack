import React from "react";
import InvestigacionContenido from "../components/Investigacion/investigacionContenido/InvestigacionContenido";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";

export default function Investigacion() {
  return (
    <div>
      <NavbarReactV2 />
      <InvestigacionContenido />
      <FooterReact />
    </div>
  );
}
