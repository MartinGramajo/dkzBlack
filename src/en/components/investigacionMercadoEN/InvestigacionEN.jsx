import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import "./investigacionContenidoEN.css";

import investiga from "../../../esp/assets/img/investiga.png";
import estudioCel from "../../../esp/assets/img/estudio-cel.png";

import BotonContactanosEN from "../BotonContactanosEN";
import { Link } from "react-router-dom";
import LineaNaranja from "../../../esp/components/LineaNaranja";

const InvestigacionEN = () => {
  return (
    <div className="color-negro-fondo padding-titulo">
      <div className="container d-lg-block d-none">
        <LineaNaranja />
        <div className="">
          <h1 className="peso-bold mb-4">MARKET RESEARCH AND INVESTIGATION</h1>
          <h4 className="pt-5 pb-5 mb-3 peso-bold">
            We focus this service on the ability of our professionals to
            establish strategies that consolidate new business opportunities.
          </h4>
        </div>
        <div className="d-flex mb-5">
          <Card className="carta-negra-servicios me-5 px-xl-5 px-3 py-xl-4 py-1">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-regular">
                <h4 className="d-none d-xl-block">
                  Above all, we seek to minimize risk, understand our customers,
                  understand and confront the competition. By means of different
                  strategies, we measure reputations and capabilities and
                  improve communication in every aspect.
                </h4>
                <h5 className="d-xl-none d-block">
                  Above all, we seek to minimize risk, understand our customers,
                  understand and confront the competition. By means of different
                  strategies, we measure reputations and capabilities and
                  improve communication in every aspect.
                </h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-50 d-flex align-items-center">
            <Image src={investiga} alt="Imagen investigacion mercado" fluid />
          </div>
        </div>
        <h2 className="peso-bold color-naranja pt-4">Stages</h2>
        <div className="pt-5 pb-5">
          <div className="">
            <Button className="boton-proceso-investigacion color-gris-investigacion me-5 cursor">
              <h4 className="ps-5 peso-bold">
                <spam className="me-3">•</spam>
                <spam className="color-naranja me-2 me-2">1.</spam>
                Definition of the problem, objectives and opportunities
              </h4>
              <h3 className="mx-2 text-white-50 pe-5">↓</h3>
            </Button>
          </div>
          <div className="">
            <Button className="boton-proceso-investigacion color-negro-investigacion me-5 cursor">
              <h4 className="ps-5 peso-bold">
                <spam className="me-3">•</spam>
                <spam className="color-naranja me-2">2.</spam>
                Research design
              </h4>
              <h3 className="mx-2 text-white-50 pe-5">↓</h3>
            </Button>
          </div>
          <div className="">
            <Button className="boton-proceso-investigacion color-gris-investigacion me-5 cursor">
              <h4 className="ps-5 peso-bold">
                <spam className="me-3">•</spam>
                <spam className="color-naranja me-2">3.</spam>
                Information and data collection
              </h4>
              <h3 className="mx-2 text-white-50 pe-5">↓</h3>
            </Button>
          </div>
          <div className="">
            <Button className="boton-proceso-investigacion color-negro-investigacion me-5 cursor">
              <h4 className="ps-5 peso-bold">
                <spam className="me-3">•</spam>
                <spam className="color-naranja me-2">4.</spam>
                Data processing and analysis
              </h4>
              <h3 className="mx-2 text-white-50 pe-5">↓</h3>
            </Button>
          </div>
          <div className="">
            <Button className="boton-proceso-investigacion color-gris-investigacion me-5 cursor">
              <h4 className="ps-5 peso-bold">
                <spam className="me-3">•</spam>
                <spam className="color-naranja me-2">5.</spam>
                Interpretation and presentation of results
              </h4>
              <h3 className="mx-2 text-white-50 pe-5">↓</h3>
            </Button>
          </div>
          <div className="">
            <Button className="boton-proceso-investigacion color-negro-investigacion me-5 cursor">
              <h4 className="ps-5 peso-bold">
                <spam className="me-3">•</spam>
                <spam className="color-naranja me-2">6.</spam>
                Strategic actions based on results obtained
              </h4>
            </Button>
          </div>
        </div>
      </div>
      {/* CELULAR */}
      <div className="d-block d-lg-none">
        <div className="container pt-4">
          <div className="mx-3">
            <LineaNaranja />
            <h3 className="peso-bold mb-4 pt-4">
              MARKET RESEARCH AND INVESTIGATION
            </h3>
            <h6 className="pt-3 pb-4 mb-3 peso-bold interlineado">
              We focus this service on the ability of our professionals to
              establish strategies that consolidate new business opportunities.
            </h6>
          </div>
        </div>
        <Image
          className="w-100"
          src={estudioCel}
          alt="Imagen investigacion mercado"
          fluid
        />
        <Card className="carta-negra-servicios p-4">
          <Card.Body className="d-flex align-items-center">
            <Card.Text className="peso-regular">
              <h6>
                Above all, we seek to minimize risk, understand our customers,
                understand and confront the competition. By means of different
                strategies, we measure reputations and capabilities and improve
                communication in every aspect.
              </h6>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="container">
          <div className="mx-3">
            <h5 className="peso-bold color-naranja pt-4 mt-3 pb-4">Stages</h5>
            <div className="">
              <div className="mb-3">
                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                  <spam className="me-3">•</spam>
                  <h6 className="ps-1 peso-bold">
                    <spam className="color-naranja me-2">1.</spam>
                    Definition of the problem, objectives and opportunities
                  </h6>
                </Button>
              </div>
              <div className="mb-3">
                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                  <spam className="me-3">•</spam>
                  <h6 className="ps-1 peso-bold">
                    <spam className="color-naranja me-2">2.</spam>
                    Research design
                  </h6>
                </Button>
              </div>
              <div className="mb-3">
                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                  <spam className="me-3">•</spam>
                  <h6 className="ps-1 peso-bold">
                    <spam className="color-naranja me-2">3.</spam>
                    Information and data collection
                  </h6>
                </Button>
              </div>
              <div className="mb-3">
                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                  <spam className="me-3">•</spam>
                  <h6 className="ps-1 peso-bold">
                    <spam className="color-naranja me-2 peso-bold">4.</spam>
                    Data processing and analysis
                  </h6>
                </Button>
              </div>
              <div className="mb-3">
                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                  <spam className="me-3">•</spam>
                  <h6 className="ps-1 peso-bold">
                    <spam className="color-naranja me-2 peso-bold">5.</spam>
                    Interpretation and presentation of results
                  </h6>
                </Button>
              </div>
              <div className="mb-3">
                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                  <spam className="me-3">•</spam>
                  <h6 className="ps-1 peso-bold">
                    <spam className="color-naranja me-2">6.</spam>
                    Strategic actions based on results obtained
                  </h6>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center ">
        <Link
          className="text-decoration-none text-white d-none d-lg-block pb-5"
          to="/services"
        >
          <h3 className="peso-bold">{"< < Back To"}</h3>
        </Link>
        <Link
          className="text-decoration-none text-white d-lg-none d-block pt-5 pb-4"
          to="/services"
        >
          <h4 className="peso-bold">{"< < Back To"}</h4>
        </Link>
      </div>
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanosEN />
      </div>
    </div>
  );
};

export default InvestigacionEN;
