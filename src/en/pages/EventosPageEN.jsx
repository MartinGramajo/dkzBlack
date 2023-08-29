import React from "react";
import EventoEn from "../components/eventosEN/EventoEN";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";

const EventosPageEN = () => {
  return (
    <div>
      <NavbarReactV2EN />
      <EventoEn />
      <FooterReactEN />
    </div>
  );
};

export default EventosPageEN;
