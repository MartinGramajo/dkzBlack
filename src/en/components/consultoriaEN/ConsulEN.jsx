import React from "react";
import BotonContactanosEN from "../BotonContactanosEN";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import LineaNaranja from "../../../esp/components/LineaNaranja";

import consultoria from "../../../esp/assets/img/consultoria.png";
import consultoria2 from "../../../esp/assets/img/consultoria2.png";
import consultoria3 from "../../../esp/assets/img/consultoria3.png";

import consultoriaCel from "../../../esp/assets/img/consultoria-cel.png";
import consultoriaCel2 from "../../../esp/assets/img/consultoria-cel2.png";
import consultoriaCel3 from "../../../esp/assets/img/consultoria-cel3.png";

const ConsulEN = () => {
  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo d-none d-lg-block">
        <LineaNaranja />
        <div className="">
          <h1 className="peso-bold">CONSULTING AND ADVICE</h1>
          <h2 className="pt-4 pb-4 mb-4 peso-bold">
            Legal, financial, political and advertising.
          </h2>
          <h4 className="py-4 peso-bold mb-5">
            We focus on the client's requirements, offering alternative and
            effective solutions solutions that help to consolidate the work
            scheme and the internal and the internal objectives of a company.
          </h4>
        </div>
        <div className="d-flex mb-5">
          <Card className="carta-naranja-servicios me-5 p-xl-5 p-3">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-regular">
                <h4 className="d-none d-xl-block">
                  • Consulting and advice in{" "}
                  <spam className="peso-bold text-uppercase">
                    marketing and merchandising
                  </spam>
                  : we carry out project audits, internal and external analysis,
                  measurements and and external analysis, measurements and
                  actions, with the main objective of achieving clear to achieve
                  clear definitions for brand positioning.
                </h4>
                <h5 className="d-xl-none d-block">
                  • Consulting and advice in{" "}
                  <spam className="peso-bold text-uppercase">
                    marketing and merchandising
                  </spam>
                  : we carry out project audits, internal and external analysis,
                  measurements and and external analysis, measurements and
                  actions, with the main objective of achieving clear to achieve
                  clear definitions for brand positioning.
                </h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="carta-negra-servicios p-xl-5 p-3">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-regular">
                <h4 className="d-none d-xl-block">
                  • Consulting and advice{" "}
                  <spam className="peso-bold text-uppercase ">
                    economic - financial
                  </spam>
                  : We qualify and evaluate a company's finances in order to
                  then indicate strategic then indicate strategies to make them
                  more profitable and organized. organized.
                </h4>
                <h5 className="d-xl-none d-block">
                  • Consulting and advice{" "}
                  <spam className="peso-bold text-uppercase ">
                    economic - financial
                  </spam>
                  : We qualify and evaluate a company's finances in order to
                  then indicate strategic then indicate strategies to make them
                  more profitable and organized. organized.
                </h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex mb-5">
          <div className="w-50 d-flex align-items-center">
            <Image src={consultoria} alt="Imagen consultoria" fluid />
          </div>
          <Card className="carta-negra-servicios ms-5 p-xl-5 p-3">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-regular">
                <h4 className="d-none d-xl-block">
                  • Consulting and advice{" "}
                  <spam className="peso-bold text-uppercase">politician</spam>:
                  our management is based on the concept of positioning and
                  political visibility. political visibility, we execute
                  electoral campaigns, strategic consulting, public opinion
                  research, market research and public affairs in Argentina and
                  Spain, market research and public affairs in Argentina and
                  Spain.
                </h4>
                <h5 className="d-xl-none d-block">
                  • Consulting and advice{" "}
                  <spam className="peso-bold text-uppercase">politician</spam>:
                  our management is based on the concept of positioning and
                  political visibility. political visibility, we execute
                  electoral campaigns, strategic consulting, public opinion
                  research, market research and public affairs in Argentina and
                  Spain, market research and public affairs in Argentina and
                  Spain.
                </h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex mb-5">
          <Card className="carta-negra-servicios me-5 p-xl-5 p-3">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-regular">
                <h4 className="d-none d-xl-block">
                  • Consulting and advice{" "}
                  <spam className="peso-bold text-uppercase ">advertising</spam>
                  : based on costs and conversion amounts obtained in any of our
                  strategies, campaigns and advertising plans. any of the
                  strategies, campaigns and advertising plans to be executed. to
                  be executed.
                </h4>
                <h5 className="d-xl-none d-block">
                  • Consulting and advice{" "}
                  <spam className="peso-bold text-uppercase ">advertising</spam>
                  : based on costs and conversion amounts obtained in any of our
                  strategies, campaigns and advertising plans. any of the
                  strategies, campaigns and advertising plans to be executed. to
                  be executed.
                </h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-50 d-flex align-items-center">
            <Image src={consultoria2} alt="Imagen consultoria" fluid />
          </div>
        </div>
        <div className="d-flex mb-5">
          <Card className="carta-negra-servicios me-5 px-xl-5 px-3 py-1">
            <Card.Body className="d-flex align-items-center">
              <Card.Text className="peso-regular">
                <h4 className="d-none d-xl-block">
                  • Consulting and advice in{" "}
                  <spam className="peso-bold text-uppercase ">
                    organization and human resources
                  </spam>
                  : our service is in charge of analyzing and diagnosing the
                  work environment. environment, we focus on prescribing
                  modifications, adjustments and modifications, adjustments and
                  improvements to optimize both the and the company's
                  performance.
                </h4>
                <h5 className="d-xl-none d-block">
                  • Consulting and advice in{" "}
                  <spam className="peso-bold text-uppercase ">
                    organization and human resources
                  </spam>
                  : our service is in charge of analyzing and diagnosing the
                  work environment. environment, we focus on prescribing
                  modifications, adjustments and modifications, adjustments and
                  improvements to optimize both the and the company's
                  performance.
                </h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-50 d-flex align-items-center">
            <Image
              className="h-100"
              src={consultoria3}
              alt="Imagen consultoria"
              fluid
            />
          </div>
        </div>
      </div>
      {/* CELULARR */}
      <div className="padding-titulo d-lg-none d-block">
        <div className="container">
          <div className="mx-3">
            <LineaNaranja />
            <h3 className="peso-bold pt-4">CONSULTING AND ADVICE</h3>
            <h6 className="py-4 peso-bold">
              Legal, financial, political and advertising.
            </h6>
            <h6 className="pt-3 peso-bold mb-5">
              We focus on the client's requirements, offering alternative and
              effective solutions solutions that help to consolidate the work
              scheme and the internal and the internal objectives of a company.
            </h6>
          </div>
        </div>
        <Card className="carta-naranja-servicios p-4">
          <Card.Body className="d-flex align-items-center">
            <Card.Text className="peso-regular">
              <h6>
                • Consulting and advice in{" "}
                <spam className="peso-bold text-uppercase">
                  MARKETING AND MERCHANDISING:
                </spam>
                we carry out project audits, internal and external analysis,
                measurements and and external analysis, measurements and
                actions, with the main objective of achieving clear to achieve
                clear definitions for brand positioning.
              </h6>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carta-negra-servicios p-4">
          <Card.Body className="d-flex align-items-center">
            <Card.Text className="peso-regular">
              <h6>
                • Consulting and advice{" "}
                <spam className="peso-bold text-uppercase ">
                  ECONOMIC - FINANCIAL:
                </spam>
                We qualify and evaluate a company's finances in order to then
                indicate strategic then indicate strategies to make them more
                profitable and organized. organized.
              </h6>
            </Card.Text>
          </Card.Body>
        </Card>
        <Image
          className="w-100"
          src={consultoriaCel}
          alt="Imagen consultoria"
          fluid
        />
        <Card className="carta-negra-servicios p-4">
          <Card.Body className="d-flex align-items-center">
            <Card.Text className="peso-regular">
              <h6>
                • Consulting and advice{" "}
                <spam className="peso-bold text-uppercase">POLITICIAN:</spam>
                our management is based on the concept of positioning and
                political visibility. political visibility, we execute electoral
                campaigns, strategic consulting, public opinion research, market
                research and public affairs in Argentina and Spain, market
                research and public affairs in Argentina and Spain.
              </h6>
            </Card.Text>
          </Card.Body>
        </Card>
        <Image
          className="w-100"
          src={consultoriaCel2}
          alt="Imagen consultoria"
          fluid
        />
        <Card className="carta-negra-servicios p-4">
          <Card.Body className="d-flex align-items-center">
            <Card.Text className="peso-regular">
              <h6>
                • Consulting and advice{" "}
                <spam className="peso-bold text-uppercase ">ADVERTISING</spam>:
                based on costs and conversion amounts obtained in any of our
                strategies, campaigns and advertising plans. any of the
                strategies, campaigns and advertising plans to be executed. to
                be executed.
              </h6>
            </Card.Text>
          </Card.Body>
        </Card>
        <Image
          className="w-100"
          src={consultoriaCel3}
          alt="Imagen consultoria"
          fluid
        />
        <Card className="carta-negra-servicios p-4 mb-4">
          <Card.Body className="d-flex align-items-center">
            <Card.Text className="peso-regular">
              <h6>
                • Consulting and advice in{" "}
                <spam className="peso-bold text-uppercase ">
                  ORGANIZATION AND HUMAN RESOURCES:
                </spam>
                our service is in charge of analyzing and diagnosing the work
                environment. environment, we focus on prescribing modifications,
                adjustments and modifications, adjustments and improvements to
                optimize both the and the company's performance.
              </h6>
            </Card.Text>
          </Card.Body>
        </Card>
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

export default ConsulEN;
