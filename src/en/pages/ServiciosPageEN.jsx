import React from "react";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import ServiciosEN from "../components/serviciosEN/ServiciosEN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";

const ServiciosPageEN = () => {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <div className="pb-5">
        <ServiciosEN />
      </div>
      <FooterReactEN />
    </div>
  );
};

export default ServiciosPageEN;
