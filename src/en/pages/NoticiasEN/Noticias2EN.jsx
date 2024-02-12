// import { NovedadesDetallados } from "../components/Novedades/NovedadesContenido/NovedadesDetallados";

import DosBotonesHomeEN from "../../components/dosBotonesHome/DosBotonesHomeEN";
import { FooterReactEN } from "../../components/footerReactEN/FooterReactEN";
import { NavbarReactV2EN } from "../../components/navbarReactV2EN/NavbarReactV2EN";
import Novedades2DetallesCelEN from "../../components/novedadesEN/novedadesDetalles/Novedades2DetallesCelEN";
import Novedades2DetallesEscEN from "../../components/novedadesEN/novedadesDetalles/Novedades2DetallesEscEN";

export default function Noticias2EN() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <div className="d-none d-lg-block">
        <Novedades2DetallesEscEN />
      </div>
      <div className="d-lg-none d-block">
        <Novedades2DetallesCelEN />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesHomeEN />
      </div>
      <FooterReactEN />
    </div>
  );
}
