import axios from "axios";
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import ContenidoDetalleEN from "./ContenidoDetalleEN";
import BotonContactanosEN from "./BotonContactanosEN";
import { FooterReactEN } from "./footerReactEN/FooterReactEN";
import { NavbarReactV2EN } from "./navbarReactV2EN/NavbarReactV2EN";

export default function EventosDetalleEN() {
  const params = useParams();
  const [trabajos, setTrabajos] = useState({});
  const [casos, setCasos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCasos = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=1632136573&single=true&output=csv"
      );
      const imagenes = Papa.parse(response.data, { header: true });
      setCasos(imagenes.data);
      setLoading(false);
    };
    getCasos();
  }, []);

  const getTrabajos = async () => {
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=1632136573&single=true&output=csv"
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
      {loading ? (
        <div className="color-negro-fondo spinner py-5">
          <Spinner
            className="fs-1"
            animation="border"
            role="status"
            variant="light"
          ></Spinner>
        </div>
      ) : (
        <ContenidoDetalleEN trabajos={trabajos} />
      )}
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanosEN />
      </div>
      {/* <div className="color-negroclaro-fondo">
        <OtrosCasos trabajos={casos} tipo="eventos" />
      </div> */}
      <FooterReactEN />
    </div>
  );
}
