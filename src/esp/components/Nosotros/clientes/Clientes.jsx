import React from "react";
import "../clientes/clientes.css";
import LineaNaranja from "../../LineaNaranja";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "react-bootstrap";
import caja from "../../../assets/logos/cajapopular.jpg";
import speed from "../../../assets/logos/speed.jpg";
import gaceta from "../../../assets/logos/lagaceta.jpg";
import schilman from "../../../assets/logos/schilman.jpg";
import patagonia from "../../../assets/logos/patagonia.jpg";
import uniber from "../../../assets/logos/uniber.jpg";
import gob from "../../../assets/logos/gobtucuman.jpg";
import lemons from "../../../assets/logos/lemons.jpg";
import tucutanos from "../../../assets/logos/tucutanos.jpg";
import urt from "../../../assets/logos/urt.jpg";
import seven from "../../../assets/logos/seven.jpg";
import sancor from "../../../assets/logos/sancor.jpg";
import aguila from "../../../assets/logos/penon.jpg";
import tbc from "../../../assets/logos/tbc.jpg";
import argenta from "../../../assets/logos/DoñaArgentina.png";
import laestancia from "../../../assets/logos/La Estancia.png";
import torres from "../../../assets/logos/LasTorres.png";
import paz from "../../../assets/logos/Paztour.png";
import real from "../../../assets/logos/WeReal.png";
import abanco from "../../../assets/logos/abanco.png";
import polo from "../../../assets/logos/polosalud.png";

import abanco250 from "../../../assets/logos/abancos250.png";
import cartagena250 from "../../../assets/logos/cartagena250.png";
import wereal250 from "../../../assets/logos/wereal250.png";
import polo250 from "../../../assets/logos/polo250.png";
import roma250 from "../../../assets/logos/roma250.png";

import dilema250 from "../../../assets/logos/dilema250.png";
import fecovita250 from "../../../assets/logos/fecovita250.png";
import mondelez250 from "../../../assets/logos/mondelez250.png";
import toro250 from "../../../assets/logos/toro250.png";

import cp250 from "../../../assets/logos/cajapopular250.png";
import sancor250 from "../../../assets/logos/sancor250.png";
import speed250 from "../../../assets/logos/speed250.png";
import toka250 from "../../../assets/logos/toka250.png";

export default function Clientes() {
  return (
    <div>
      <div className="container padding-titulo">
        <div>
          <LineaNaranja />
        </div>
        <div>
          <h2 className="peso-bold pb-5">CLIENTES</h2>
        </div>
      </div>
      <>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide className="bg-white">
            <div className="d-flex justify-content-center">
              <Image
                className="py-3 icono-carousel-clientes"
                src={abanco250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3 icono-carousel-clientes"
                src={cartagena250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3 icono-carousel-clientes"
                src={wereal250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={polo250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={roma250}
                alt="Aumenta tus ventas"
                fluid
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white">
            <div className="d-flex justify-content-center">
              <Image
                className="py-3 icono-carousel-clientes mx-5"
                src={dilema250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={fecovita250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={mondelez250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={toro250}
                alt="Aumenta tus ventas"
                fluid
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white">
            <div className="d-flex justify-content-center">
              <Image
                className="py-3 icono-carousel-clientes"
                src={cp250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={sancor250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={toka250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={speed250}
                alt="Aumenta tus ventas"
                fluid
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
