import React from "react";
import ServiciosEN from "../components/serviciosEN/ServiciosEN";
import AlgunosTrabajosEN from "../components/algunosTrabajosEN/AlgunosTrabajosEN";
import DosBotonesHomeEN from "../components/dosBotonesHome/DosBotonesHomeEN";
import { CarouselHomeEN } from "../components/carouselHomeEN/CarouselHomeEN";
import CartasEN from "../components/carouselHomeEN/CartasEN";
import ClientesEN from "../components/clientesEN/ClientesEN";

export default function HomeEN() {
  return (
    <div>
      <div className="color-negro-fondo ">
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
    </div>
  );
}
