import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-bootstrap/Modal";
import { Navigation } from "swiper";
import { Carousel, Image, Spinner } from "react-bootstrap";
import { Autoplay } from "swiper";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const SitiosWebDetallados = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();
  const params = useParams();
  const [trabajos, setTrabajos] = useState({});
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const getTrabajos = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=361671608&single=true&output=csv"
    );

    const trabajos = Papa.parse(response.data, { header: true });
    const trabajo1 = trabajos.data;

    const trabajoFiltrado = trabajo1.filter(
      (trabajo) => trabajo.id === params.id
    );
    setTrabajos(trabajoFiltrado[0]);
    setLoading(false);
  };
  useEffect(() => {
    getTrabajos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    titulo,
    descripcion,
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
    link,
  } = trabajos;

  if (imagen4 !== "") {
    var cantcard = 4;
  } else if (imagen3 !== "") {
    var cantcard = 3;
  } else {
    var cantcard = 2;
  }

  return (
    <div className="color-negro-fondo text-center">
      {loading ? (
        <div className="text-white spinner ">
          <Spinner
            className="fs-1"
            animation="border"
            role="status"
            variant="light"
          ></Spinner>
        </div>
      ) : (
        <div className="container">
          <div className="d-flex justify-content-center d-none d-md-block">
            <h2 className="text-white peso-bold pt-4 px-4">{titulo}</h2>
          </div>

          <div className="d-flex justify-content-center d-block d-md-none">
            <h3 className="text-white peso-bold pt-4  px-4">{titulo}</h3>
          </div>

          <Swiper
            navigation={width <= 500 ? true : imagen5 !== "" ? true : false}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3600,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={
              width <= 500
                ? 1.5
                : width <= 992
                ? cantcard - 1.5
                : width <= 1200
                ? cantcard - 1
                : cantcard
            }
            className="my-4"
          >
            {imagen1 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(0);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex flex-column justify-content-between ">
                  <img src={imagen1} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
            {imagen2 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(1);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <img src={imagen2} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
            {imagen3 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(2);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <img src={imagen3} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
            {imagen4 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(3);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <img src={imagen4} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
            {imagen5 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(4);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <img src={imagen5} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
            {imagen6 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(5);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <img src={imagen6} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
            {imagen7 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(6);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <img src={imagen7} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
            {imagen8 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(7);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <img src={imagen8} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
            {imagen9 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(8);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <img src={imagen9} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
            {imagen10 === "" ? (
              ""
            ) : (
              <SwiperSlide
                onClick={() => {
                  setShow(true);
                  setIndex(9);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <img src={imagen10} alt={titulo} />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
          <Modal
            className="modal-casos"
            show={show}
            onHide={() => setShow(false)}
            size="lg"
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
                  <Carousel.Item>
                    <Image
                      className=""
                      src={imagen1}
                      alt="Imagen no encontrada"
                      fluid
                    />
                  </Carousel.Item>
                  {imagen2 === "" ? (
                    ""
                  ) : (
                    <Carousel.Item className="">
                      <Image
                        className=""
                        src={imagen2}
                        alt="Imagen no encontrada"
                        fluid
                      />
                    </Carousel.Item>
                  )}
                  {imagen3 === "" ? (
                    ""
                  ) : (
                    <Carousel.Item className="">
                      <Image
                        className=""
                        src={imagen3}
                        alt="Imagen no encontrada"
                        fluid
                      />
                    </Carousel.Item>
                  )}
                  {imagen4 === "" ? (
                    ""
                  ) : (
                    <Carousel.Item className="">
                      <Image
                        className=""
                        src={imagen4}
                        alt="Imagen no encontrada"
                        fluid
                      />
                    </Carousel.Item>
                  )}
                  {imagen5 === "" ? (
                    ""
                  ) : (
                    <Carousel.Item className="">
                      <Image
                        className=""
                        src={imagen5}
                        alt="Imagen no encontrada"
                        fluid
                      />
                    </Carousel.Item>
                  )}
                  {imagen6 === "" ? (
                    ""
                  ) : (
                    <Carousel.Item className="">
                      <Image
                        className=""
                        src={imagen6}
                        alt="Imagen no encontrada"
                        fluid
                      />
                    </Carousel.Item>
                  )}
                  {imagen7 === "" ? (
                    ""
                  ) : (
                    <Carousel.Item className="">
                      <Image
                        className=""
                        src={imagen7}
                        alt="Imagen no encontrada"
                        fluid
                      />
                    </Carousel.Item>
                  )}
                  {imagen8 === "" ? (
                    ""
                  ) : (
                    <Carousel.Item className="">
                      <Image
                        className=""
                        src={imagen8}
                        alt="Imagen no encontrada"
                        fluid
                      />
                    </Carousel.Item>
                  )}
                  {imagen9 === "" ? (
                    ""
                  ) : (
                    <Carousel.Item className="">
                      <Image
                        className=""
                        src={imagen9}
                        alt="Imagen no encontrada"
                        fluid
                      />
                    </Carousel.Item>
                  )}
                  {imagen10 === "" ? (
                    ""
                  ) : (
                    <Carousel.Item className="">
                      <Image
                        className=""
                        src={imagen10}
                        alt="Imagen no encontrada"
                        fluid
                      />
                    </Carousel.Item>
                  )}
                </Carousel>
              </div>
            </Modal.Body>
          </Modal>
          <div className="text-white peso-regular my-5 text-start wrap-pre d-none d-md-block ">
            <h5 className="peso-regular">{descripcion}</h5>
          </div>
          <div className="text-white peso-regular my-5 text-start wrap-pre d-md-none d-block ">
            <h6 className="peso-regular mx-3">{descripcion}</h6>
          </div>
          <div className="d-sm-flex d-block justify-content-center align-items-center mb-5">
            <div className="d-none d-md-block">
              <h4 className="text-white d-flex justify-content-center mb-0">
                Mira un poco mas de este proyecto:
              </h4>
              <a
                className="ps-0 ps-sm-2  peso-bold text-decoration-none"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="peso-bold color-naranja ">Click Here!</h3>
              </a>
            </div>
            <div className="d-md-none d-block">
              <h5 className="text-white d-flex justify-content-center mb-0">
                Mira un poco mas de este proyecto:
              </h5>
              <a
                className="ps-0 ps-sm-2 tamaño-medio peso-bold text-decoration-none"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="color-naranja peso-bold py-4">Click Here!</h4>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
