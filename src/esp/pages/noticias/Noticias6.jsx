import { FooterReact } from "../../components/FooterReact/FooterReact";
import Novedades6DetCel from "../../components/NovedadesHomeNwe/Detalle/Novedades6DetCel";
import Novedades6DetEscritorio from "../../components/NovedadesHomeNwe/Detalle/Novedades6DetEscritorio";
import DosBotonesSC from "../../components/dosBotonesSC/DosBotonesSC";
import { NavbarReactV2 } from "../../components/navbarReactV2/NavbarReactV2";

export default function Noticias6() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2 />
      <div className="d-none d-lg-block">
        <Novedades6DetEscritorio />
      </div>
      <div className="d-lg-none d-block">
        <Novedades6DetCel />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesSC />
      </div>
      <FooterReact />
    </div>
  );
}
