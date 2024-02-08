// import { NovedadesDetallados } from "../components/Novedades/NovedadesContenido/NovedadesDetallados";
import { FooterReact } from "../../components/FooterReact/FooterReact";
import Novedades1DetEscritorio from "../../components/NovedadesHomeNwe/Detalle/Novedades1DetEscritorio";

import { Novedades1DetalleCel } from "../../components/NovedadesHomeNwe/Detalle/Novedades1DetalleCel";

import DosBotonesSC from "../../components/dosBotonesSC/DosBotonesSC";
import { NavbarReactV2 } from "../../components/navbarReactV2/NavbarReactV2";

export default function Noticias1() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2 />
      <div className="d-none d-lg-block">
        <Novedades1DetEscritorio />
      </div>
      <div className="d-lg-none d-block">
        <Novedades1DetalleCel />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesSC />
      </div>
      <FooterReact />
    </div>
  );
}
