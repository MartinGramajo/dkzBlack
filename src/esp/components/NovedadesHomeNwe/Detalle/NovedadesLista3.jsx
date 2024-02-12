import "./NovedadesContenido.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NovedadesLista3() {
  return (
    <div id="novedades">
      <div className="container">
        <div className="mx-4 mx-sm-0"></div>
        <div>
          <div className="py-4 novedades-nav w-100">
            <Link
              to={
                "/noticia/dkz-celebra-su-cuarto-aniversario-y-desembarca-en-españa"
              }
              className="tamaño-card-novedades"
            >
              <div className="fondo-novedades mb-4">
                <Image
                  className="mb-3 imagen-lista-noticia "
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg"
                  alt="imagen novedades"
                  fluid
                />
                <div className="">
                  <div className="d-flex justify-content-between mb-3 mx-4 mx-sm-0">
                    <h5 className="peso-bold ">
                      DKZ CELEBRA SU CUARTO ANIVERSARIO Y DESEMBARCA EN ESPAÑA
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="py-4 novedades-nav w-100">
            <Link
              to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
              className="tamaño-card-novedades"
            >
              <div className="fondo-novedades mb-4">
                <Image
                  className="mb-3 imagen-lista-noticia "
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png"
                  alt="imagen novedades"
                  fluid
                />
                <div className="">
                  <div className="d-flex justify-content-between mb-3 mx-4 mx-sm-0">
                    <h5 className="peso-bold ">
                      DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="py-4 novedades-nav w-100">
            <Link
              to={"/noticia/dkz-se-sumo-al-consejo-publicitario-argentino"}
              className="tamaño-card-novedades"
            >
              <div className="fondo-novedades mb-4">
                <Image
                  className="mb-3 imagen-lista-noticia "
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia2_novkwh_wxeuqi.png"
                  alt="imagen novedades"
                  fluid
                />
                <div className="">
                  <div className="d-flex justify-content-between mb-3 mx-4 mx-sm-0">
                    <h5 className="peso-bold ">
                      DKZ SE SUMÓ AL CONSEJO PUBLICITARIO ARGENTINO
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
