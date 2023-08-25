import React from "react";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import ServiciosEN from "../components/serviciosEN/ServiciosEN";

const ServiciosPageEN = () => {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <div className="pb-5">
        <ServiciosEN />
      </div>
    </div>
  );
};

export default ServiciosPageEN;
