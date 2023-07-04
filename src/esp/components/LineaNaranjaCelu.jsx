import React from "react";
import { Image } from "react-bootstrap";
import lineaNaranja from "../assets/img/linea-naranja.png";

export default function LineaNaranjaCelu() {
  return (
    <div className="py-2">
      <Image src={lineaNaranja} alt="linea-divisora" fluid />
    </div>
  );
}
