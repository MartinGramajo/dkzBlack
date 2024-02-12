import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./clientes.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "react-bootstrap";
import LineaNaranja from "../../LineaNaranja";

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

export const ClientesCelu = () => {
  return (
    <div>
      <div className="d-md-none d-block ">
        <div className="container ">
          <div className="mx-3">
            <LineaNaranja />
            <div>
              <h3 className="peso-bold py-4">CLIENTES</h3>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-white"
      >
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={caja}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={speed}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={gaceta}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={schilman}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={patagonia}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={uniber}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={gob}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={lemons}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={tucutanos}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={laestancia}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={urt}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={seven}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={sancor}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={aguila}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={tbc}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={argenta}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={torres}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={paz}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className="mx-5 py-4 icono-carousel-clientes"
            src={real}
            alt="caja popular"
            fluid
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
