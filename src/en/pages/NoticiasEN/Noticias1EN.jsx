// import { NovedadesDetallados } from "../components/Novedades/NovedadesContenido/NovedadesDetallados";

import DosBotonesHomeEN from "../../components/dosBotonesHome/DosBotonesHomeEN";
import { FooterReactEN } from "../../components/footerReactEN/FooterReactEN";
import { NavbarReactV2EN } from "../../components/navbarReactV2EN/NavbarReactV2EN";
import { Novedades1DetallesCelEN } from "../../components/novedadesEN/novedadesDetalles/Novedades1DetallesCelEN";
import Novedades1DetallesEscEN from "../../components/novedadesEN/novedadesDetalles/Novedades1DetallesEscEN";

export default function Noticias1EN() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <div className="d-none d-lg-block">
        <Novedades1DetallesEscEN />
      </div>
      <div className="d-lg-none d-block">
        <Novedades1DetallesCelEN />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesHomeEN />
      </div>
      <FooterReactEN />
    </div>
  );
}
