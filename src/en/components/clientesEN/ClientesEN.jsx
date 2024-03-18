import React from "react";
import "../clientesEN/clientes.css";
import LineaNaranja from "../../../esp/components/LineaNaranja";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "react-bootstrap";
import caja from "../../../esp/assets/logos/cajapopular.jpg";
import speed from "../../../esp/assets/logos/speed.jpg";
import gaceta from "../../../esp/assets/logos/lagaceta.jpg";
import schilman from "../../../esp/assets/logos/schilman.jpg";
import patagonia from "../../../esp/assets/logos/patagonia.jpg";
import uniber from "../../../esp/assets/logos/uniber.jpg";
import gob from "../../../esp/assets/logos/gobtucuman.jpg";
import lemons from "../../../esp/assets/logos/lemons.jpg";
import tucutanos from "../../../esp/assets/logos/tucutanos.jpg";
import urt from "../../../esp/assets/logos/urt.jpg";
import seven from "../../../esp/assets/logos/seven.jpg";
import sancor from "../../../esp/assets/logos/sancor.jpg";
import aguila from "../../../esp/assets/logos/penon.jpg";
import tbc from "../../../esp/assets/logos/tbc.jpg";
import argenta from "../../../esp/assets/logos/DoñaArgentina.png";
import laestancia from "../../../esp/assets/logos/La Estancia.png";
import torres from "../../../esp/assets/logos/LasTorres.png";
import paz from "../../../esp/assets/logos/Paztour.png";
import real from "../../../esp/assets/logos/WeReal.png";

import polo from "../../../esp/assets/logos/polosalud.png";
import abanco from "../../../esp/assets/logos/abanco.png";

import abanco250 from "../../../esp/assets/logos/abancos250.png";
import cartagena250 from "../../../esp/assets/logos/cartagena250.png";
import wereal250 from "../../../esp/assets/logos/wereal250.png";
import polo250 from "../../../esp/assets/logos/polo250.png";
import roma250 from "../../../esp/assets/logos/roma250.png";

import dilema250 from "../../../esp/assets/logos/dilema250.png";
import fecovita250 from "../../../esp/assets/logos/fecovita250.png";
import mondelez250 from "../../../esp/assets/logos/mondelez250.png";
import toro250 from "../../../esp/assets/logos/toro250.png";

import cp250 from "../../../esp/assets/logos/cajapopular250.png";
import sancor250 from "../../../esp/assets/logos/sancor250.png";
import speed250 from "../../../esp/assets/logos/speed250.png";
import toka250 from "../../../esp/assets/logos/toka250.png";

export default function ClientesEN() {
  return (
    <div>
      <div className="container padding-titulo">
        <div>
          <LineaNaranja />
        </div>
        <div>
          <h2 className="peso-bold pb-5">CUSTOMERS</h2>
        </div>
      </div>
      <div className=" d-lg-block d-none ">
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
                className="py-3  icono-carousel-clientes"
                src={abanco250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={cartagena250}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
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
      </div>

      {/* celular */}
      <div className="d-block d-lg-none">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
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
              className="mx-5  icono-carousel-clientes py-4"
              src={abanco250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5  icono-carousel-clientes py-4"
              src={cartagena250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5  icono-carousel-clientes py-4"
              src={wereal250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5  icono-carousel-clientes py-4"
              src={polo250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 icono-carousel-clientes py-4"
              src={roma250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 icono-carousel-clientes py-4"
              src={dilema250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider ">
            <Image
              className="mx-5 icono-carousel-clientes py-4"
              src={fecovita250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5  icono-carousel-clientes py-4"
              src={mondelez250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 icono-carousel-clientes py-4"
              src={toro250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5  icono-carousel-clientes py-4"
              src={cp250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 icono-carousel-clientes py-4"
              src={sancor250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5  icono-carousel-clientes py-4"
              src={toka250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5  icono-carousel-clientes py-4"
              src={speed250}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
