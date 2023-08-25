import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./cabezasEN.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "react-bootstrap";
import general from "../../../../esp/assets/img/ceo.png";
import operativo from "../../../../esp/assets/img/nacho.png";
import directora from "../../../../esp/assets/img/directora.png";
import creativo from "../../../../esp/assets/img/fabri-sin-letras.png";
import LineaNaranja from "../../../../esp/components/LineaNaranja";

export const CabezasSliderEN = () => {
  return (
    <div className="container">
      <div className="mx-3">
        <div className="d-md-none d-block ">
          <LineaNaranja />
        </div>
        <div>
          <h3 className="peso-bold py-4">THE TEAM'S HEADS</h3>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="cartas-slider">
          <Image src={general} alt="Guillermo Sojo" fluid />
          <div className="py-3">
            <h5 className="peso-bold py-1"> Guillermo Sojo</h5>
            <h6 className="peso-regular py-1">General Manager</h6>
          </div>
          <div className="py-3 color-negroclaro-fondo">
            <h5 className="peso-bold ms-2"> +25</h5>
            <h6 className="peso-bold ms-2">PERSONS</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image className="" src={operativo} alt="Nacho Pintos" fluid />
          <div className="py-3">
            <h5 className="peso-bold py-1"> Nacho Pintos</h5>
            <h6 className="peso-regular py-1"> Operational Manager</h6>
          </div>
          <div className="py-3 color-negroclaro-fondo  ">
            <div className="container">
              <h5 className="peso-bold ms-2"> +15</h5>
              <h6 className="peso-bold ms-2">PLANNERS</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image className="" src={directora} alt="Laura Chanta" fluid />
          <div className="py-3">
            <h5 className="peso-bold py-1"> Laura Chanta</h5>
            <h6 className="peso-regular py-1"> Project Manager</h6>
          </div>
          <div className="py-3 color-negroclaro-fondo  ">
            <h5 className="peso-bold ms-2"> +5 </h5>
            <h6 className="peso-bold ms-2">ACCOUNT EXECUTIVES</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image className="" src={creativo} alt="Fabricio Meriglio" fluid />
          <div className="py-3">
            <h5 className="peso-bold py-1"> Fabricio Meriglio</h5>
            <h6 className="peso-regular py-1"> Creative Manager</h6>
          </div>
          <div className="py-3 color-negroclaro-fondo  ">
            <h5 className="peso-bold ms-2"> +5</h5>
            <h6 className="peso-bold ms-2">PRODUCERS</h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
