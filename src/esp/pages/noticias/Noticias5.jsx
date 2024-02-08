import { FooterReact } from "../../components/FooterReact/FooterReact";
import Novedades5DetCel from "../../components/NovedadesHomeNwe/Detalle/Novedades5DetCel";
import Novedades5DetEscritorio from "../../components/NovedadesHomeNwe/Detalle/Novedades5DetEscritorio";
import DosBotonesSC from "../../components/dosBotonesSC/DosBotonesSC";
import { NavbarReactV2 } from "../../components/navbarReactV2/NavbarReactV2";

export default function Noticias5() {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2 />
      <div className="d-none d-lg-block">
        <Novedades5DetEscritorio />
      </div>
      <div className="d-lg-none d-block">
        <Novedades5DetCel />
      </div>
      <div className="color-negro-fondo">
        <DosBotonesSC />
      </div>
      <FooterReact />
    </div>
  );
}
