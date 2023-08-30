import axios from "axios";
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ContenidoDetalleEN from "./ContenidoDetalleEN";
import { NavbarReactV2EN } from "./navbarReactV2EN/NavbarReactV2EN";
import BotonContactanosEN from "./BotonContactanosEN";
import { FooterReactEN } from "./footerReactEN/FooterReactEN";

export default function SocialMediaDetalleEN() {
  const params = useParams();
  const [trabajos, setTrabajos] = useState({});
  const [casos, setCasos] = useState([]);

  useEffect(() => {
    const getCasos = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=857708681&single=true&output=csv"
      );
      const imagenes = Papa.parse(response.data, { header: true });
      setCasos(imagenes.data);
    };
    getCasos();
  }, []);

  const getTrabajos = async () => {
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=857708681&single=true&output=csv"
    );

    const trabajos = Papa.parse(response.data, { header: true });
    const trabajo1 = trabajos.data;

    const trabajoFiltrado = trabajo1.filter(
      (trabajo) => trabajo.id === params.id
    );
    setTrabajos(trabajoFiltrado[0]);
  };
  useEffect(() => {
    getTrabajos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavbarReactV2EN />
      <ContenidoDetalleEN trabajos={trabajos} />
      <div className="d-none d-md-block color-negro-fondo pb-4">
        <h4 className="text-white d-flex justify-content-center mb-0">
          Learn more about this project:
        </h4>
        <a
          className="ps-0 ps-sm-2 peso-bold text-decoration-none text-center"
          href={trabajos.link}
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="peso-bold color-naranja ">Click Here!</h3>
        </a>
      </div>
      <div className="d-md-none d-block color-negro-fondo">
        <h5 className="text-white d-flex justify-content-center mb-0 pt-5">
          Learn more about this project:
        </h5>
        <a
          className="ps-0 ps-sm-2 tamaño-medio peso-bold text-decoration-none text-center"
          href={trabajos.link}
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="color-naranja peso-bold pt-4 pb-0">Click Here!</h4>
        </a>
      </div>
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanosEN />
      </div>
      {/* <div className="color-negroclaro-fondo">
        <OtrosCasos trabajos={casos} tipo="socialmedia" />
      </div> */}
      <FooterReactEN />
    </div>
  );
}
