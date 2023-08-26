import CasosContenido from "../components/Casos/casosContenido.jsx/CasosContenido";
import { FooterReact } from "../components/FooterReact/FooterReact";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";

export default function Casos() {
  return (
    <div className=" color-negro-fondo py-5">
      <NavbarReactV2 />
      <div className="py-5">
        <CasosContenido />
      </div>
      <FooterReact />
    </div>
  );
}
