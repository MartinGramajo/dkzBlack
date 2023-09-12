import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Button, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NovedadesDetalleCel = () => {
  const params = useParams();
  const [trabajos, setTrabajos] = useState({});
  const [loading, setLoading] = useState(true);
  const getTrabajos = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=574932737&single=true&output=csv"
    );

    const trabajos = Papa.parse(response.data, { header: true });
    const trabajo1 = trabajos.data;

    const trabajoFiltrado = trabajo1.filter(
      (trabajo) => trabajo.id === params.id
    );
    setTrabajos(trabajoFiltrado[0]);
    setLoading(false);
  };
  useEffect(() => {
    getTrabajos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    seccion,
    titulo,
    subtitulo,
    descripcion,
    tituloIntermedio,
    descripcion2,
    imagen1,
    imagen2,
    imagen3,
    fecha,
    textoImagen1,
    textoImagen2,
    textoImagen3,
  } = trabajos;

  return (
    <div className="mt-0 container">
      {loading ? (
        <div className="text-white  spinner">
          <Spinner
            className="fs-1"
            animation="border"
            role="status"
            variant="light"
          ></Spinner>
        </div>
      ) : (
        <div className="mx-3 pb-5">
          <h6 className="text-white peso-bold mb-4">{seccion}</h6>

          <h3 className="text-white peso-bold">{titulo}</h3>
          <h5 className="text-white mt-4 ">{subtitulo}</h5>

          <br />
          <Image className="w-100" src={imagen1} alt="" fluid />
          <br />
          <h5 className="text-white mt-1 ms-3">{textoImagen1}</h5>

          <h6 className="text-white my-4 py-2">{fecha} </h6>

          <h5 className="text-white  mt-4 wrap-pre">{descripcion}</h5>
          {tituloIntermedio === "" ? (
            ""
          ) : (
            <h5 className="text-white  mx-4 my-5 peso-bold">
              {tituloIntermedio}
            </h5>
          )}

          <h5 className="text-white mt-4 wrap-pre">{descripcion2}</h5>
        </div>
      )}
      <div className="d-flex justify-content-center pt-4">
        <Link className="text-decoration-none text-white" to="/novedades">
          <Button as={Link} to="/novedades" className="boton-naranja-grande">
            <h5 className="peso-bold ps-4 d-lg-none d-block">MÁS NOVEDADES</h5>
            <h3 className="peso-bold pe-3 d-lg-none d-block">➝</h3>
          </Button>
        </Link>
      </div>
    </div>
  );
};
