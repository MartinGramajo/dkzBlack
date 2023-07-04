import React from "react";
import "../carouselHome/carouselHome.css";
import { Card, Image } from "react-bootstrap";
import linea from "../../assets/img/lineagriscard.png";
import icono1 from "../../assets/img/iconocard1.png";
import icono2 from "../../assets/img/iconocard2.png";
import icono3 from "../../assets/img/iconocard3.png";

export default function Cartas() {
  return (
    <div className="padding-titulo pb-5 container container-md">
      <div className="cartas">
        <Card className="carta-naranja">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title>
              <Image className="" src={icono1} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="title-card peso-bold">
              Aumentá tus ventas <br />
              <Image className="" src={linea} fluid alt="linea divisora" />
            </Card.Subtitle>
            <Card.Text className="subtitle-card">
              Maximizá tus ventas y conquistá a tus clientes con nuestra
              solución innovadora y altamente efectiva.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carta-negra">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title>
              <Image className="" src={icono2} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="title-card peso-bold">
              Crecé exponencialmente <br />
              <Image className="" src={linea} fluid alt="linea divisora" />
            </Card.Subtitle>
            <Card.Text className="subtitle-card">
              Impulsá el crecimiento exponencial de tu empresa con nuestra
              visión estratégica.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carta-naranja">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title>
              <Image className="" src={icono3} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="title-card peso-bold">
              Sabemos lo que hacemos <br />
              <Image className="" src={linea} fluid alt="linea divisora" />
            </Card.Subtitle>
            <Card.Text className="subtitle-card">
              Acelerá tu presencia en línea y domina el mercado con nuestra
              estrategia de marketing digital imparable.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
