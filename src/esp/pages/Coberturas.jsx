import React from "react";
import CoberturasContenido from "../components/Coberturas/coberturasContenido/CoberturasContenido";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";

export default function Coberturas() {
  return (
    <div>
      <NavbarReactV2 />
      <CoberturasContenido />
      <FooterReact />
    </div>
  );
}
