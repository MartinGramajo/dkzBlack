import React from "react";
import LineaNaranja from "../LineaNaranja";
import "./DondeEncontrarnos.css";

const DondeEncontrarnos = () => {
  return (
    <div className="container">
      <div id="NovedadesHome" className=" padding-titulo ">
        <div className="container">
          <LineaNaranja />
          <h2 className="color-blanco mt-5 peso-bold d-none d-xl-block">
            DONDE ENCONTRARNOS
          </h2>
          <h3 className="color-blanco mt-5 peso-bold  d-xl-none d-block ">
            DONDE ENCONTRARNOS
          </h3>
        </div>
        <section className="d-flex justify-content-between flex-wrap">
          <div className="mt-4">
            <h5 className="pb-4 text-center">
              España - Av. Juan Carlos I 48 Piso 2 “B” - Murcia (30007)
            </h5>
            <article>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.968285893961!2d-1.1413282235548916!3d38.001200199083975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63818916be36dd%3A0x8284b3640f477dfb!2sAv.%20Juan%20Carlos%20I%2C%2048%2C%20Piso%202%20%E2%80%9CB%2C%2030007%20Murcia%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1710719055672!5m2!1ses-419!2sar"
                className="mapa-width "
                height="450"
                style={{ border: "0px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map spain"
              ></iframe>
            </article>
          </div>
          <div className="mt-4">
            <h5 className="pb-4  text-center">
              Argentina - Juramento 60 - SM de Tucumán (4000)
            </h5>
            <article>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.7122715324977!2d-65.19516572366281!3d-26.817288789225294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c2043517b2f%3A0xbc31928cde581c2d!2sGEB%2C%20Juramento%2060%2C%20T4001%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Provincia%20de%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1710719155804!5m2!1ses-419!2sar"
                className="mapa-width "
                height="450"
                style={{ border: "0px" }}
                allowfullscreen=""
                loading="lazy"
                title="map arg"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DondeEncontrarnos;
