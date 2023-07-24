import React from "react";
import LineaNaranja from "../../LineaNaranja";
import "./publicidadContenido.css";
import BotonContactanos from "../../BotonContactanos";
import { Card, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import publi from "../../../assets/img/publi.png";
import publi2 from "../../../assets/img/publi2.png";

import publiCel from "../../../assets/img/publi-cel.png";
import publiCel2 from "../../../assets/img/publi-cel2.png";
import publiCel3 from "../../../assets/img/publi-cel3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow } from "swiper";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function PublicidadContenido() {
  return (
    <div className="color-negro-fondo padding-titulo">
      <div className="container d-lg-block d-none">
        <LineaNaranja />
        <div className="">
          <h1 className="peso-bold mb-4">PUBLICIDAD TRADICIONAL</h1>
          <h4 className="pt-5 pb-5 mb-3 peso-regular">
            Hacemos que tu marca llegue a públicos masivos por diferentes
            medios: prensa, televisión, radio, vallas, sextuples, autobuses y
            pantallas led gigantes. Contamos con los mejores convenios y una
            agenda de medios de máximo alcance y variabilidad de acuerdo a
            diferentes presupuestos
          </h4>
        </div>
        <div className="d-flex mb-5 pb-4">
          <Card className="carta-trans-servicios me-4">
            <Card.Body className="d-flex align-items-start py-0 ps-0 pe-4">
              <Card.Text className="">
                <h4 className="peso-bold interlineado3">
                  Es de vital importancia a la hora de hacer un posicionamiento
                  de marca, conjugar las diferentes estrategias publicitarias
                  que se hagan de manera digital, con estas acciones de
                  publicidad offline tradicional.
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="carta-trans-servicios me-4">
            <Card.Body className="d-flex align-items-start py-0 pe-0 ps-4">
              <Card.Text className="">
                <h4 className="peso-regular interlineado3">
                  Por medio de este proceso estratégico, buscamos  mejorar la
                  capacidad de elección, simplificar los procesos de compra y
                  estimular la innovación comercial.
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Swiper
          navigation={false}
          modules={[Navigation]}
          className="swiper-publicidad"
        >
          <SwiperSlide>
            <div className="d-flex mb-5">
              <Image
                className="w-50 pe-4"
                src={publi}
                alt="Imagen Publicidad"
                fluid
              />
              <Image
                className="w-50 ps-4"
                src={publi2}
                alt="Imagen Publicidad"
                fluid
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* CELULAR */}
      <div className="d-block d-lg-none">
        <div className="container">
          <div className="mx-3">
            <LineaNaranja />
            <div className="pt-4">
              <h3 className="peso-bold mb-4">PUBLICIDAD TRADICIONAL</h3>
              <h6 className="pt-3 pb-4 mb-3 peso-regular interlineado">
                Hacemos que tu marca llegue a públicos masivos por diferentes
                medios: prensa, televisión, radio, vallas, sextuples, autobuses
                y pantallas led gigantes. Contamos con los mejores convenios y
                una agenda de medios de máximo alcance y variabilidad de acuerdo
                a diferentes presupuestos
              </h6>
            </div>
            <Card className="carta-trans-servicios mb-5">
              <Card.Body className="d-flex align-items-start p-0">
                <Card.Text className="">
                  <h6 className="peso-bold interlineado">
                    Es de vital importancia a la hora de hacer un
                    posicionamiento de marca, conjugar las diferentes
                    estrategias publicitarias que se hagan de manera digital,
                    con estas acciones de publicidad offline tradicional.
                  </h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
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
          className="swiper-publicidad-cel"
        >
          <SwiperSlide>
            <div className="">
              <Image className="" src={publi} alt="Image Publicidad" fluid />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image className="" src={publi2} alt="Image Publicidad" fluid />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="container mt-3 pt-4">
          <div className="mx-3">
            <Card className="carta-trans-servicios">
              <Card.Body className="d-flex align-items-start p-0">
                <Card.Text className="">
                  <h6 className="peso-regular interlineado">
                    Por medio de este proceso estratégico, buscamos mejorar la
                    capacidad de elección, simplificar los procesos de compra y
                    estimular la innovación comercial.
                  </h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center ">
        <Link
          className="text-decoration-none text-white d-none d-lg-block pt-5 pb-5"
          to="/servicios"
        >
          <h3 className="peso-bold">{"< < Volver"}</h3>
        </Link>
        <Link
          className="text-decoration-none text-white d-lg-none d-block pt-5 pb-4"
          to="/servicios"
        >
          <h4 className="peso-bold">{"< < Volver"}</h4>
        </Link>
      </div>
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanos />
      </div>
    </div>
  );
}
