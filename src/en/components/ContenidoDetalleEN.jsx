import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow } from "swiper";
import { Carousel, Image, Modal } from "react-bootstrap";
import LineaNaranja from "../../esp/components/LineaNaranja";

export default function ContenidoDetalleEN({ trabajos }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const {
    tituloEN,
    resumen,
    categoriasEN,
    descripcionEN,
    imagenMini,
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10,
    video1,
    video2,
  } = trabajos;
  const arrayImagenes = [
    {
      id: 1,
      imagen: imagen1,
    },
    {
      id: 2,
      imagen: imagen2,
    },
    {
      id: 3,
      imagen: imagen3,
    },
    {
      id: 4,
      imagen: imagen4,
    },
    {
      id: 5,
      imagen: imagen5,
    },
    {
      id: 6,
      imagen: imagen6,
    },
    {
      id: 7,
      imagen: imagen7,
    },
    {
      id: 8,
      imagen: imagen8,
    },
    {
      id: 9,
      imagen: imagen9,
    },
    {
      id: 10,
      imagen: imagen10,
    },
  ];
  if (imagen10 !== "") {
    var cantImagenes = 10;
  } else if (imagen9 !== "") {
    var cantImagenes = 9;
  } else if (imagen8 !== "") {
    var cantImagenes = 8;
  } else if (imagen7 !== "") {
    var cantImagenes = 7;
  } else if (imagen6 !== "") {
    var cantImagenes = 6;
  } else if (imagen5 !== "") {
    var cantImagenes = 5;
  } else if (imagen4 !== "") {
    var cantImagenes = 4;
  } else if (imagen3 !== "") {
    var cantImagenes = 3;
  } else if (imagen2 !== "") {
    var cantImagenes = 2;
  } else if (imagen1 !== "") {
    var cantImagenes = 1;
  } else {
    var cantImagenes = 0;
  }
  return (
    <div>
      <div className="color-negro-fondo">
        {video1 === "" ? (
          ""
        ) : (
          <div className="color-naranja-fondo mb-5 mb-lg-0">
            <div
              className={show2 ? "tamaño-video fusion-video" : "tamaño-video"}
            >
              <ReactPlayer
                url={video1}
                onPlay={() => {
                  setShow2(false);
                }}
                onPause={() => {
                  setShow2(true);
                }}
                loop
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
          </div>
        )}
        <div className="container d-none d-lg-block pb-5">
          <div
            className={
              video1 === "" ? "" : show2 ? "titulo-caso-detallado" : "d-none"
            }
          >
            <h1 className="peso-bold sin-sombreado titulo-caso-principal">
              {tituloEN}
            </h1>
            <h1 className="sin-sombreado pb-2">{categoriasEN}</h1>
          </div>
          <LineaNaranja />
          {descripcionEN === "" ? (
            ""
          ) : (
            <div>
              <h2 className="peso-bold pb-4"> WHAT DID WE DO?</h2>
              <pre className="pb-5 wrap-pre peso-regular fs-24">
                {descripcionEN}
              </pre>
            </div>
          )}
          {cantImagenes < 2 ? (
            ""
          ) : (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={false}
              initialSlide={0}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 0,
                strech: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              modules={[EffectCoverflow]}
              spaceBetween={50}
              className="swiper-casos"
            >
              {arrayImagenes.slice(0, cantImagenes).map((imagenes, i) => (
                <SwiperSlide key={i} className="">
                  <div className="d-flex mb-5 h-100">
                    <Image
                      className="imagen-cover w-100"
                      onClick={() => {
                        setShow(true);
                        setIndex(i);
                      }}
                      src={imagenes.imagen}
                      alt="Imagen Publicidad"
                      fluid
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        {/* CELULAR */}
        <div className="d-lg-none d-block">
          <div className="container">
            <div className="mx-3">
              <h3 className="peso-bold"> {tituloEN}</h3>
              <h3> {categoriasEN}</h3>
              <LineaNaranja />
              <h5 className="peso-bold pb-4 mt-4"> WHAT DID WE DO?</h5>
              <pre className="pb-5 wrap-pre peso-regular fs-16">
                {descripcionEN}
              </pre>
            </div>
          </div>
          {cantImagenes < 2 ? (
            ""
          ) : (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              initialSlide={0}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 0,
                strech: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              modules={[EffectCoverflow]}
              spaceBetween={-25}
              className="swiper-casos-cel"
            >
              {arrayImagenes.slice(0, cantImagenes).map((imagenes, i) => (
                <SwiperSlide key={i}>
                  <div className="d-flex mb-5 mx-4 h-100">
                    <Image
                      onClick={() => {
                        setShow(true);
                        setIndex(i);
                      }}
                      className="imagen-cover w-100"
                      src={imagenes.imagen}
                      alt="Imagen Publicidad"
                      fluid
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
      <Modal
        className="modal-casos d-flex justify-content-center align-items-center"
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        centered
      >
        <Modal.Body>
          <div>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              controls={true}
              className="carousel-casos"
              interval={null}
            >
              {arrayImagenes.slice(0, cantImagenes).map((imagenes, i) => (
                <Carousel.Item>
                  <Image
                    className=""
                    src={imagenes.imagen}
                    alt="Imagen no encontrada"
                    fluid
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
