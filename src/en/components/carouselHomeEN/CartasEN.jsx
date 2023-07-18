import React from "react";

import { Card, Image } from "react-bootstrap";
import linea from "../../../esp/assets/img/lineagriscard.png";
import icono1 from "../../../esp/assets/img/iconocard1.png";
import icono2 from "../../../esp/assets/img/iconocard2.png";
import icono3 from "../../../esp/assets/img/iconocard3.png";

export default function CartasEN() {
  return (
    <div className="padding-titulo pb-5 container container-md">
      <div className="cartas">
        <Card className="carta-naranja">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title>
              <Image className="" src={icono1} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="title-card peso-bold">
              Increase your sales <br />
              <Image className="" src={linea} fluid alt="linea divisora" />
            </Card.Subtitle>
            <Card.Text className="subtitle-card">
              Maximize your sales and win over your customers with our
              innovative and highly effective solution.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carta-negra">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title>
              <Image className="" src={icono2} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="title-card peso-bold">
              I grew exponentially <br />
              <Image className="" src={linea} fluid alt="linea divisora" />
            </Card.Subtitle>
            <Card.Text className="subtitle-card">
              Boost the exponential growth of your company with our strategic
              vision.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carta-naranja">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title>
              <Image className="" src={icono3} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="title-card peso-bold">
              We know what we do <br />
              <Image className="" src={linea} fluid alt="linea divisora" />
            </Card.Subtitle>
            <Card.Text className="subtitle-card">
              Accelerate your online presence and dominate the market with our
              unstoppable digital marketing strategy.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
