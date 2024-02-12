// import { NovedadesDetallados } from "../components/Novedades/NovedadesContenido/NovedadesDetallados";

import DosBotonesHomeEN from "../../components/dosBotonesHome/DosBotonesHomeEN";
import { FooterReactEN } from "../../components/footerReactEN/FooterReactEN";
import { NavbarReactV2EN } from "../../components/navbarReactV2EN/NavbarReactV2EN";
import Novedades5DetallesCelEN from "../../components/novedadesEN/novedadesDetalles/Novedades5DetallesCelEN";
import Novedades5DetallesEscEN from "../../components/novedadesEN/novedadesDetalles/Novedades5DetallesEscEN";

export default function Noticias5EN() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2EN />
      <div className="d-none d-lg-block">
        <Novedades5DetallesEscEN />
      </div>
      <div className="d-lg-none d-block">
        <Novedades5DetallesCelEN />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesHomeEN />
      </div>
      <FooterReactEN />
    </div>
  );
}
