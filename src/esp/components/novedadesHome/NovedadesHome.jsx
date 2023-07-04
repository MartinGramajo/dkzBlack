import axios from "axios";
import Papa from "papaparse";
import LineaNaranja from "../LineaNaranja";
import "./novedadesHome.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import { Navigation } from "swiper";

import { NavLink } from "react-router-dom";

export default function NovedadesHome() {
    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
        const getTrabajos = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=574932737&single=true&output=csv"
            );
            const imagenes = Papa.parse(response.data, { header: true });
            setTrabajos(imagenes.data);
        };
        getTrabajos();
    }, []);
    return (
        <div className="pb-5">
            {/* ESCRITTORIO */}
            <div
                id="NovedadesHome"
                className=" padding-titulo d-none d-xl-block"
            >
                <div className="container">
                    <LineaNaranja />
                    <h2 className="color-blanco mt-5 peso-bold">NOVEDADES</h2>
                    <div className="d-flex flex-wrap justify-content-between pt-5 cards-novedades">
                        {trabajos.slice(0, 3).map((trabajo, i) => (
                            <NavLink
                                to={"/novedades/" + trabajo.id}
                                className=""
                                key={i}
                            >
                                <div
                                    className="fondo-novedades-home"
                                    style={{
                                        backgroundImage: `url(${trabajo.imagenMini})`,
                                    }}
                                >
                                    <h6 className="peso-bold novedades-home-texto px-4 pt-3">
                                        {trabajo.titulo}
                                    </h6>
                                    <h6 className="peso-regular interlineado novedades-home-texto px-4 pb-3 pt-0">
                                        {trabajo.resumen}
                                    </h6>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
            {/* CELULAR */}
            <div
                id="NovedadesHome"
                className="padding-titulo d-xl-none d-block "
            >
                <div className="container">
                    <div className="mx-3">
                        <LineaNaranja />
                        <h3 className="color-blanco mt-4 peso-bold">
                            NOVEDADES
                        </h3>
                    </div>
                </div>
                <div className="pt-5 pb-0">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        initialSlide={1}
                        navigation={true}
                        control={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            strech: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow,Navigation]}
                        spaceBetween={-20} // o margin en cada elemento
                        className="swiper-novedades"
                    >
                        {trabajos.slice(0, 3).map((trabajo, i) => (
                            <SwiperSlide key={i}>
                                <NavLink
                                    to={"/novedades/" + trabajo.id}
                                    className=""
                                >
                                    <div
                                        className="fondo-novedades-home"
                                        style={{
                                            backgroundImage: `url(${trabajo.imagenMini})`,
                                        }}
                                    >
                                        <h6 className="peso-bold novedades-home-texto px-4 pt-3">
                                            {trabajo.titulo}
                                        </h6>
                                        <h6 className="peso-regular interlineado novedades-home-texto px-4 pb-3 pt-0">
                                            {trabajo.resumen}
                                        </h6>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
