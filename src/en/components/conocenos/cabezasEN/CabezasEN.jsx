import React from "react";
import { Image } from "react-bootstrap";

import general from "../../../../esp/assets/img/ceo.png";
import operativo from "../../../../esp/assets/img/nacho.png";
import directora from "../../../../esp/assets/img/directora.png";
import creativo from "../../../../esp/assets/img/fabri-sin-letras.png";
import LineaNaranja from "../../../../esp/components/LineaNaranja";

const miembros = [
  {
    id: 1,
    imagen: general,
    titulo: "Guillermo Sojo",
    subtitulo: "General Manager",
    descripcion: `+25  `,
    descripcion2: " PERSONS",
  },
  {
    id: 2,
    imagen: operativo,
    titulo: "Nacho Pintos",
    subtitulo: "Operational Manager",
    descripcion: `+15 `,
    descripcion2: " PLANNERS ",
  },
  {
    id: 3,
    imagen: directora,
    titulo: "Laura Chanta",
    subtitulo: "Project Manager",
    descripcion: `+5 `,
    descripcion2: " ACCOUNT EXECUTIVES ",
  },
  {
    id: 4,
    imagen: creativo,
    titulo: "Fabricio Meriglio",
    subtitulo: "Creative Manager",
    descripcion: `+5`,
    descripcion2: " PRODUCERS ",
  },
];

export default function CabezasEN() {
  return (
    <div className="container padding-titulo padding-abajo">
      <div>
        <LineaNaranja />
      </div>
      <div>
        <h2 className="peso-bold"> THE TEAM'S HEADS</h2>
      </div>
      <div className="row py-4">
        {miembros.map((miembro, i) => (
          <div className="col-6 col-md-6 col-lg-3 " key={i}>
            <Image
              className=""
              src={miembro.imagen}
              alt="Guillermo Sojo-CEO"
              fluid
            />
            <div className="py-3">
              <h4 className="peso-bold py-1"> {miembro.titulo}</h4>
              <h4 className="peso-regular py-1"> {miembro.subtitulo}</h4>
            </div>
            <div className="py-3 color-negroclaro-fondo">
              <h5 className="peso-bold ms-3 mb-2"> {miembro.descripcion}</h5>
              <h5 className="peso-bold ms-3 mb-2"> {miembro.descripcion2}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
