import React from "react";
import ConsultoriaContenido from "../components/Consultoria/consultoriaContenido/ConsultoriaContenido";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";

export default function Consultoria() {
  return (
    <div>
      <NavbarReactV2 />
      <ConsultoriaContenido />
      <FooterReact />
    </div>
  );
}
