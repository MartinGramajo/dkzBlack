import { FooterReact } from "../../components/FooterReact/FooterReact";
import Novedades4DetCel from "../../components/NovedadesHomeNwe/Detalle/Novedades4DetCel";
import Novedades4DetEscritorio from "../../components/NovedadesHomeNwe/Detalle/Novedades4DetEscritorio";
import DosBotonesSC from "../../components/dosBotonesSC/DosBotonesSC";
import { NavbarReactV2 } from "../../components/navbarReactV2/NavbarReactV2";

export default function Noticias4() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2 />
      <div className="d-none d-lg-block">
        <Novedades4DetEscritorio />
      </div>
      <div className="d-lg-none d-block">
        <Novedades4DetCel />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesSC />
      </div>
      <FooterReact />
    </div>
  );
}
