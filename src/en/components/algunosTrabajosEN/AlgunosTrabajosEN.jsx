import axios from "axios";
import Papa from "papaparse";
import React from "react";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { EffectCoverflow } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LineaNaranja from "../../../esp/components/LineaNaranja";

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

export default function AlgunosTrabajosEN() {
    const { width } = useWindowDimensions();
    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
        const getTrabajos = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=2150379&single=true&output=csv"
            );
            const imagenes = Papa.parse(response.data, { header: true });
            setTrabajos(imagenes.data);
        };
        getTrabajos();
    }, []);

    return (
        <div className="padding-abajo">
            <div id="AlgunosTrabajos" className="container">
                <div className="padding-titulo mx-3 mx-lg-0">
                    <LineaNaranja />
                    <h2 className="color-blanco mt-4 peso-bold d-sm-block d-none">
                        SOME OF OUR WORK
                    </h2>
                    <h3 className="color-blanco mt-4 peso-bold d-block d-sm-none">
                        CASES
                    </h3>
                </div>
            </div>
            <div className="pb-lg-5 pb-0 pt-5">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    initialSlide={2}
                    control={true}
                    slidesPerView={"auto"}
                    navigation={false}
                    coverflowEffect={{
                        rotate: 0,
                        strech: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    spaceBetween={width >= 576 ? 100 : 0} // o margin en cada elemento
                    className="swiper-trabajos"
                >
                    {trabajos.slice(0, 5).map((trabajo, i) => (
                        <SwiperSlide key={i}>
                            <div className="fondo-naranja">
                                <NavLink to={trabajo.enlaceEN}>
                                    <Image
                                        className="fotos-trabajos"
                                        src={trabajo.imagenMini}
                                        alt={trabajo.tituloEN}
                                        fluid
                                    />
                                </NavLink>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
