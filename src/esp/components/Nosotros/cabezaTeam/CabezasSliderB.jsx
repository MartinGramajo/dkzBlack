import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./cabezas.css";

import banner4 from "../../../assets/img/4.jpg";
import banner5 from "../../../assets/img/5.jpg";
import banner6 from "../../../assets/img/6.JPG";

import bannerCuadrado4 from "../../../assets/img/4cuadrada.jpg";
import bannerCuadrado5 from "../../../assets/img/5cuadrada.jpg";
import bannerCuadrado6 from "../../../assets/img/6cuadrada.jpg";
import LineaNaranja from "../../LineaNaranja";

const miembros = [
  {
    id: 1,
    descripcion: `+25  `,
    descripcion2: " PERSONAS ",
  },
  {
    id: 2,
    descripcion: `+15 `,
    descripcion2: " PLANNERS ",
  },
  {
    id: 3,
    descripcion: `+5 `,
    descripcion2: " EJECUTIVOS DE CUENTAS ",
  },
  {
    id: 4,
    descripcion: `+5`,
    descripcion2: " PRODUCTORES ",
  },
];

const CabezasSliderB = () => {
  return (
    <div>
      <div className="container">
        <LineaNaranja />
        <div className="d-none d-md-block">
          <h2 className="peso-bold pb-4"> CONOCENOS</h2>
        </div>
        <div className="d-md-none d-block">
          <h3 className="peso-bold py-4">CONOCENOS</h3>
        </div>
      </div>
      <div className="d-none d-md-block">
        <div className="banner-carousel">
          <Carousel fade>
            <Carousel.Item>
              <div className="banner-panoramico-b ">
                <img src={banner6} alt="Banner Panorámico" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="banner-panoramico-b ">
                <img src={banner5} alt="Banner Panorámico" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="banner-panoramico-b ">
                <img src={banner4} alt="Banner Panorámico" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <section className="container">
          <div className="row py-4">
            {miembros.map((miembro, i) => (
              <div className="col-12 col-md-6 col-lg-6 col-xl-3 my-2" key={i}>
                <div className="py-3 color-negroclaro-fondo">
                  <h5 className="peso-bold ms-3 mb-2">
                    {" "}
                    {miembro.descripcion}
                  </h5>
                  <h5 className="peso-bold ms-3 mb-2">
                    {" "}
                    {miembro.descripcion2}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="d-md-none d-block">
        <div className="bg-dark">
          <Carousel fade>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado6}
                alt="asdas"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado5}
                alt="asdas"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado4}
                alt="asdas"
                fluid
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <section className="container">
          <div className="row py-4">
            {miembros.map((miembro, i) => (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-2" key={i}>
                <div className="py-3 color-negroclaro-fondo">
                  <h5 className="peso-bold ms-3 mb-2">
                    {" "}
                    {miembro.descripcion}
                  </h5>
                  <h5 className="peso-bold ms-3 mb-2">
                    {" "}
                    {miembro.descripcion2}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CabezasSliderB;
