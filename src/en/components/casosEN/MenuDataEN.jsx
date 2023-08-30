import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const MenuDataEN = ({ menuItem }) => {
  return (
    <div className="d-flex flex-wrap mt-5 justify-content-lg-start justify-content-center">
      {menuItem.map((dato) => (
        <div className="fondo-naranja-casos mb-4 me-0 me-lg-4" key={dato.id}>
          <NavLink to={dato.enlaceEN} className="">
            <Image
              className="fondo-casos imagen-cover"
              src={dato.imagenMini}
              alt={dato.tituloEN}
              fluid
            />
          </NavLink>
          <NavLink to={dato.enlaceEN} className="text-white">
            <div
              className={
                dato.tituloEN.length > 26
                  ? "texto-casos px-4"
                  : "texto-casos px-4 pt-4"
              }
            >
              <h4 className="peso-bold interlineado2 pb-2">{dato.tituloEN}</h4>
              <h6 className="peso-regular interlineado2">
                {dato.categoriasEN}
              </h6>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
