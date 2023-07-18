import React from "react";
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
      <div className="color-negro-fondo">
        <div>
          <ClientesEN />
        </div>
      </div>
    </div>
  );
}
