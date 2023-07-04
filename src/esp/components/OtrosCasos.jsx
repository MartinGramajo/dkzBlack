import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper";
import { Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function OtrosCasos({ trabajos, tipo }) {
  const location = useLocation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log("se cambio el contador", location.pathname);
    if (count === 1) {
      window.location.reload();
    }
  }, [location]);

  return (
    <div>
      <div className="container">
        <h2 className="peso-bold pt-5 d-none d-md-block">CASOS</h2>
        <h3 className="mx-3 peso-bold pt-5 d-md-none d-block">CASOS</h3>
      </div>
      <div className="d-none d-xl-block container mt-5">
        <div className="d-flex flex-wrap justify-content-between py-5 ">
          {trabajos.slice(0, 3).map((trabajo, i) => (
            <div className="fondo-naranja-casos mb-5" key={i}>
              <Link to={"/" + tipo + "/" + trabajo.id}>
                <div className="fondo-casos">
                  <Image
                    className="w-100 imagen-cover"
                    src={trabajo.imagenMini}
                    alt={trabajo.titulo}
                    fluid
                  />
                </div>
              </Link>
              <div
                className={
                  trabajo.titulo.length > 26
                    ? "texto-casos px-4"
                    : "texto-casos px-4 pt-4"
                }
              >
                <h4 className="peso-bold interlineado2 pb-2">
                  {trabajo.titulo}
                </h4>
                <h6 className="peso-regular interlineado2">
                  {trabajo.categorias}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-xl-none d-block ">
        <div className="pt-5 pb-3">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={1}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              strech: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            spaceBetween={0} // o margin en cada elemento
            className="swiper-casos"
          >
            {trabajos.slice(0, 3).map((trabajo, i) => (
              <SwiperSlide key={i}>
                <div className="fondo-naranja-casos mb-5 " key={trabajo.id}>
                  <Link to={"/" + tipo + "/" + trabajo.id}>
                    <Image
                      className="fondo-casos w-100 imagen-cover"
                      src={trabajo.imagenMini}
                      alt={trabajo.titulo}
                      fluid
                    />
                  </Link>
                  <div
                    className={
                      trabajo.titulo.length > 26
                        ? "texto-casos px-4"
                        : "texto-casos px-4 pt-4"
                    }
                  >
                    <h4 className="peso-bold interlineado2 pb-2">
                      {trabajo.titulo}
                    </h4>
                    <h6 className="peso-regular interlineado2">
                      {trabajo.categorias}
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
