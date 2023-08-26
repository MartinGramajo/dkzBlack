import React from "react";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import FormContactoEN from "../components/contactanosEN/FormContactoEN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";

const ContactoEN = () => {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <FormContactoEN />
      <FooterReactEN />
    </div>
  );
};

export default ContactoEN;
