import React from "react";
// import CarouselHome from "../components/carouselHome/CarouselHome";
import Servicios from "../components/servicios/Servicios";
import Cartas from "../components/carouselHome/Cartas";
import AlgunosTrabajos from "../components/algunosTrabajos/AlgunosTrabajos";
import Mapa from "../components/mapaMundi/Mapa";
import Certificaciones from "../components/certificaciones/Certificaciones";
import VideoBanner from "../components/videoBanner/VideoBanner";
import NovedadesHome from "../components/novedadesHome/NovedadesHome";
import DosBotonesHome from "../components/dosBotonesHome/DosBotonesHome";
import { ClientesCelu } from "../components/Nosotros/clientes/ClientesCelu";
import Clientes from "../components/Nosotros/clientes/Clientes";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";
import SliderHome from "../components/sliderHome/SliderHome";

export default function Home() {
  return (
    <div>
      <NavbarReactV2 />
      <div className="color-negro-fondo ">
        <VideoBanner />
        <SliderHome />
        {/* <CarouselHome /> */}
        <Cartas />
      </div>
      <div className="color-negroclaro-fondo d-lg-block d-none">
        <Servicios />
        <AlgunosTrabajos />
      </div>
      <div className="color-negro-fondo d-block d-lg-none ">
        <Servicios />
        <AlgunosTrabajos />
      </div>
      <div className="color-negro-fondo">
        <div className=" d-lg-block d-none ">
          <Clientes />
        </div>
        <div className="d-block d-lg-none">
          {" "}
          <ClientesCelu />
        </div>
      </div>
      <div className="color-negro-fondo ">
        <Mapa />
        <Certificaciones />
      </div>
      <div className="color-negro-a-negroclaro-fondo">
        <DosBotonesHome />
      </div>
      <div className="color-negroclaro-fondo ">
        <NovedadesHome />
      </div>
      <FooterReact />
    </div>
  );
}
