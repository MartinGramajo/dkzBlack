import React from "react";
import ServiciosEN from "../components/serviciosEN/ServiciosEN";
import AlgunosTrabajosEN from "../components/algunosTrabajosEN/AlgunosTrabajosEN";
import DosBotonesHomeEN from "../components/dosBotonesHome/DosBotonesHomeEN";
import { CarouselHomeEN } from "../components/carouselHomeEN/CarouselHomeEN";
import CartasEN from "../components/carouselHomeEN/CartasEN";
import ClientesEN from "../components/clientesEN/ClientesEN";
import VideoBanner from "../../esp/components/videoBanner/VideoBanner";
import NovedadesHomeEN from "../components/novedadesHomeEN/NovedadesHomeEN";
import { NavbarReactV2EN } from "../components/navbarReactV2EN/NavbarReactV2EN";
import WspEN from "../components/wappEN/WspEN";
import { FooterReactEN } from "../components/footerReactEN/FooterReactEN";
import VideoBannerEN from "../components/videoBannerEN/VideoBannerEN";

export default function HomeEN() {
  return (
    <div>
      <NavbarReactV2EN />
      <WspEN />
      <div className="color-negro-fondo ">
        <VideoBannerEN />
        <CarouselHomeEN />
        <CartasEN />
      </div>
      <div className="color-negroclaro-fondo d-lg-block d-none">
        <ServiciosEN />
        <AlgunosTrabajosEN />
      </div>
      <div className="color-negro-fondo d-block d-lg-none ">
        <ServiciosEN />
        <AlgunosTrabajosEN />
      </div>

      <div className="color-negro-fondo ">
        <ClientesEN />
      </div>
      <div className="color-negro-a-negroclaro-fondo">
        <DosBotonesHomeEN />
      </div>
      <div className="color-negroclaro-fondo ">
        <NovedadesHomeEN />
      </div>
      <FooterReactEN />
    </div>
  );
}
