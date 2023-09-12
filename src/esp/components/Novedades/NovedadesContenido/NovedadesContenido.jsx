import axios from "axios";
import Papa from "papaparse";
import LineaNaranja from "../../LineaNaranja";
import "./novedadesContenido.css";
import { Image, Spinner } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function NovedadesContenido() {
  const [trabajos, setTrabajos] = useState([]);
  const [show, setShow] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrabajos = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=574932737&single=true&output=csv"
      );

      const imagenes = Papa.parse(response.data, { header: true });

      setTrabajos(imagenes.data);
      setLoading(false);
    };
    getTrabajos();
  }, []);
  return (
    <div id="novedades">
      <div className="container d-none d-lg-block">
        <div className="mx-4 mx-sm-0">
          <LineaNaranja />
          <h2 className="peso-bold mb-5">NOVEDADES</h2>
        </div>
        {loading ? (
          <div className="text-white spinner py-5">
            <Spinner
              className="fs-1"
              animation="border"
              role="status"
              variant="light"
            ></Spinner>
          </div>
        ) : (
          <div>
            <div className="mb-sm-5 mb-0 novedades-nav ">
              {trabajos.slice(0, 1).map((trabajo, id) => (
                <NavLink to={"/novedades/" + trabajo.id} className="" key={id}>
                  <div className="fondo-novedades">
                    <div className="text-center">
                      <Image
                        className=" mb-4 w-75"
                        src={trabajo.imagenMini}
                        alt="imagen novedades"
                        fluid
                      />
                    </div>
                    <div>
                      <div className="d-flex justify-content-between mb-2 mx-4 mx-sm-0">
                        <h4 className="peso-bold">{trabajo.titulo}</h4>
                      </div>
                      <h4 className="peso-regular mx-4 mx-sm-0">
                        {trabajo.resumen}
                      </h4>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-3 mx-4 mx-sm-0">
                    <h6 className="color-naranja ">Ver +</h6>
                  </div>
                </NavLink>
              ))}
            </div>
            <div className="d-flex justify-content-between flex-wrap mt-0 mt-sm-5 pb-5 novedades-nav">
              {trabajos.slice(1, show).map((trabajo, id) => (
                <NavLink
                  to={"/novedades/" + trabajo.id}
                  className="tamaño-card-novedades"
                  key={id}
                >
                  <div className="pt-5 fondo-novedades">
                    <div className="text-center">
                      <Image
                        className="mb-4 w-75"
                        src={trabajo.imagenMini}
                        alt="imagen novedades"
                        fluid
                      />
                    </div>
                    <div className="">
                      <div className="d-flex justify-content-between mb-3 mx-4 mx-sm-0">
                        <h4 className="peso-bold ">{trabajo.titulo}</h4>
                      </div>
                      <h6 className="peso-regular mx-4 mx-sm-0">
                        {trabajo.resumen}
                      </h6>
                    </div>
                  </div>
                  <div className="text-decoration-none d-flex justify-content-end mt-3 mx-4 mx-sm-0">
                    <h6 className="color-naranja">Ver +</h6>
                  </div>
                </NavLink>
              ))}
            </div>
            <div className="d-flex justify-content-center pb-5">
              <h4
                onClick={() => {
                  setShow(show + 4);
                }}
                className={show >= trabajos.length ? "d-none" : ""}
              >
                <p
                  className="mb-0 peso-bold color-naranja mano-mouse"
                  style={{ cursor: "pointer" }}
                >
                  VER MAS NOVEDADES
                </p>
              </h4>
            </div>
          </div>
        )}
      </div>
      {/* CELULAR */}
      <div className="d-lg-none d-block">
        <div className="container">
          <div className="mx-3 mx-sm-0">
            <LineaNaranja />
            <h3 className="peso-bold mb-4 mt-3">NOVEDADES</h3>
          </div>
        </div>
        {loading ? (
          <div className="text-white spinner py-5">
            <Spinner
              className="fs-1"
              animation="border"
              role="status"
              variant="light"
            ></Spinner>
          </div>
        ) : (
          <div>
            <div className="mb-sm-5 mb-0 novedades-nav ">
              {trabajos.slice(0, 1).map((trabajo, id) => (
                <NavLink to={"/novedades/" + trabajo.id} className="" key={id}>
                  <div className="fondo-novedades">
                    <Image
                      className=" mb-4"
                      src={trabajo.imagenMini}
                      alt="imagen novedades"
                      fluid
                    />
                    <div className="container">
                      <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                        <h5 className="peso-bold">{trabajo.titulo}</h5>
                      </div>
                      <h6 className="peso-regular mx-3 mx-sm-0">
                        {trabajo.resumen}
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-3 mx-sm-0">
                    <h6 className="color-naranja mx-4">Ver +</h6>
                  </div>
                </NavLink>
              ))}
            </div>
            <div className="d-flex justify-content-between flex-wrap mt-0 mt-sm-5 pb-5 novedades-nav">
              {trabajos.slice(1, show).map((trabajo, id) => (
                <NavLink
                  to={"/novedades/" + trabajo.id}
                  className="tamaño-card-novedades"
                  key={id}
                >
                  <div className="pt-5 fondo-novedades">
                    <Image
                      className="mb-4 "
                      src={trabajo.imagenMini}
                      alt="imagen novedades"
                      fluid
                    />
                    <div className="container">
                      <div className="d-flex justify-content-between mb-3 mx-3 mx-sm-0">
                        <h4 className="peso-bold ">{trabajo.titulo}</h4>
                      </div>
                      <h6 className="peso-regular mx-3 mx-sm-0">
                        {trabajo.resumen}
                      </h6>
                    </div>
                  </div>
                  <div className="text-decoration-none d-flex justify-content-end mt-3  mx-sm-0">
                    <h6 className="color-naranja mx-4">Ver +</h6>
                  </div>
                </NavLink>
              ))}
            </div>
            <div className="d-flex justify-content-center pb-5">
              <h4
                onClick={() => {
                  setShow(show + 4);
                }}
                className={show >= trabajos.length ? "d-none" : ""}
              >
                <p
                  className="mb-0 peso-bold color-naranja mano-mouse"
                  style={{ cursor: "pointer" }}
                >
                  VER MAS NOVEDADES
                </p>
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
