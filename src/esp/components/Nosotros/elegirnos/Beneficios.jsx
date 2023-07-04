import React from "react";
import { Image } from "react-bootstrap";
import iman from "../../../assets/icon/icono-iman.png";
import celular from "../../../assets/icon/icono-celular.png";
import rendimiento from "../../../assets/icon/icono-reloj.png";
import comentario from "../../../assets/icon/icono-comentario.png";
import megafono from "../../../assets/icon/icono-megafono.png";
import metrica from "../../../assets/icon/icono-metrica.png";

export const Beneficios = () => {
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
            <h3 className="peso-bold color-naranja mb-2">Aumenta tus ventas</h3>
            <h4 className="peso-regular">
              Nos enfocamos en atraer más clientes para tu marca
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
            <h3 className="peso-bold color-naranja mb-2">Múltiples formatos</h3>
            <h4 className="peso-regular">
              Tus anuncios se elaboran de acuerdo a tus objetivos
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
              Informes de rendimiento y métricas
            </h3>
            <h4 className="peso-regular">
              Conocerás en vivo los datos de tus anuncios
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
            <h3 className="peso-bold color-naranja mb-2">Equipo profesional</h3>
            <h4 className="peso-regular">
              Expertos en MKT digital con años de experiencia.
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
            <h3 className="peso-bold color-naranja mb-2">Redes sociales</h3>
            <h4 className="peso-regular">
              Te posicionamos en todas las plataformas con un planning
              personalizado
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
            <h3 className="peso-bold color-naranja ">Precios accesibles</h3>
            <h4 className="peso-regular">
              Tenemos planes que se adaptan a diferentes presupuestos
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
