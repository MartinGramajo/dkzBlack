import React from "react";
import Sitios from "../components/sitiosWeb/Sitios";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";

export default function SitiosWeb() {
  return (
    <div>
      <NavbarReactV2 />
      <Sitios />
    </div>
  );
}
