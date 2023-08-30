import axios from "axios";
import Papa from "papaparse";
import { useEffect } from "react";
import { useState } from "react";
import "./casosContenidoEN.css";
import { BotonesCatEN } from "./BotonesCatEN";
import { Spinner } from "react-bootstrap";
import LineaNaranja from "../../../esp/components/LineaNaranja";
import { MenuDataEN } from "./MenuDataEN";

export default function CasosContenidoEN() {
  const [datos, setDatos] = useState([]);
  const [menuItem, setMenuItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDatos = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=2150379&single=true&output=csv"
      );
      const imagenes = Papa.parse(response.data, { header: true });
      setDatos(imagenes.data);
      setMenuItem(imagenes.data);
      setLoading(false);
    };
    getDatos();
  }, []);

  const buttons = ["Todas", ...new Set(datos.map((dato) => dato.categoriasEN))];

  const filter = (button) => {
    if (button === "Todas") {
      setMenuItem(datos);
      return;
    }
    const filteredData = datos.filter((dato) => dato.categoriasEN === button);
    setMenuItem(filteredData);
  };

  return (
    <div>
      {/* ESCRITORIO */}
      <div className="d-none d-sm-block container">
        <div className="mx-3 mx-sm-0">
          <LineaNaranja />
          <h2 className="peso-bold">SUCCESS STORIES! SEE HOW WE DID IT</h2>
          <div className="my-3">
            <BotonesCatEN button={buttons} filter={filter} />
          </div>
        </div>
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
          <div>
            <MenuDataEN menuItem={menuItem} />
          </div>
        )}
      </div>
      {/* CELULAR */}
      <div className="d-sm-none d-block">
        <div className="container">
          <div className="mx-3 mx-sm-0">
            <LineaNaranja />
            <h2 className="peso-bold">SUCCESS STORIES! SEE HOW WE DID IT</h2>
            <div className="my-3">
              <BotonesCatEN button={buttons} filter={filter} />
            </div>
          </div>
        </div>
        {loading ? (
          <div className="text-white color-negro-fondo  spinner  py-5 mb-5">
            <Spinner
              className="fs-1"
              animation="border"
              role="status"
              variant="light"
            ></Spinner>
          </div>
        ) : (
          <div>
            <MenuDataEN menuItem={menuItem} />
          </div>
        )}
      </div>
    </div>
  );
}
