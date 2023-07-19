import "../../components/FooterReact/footerReact.css";
import React from "react";
import { Image } from "react-bootstrap";
import BtnContact from "../BtnContact";
import logo from "../../assets/img/logo-dkz.png";
import face from "../../assets/img/face.png";
import instagram from "../../assets/img/instagram.png";
import linked from "../../assets/img/linked.png";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../../assets/img/flecha1.svg";

export const FooterReact = () => {
  return (
    <div className="mt-auto color-negroclaro-fondo pt-2">
      <div className="justify-content-center d-none d-md-flex pt-4">
        <ScrollToTop smooth component={<MySVG />} />
      </div>
      <div className="container pt-4">
        <hr className="text-white d-sm-none d-block py-2 " />
        <div className="d-none d-md-block">
          <div className="btn-display">
            <div className="d-flex justify-content-center align-items-center pb-4">
              <BtnContact />
            </div>

            <div className="text-footer pb-2 padding-redes">
              <a
                className="text-decoration-none"
                href="https://www.facebook.com/agenciadkz"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="redes-width"
                  src={face}
                  fluid
                  alt="icono Facebook"
                />
              </a>
              <a
                className="text-decoration-none"
                href="https://www.instagram.com/dkzstudio/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="redes-width"
                  src={instagram}
                  fluid
                  alt="icono Instagram"
                />
              </a>
              <a
                className="text-decoration-none"
                href="https://www.linkedin.com/company/dkzstudio/?originalSubdomain=ar"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="redes-width"
                  src={linked}
                  fluid
                  alt="icono LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none ">
          <div className="btn-display">
            <div className="d-flex justify-content-center mb-4">
              <ScrollToTop smooth component={<MySVG />} />
            </div>
            <div className="text-footer  padding-redes">
              <a
                className="text-decoration-none"
                href="https://www.facebook.com/agenciadkz"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="redes-width"
                  src={face}
                  fluid
                  alt="icono Facebook"
                />
              </a>
              <a
                className="text-decoration-none"
                href="https://www.instagram.com/dkzstudio/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="redes-width"
                  src={instagram}
                  fluid
                  alt="icono Instagram"
                />
              </a>
              <a
                className="text-decoration-none"
                href="https://www.linkedin.com/company/dkzstudio/?originalSubdomain=ar"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="redes-width"
                  src={linked}
                  fluid
                  alt="icono LinkedIn"
                />
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center py-5">
              <BtnContact />
            </div>
          </div>
        </div>
        <hr className="text-white d-none d-sm-block" />
        <div className="d-none d-md-block">
          <div className="footer">
            <div className="py-3 text-footer">
              <Image className="" src={logo} fluid alt="equipo" />
            </div>
            <div className="py-3 text-center text-white">
              <h6 className="peso-regular-asap">
                Info@dkzstudio.com <br />
                Sede Argentina: Juramento 60 - San Miguel de Tucumán <br />
                código postal: 4000 <br />
                Sede España: Avenida Juan Carlos Primero 4 - 2do Piso “B” -
                Murcia <br />
                código postal: 30007
              </h6>
            </div>
            <div className="pb-4">
              <h6 className="text-footer py-3 text-white peso-regular-asap">
                Copyright © 2023 <br /> Todos los derechos reservados <br />
                T&Cs
              </h6>
            </div>
          </div>
        </div>
        <div className="d-md-none d-block">
          <div className="footer">
            <div className="py-3 text-footer">
              <Image className="" src={logo} fluid alt="equipo" />
            </div>
            <div className="py-3 text-center text-white">
              <p className="fs-12">
                Info@dkzstudio.com <br />
                Sede Argentina: Juramento 60 - San Miguel de Tucumán <br />
                código postal: 4000 <br />
                Sede España: Avenida Juan Carlos Primero 4 - 2do Piso “B” -
                Murcia <br />
                código postal: 30007
              </p>
            </div>
            <div className="pb-4">
              <p className="text-footer py-3 text-white fs-12">
                Copyright © 2023 <br /> Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
