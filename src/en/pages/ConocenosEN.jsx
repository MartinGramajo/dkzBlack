import BotonContactanosEN from "../components/BotonContactanosEN";
import ClientesEN from "../components/clientesEN/ClientesEN";
import CabezasEN from "../components/conocenos/cabezasEN/CabezasEN";
import CabezasSliderBEN from "../components/conocenos/cabezasEN/CabezasSliderBEN";
import { CabezasSliderEN } from "../components/conocenos/cabezasEN/CabezasSliderEN";
import PorQueElegirnosEN from "../components/conocenos/elegirnos/PorQueElegirnosEN";
import NuestroProcesoCelEN from "../components/conocenos/procesoEN/NuestroProcesoCelEN";
import NuestroProcesoEN from "../components/conocenos/procesoEN/NuestroProcesoEN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";

const ConocenosEN = () => {
  return (
    <div>
      <NavbarReactV2EN />
      <div className="color-negro-fondo">
        {/* <div className=" d-lg-block d-none">
          <CabezasEN />
        </div>
        <div className="d-block d-lg-none">
          <CabezasSliderEN />
        </div> */}
        <div>
          <CabezasSliderBEN />
        </div>
        <div>
          <PorQueElegirnosEN />
        </div>
      </div>
      <div className=" color-negro-fondo">
        <div className=" d-lg-block d-none">
          <NuestroProcesoEN />
        </div>
        <div className="d-block d-lg-none">
          <NuestroProcesoCelEN />
        </div>

        <div className="py-5 d-flex justify-content-center">
          <BotonContactanosEN />
        </div>

        <ClientesEN />
      </div>
      <FooterReactEN />
    </div>
  );
};

export default ConocenosEN;
