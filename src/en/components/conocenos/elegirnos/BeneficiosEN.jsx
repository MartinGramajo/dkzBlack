import React from "react";
import { Image } from "react-bootstrap";
import iman from "../../../../esp/assets/icon/icono-iman.png";
import celular from "../../../../esp/assets/icon/icono-celular.png";
import rendimiento from "../../../../esp/assets/icon/icono-reloj.png";
import comentario from "../../../../esp/assets/icon/icono-comentario.png";
import megafono from "../../../../esp/assets/icon/icono-megafono.png";
import metrica from "../../../../esp/assets/icon/icono-metrica.png";

const BeneficiosEN = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-12 col-lg-4 pb-5">
        <div className="py-4 my-3">
          <div className="posicion-logo">
            <Image
              className="py-3 icono-width"
              src={iman}
              alt="Aumenta tus ventas"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h3 className="peso-bold color-naranja mb-2">
              Increase your sales
            </h3>
            <h4 className="peso-regular">
              We focus on attracting more customers for your brand.
            </h4>
          </div>
        </div>
        <div className="py-4">
          <div className="posicion-logo">
            <Image
              className="py-4 icono-width"
              src={celular}
              alt="Multiples formatos"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h3 className="peso-bold color-naranja mb-2">Multiple formats</h3>
            <h4 className="peso-regular">
              Your ads are tailored to your objectives
            </h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 col-lg-4 pb-5">
        <div className="py-4 my-3">
          <div className="posicion-logo">
            <Image
              className="py-4 icono-width"
              src={rendimiento}
              alt="Informes Rendimiento"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h3 className="peso-bold color-naranja mb-2">
              Performance reporting and metrics
            </h3>
            <h4 className="peso-regular">
              You will know live the data of your ads
            </h4>
          </div>
        </div>
        <div className="py-4">
          <div className="posicion-logo">
            <Image
              className="py-3 icono-width"
              src={comentario}
              alt="Equipo profesional"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h3 className="peso-bold color-naranja mb-2">Professional team</h3>
            <h4 className="peso-regular">
              Digital MKT experts with years of experience.
            </h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 col-lg-4 pb-5">
        <div className="py-4 my-3">
          <div className="posicion-logo">
            <Image
              className="py-4 icono-width"
              src={megafono}
              alt="Redes Sociales"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h3 className="peso-bold color-naranja mb-2">Social networks</h3>
            <h4 className="peso-regular">
              We position you on all the platforms with a customized planning
              customized
            </h4>
          </div>
        </div>
        <div className="py-4">
          <div className="posicion-logo">
            <Image
              className="py-4 icono-width"
              src={metrica}
              alt="Precios Accesibles"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h3 className="peso-bold color-naranja ">Affordable prices</h3>
            <h4 className="peso-regular">
              We have plans that adapt to different budgets
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficiosEN;
