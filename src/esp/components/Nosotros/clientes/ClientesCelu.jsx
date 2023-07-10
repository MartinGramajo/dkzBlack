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
import estancia from "../../../assets/logos/estancia.jpg";

import urt from "../../../assets/logos/urt.jpg";
import seven from "../../../assets/logos/seven.jpg";
import sancor from "../../../assets/logos/sancor.jpg";
import aguila from "../../../assets/logos/penon.jpg";
import tbc from "../../../assets/logos/tbc.jpg";

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
                        className="mx-5 pt-4"
                        src={caja}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={speed}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={gaceta}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={schilman}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={patagonia}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={uniber}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={gob}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={lemons}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={tucutanos}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={estancia}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={urt}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={seven}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={sancor}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={aguila}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
                <SwiperSlide className="cartas-slider">
                    <Image
                        className="mx-5 pt-4"
                        src={tbc}
                        alt="caja popular"
                        fluid
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
