import React from "react";
import { Image } from "react-bootstrap";
import iman from "../../../../esp/assets/icon/icono-iman.png";
import celular from "../../../../esp/assets/icon/icono-celular.png";
import rendimiento from "../../../../esp/assets/icon/icono-reloj.png";
import comentario from "../../../../esp/assets/icon/icono-comentario.png";
import megafono from "../../../../esp/assets/icon/icono-megafono.png";
import metrica from "../../../../esp/assets/icon/icono-metrica.png";

const BeneficiosCelEN = () => {
  return (
    <div>
      <div className="py-4 ">
        <div className="text-center">
          <Image className="py-3" src={iman} alt="Increase your sales" fluid />
        </div>
        <div className="posicion-texto">
          <h5 className="peso-bold color-naranja py-2">Increase your sales</h5>
          <h6 className="peso-regular">
            We focus on attracting more customers for your brand.
          </h6>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image className="py-3" src={celular} alt="Multiple formats" fluid />
        </div>
        <div className="posicion-texto">
          <h5 className="peso-bold color-naranja py-2">Multiple formats</h5>
          <h6 className="peso-regular">
            Your ads are tailored to your objectives
          </h6>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image
            className="py-3"
            src={rendimiento}
            alt="Performance reporting and metrics"
            fluid
          />
        </div>
        <div className="posicion-texto">
          <h5 className="peso-bold color-naranja py-2">
            Performance reporting and metrics
          </h5>
          <h6 className="peso-regular">
            You will know live the data of your ads
          </h6>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image
            className="py-3"
            src={comentario}
            alt="Aumenta tus ventas"
            fluid
          />
        </div>
        <div className="posicion-texto">
          <h5 className="peso-bold color-naranja py-2">Professional team</h5>
          <h6 className="peso-regular">
            Digital MKT experts with years of experience.
          </h6>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image
            className="py-3"
            src={megafono}
            alt="Aumenta tus ventas"
            fluid
          />
        </div>
        <div className="posicion-texto">
          <h5 className="peso-bold color-naranja py-2">Social networks</h5>
          <h6 className="peso-regular">
            We position you on all the platforms with a customized planning
            customized
          </h6>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image className="py-3" src={metrica} alt="Affordable prices" fluid />
        </div>
        <div className="posicion-texto">
          <h5 className="peso-bold color-naranja py-2">Affordable prices</h5>
          <h6 className="peso-regular">
            We have plans that adapt to different budgets
          </h6>
        </div>
      </div>
    </div>
  );
};

export default BeneficiosCelEN;
