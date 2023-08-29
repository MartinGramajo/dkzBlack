import { Card, Image } from "react-bootstrap";
import LineaNaranja from "../../../esp/components/LineaNaranja";
import cobertura from "../../../esp/assets/img/cobertura.png";
import cobertura2 from "../../../esp/assets/img/cobertura2.png";
import cobertura3 from "../../../esp/assets/img/cobertura3.png";
import cobertura4 from "../../../esp/assets/img/cobertura4.png";

import coberturaCel from "../../../esp/assets/img/cobertura-cel.png";
import coberturaCel2 from "../../../esp/assets/img/cobertura-cel2.png";
import coberturaCel3 from "../../../esp/assets/img/cobertura-cel3.png";
import coberturaCel4 from "../../../esp/assets/img/cobertura-cel4.png";
import { Link } from "react-router-dom";
import BotonContactanosEN from "../BotonContactanosEN";

const CoberturaEN = () => {
  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo d-lg-block d-none">
        <LineaNaranja />
        <div className="">
          <h1 className="peso-bold mb-5 pb-4">
            PRESS COVERAGE <br /> AND NEWS WRITING
          </h1>
        </div>
        <div className="d-flex mb-5 pb-4">
          <Card className="carta-trans-servicios me-4 py-xl-5 py-0">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-bold">
                <h4>
                  We use different strategies to inform, persuade, promote,
                  promote, form opinions, educate and entertain, persuade,
                  promote, form opinions, educate and entertain. We offer
                  original content, with genuine value and relevance to
                  different for different sectors.
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-50 d-flex align-items-center">
            <Image src={cobertura} alt="Imagen coberturas" fluid />
          </div>
        </div>
        <h2 className="peso-bold color-naranja mb-5">HOW DO WE DO IT?</h2>
        <div className="d-flex mb-5">
          <div className="w-50 d-flex align-items-center">
            <Image src={cobertura2} alt="Imagen coberturas" fluid />
          </div>
          <Card className="carta-naranja-servicios ms-5 p-xl-5 p-3">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-regular">
                <h4>
                  •{" "}
                  <spam className="peso-bold">
                    We have a press and broadcasting department
                  </spam>{" "}
                  responsible for preparing and communicating information
                  related to different journalistic and institutional
                  activities. various journalistic and institutional activities.
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex mb-5">
          <Card className="carta-negra-servicios me-5 p-xl-5 p-3">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-regular">
                <h4>
                  • We conducted a survey in different graphic and audiovisual
                  audiovisual media,{" "}
                  <spam className="peso-bold">
                    we have our own production and post production department.
                    production department.
                  </spam>
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-50 d-flex align-items-center">
            <Image src={cobertura3} alt="Imagen coberturas" fluid />
          </div>
        </div>
        <div className="d-flex mb-5">
          <div className="w-50 d-flex align-items-center">
            <Image src={cobertura4} alt="Imagen coberturas" fluid />
          </div>
          <Card className="carta-negra-servicios ms-5 px-xl-5 px-3 py-xl-4 py-1">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-regular">
                <h4 className="d-none d-xl-block">
                  • We create internal communication pieces with contents of an
                  institutional nature. of an institutional nature.
                  <br />
                  <br />• We design and execute high impact graphic pieces with
                  the objective of in order to communicate professionally and
                  effectively. effectively.
                </h4>
                <h5 className="d-xl-none d-block">
                  • We create internal communication pieces with contents of an
                  institutional nature. of an institutional nature.
                  <br />
                  <br />• We design and execute high impact graphic pieces with
                  the objective of in order to communicate professionally and
                  effectively. effectively.
                </h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* CELULAR */}
      <div className="padding-titulo d-block d-lg-none">
        <div>
          <div className="container">
            <div className="mx-3">
              <LineaNaranja />
              <h3 className="peso-bold py-4">
                PRESS COVERAGE AND NEWS WRITING
              </h3>
              <Card className="carta-trans-servicios pb-4 mb-2">
                <Card.Body className="d-flex align-items-center p-0">
                  <Card.Text className="peso-bold">
                    <h6 className="interlineado">
                      We use different strategies to inform, persuade, promote,
                      promote, form opinions, educate and entertain, persuade,
                      promote, form opinions, educate and entertain. We offer
                      original content, with genuine value and relevance to
                      different for different sectors.
                    </h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <Image
            className="w-100"
            src={coberturaCel}
            alt="Imagen coberturas"
            fluid
          />
          <h5 className="peso-bold color-naranja ms-5 me-3 py-4 my-2">
            HOW DO WE DO IT?
          </h5>
          <div className="d-flex flex-column">
            <Card className="carta-naranja-servicios p-4">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Text className="peso-regular">
                  <h6>
                    •{" "}
                    <spam className="peso-bold">
                      We have a press and broadcasting department
                    </spam>{" "}
                    responsible for preparing and communicating information
                    related to different journalistic and institutional
                    activities. various journalistic and institutional
                    activities.
                  </h6>
                </Card.Text>
              </Card.Body>
            </Card>
            <Image
              className="w-100"
              src={coberturaCel2}
              alt="Imagen coberturas"
              fluid
            />
          </div>
          <Card className="carta-negra-servicios p-4">
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Text className="peso-regular">
                <h6>
                  • We conducted a survey in different graphic and audiovisual
                  audiovisual media,,{" "}
                  <spam className="peso-bold">
                    we have our own production and post production department.
                    production department.
                  </spam>
                </h6>
              </Card.Text>
            </Card.Body>
          </Card>
          <Image
            className="w-100"
            src={coberturaCel3}
            alt="Imagen coberturas"
            fluid
          />
          <Card className="carta-negra-servicios p-4">
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Text className="peso-regular">
                <h6>
                  • We create internal communication pieces with contents of an
                  institutional nature. of an institutional nature.
                  <br />
                  <br />
                  <br />• We design and execute high impact graphic pieces with
                  the objective of in order to communicate professionally and
                  effectively. effectively.
                </h6>
              </Card.Text>
            </Card.Body>
          </Card>
          <Image
            className="w-100 mb-4"
            src={coberturaCel4}
            alt="Imagen coberturas"
            fluid
          />
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

export default CoberturaEN;
