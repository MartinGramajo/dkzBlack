import React from "react";
import Sitios from "../components/sitiosWeb/Sitios";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";

export default function SitiosWeb() {
  return (
    <div>
      <NavbarReactV2 />
      <Sitios />
      <FooterReact />
    </div>
  );
}
