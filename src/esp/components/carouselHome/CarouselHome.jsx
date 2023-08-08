import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import LineaNaranja from "../../components/LineaNaranja";
import BtnContact from "../../components/BtnContact";
import "../carouselHome/carouselHome.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";

import { Image } from "react-bootstrap";

import general from "../../assets/img/guille-con-letra.png";
import operativo from "../../assets/img/nacho-con-letra.png";
import directora from "../../assets/img/laura-con-letra.png";

import director from "../../assets/img/director.png";
import directorCelu from "../../assets/img/director-celu.png";

export default function CarouselHome() {
  return (
    <div className="container-fluid ">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper d-none d-md-block"
      >
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <LineaNaranja />
              <div>
                <div className="texto-carousel ">
                  <h1 className="peso-bold ">
                    BIENVENIDOS <br /> A LA REVOLUCIÓN <br />
                    DIGITAL
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    BIENVENIDOS <br /> A LA REVOLUCIÓN <br /> DIGITAL
                  </h4>
                </div>
                <div className="padding-btn-contactanos ">
                  <BtnContact />
                </div>
              </div>
            </div>
            <div className="carousel-imagenes ">
              <Image
                className=""
                src={general}
                fluid
                alt="Guille - Director General"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <LineaNaranja />
              <div>
                <div className="texto-carousel ">
                  <h1 className="peso-bold ">
                    TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE
                  </h4>
                </div>
                <div className="padding-btn-contactanos ">
                  <BtnContact />
                </div>
              </div>
            </div>

            <div className="carousel-imagenes ">
              <Image
                className=""
                src={operativo}
                fluid
                alt="Nacho - Director Operativo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <LineaNaranja />
              <div>
                <div className="texto-carousel ">
                  <h1 className="peso-bold ">
                    SABEMOS <br /> LO QUE HACEMOS <br />
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    SABEMOS <br /> LO QUE HACEMOS <br />
                  </h4>
                </div>

                <div className="padding-btn-contactanos ">
                  <BtnContact />
                </div>
              </div>
            </div>

            <div className="carousel-imagenes move-left">
              <Image
                className=""
                src={directora}
                fluid
                alt="Laura - Directora de Proyectos"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <LineaNaranja />
              <div>
                <div className="texto-carousel ">
                  <h1 className="peso-bold ">
                    SOMOS ENERGÍA
                    <br /> SOMOS <br /> DKZ
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    SOMOS ENERGÍA
                    <br /> SOMOS <br /> <span>DKZ</span>
                  </h4>
                </div>

                <div className="padding-btn-contactanos ">
                  <BtnContact />
                </div>
              </div>
            </div>

            <div className="carousel-imagenes move-left">
              <Image
                className=""
                src={director}
                fluid
                alt="Fabri - Director Creativo"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Mobile */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper d-md-none d-block "
      >
        <SwiperSlide>
          <div className="ms-3">
            <LineaNaranja />
            <h3 className="peso-bold mb-1">
              BIENVENIDOS <br /> A LA REVOLUCIÓN
              <br /> DIGITAL
            </h3>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <div className="text-center">
                <Image
                  className="w-75"
                  src={general}
                  fluid
                  alt="Guille - Director General"
                />
              </div>
              <div className="py-4  d-flex justify-content-center">
                <BtnContact />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ms-3">
            <LineaNaranja />
            <h3 className="peso-bold">
              TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE
            </h3>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <div className="text-center">
                <Image
                  className="w-75"
                  src={operativo}
                  fluid
                  alt="Nacho - Director Creativo"
                />
              </div>
              <div className="py-4  d-flex justify-content-center">
                <BtnContact />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ms-3">
            <LineaNaranja />
            <h3 className="peso-bold">
              SABEMOS <br /> LO QUE HACEMOS <br />
            </h3>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <div className="text-center">
                <Image
                  className="w-75"
                  src={directora}
                  fluid
                  alt="Laura - Directora de Proyectos"
                />
              </div>
              <div className="py-4  d-flex justify-content-center">
                <BtnContact />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ms-3">
            <LineaNaranja />
            <h3 className="peso-bold">
              SOMOS ENERGÍA
              <br /> SOMOS
              <br /> DKZ
            </h3>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <div className="text-center">
                <Image
                  className="w-100"
                  src={directorCelu}
                  fluid
                  alt="Fabri - Director Creativo"
                />
              </div>
              <div className="btn-margen d-flex justify-content-center">
                <BtnContact />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
