import React from "react";
import InvestigacionEN from "../components/investigacionMercadoEN/InvestigacionEN";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";

const InvestigacionPageEN = () => {
  return (
    <div>
      <NavbarReactV2EN />
      <InvestigacionEN />
      <FooterReactEN />
    </div>
  );
};

export default InvestigacionPageEN;
