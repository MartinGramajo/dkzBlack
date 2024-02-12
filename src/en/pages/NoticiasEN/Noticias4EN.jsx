// import { NovedadesDetallados } from "../components/Novedades/NovedadesContenido/NovedadesDetallados";

import DosBotonesHomeEN from "../../components/dosBotonesHome/DosBotonesHomeEN";
import { FooterReactEN } from "../../components/footerReactEN/FooterReactEN";
import { NavbarReactV2EN } from "../../components/navbarReactV2EN/NavbarReactV2EN";
import Novedades4DetallesCelEN from "../../components/novedadesEN/novedadesDetalles/Novedades4DetallesCelEN";
import Novedades4DetallesEscEN from "../../components/novedadesEN/novedadesDetalles/Novedades4DetallesEscEN";

export default function Noticias4EN() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <div className="d-none d-lg-block">
        <Novedades4DetallesEscEN />
      </div>
      <div className="d-lg-none d-block">
        <Novedades4DetallesCelEN />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesHomeEN />
      </div>
      <FooterReactEN />
    </div>
  );
}
