import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./carouselHomeEN.css";

import banner from "../../../esp/assets/img/1.jpg";
import banner2 from "../../../esp/assets/img/2.jpg";
import banner3 from "../../../esp/assets/img/3.jpg";

import bannerCuadrado1 from "../../../esp/assets/img/1cuadrada.jpg";
import bannerCuadrado2 from "../../../esp/assets/img/2cuadrada.jpg";
import bannerCuadrado3 from "../../../esp/assets/img/3cuadrada.jpg";
import LineaNaranja from "../../../esp/components/LineaNaranja";

const CarouselHomeBEN = () => {
  return (
    <div>
      <article className="container">
        <div>
          <LineaNaranja />
        </div>
        <div className="d-none d-md-block">
          <h2 className="peso-bold pb-4"> WELCOME TO THE DIGITAL REVOLUTION</h2>
        </div>
        <div className="d-md-none d-block">
          <h3 className="peso-bold py-4">WELCOME TO THE DIGITAL REVOLUTION</h3>
        </div>
      </article>
      <div className="d-none d-md-block">
        <div className="banner-carousel">
          <Carousel fade>
            <Carousel.Item>
              <div className="banner-panoramico">
                <img src={banner} alt="Banner Panorámico" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="banner-panoramico">
                <img src={banner2} alt="Banner Panorámico" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="banner-panoramico">
                <img src={banner3} alt="Banner Panorámico" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="d-md-none d-block">
        <div className="bg-dark">
          <Carousel fade>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado1}
                alt="asdas"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado2}
                alt="asdas"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado3}
                alt="asdas"
                fluid
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <article className="container mt-5">
        <div className="d-none d-md-block text-center">
          <h2 className="peso-bold pb-4"> WE ARE ENERGY, WE ARE DKZ</h2>
        </div>
        <div className="d-md-none d-block text-center">
          <h3 className="peso-bold py-4"> WE ARE ENERGY, WE ARE DKZ</h3>
        </div>
      </article>
    </div>
  );
};

export default CarouselHomeBEN;
