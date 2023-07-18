import React from "react";
import { CarouselHomeEN } from "../components/carouselHomeEN/CarouselHomeEN";
import CartasEN from "../components/carouselHomeEN/CartasEN";

export default function HomeEN() {
  return (
    <div>
      <div className="color-negro-fondo ">
        <CarouselHomeEN />
        <CartasEN />
      </div>
    </div>
  );
}
