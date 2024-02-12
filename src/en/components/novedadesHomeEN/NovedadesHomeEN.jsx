import axios from "axios";
import Papa from "papaparse";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import { Navigation } from "swiper";

import { NavLink } from "react-router-dom";
import LineaNaranja from "../../../esp/components/LineaNaranja";

export default function NovedadesHomeEN() {
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    const getTrabajos = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=574932737&single=true&output=csv"
      );
      const imagenes = Papa.parse(response.data, { header: true });
      setTrabajos(imagenes.data);
    };
    getTrabajos();
  }, []);
  return (
    // <div className="pb-5">

    //   <div id="NovedadesHome" className=" padding-titulo d-none d-xl-block">
    //     <div className="container">
    //       <LineaNaranja />
    //       <h2 className="color-blanco mt-5 peso-bold">NEWS</h2>
    //       <div className="d-flex flex-wrap justify-content-between pt-5 cards-novedades">
    //         {trabajos.slice(0, 3).map((trabajo, i) => (
    //           <NavLink to={"/news/" + trabajo.id} className="" key={i}>
    //             <div
    //               className="fondo-novedades-home"
    //               style={{
    //                 backgroundImage: `url(${trabajo.imagenMini})`,
    //               }}
    //             >
    //               <h6 className="peso-bold novedades-home-texto px-4 pt-3">
    //                 {trabajo.tituloEN}
    //               </h6>
    //               <h6 className="peso-regular interlineado novedades-home-texto px-4 pb-3 pt-0">
    //                 {trabajo.resumenEN}
    //               </h6>
    //             </div>
    //           </NavLink>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   <div id="NovedadesHome" className="padding-titulo d-xl-none d-block ">
    //     <div className="container">
    //       <div className="mx-3">
    //         <LineaNaranja />
    //         <h3 className="color-blanco mt-4 peso-bold">NEWS</h3>
    //       </div>
    //     </div>
    //     <div className="pt-5 pb-0">
    //       <Swiper
    //         effect={"coverflow"}
    //         grabCursor={true}
    //         centeredSlides={true}
    //         initialSlide={1}
    //         navigation={false}
    //         control={true}
    //         slidesPerView={"auto"}
    //         coverflowEffect={{
    //           rotate: 0,
    //           strech: 0,
    //           depth: 100,
    //           modifier: 2.5,
    //           slideShadows: false,
    //         }}
    //         modules={[EffectCoverflow, Navigation]}
    //         spaceBetween={-20} // o margin en cada elemento
    //         className="swiper-novedades"
    //       >
    //         {trabajos.slice(0, 3).map((trabajo, i) => (
    //           <SwiperSlide key={i}>
    //             <NavLink to={"/news/" + trabajo.id} className="">
    //               <div
    //                 className="fondo-novedades-home"
    //                 style={{
    //                   backgroundImage: `url(${trabajo.imagenMini})`,
    //                 }}
    //               >
    //                 <h6 className="peso-bold novedades-home-texto px-4 pt-3">
    //                   {trabajo.titulo}
    //                 </h6>
    //                 <h6 className="peso-regular interlineado novedades-home-texto px-4 pb-3 pt-0">
    //                   {trabajo.resumen}
    //                 </h6>
    //               </div>
    //             </NavLink>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>
    //   </div>
    // </div>
    <div className="pb-5">
      {/* ESCRITTORIO */}
      <div id="NovedadesHome" className=" padding-titulo d-none d-xl-block">
        <div className="container">
          <LineaNaranja />
          <h2 className="color-blanco mt-5 peso-bold">NOVEDADES</h2>
          <div className="d-flex flex-wrap justify-content-between pt-5 cards-novedades">
            <div>
              <NavLink
                to={"/news/dkz-concludes-2023-with-great-success"}
                className=""
              >
                <div
                  className="fondo-novedades-home"
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png")`,
                  }}
                >
                  <h6 className="peso-bold novedades-home-texto px-4 py-3">
                    DKZ CONCLUDES 2023 WITH GREAT SUCCESS
                  </h6>
                </div>
              </NavLink>
            </div>
            <div>
              <div>
                <NavLink
                  to={
                    "/news/dkz-celebrates-its-fourth-anniversary-and-disembarks-in-spain"
                  }
                  className=""
                >
                  <div
                    className="fondo-novedades-home"
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg")`,
                    }}
                  >
                    <h6 className="peso-bold novedades-home-texto px-4 py-3">
                      DKZ CELEBRATES ITS FOURTH ANNIVERSARY AND DISEMBARKS IN
                      SPAIN
                    </h6>
                  </div>
                </NavLink>
              </div>
            </div>
            <div>
              <div>
                <NavLink
                  to={
                    "/news/the-first-edition-of-the-advertising-forum-was-held-in-tucuman"
                  }
                  className=""
                >
                  <div
                    className="fondo-novedades-home"
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/dlzcbrqax/image/upload/v1686880310/Prensa/guille_y_fabri_MINI_gckvdn.jpg")`,
                    }}
                  >
                    <h6 className="peso-bold novedades-home-texto px-4 py-3">
                      THE FIRST EDITION OF THE ADVERTISING FORUM WAS HELD IN
                      TUCUMAN
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
                to={"/news/dkz-concludes-2023-with-great-success"}
                className=""
              >
                <div
                  className="fondo-novedades-home"
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/dlzcbrqax/image/upload/v1704326341/Captura_de_pantalla_2024-01-03_205820_vc0sq0.png)`,
                  }}
                >
                  <h6 className="peso-bold novedades-home-texto px-4 py-3">
                    DKZ CONCLUDES 2023 WITH GREAT SUCCESS
                  </h6>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink
                to={
                  "/news/dkz-celebrates-its-fourth-anniversary-and-disembarks-in-spain"
                }
                className=""
              >
                <div
                  className="fondo-novedades-home"
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg)`,
                  }}
                >
                  <h6 className="peso-bold novedades-home-texto px-4 py-3">
                    DKZ CELEBRATES ITS FOURTH ANNIVERSARY AND DISEMBARKS IN
                    SPAIN
                  </h6>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink
                to={
                  "/news/the-first-edition-of-the-advertising-forum-was-held-in-tucuman"
                }
                className=""
              >
                <div
                  className="fondo-novedades-home"
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/dlzcbrqax/image/upload/v1686880310/Prensa/guille_y_fabri_MINI_gckvdn.jpg)`,
                  }}
                >
                  <h6 className="peso-bold novedades-home-texto px-4 pt-3">
                    THE FIRST EDITION OF THE ADVERTISING FORUM WAS HELD IN
                    TUCUMAN
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
