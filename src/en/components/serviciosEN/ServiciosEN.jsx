import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LineaNaranja from "../../../esp/components/LineaNaranja";

export default function ServiciosEN() {
  return (
    <div className="container padding-titulo">
      {/* ESCRITORIO */}
      <div id="Servicios" className="pb-5 d-none d-sm-block">
        <LineaNaranja />
        <h2 className="color-blanco mt-5 peso-bold ">SERVICES</h2>
        <h3 className="color-naranja mt-2 peso-bold mb-5">
          More than for you, we work with you.
        </h3>
        <div className="d-flex flex-wrap">
          <Button as={Link} to="/events" className="boton-servicios mb-3 me-3">
            <h4 className="">Events</h4>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/social-media"
            className="boton-servicios mb-3 me-3"
          >
            <h4 className="">Social Media</h4>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/web-sites"
            className="boton-servicios mb-3 me-3"
          >
            <h4 className="">Web Sites</h4>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/audio-visual-production"
            className="boton-servicios mb-3 me-3"
          >
            <h4 className="">AudioVisual Production</h4>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/coverage"
            className="boton-servicios mb-3 me-3"
          >
            <h4 className="">Press coverage</h4>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/consulting-advice"
            className="boton-servicios mb-3 me-3"
          >
            <h4 className="">Consulting and advisory services</h4>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/traditional-advertising"
            className="boton-servicios mb-3 me-3"
          >
            <h4 className="">Traditional advertising</h4>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/market-research-investigation"
            className="boton-servicios mb-3 me-3"
          >
            <h4 className="">Market research</h4>
            <h3 className="">➝</h3>
          </Button>
        </div>
      </div>
      {/* CELULAR */}
      <div id="Servicios" className="pb-5 d-sm-none d-block mx-3">
        <LineaNaranja />

        <h3 className="color-blanco mt-5 peso-bold">SERVICES</h3>
        <h4 className="color-naranja mt-2 peso-bold mb-5">
          More than for you, we work with you.
        </h4>
        <div className="d-flex flex-wrap">
          <Button
            as={Link}
            to="/events"
            className="boton-servicios mb-3 me-sm-3 me-0"
          >
            <h6 className="ms-3">Events</h6>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/social-media"
            className="boton-servicios mb-3 me-sm-3 me-0"
          >
            <h6 className="ms-3">Social Media</h6>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/web-sites"
            className="boton-servicios mb-3 me-sm-3 me-0"
          >
            <h6 className="ms-3">Web Sites</h6>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/audio-visual-production"
            className="boton-servicios mb-3 me-sm-3 me-0"
          >
            <h6 className="ms-3">AudioVisual Production</h6>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/coverage"
            className="boton-servicios mb-3 me-sm-3 me-0"
          >
            <h6 className="ms-3">Press coverage</h6>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/consulting-advice"
            className="boton-servicios mb-3 me-sm-3 me-0 text-start"
          >
            <h6 className="ms-3">Consulting and advisory services</h6>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/traditional-advertising"
            className="boton-servicios mb-3 me-sm-3 me-0"
          >
            <h6 className="ms-3">Traditional advertising</h6>
            <h3 className="">➝</h3>
          </Button>
          <Button
            as={Link}
            to="/market-research-investigation"
            className="boton-servicios mb-3 me-sm-3 me-0"
          >
            <h6 className="ms-3">Market research</h6>
            <h3 className="">➝</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}
