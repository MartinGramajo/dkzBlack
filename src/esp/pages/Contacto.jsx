import React from "react";
import FormContacto from "../components/Contactanos/FormContacto";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";

export default function Contacto() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2 />
      <FormContacto />
      <FooterReact />
    </div>
  );
}
