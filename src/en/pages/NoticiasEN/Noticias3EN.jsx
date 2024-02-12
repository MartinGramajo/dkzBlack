// import { NovedadesDetallados } from "../components/Novedades/NovedadesContenido/NovedadesDetallados";

import DosBotonesHomeEN from "../../components/dosBotonesHome/DosBotonesHomeEN";
import { FooterReactEN } from "../../components/footerReactEN/FooterReactEN";
import { NavbarReactV2EN } from "../../components/navbarReactV2EN/NavbarReactV2EN";
import Novedades3DetallesCelEN from "../../components/novedadesEN/novedadesDetalles/Novedades3DetallesCelEN";
import Novedades3DetallesEscEN from "../../components/novedadesEN/novedadesDetalles/Novedades3DetallesEscEN";

export default function Noticias3EN() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <div className="d-none d-lg-block">
        <Novedades3DetallesEscEN />
      </div>
      <div className="d-lg-none d-block">
        <Novedades3DetallesCelEN />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesHomeEN />
      </div>
      <FooterReactEN />
    </div>
  );
}
