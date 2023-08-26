import React from "react";
import LineaNaranja from "../../esp/components/LineaNaranja";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import FormTrabajaConNosotrosEN from "../components/contactanosEN/FormTrabajaConNosotrosEN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";

export default function TrabajaConNosotrosEN() {
  return (
    <div>
      <NavbarReactV2EN />
      <div className="padding-titulo color-negro-fondo ">
        <div className="container">
          <div>
            <div className="d-none d-md-block">
              <LineaNaranja />
            </div>
            <h2 className="peso-bold py-4 d-none d-md-block">
              If you work in the world of the digital revolution and you simply
              believe you have something to contribute to our team, leave us
              your details.
              <br /> Thank you very much.
            </h2>
          </div>
          <div>
            <div className="mx-3 d-block d-md-none">
              <LineaNaranja />
            </div>
            <h3 className="py-4 peso-regular d-block d-md-none mx-3 ">
              <span className="peso-bold">
                If you work in the world of the digital revolution and you
                simply believe you have something to contribute to our team,
                leave us your details.
                <br /> Thank you very much.
              </span>
            </h3>
          </div>
          <div className="d-none d-md-block">
            <h3 className="peso-bold color-naranja py-4">
              Complete with your information
            </h3>
          </div>
          <div className="d-block d-md-none ">
            <h5 className="peso-bold color-naranja py-4 mx-3">
              Complete with your information
            </h5>
          </div>
          <div className="py-2">
            <FormTrabajaConNosotrosEN />
          </div>
        </div>
      </div>
      <FooterReactEN />
    </div>
  );
}
