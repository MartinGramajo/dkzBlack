import axios from "axios";
import Papa from "papaparse";
import LineaNaranja from "../LineaNaranja";
import "./NovedadesHomeNew.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper";
import { Navigation } from "swiper";

import { NavLink } from "react-router-dom";

export default function NovedadesHomeNew() {
  return (
    <div className="pb-5">
      {/* ESCRITTORIO */}
      <div id="NovedadesHome" className=" padding-titulo d-none d-xl-block">
        <div className="container">
          <LineaNaranja />
          <h2 className="color-blanco mt-5 peso-bold">NOVEDADES</h2>
          <div className="d-flex flex-wrap justify-content-between pt-5 cards-novedades">
            <div>
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div
                  className="fondo-novedades-home"
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png")`,
                  }}
                >
                  <h6 className="peso-bold novedades-home-texto px-4 pt-3">
                    DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                  </h6>
                </div>
              </NavLink>
            </div>
            <div>
              <div>
                <NavLink
                  to={
                    "/noticia/dkz-celebra-su-cuarto-aniversario-y-desembarca-en-españa"
                  }
                  className=""
                >
                  <div
                    className="fondo-novedades-home"
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg")`,
                    }}
                  >
                    <h6 className="peso-bold novedades-home-texto px-4 pt-3">
                      DKZ CELEBRA SU CUARTO ANIVERSARIO Y DESEMBARCA EN ESPAÑA
                    </h6>
                  </div>
                </NavLink>
              </div>
            </div>
            <div>
              <div>
                <NavLink
                  to={
                    "/noticia/se-realizo-la-primera-edicion-del-foro-publicitario-en-tucuman"
                  }
                  className=""
                >
                  <div
                    className="fondo-novedades-home"
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/dlzcbrqax/image/upload/v1686880310/Prensa/guille_y_fabri_MINI_gckvdn.jpg")`,
                    }}
                  >
                    <h6 className="peso-bold novedades-home-texto px-4 pt-3">
                      SE REALIZÓ LA PRIMERA EDICIÓN DEL FORO PUBLICITARIO EN
                      TUCUMÁN
                    </h6>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CELULAR */}
      <div id="NovedadesHome" className="padding-titulo d-xl-none d-block ">
        <div className="container">
          <div className="mx-3">
            <LineaNaranja />
            <h3 className="color-blanco mt-4 peso-bold">NOVEDADES</h3>
          </div>
        </div>
        <div className="pt-5 pb-0">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={1}
            navigation={false}
            control={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              strech: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            spaceBetween={-20} // o margin en cada elemento
            className="swiper-novedades"
          >
            <SwiperSlide>
              <NavLink
                to={"/noticia/dkz-concluye-un-2023-con-grandes-exitos"}
                className=""
              >
                <div
                  className="fondo-novedades-home"
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png)`,
                  }}
                >
                  <h6 className="peso-bold novedades-home-texto px-4 pt-3">
                    DKZ CONCLUYE UN 2023 CON GRANDES ÉXITOS
                  </h6>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink
                to={
                  "/noticia/dkz-celebra-su-cuarto-aniversario-y-desembarca-en-españa"
                }
                className=""
              >
                <div
                  className="fondo-novedades-home"
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg)`,
                  }}
                >
                  <h6 className="peso-bold novedades-home-texto px-4 pt-3">
                    DKZ CELEBRA SU CUARTO ANIVERSARIO Y DESEMBARCA EN ESPAÑA
                  </h6>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink
                to={
                  "/noticia/dkz-celebra-su-cuarto-aniversario-y-desembarca-en-españa"
                }
                className=""
              >
                <div
                  className="fondo-novedades-home"
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/dlzcbrqax/image/upload/v1686354518/PAGINA%20NUEVA/novedades1_edxs3a.png)`,
                  }}
                >
                  <h6 className="peso-bold novedades-home-texto px-4 pt-3">
                    SE REALIZÓ LA PRIMERA EDICIÓN DEL FORO PUBLICITARIO EN
                    TUCUMÁN
                  </h6>
                </div>
              </NavLink>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
