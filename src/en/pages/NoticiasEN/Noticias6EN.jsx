// import { NovedadesDetallados } from "../components/Novedades/NovedadesContenido/NovedadesDetallados";

import DosBotonesHomeEN from "../../components/dosBotonesHome/DosBotonesHomeEN";
import { FooterReactEN } from "../../components/footerReactEN/FooterReactEN";
import { NavbarReactV2EN } from "../../components/navbarReactV2EN/NavbarReactV2EN";
import Novedades6DetallesCelEN from "../../components/novedadesEN/novedadesDetalles/Novedades6DetallesCelEN";
import Novedades6DetallesEscEN from "../../components/novedadesEN/novedadesDetalles/Novedades6DetallesEscEN";

export default function Noticias6EN() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <div className="d-none d-lg-block">
        <Novedades6DetallesEscEN />
      </div>
      <div className="d-lg-none d-block">
        <Novedades6DetallesCelEN />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesHomeEN />
      </div>
      <FooterReactEN />
    </div>
  );
}
