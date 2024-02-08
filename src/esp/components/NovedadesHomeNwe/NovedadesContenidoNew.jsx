import axios from "axios";
import Papa from "papaparse";

import "./NovedadesContenidoNew.css";
import { Image, Spinner } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import LineaNaranja from "../LineaNaranja";

export default function NovedadesContenidoNew() {
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

        <div>
          <div className="mb-sm-5 mb-0 novedades-nav ">
            <NavLink
              to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
              className=""
            >
              <div className="fondo-novedades">
                <div className="text-center">
                  <Image
                    className=" mb-4 w-75"
                    src={
                      "https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                    }
                    alt="imagen novedades"
                    fluid
                  />
                </div>
                <div>
                  <div className="d-flex justify-content-center mb-2 mx-4 mx-sm-0">
                    <h4 className="peso-bold">
                      DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                    </h4>
                  </div>
                  <h4 className="peso-regular mx-4 mx-sm-0"></h4>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3 mx-4 mx-sm-0">
                <h6 className="color-naranja ">Ver +</h6>
              </div>
            </NavLink>
          </div>
          <div className="d-flex justify-content-center flex-wrap mt-0 mt-sm-5 pb-5 novedades-nav">
            <div className="my-4">
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div className="fondo-novedades">
                  <div className="text-center">
                    <Image
                      className=" mb-4 w-75"
                      src={
                        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                      }
                      alt="imagen novedades"
                      fluid
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-2 mx-4 mx-sm-0">
                      <h4 className="peso-bold">
                        DKZ CELEBRA SU CUARTO ANIVERSARIO Y DESEMBARCA EN ESPAÑA
                      </h4>
                    </div>
                    <h4 className="peso-regular mx-4 mx-sm-0"></h4>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mx-4 mx-sm-0">
                  <h6 className="color-naranja ">Ver +</h6>
                </div>
              </NavLink>
            </div>
            <div className="my-4">
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div className="fondo-novedades">
                  <div className="text-center">
                    <Image
                      className=" mb-4 w-75"
                      src={
                        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                      }
                      alt="imagen novedades"
                      fluid
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-2 mx-4 mx-sm-0">
                      <h4 className="peso-bold">
                        SE REALIZÓ LA PRIMERA EDICIÓN DEL FORO PUBLICITARIO EN
                        TUCUMÁN
                      </h4>
                    </div>
                    <h4 className="peso-regular mx-4 mx-sm-0"></h4>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mx-4 mx-sm-0">
                  <h6 className="color-naranja ">Ver +</h6>
                </div>
              </NavLink>
            </div>
          </div>
          {/* <div className="d-flex justify-content-center pb-5">
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
          </div> */}
        </div>
        {/* CELULAR */}
        <div className="d-lg-none d-block">
          <div className="container">
            <div className="mx-3 mx-sm-0">
              <LineaNaranja />
              <h3 className="peso-bold mb-4 mt-3">NOVEDADES</h3>
            </div>
          </div>

          <div>
            <div className="mb-sm-5 mb-0 novedades-nav ">
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div className="fondo-novedades">
                  <Image
                    className=" mb-4"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                    alt="imagen novedades"
                    fluid
                  />
                  <div className="container">
                    <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                      <h5 className="peso-bold">
                        DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                      </h5>
                    </div>
                    <h6 className="peso-regular mx-3 mx-sm-0">""</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3 mx-sm-0">
                  <h6 className="color-naranja mx-4">Ver +</h6>
                </div>
              </NavLink>
            </div>
            <div className="d-flex justify-content-between flex-wrap mt-0 mt-sm-5 pb-5 novedades-nav">
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div className="fondo-novedades">
                  <Image
                    className=" mb-4"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                    alt="imagen novedades"
                    fluid
                  />
                  <div className="container">
                    <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                      <h5 className="peso-bold">
                        DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                      </h5>
                    </div>
                    <h6 className="peso-regular mx-3 mx-sm-0">""</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3 mx-sm-0">
                  <h6 className="color-naranja mx-4">Ver +</h6>
                </div>
              </NavLink>
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div className="fondo-novedades">
                  <Image
                    className=" mb-4"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                    alt="imagen novedades"
                    fluid
                  />
                  <div className="container">
                    <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                      <h5 className="peso-bold">
                        DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                      </h5>
                    </div>
                    <h6 className="peso-regular mx-3 mx-sm-0">""</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3 mx-sm-0">
                  <h6 className="color-naranja mx-4">Ver +</h6>
                </div>
              </NavLink>
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div className="fondo-novedades">
                  <Image
                    className=" mb-4"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                    alt="imagen novedades"
                    fluid
                  />
                  <div className="container">
                    <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                      <h5 className="peso-bold">
                        DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                      </h5>
                    </div>
                    <h6 className="peso-regular mx-3 mx-sm-0">""</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3 mx-sm-0">
                  <h6 className="color-naranja mx-4">Ver +</h6>
                </div>
              </NavLink>
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div className="fondo-novedades">
                  <Image
                    className=" mb-4"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                    alt="imagen novedades"
                    fluid
                  />
                  <div className="container">
                    <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                      <h5 className="peso-bold">
                        DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                      </h5>
                    </div>
                    <h6 className="peso-regular mx-3 mx-sm-0">""</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3 mx-sm-0">
                  <h6 className="color-naranja mx-4">Ver +</h6>
                </div>
              </NavLink>
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div className="fondo-novedades">
                  <Image
                    className=" mb-4"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                    alt="imagen novedades"
                    fluid
                  />
                  <div className="container">
                    <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                      <h5 className="peso-bold">
                        DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                      </h5>
                    </div>
                    <h6 className="peso-regular mx-3 mx-sm-0">""</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3 mx-sm-0">
                  <h6 className="color-naranja mx-4">Ver +</h6>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
