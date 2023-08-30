import React from "react";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import CasosContenidoEN from "../components/casosEN/CasosContenidoEN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";

const CasosPageEN = () => {
  return (
    <div className=" color-negro-fondo py-5">
      <NavbarReactV2EN />
      <CasosContenidoEN />
      <FooterReactEN />
    </div>
  );
};

export default CasosPageEN;
