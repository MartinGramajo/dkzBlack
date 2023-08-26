import React from "react";
import PublicidadContenido from "../components/Publicidad/publicidadContenido/PublicidadContenido";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";

export default function Publicidad() {
  return (
    <div>
      <NavbarReactV2 />
      <PublicidadContenido />
      <FooterReact />
    </div>
  );
}
