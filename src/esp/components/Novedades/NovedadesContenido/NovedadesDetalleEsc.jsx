import axios from "axios";
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";
import { Image, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NovedadesLista from "./NovedadesLista";

export default function NovedadesDetalleEsc() {
  const params = useParams();
  const [trabajos, setTrabajos] = useState({});
  const [loading, setLoading] = useState(true);

  const getTrabajos = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=574932737&single=true&output=csv"
    );

    const trabajos = Papa.parse(response.data, { header: true });
    console.log(
      "file: NovedadesDetalleEsc.jsx:21 ~ getTrabajos ~ trabajos:",
      trabajos
    );
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
    id,
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
    imagenMini,
  } = trabajos;

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="color-negro-fondo">
      {loading ? (
        <div className="text-white  spinner ">
          <Spinner
            className="fs-1"
            animation="border"
            role="status"
            variant="light"
          ></Spinner>
        </div>
      ) : (
        <div className="mt-5 container d-flex ">
          <div className="col-8">
            {/* <h6 className="text-white peso-bold mx-5 px-5">{seccion}</h6> */}
            <h2 className="text-white peso-bold mx-5 px-5 py-2">{titulo}</h2>
            <h5 className="text-white mx-5 px-5">{subtitulo}</h5>
            <br />
            <Image
              className="w-100"
              src={imagen1}
              alt="imagen de la noticia"
              fluid
            />
            <br />
            <div className="d-flex">
              <h4 className="text-white mt-3 mb-0">
                {textoImagen1}
                <hr className="text-white px-5" />
              </h4>
            </div>
            {/* <h6 className="text-white my-4 py-2 mx-5 px-5">{fecha}</h6> */}
            <h5 className="text-white mt-4 wrap-pre mx-5 px-5">
              {descripcion}
            </h5>
            {imagen2 === "" ? (
              ""
            ) : (
              <div>
                <Image
                  className="w-100 mt-5 mb-4"
                  src={imagen2}
                  alt="imagen de la noticia"
                  fluid
                />
              </div>
            )}
            {tituloIntermedio === "" ? (
              ""
            ) : (
              <div>
                <h4 className="text-white text-center mx-4 my-5 peso-bold">
                  {tituloIntermedio}
                </h4>
              </div>
            )}
            <div className="pb-5">
              <h5 className="text-white mt-4 wrap-pre mx-5 px-5 mb-5">
                {descripcion2}
              </h5>
            </div>
          </div>
          <div className="col-4 ms-4">
            <hr className="text-white" />
            <h4 className="text-white tamaño-mas-grande peso-bold">
              Todos los Artículos:
            </h4>
            <div onClick={reload}>
              <NovedadesLista idNovedad={id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
