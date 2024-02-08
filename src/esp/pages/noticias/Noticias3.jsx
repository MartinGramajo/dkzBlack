import { FooterReact } from "../../components/FooterReact/FooterReact";
import Novedades3DetCel from "../../components/NovedadesHomeNwe/Detalle/Novedades3DetCel";
import Novedades3DetEscritorio from "../../components/NovedadesHomeNwe/Detalle/Novedades3DetEscritorio";
import DosBotonesSC from "../../components/dosBotonesSC/DosBotonesSC";
import { NavbarReactV2 } from "../../components/navbarReactV2/NavbarReactV2";

export default function Noticias3() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2 />
      <div className="d-none d-lg-block">
        <Novedades3DetEscritorio />
      </div>
      <div className="d-lg-none d-block">
        <Novedades3DetCel />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesSC />
      </div>
      <FooterReact />
    </div>
  );
}
