import React from "react";
import { useState } from "react";
import flecha from "../assets/img/flecha.png";
import { Image } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export const FlechaToUp = () => {
  const [navbarPosition, setNavbarPosition] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 800) {
      setNavbarPosition(true);
    } else {
      setNavbarPosition(false);
    }
    // console.log(window.scrollY); //Para ver en el medidor de scroll
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      {navbarPosition ? (
        <Nav.Link href="##principal">
          <Image
            className="fixed-bottom ms-auto my-4 me-4"
            src={flecha}
            alt="flecha "
            fluid
          />
        </Nav.Link>
      ) : (
        <Nav.Link href="##principal">
          <Image
            className="fixed-bottom ms-auto my-4 me-4"
            src={flecha}
            alt="flecha"
            fluid
          />
        </Nav.Link>
      )}
    </>
  );
};
