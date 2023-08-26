import React from "react";
import AudioVisuales from "../components/audioVisuales/AudioVisuales";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";

export default function ProducionAV() {
  return (
    <div>
      <NavbarReactV2 />
      <AudioVisuales />
      <FooterReact />
    </div>
  );
}
