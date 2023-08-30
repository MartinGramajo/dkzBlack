import React from "react";
import "../carouselHomeEN/carouselHomeEN.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Image } from "react-bootstrap";
import LineaNaranja from "../../../esp/components/LineaNaranja";
// import required modules
import { Autoplay, Navigation } from "swiper";

// import LineaNaranja from "../../components/LineaNaranja";
import BtnContactEN from "../../components/BtnContactEN";

import general from "../../../esp/assets/img/guille-con-letra.png";
import operativo from "../../../esp/assets/img/nacho-con-letra.png";
import directora from "../../../esp/assets/img/laura-con-letra.png";
import director from "../../../esp/assets/img/director.png";
import directorCelu from "../../../esp/assets/img/director-celu.png";

export const CarouselHomeEN = () => {
  return (
    <div className="container-fluid color-negro-fondo">
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
                    WELCOME <br />
                    TO THE REVOLUTION <br />
                    DIGITAL
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    WELCOME <br />
                    TO THE REVOLUTION <br /> DIGITAL
                  </h4>
                </div>
                <div className="padding-btn-contactanos ">
                  <BtnContactEN />
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
                    YOUR IDEAS <br /> WHERE YOU NEVER <br /> YOU IMAGINED
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    YOUR IDEAS <br /> WHERE YOU NEVER <br /> YOU IMAGINED
                  </h4>
                </div>
                <div className="padding-btn-contactanos ">
                  <BtnContactEN />
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
                    WE KNOW <br /> WHAT WE DO
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    WE KNOW <br /> WHAT WE DO
                  </h4>
                </div>

                <div className="padding-btn-contactanos ">
                  <BtnContactEN />
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
                    WE ARE ENERGY
                    <br /> WE ARE <br /> DKZ
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    WE ARE ENERGY
                    <br /> WE ARE <br /> <span>DKZ</span>
                  </h4>
                </div>

                <div className="padding-btn-contactanos ">
                  <BtnContactEN />
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
              WELCOME <br />
              TO THE REVOLUTION
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
                <BtnContactEN />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ms-3">
            <LineaNaranja />
            <h3 className="peso-bold">
              YOUR IDEAS <br /> WHERE YOU NEVER <br /> YOU IMAGINED
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
                <BtnContactEN />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ms-3">
            <LineaNaranja />
            <h3 className="peso-bold">
              WE KNOW <br /> WHAT WE DO
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
                <BtnContactEN />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ms-3">
            <LineaNaranja />
            <h3 className="peso-bold">
              WE ARE ENERGY
              <br /> WE ARE
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
                <BtnContactEN />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
