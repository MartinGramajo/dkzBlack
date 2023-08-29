import "./publicidadContenidoEN.css";
import { Card, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import publi from "../../../esp/assets/img/publi.png";
import publi2 from "../../../esp/assets/img/publi2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow } from "swiper";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import BotonContactanosEN from "../BotonContactanosEN";
import LineaNaranja from "../../../esp/components/LineaNaranja";

const PublicidadEN = () => {
  return (
    <div className="color-negro-fondo padding-titulo">
      <div className="container d-lg-block d-none">
        <LineaNaranja />
        <div className="">
          <h1 className="peso-bold mb-4">TRADITIONAL ADVERTISING</h1>
          <h4 className="pt-5 pb-5 mb-3 peso-regular">
            We make your brand reach mass audiences through different media:
            press, television, radio, billboards media: press, television,
            radio, billboards, sextuples, buses and giant LED screens. buses and
            giant LED screens. We have the best agreements and a media media
            agenda of maximum reach and variability according to different
            budgets. different budgets
          </h4>
        </div>
        <div className="d-flex mb-5 pb-4">
          <Card className="carta-trans-servicios me-4">
            <Card.Body className="d-flex align-items-start py-0 ps-0 pe-4">
              <Card.Text className="">
                <h4 className="peso-bold interlineado3">
                  When it comes to brand positioning, it is vitally important to
                  combine different advertising strategies brand positioning, it
                  is vital to combine the different advertising strategies
                  strategies that are made digitally, with these actions of
                  traditional offline traditional offline advertising.
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="carta-trans-servicios me-4">
            <Card.Body className="d-flex align-items-start py-0 pe-0 ps-4">
              <Card.Text className="">
                <h4 className="peso-regular interlineado3">
                  Through this strategic process, we seek to improve choice,
                  simplify purchasing processes and simplify purchasing
                  processes and stimulate commercial innovation. stimulate
                  commercial innovation.
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Swiper
          navigation={false}
          modules={[Navigation]}
          className="swiper-publicidad"
        >
          <SwiperSlide>
            <div className="d-flex mb-5">
              <Image
                className="w-50 pe-4"
                src={publi}
                alt="Imagen Publicidad"
                fluid
              />
              <Image
                className="w-50 ps-4"
                src={publi2}
                alt="Imagen Publicidad"
                fluid
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* CELULAR */}
      <div className="d-block d-lg-none">
        <div className="container">
          <div className="mx-3">
            <LineaNaranja />
            <div className="pt-4">
              <h3 className="peso-bold mb-4">TRADITIONAL ADVERTISING</h3>
              <h6 className="pt-3 pb-4 mb-3 peso-regular interlineado">
                We make your brand reach mass audiences through different media:
                press, television, radio, billboards media: press, television,
                radio, billboards, sextuples, buses and giant LED screens. buses
                and giant LED screens. We have the best agreements and a media
                agenda of maximum reach and variability according to different
                budgets. to different budgets
              </h6>
            </div>
            <Card className="carta-trans-servicios mb-5">
              <Card.Body className="d-flex align-items-start p-0">
                <Card.Text className="">
                  <h6 className="peso-bold interlineado">
                    It is vitally important when it comes to brand positioning
                    to combine the different brand positioning, to combine the
                    different advertising advertising strategies that are made
                    digitally, with these traditional offline advertising
                    actions.
                  </h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            strech: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          spaceBetween={0} // o margin en cada elemento
          className="swiper-publicidad-cel"
        >
          <SwiperSlide>
            <div className="">
              <Image className="" src={publi} alt="Image Publicidad" fluid />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image className="" src={publi2} alt="Image Publicidad" fluid />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="container mt-3 pt-4">
          <div className="mx-3">
            <Card className="carta-trans-servicios">
              <Card.Body className="d-flex align-items-start p-0">
                <Card.Text className="">
                  <h6 className="peso-regular interlineado">
                    Through this strategic process, we seek to improve choice,
                    simplify purchasing processes and simplify purchasing
                    processes and stimulate commercial innovation. stimulate
                    commercial innovation.
                  </h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center ">
        <Link
          className="text-decoration-none text-white d-none d-lg-block pt-5 pb-5"
          to="/services"
        >
          <h3 className="peso-bold">{"< < Back to"}</h3>
        </Link>
        <Link
          className="text-decoration-none text-white d-lg-none d-block pt-5 pb-4"
          to="/services"
        >
          <h4 className="peso-bold">{"< < Back to"}</h4>
        </Link>
      </div>
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanosEN />
      </div>
    </div>
  );
};

export default PublicidadEN;
