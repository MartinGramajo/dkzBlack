import React from "react";
import Social from "../components/socialMedia/Social";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";

export default function SocialMedialPage() {
  return (
    <div>
      <NavbarReactV2 />
      <Social />

      <FooterReact />
    </div>
  );
}
