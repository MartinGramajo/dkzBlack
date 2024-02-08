// import { NovedadesDetallados } from "../components/Novedades/NovedadesContenido/NovedadesDetallados";
import { FooterReact } from "../../components/FooterReact/FooterReact";
import Novedades2DetCel from "../../components/NovedadesHomeNwe/Detalle/Novedades2DetCel";
import Novedades2DetEscritorio from "../../components/NovedadesHomeNwe/Detalle/Novedades2DetEscritorio";
import DosBotonesSC from "../../components/dosBotonesSC/DosBotonesSC";
import { NavbarReactV2 } from "../../components/navbarReactV2/NavbarReactV2";

export default function Noticias2() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2 />
      <div className="d-none d-lg-block">
        <Novedades2DetEscritorio />
      </div>
      <div className="d-lg-none d-block">
        <Novedades2DetCel />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesSC />
      </div>
      <FooterReact />
    </div>
  );
}
