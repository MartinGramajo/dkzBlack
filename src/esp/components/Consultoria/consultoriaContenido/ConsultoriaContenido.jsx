import React from "react";
import { Card, Image } from "react-bootstrap";
import LineaNaranja from "../../LineaNaranja";
import BotonContactanos from "../../BotonContactanos";

import consultoria from "../../../assets/img/consultoria.png";
import consultoria2 from "../../../assets/img/consultoria2.png";
import consultoria3 from "../../../assets/img/consultoria3.png";

import consultoriaCel from "../../../assets/img/consultoria-cel.png";
import consultoriaCel2 from "../../../assets/img/consultoria-cel2.png";
import consultoriaCel3 from "../../../assets/img/consultoria-cel3.png";
import { Link } from "react-router-dom";

export default function ConsultoriaContenido() {
    return (
        <div className="color-negro-fondo">
            <div className="container padding-titulo d-none d-lg-block">
                <LineaNaranja />
                <div className="">
                    <h1 className="peso-bold">CONSULTORÍA Y ASESORAMIENTO</h1>
                    <h2 className="pt-4 pb-4 mb-4 peso-bold">
                        Legal, financiera, política y publicitaria.
                    </h2>
                    <h4 className="py-4 peso-bold mb-5">
                        Nos enfocamos en el requerimiento del cliente, brindando
                        soluciones alternativas y eficaces, que ayuden a
                        consolidar el esquema de trabajo y los objetivos
                        internos de una compañía
                    </h4>
                </div>
                <div className="d-flex mb-5">
                    <Card className="carta-naranja-servicios me-5 p-xl-5 p-3">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h4 className="d-none d-xl-block">
                                    • Consultoría y asesoramiento en{" "}
                                    <spam className="peso-bold text-uppercase">
                                        marketing y comercialización
                                    </spam>
                                    : realizamos auditorías de proyectos,
                                    análisis internos y externos, mediciones y
                                    acciones, con el principal objetivo de
                                    lograr definiciones claras para
                                    posicionamientos de marcas.
                                </h4>
                                <h5 className="d-xl-none d-block">
                                    • Consultoría y asesoramiento en{" "}
                                    <spam className="peso-bold text-uppercase">
                                        marketing y comercialización
                                    </spam>
                                    : realizamos auditorías de proyectos,
                                    análisis internos y externos, mediciones y
                                    acciones, con el principal objetivo de
                                    lograr definiciones claras para
                                    posicionamientos de marcas.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="carta-negra-servicios p-xl-5 p-3">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h4 className="d-none d-xl-block">
                                    • Consultoría y asesoramiento{" "}
                                    <spam className="peso-bold text-uppercase ">
                                        económico - financiero
                                    </spam>
                                    : cualificamos y evaluamos las finanzas de
                                    una empresa para luego indicar estratégicas
                                    para hacerlas más rentables y organizadas.
                                </h4>
                                <h5 className="d-xl-none d-block">
                                    • Consultoría y asesoramiento{" "}
                                    <spam className="peso-bold text-uppercase ">
                                        económico - financiero
                                    </spam>
                                    : cualificamos y evaluamos las finanzas de
                                    una empresa para luego indicar estratégicas
                                    para hacerlas más rentables y organizadas.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="d-flex mb-5">
                    <div className="w-50 d-flex align-items-center">
                        <Image
                            src={consultoria}
                            alt="Imagen consultoria"
                            fluid
                        />
                    </div>
                    <Card className="carta-negra-servicios ms-5 p-xl-5 p-3">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h4 className="d-none d-xl-block">
                                    • Consultoría y asesoramiento{" "}
                                    <spam className="peso-bold text-uppercase">
                                        político
                                    </spam>
                                    : nuestra gestión se basa en el concepto de
                                    posicionamiento y visibilidad política, 
                                    ejecutamos campañas electorales,
                                    asesoramientos estratégicos, investigación
                                    de opinión pública, mercado y asuntos
                                    públicos en Argentina y España.
                                </h4>
                                <h5 className="d-xl-none d-block">
                                    • Consultoría y asesoramiento{" "}
                                    <spam className="peso-bold text-uppercase">
                                        político
                                    </spam>
                                    : nuestra gestión se basa en el concepto de
                                    posicionamiento y visibilidad política, 
                                    ejecutamos campañas electorales,
                                    asesoramientos estratégicos, investigación
                                    de opinión pública, mercado y asuntos
                                    públicos en Argentina y España.
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
                                    • Consultoría y asesoramiento{" "}
                                    <spam className="peso-bold text-uppercase ">
                                        publicitario
                                    </spam>
                                    : nos basamos en costes y montos de
                                    conversión obtenidos en cualquiera de las
                                    estrategias, campañas y planes publicitarios
                                    a ejecutar.
                                </h4>
                                <h5 className="d-xl-none d-block">
                                    • Consultoría y asesoramiento{" "}
                                    <spam className="peso-bold text-uppercase ">
                                        publicitario
                                    </spam>
                                    : nos basamos en costes y montos de
                                    conversión obtenidos en cualquiera de las
                                    estrategias, campañas y planes publicitarios
                                    a ejecutar.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="w-50 d-flex align-items-center">
                        <Image
                            src={consultoria2}
                            alt="Imagen consultoria"
                            fluid
                        />
                    </div>
                </div>
                <div className="d-flex mb-5">
                    <Card className="carta-negra-servicios me-5 px-xl-5 px-3 py-1">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h4 className="d-none d-xl-block">
                                    • Consultoría y asesoramiento en{" "}
                                    <spam className="peso-bold text-uppercase ">
                                        organización y recursos humanos
                                    </spam>
                                    : nuestro servicio se encarga de analizar y
                                    diagnosticar el entorno laboral, nos
                                    orientamos en la prescripción de
                                    modificaciones, ajustes y mejoras para
                                    optimizar tanto el rendimiento del personal
                                    como de la empresa.
                                </h4>
                                <h5 className="d-xl-none d-block">
                                    • Consultoría y asesoramiento en{" "}
                                    <spam className="peso-bold text-uppercase ">
                                        organización y recursos humanos
                                    </spam>
                                    : nuestro servicio se encarga de analizar y
                                    diagnosticar el entorno laboral, nos
                                    orientamos en la prescripción de
                                    modificaciones, ajustes y mejoras para
                                    optimizar tanto el rendimiento del personal
                                    como de la empresa.
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
                        <h3 className="peso-bold pt-4">
                            CONSULTORÍA Y ASESORAMIENTO
                        </h3>
                        <h6 className="py-4 peso-bold">
                            Legal, financiera, política y publicitaria.
                        </h6>
                        <h6 className="pt-3 peso-bold mb-5">
                            Nos enfocamos en el requerimiento del cliente,
                            brindando soluciones alternativas y eficaces, que
                            ayuden a consolidar el esquema de trabajo y los
                            objetivos internos de una compañía
                        </h6>
                    </div>
                </div>
                <Card className="carta-naranja-servicios p-4">
                    <Card.Body className="d-flex align-items-center">
                        <Card.Text className="peso-regular">
                            <h6>
                                • Consultoría y asesoramiento en{" "}
                                <spam className="peso-bold text-uppercase">
                                    marketing y comercialización
                                </spam>
                                : realizamos auditorías de proyectos, análisis
                                internos y externos, mediciones y acciones, con
                                el principal objetivo de lograr definiciones
                                claras para posicionamientos de marcas.
                            </h6>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="carta-negra-servicios p-4">
                    <Card.Body className="d-flex align-items-center">
                        <Card.Text className="peso-regular">
                            <h6>
                                • Consultoría y asesoramiento{" "}
                                <spam className="peso-bold text-uppercase ">
                                    económico - financiero
                                </spam>
                                : cualificamos y evaluamos las finanzas de una
                                empresa para luego indicar estratégicas para
                                hacerlas más rentables y organizadas.
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
                                • Consultoría y asesoramiento{" "}
                                <spam className="peso-bold text-uppercase">
                                    político
                                </spam>
                                : nuestra gestión se basa en el concepto de
                                posicionamiento y visibilidad política, 
                                ejecutamos campañas electorales, asesoramientos
                                estratégicos, investigación de opinión pública,
                                mercado y asuntos públicos en Argentina y
                                España.
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
                                • Consultoría y asesoramiento{" "}
                                <spam className="peso-bold text-uppercase ">
                                    publicitario
                                </spam>
                                : nos basamos en costes y montos de conversión
                                obtenidos en cualquiera de las estrategias,
                                campañas y planes publicitarios a ejecutar.
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
                                • Consultoría y asesoramiento en{" "}
                                <spam className="peso-bold text-uppercase ">
                                    organización y recursos humanos
                                </spam>
                                : nuestro servicio se encarga de analizar y
                                diagnosticar el entorno laboral, nos orientamos
                                en la prescripción de modificaciones, ajustes y
                                mejoras para optimizar tanto el rendimiento del
                                personal como de la empresa.
                            </h6>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="d-flex justify-content-center ">
                <Link
                    className="text-decoration-none text-white d-none d-lg-block pt-5 pb-5"
                    to="/servicios"
                >
                    <h3 className="peso-bold">{"< < Volver"}</h3>
                </Link>
                <Link
                    className="text-decoration-none text-white d-lg-none d-block pt-5 pb-4"
                    to="/servicios"
                >
                    <h4 className="peso-bold">{"< < Volver"}</h4>
                </Link>
            </div>
            <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
                <BotonContactanos />
            </div>
        </div>
    );
}
