import React from "react";
import ConsulEN from "../components/consultoriaEN/ConsulEN";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";

const ConsultoriaPageEN = () => {
  return (
    <div>
      <NavbarReactV2EN />
      <ConsulEN />
      <FooterReactEN />
    </div>
  );
};

export default ConsultoriaPageEN;
