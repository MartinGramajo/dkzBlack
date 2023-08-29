import React from "react";
import SitiosEN from "../components/sitiosWebEN/SitiosEN";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";

const SitiosWebPageEN = () => {
  return (
    <div>
      <NavbarReactV2EN />
      <SitiosEN />
      <FooterReactEN />
    </div>
  );
};

export default SitiosWebPageEN;
