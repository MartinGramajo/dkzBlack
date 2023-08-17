import axios from "axios";
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import BotonContactanos from "../components/BotonContactanos";
import OtrosCasos from "../components/OtrosCasos";
import ContenidoDetalle from "../components/ContenidoDetalle";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";

export default function EventosDetalle() {
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
      <NavbarReactV2 />
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
        <ContenidoDetalle trabajos={trabajos} />
      )}
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanos />
      </div>
      <div className="color-negroclaro-fondo">
        <OtrosCasos trabajos={casos} tipo="eventos" />
      </div>
    </div>
  );
}
