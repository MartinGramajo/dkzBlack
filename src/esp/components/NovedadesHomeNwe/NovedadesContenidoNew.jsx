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
                to={
                  "/noticia/dkz-celebra-su-cuarto-aniversario-y-desembarca-en-españa"
                }
                className=""
              >
                <div className="fondo-novedades">
                  <div className="text-center">
                    <Image
                      className=" mb-4 w-25"
                      src={
                        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg"
                      }
                      alt="imagen novedades"
                      fluid
                    />
                  </div>
                  <div>
                    <div className="text-center mb-2 mx-4 mx-sm-0">
                      <h4 className="peso-bold ">
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
                to={
                  "/noticia/se-realizo-la-primera-edicion-del-foro-publicitario-en-tucuman"
                }
                className=""
              >
                <div className="fondo-novedades">
                  <div className="text-center">
                    <Image
                      className=" mb-4 w-75"
                      src={
                        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1686880310/Prensa/guille_y_fabri_MINI_gckvdn.jpg"
                      }
                      alt="imagen novedades"
                      fluid
                    />
                  </div>
                  <div>
                    <div className="text-center  mb-2 mx-4 mx-sm-0">
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
            <div className="my-4">
              <NavLink
                to={"/noticia/dkz-se-sumo-al-consejo-publicitario-argentino"}
                className=""
              >
                <div className="fondo-novedades">
                  <div className="text-center">
                    <Image
                      className=" mb-4 w-50"
                      src={
                        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia2_novkwh_wxeuqi.png"
                      }
                      alt="imagen novedades"
                      fluid
                    />
                  </div>
                  <div>
                    <div className="text-center  mb-2 mx-4 mx-sm-0">
                      <h4 className="peso-bold">
                        DKZ SE SUMÓ AL CONSEJO PUBLICITARIO ARGENTINO
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
                to={"/noticia/un-tucumano-sera-jurado-del-consejo-publicitario"}
                className=""
              >
                <div className="fondo-novedades">
                  <div className="text-center">
                    <Image
                      className=" mb-4 w-50"
                      src={
                        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663184171/306549749_857291485261505_7534753838600488974_n_-_copia_vbrp7n.jpg"
                      }
                      alt="imagen novedades"
                      fluid
                    />
                  </div>
                  <div>
                    <div className="text-center  mb-2 mx-4 mx-sm-0">
                      <h4 className="peso-bold">
                        UN TUCUMANO SERÁ JURADO DEL CONSEJO PUBLICITARIO
                        ARGENTINO
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
                to={"/noticia/fabricio-meriglio-es-el-nuevo-dgc-de-dkz-studio"}
                className=""
              >
                <div className="fondo-novedades">
                  <div className="text-center">
                    <Image
                      className=" mb-4 w-50"
                      src={
                        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia1_tfk0yo_jjiutk.png"
                      }
                      alt="imagen novedades"
                      fluid
                    />
                  </div>
                  <div>
                    <div className="text-center  mb-2 mx-4 mx-sm-0">
                      <h4 className="peso-bold">
                        FABRICIO MERIGLIO ES EL NUEVO DGC DE DKZ STUDIO
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
        </div>
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
          <div className="mb-sm-5 mb-0 novedades-nav py-4">
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
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3 mx-sm-0">
                <h6 className="color-naranja mx-4">Ver +</h6>
              </div>
            </NavLink>
          </div>
          <div className="d-flex justify-content-between flex-wrap mt-0 mt-sm-5 pb-5 novedades-nav  py-4">
            <NavLink
              to={
                "/noticia/dkz-celebra-su-cuarto-aniversario-y-desembarca-en-españa"
              }
              className=""
            >
              <div className="fondo-novedades">
                <Image
                  className=" mb-4"
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg"
                  alt="imagen novedades"
                  fluid
                />
                <div className="container">
                  <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                    <h5 className="peso-bold">
                      DKZ CELEBRA SU CUARTO ANIVERSARIO Y DESEMBARCA EN ESPAÑA
                    </h5>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3 mx-sm-0">
                <h6 className="color-naranja mx-4">Ver +</h6>
              </div>
            </NavLink>
            <NavLink
              to={
                "/noticia/se-realizo-la-primera-edicion-del-foro-publicitario-en-tucuman"
              }
              className=""
            >
              <div className="fondo-novedades  py-4">
                <Image
                  className=" mb-4"
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1686880310/Prensa/guille_y_fabri_MINI_gckvdn.jpg"
                  alt="imagen novedades"
                  fluid
                />
                <div className="container">
                  <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                    <h5 className="peso-bold">
                      SE REALIZÓ LA PRIMERA EDICIÓN DEL FORO PUBLICITARIO EN
                      TUCUMÁN
                    </h5>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3 mx-sm-0">
                <h6 className="color-naranja mx-4">Ver +</h6>
              </div>
            </NavLink>
            <NavLink
              to={"/noticia/dkz-se-sumo-al-consejo-publicitario-argentino"}
              className=""
            >
              <div className="fondo-novedades  py-4">
                <Image
                  className=" mb-4"
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia2_novkwh_wxeuqi.png"
                  alt="imagen novedades"
                  fluid
                />
                <div className="container">
                  <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                    <h5 className="peso-bold">
                      DKZ SE SUMÓ AL CONSEJO PUBLICITARIO ARGENTINO
                    </h5>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3 mx-sm-0">
                <h6 className="color-naranja mx-4">Ver +</h6>
              </div>
            </NavLink>
            <NavLink
              to={"/noticia/un-tucumano-sera-jurado-del-consejo-publicitario"}
              className=""
            >
              <div className="fondo-novedades  py-4">
                <Image
                  className=" mb-4"
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663184171/306549749_857291485261505_7534753838600488974_n_-_copia_vbrp7n.jpg"
                  alt="imagen novedades"
                  fluid
                />
                <div className="container">
                  <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                    <h5 className="peso-bold">
                      UN TUCUMANO SERÁ JURADO DEL CONSEJO PUBLICITARIO ARGENTINO
                    </h5>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3 mx-sm-0">
                <h6 className="color-naranja mx-4">Ver +</h6>
              </div>
            </NavLink>
            <NavLink
              to={"/noticia/fabricio-meriglio-es-el-nuevo-dgc-de-dkz-studio"}
              className=""
            >
              <div className="fondo-novedades  py-4">
                <Image
                  className=" mb-4"
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia1_tfk0yo_jjiutk.png"
                  alt="imagen novedades"
                  fluid
                />
                <div className="container">
                  <div className="d-flex justify-content-between mb-2 mx-3 mx-sm-0">
                    <h5 className="peso-bold">
                      FABRICIO MERIGLIO ES EL NUEVO DGC DE DKZ STUDIO
                    </h5>
                  </div>
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
  );
}
