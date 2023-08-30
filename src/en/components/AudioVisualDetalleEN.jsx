import axios from "axios";
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ContenidoDetalleEN from "./ContenidoDetalleEN";
import { NavbarReactV2EN } from "./navbarReactV2EN/NavbarReactV2EN";
import BotonContactanosEN from "./BotonContactanosEN";
import { FooterReactEN } from "./footerReactEN/FooterReactEN";
import OtrosCasosEN from "./OtrosCasosEN";

export default function AudioVisualDetalleEN() {
  const params = useParams();
  const [trabajos, setTrabajos] = useState({});
  const [casos, setCasos] = useState([]);

  useEffect(() => {
    const getCasos = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=0&single=true&output=csv"
      );
      const imagenes = Papa.parse(response.data, { header: true });
      setCasos(imagenes.data);
    };
    getCasos();
  }, []);

  const getTrabajos = async () => {
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=0&single=true&output=csv"
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
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanosEN />
      </div>
      <div className="color-negroclaro-fondo">
        <OtrosCasosEN trabajos={casos} tipo="audio-visual-production" />
      </div>
      <FooterReactEN />
    </div>
  );
}
