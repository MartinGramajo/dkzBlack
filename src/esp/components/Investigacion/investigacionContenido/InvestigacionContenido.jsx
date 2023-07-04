import React from "react";
import LineaNaranjaCelu from "../../LineaNaranjaCelu";
import BotonContactanos from "../../BotonContactanos";
import { Button, Card, Image } from "react-bootstrap";
import "./investigacionContenido.css";

import investiga from "../../../assets/img/investiga.png";
import estudioCel from "../../../assets/img/estudio-cel.png";
import { Link } from "react-router-dom";
export default function InvestigacionContenido() {
    return (
        <div className="color-negro-fondo padding-titulo">
            <div className="container d-lg-block d-none">
                <LineaNaranjaCelu />
                <div className="">
                    <h1 className="peso-bold mb-4">
                        ESTUDIO E INVESTIGACIÓN DE MERCADO
                    </h1>
                    <h4 className="pt-5 pb-5 mb-3 peso-bold">
                        Enfocamos este servicio en la capacidad de nuestros
                        profesionales para establecer estrategias que consoliden
                        nuevas oportunidades de negocio. 
                    </h4>
                </div>
                <div className="d-flex mb-5">
                    <Card className="carta-negra-servicios me-5 px-xl-5 px-3 py-xl-4 py-1">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-regular">
                                <h4 className="d-none d-xl-block">
                                    Buscamos sobre todo, minimizar riesgos,
                                    comprender a los clientes, entender y
                                    enfrentar a la competencia. Por medio de
                                    diferentes estrategias, medimos reputaciones
                                    y capacidades y mejoramos la comunicación en
                                    todo aspecto.
                                </h4>
                                <h5 className="d-xl-none d-block">
                                    Buscamos sobre todo, minimizar riesgos,
                                    comprender a los clientes, entender y
                                    enfrentar a la competencia. Por medio de
                                    diferentes estrategias, medimos reputaciones
                                    y capacidades y mejoramos la comunicación en
                                    todo aspecto.
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="w-50 d-flex align-items-center">
                        <Image
                            src={investiga}
                            alt="Imagen investigacion mercado"
                            fluid
                        />
                    </div>
                </div>
                <h2 className="peso-bold color-naranja pt-4">Etapas</h2>
                <div className="pt-5 pb-5">
                    <div className="">
                        <Button className="boton-proceso-investigacion color-gris-investigacion me-5 cursor">
                            <h4 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2 me-2">
                                    1.
                                </spam>
                                Definición del problema, los objetivos y las
                                oportunidades
                            </h4>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="">
                        <Button className="boton-proceso-investigacion color-negro-investigacion me-5 cursor">
                            <h4 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">2.</spam>
                                Diseño de la investigación
                            </h4>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="">
                        <Button className="boton-proceso-investigacion color-gris-investigacion me-5 cursor">
                            <h4 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">3.</spam>
                                Obtención de información y datos
                            </h4>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="">
                        <Button className="boton-proceso-investigacion color-negro-investigacion me-5 cursor">
                            <h4 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">4.</spam>
                                Tratamiento y análisis de los datos
                            </h4>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="">
                        <Button className="boton-proceso-investigacion color-gris-investigacion me-5 cursor">
                            <h4 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">5.</spam>
                                Interpretación y presentación de los resultados
                            </h4>
                            <h3 className="mx-2 text-white-50 pe-5">↓</h3>
                        </Button>
                    </div>
                    <div className="">
                        <Button className="boton-proceso-investigacion color-negro-investigacion me-5 cursor">
                            <h4 className="ps-5 peso-bold">
                                <spam className="me-3">•</spam>
                                <spam className="color-naranja me-2">6.</spam>
                                Acciones estratégicas basadas en los resultados
                                obtenidos
                            </h4>
                        </Button>
                    </div>
                </div>
            </div>
            {/* CELULAR */}
            <div className="d-block d-lg-none">
                <div className="container pt-4">
                    <div className="mx-3">
                        <LineaNaranjaCelu />
                        <h3 className="peso-bold mb-4 pt-4">
                            ESTUDIO E INVESTIGACIÓN DE MERCADO
                        </h3>
                        <h6 className="pt-3 pb-4 mb-3 peso-bold interlineado">
                            Enfocamos este servicio en la capacidad de nuestros
                            profesionales para establecer estrategias que
                            consoliden nuevas oportunidades de negocio. 
                        </h6>
                    </div>
                </div>
                <Image
                    className="w-100"
                    src={estudioCel}
                    alt="Imagen investigacion mercado"
                    fluid
                />
                <Card className="carta-negra-servicios p-4">
                    <Card.Body className="d-flex align-items-center">
                        <Card.Text className="peso-regular">
                            <h6>
                                Buscamos sobre todo, minimizar riesgos,
                                comprender a los clientes, entender y enfrentar
                                a la competencia. Por medio de diferentes
                                estrategias, medimos reputaciones y capacidades
                                y mejoramos la comunicación en todo aspecto.
                            </h6>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="container">
                    <div className="mx-3">
                        <h5 className="peso-bold color-naranja pt-4 mt-3 pb-4">
                            Etapas
                        </h5>
                        <div className="">
                            <div className="mb-3">
                                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                                    <spam className="me-3">•</spam>
                                    <h6 className="ps-1 peso-bold">
                                        <spam className="color-naranja me-2">
                                            1.
                                        </spam>
                                        Definición del problema, los objetivos y
                                        las oportunidades
                                    </h6>
                                </Button>
                            </div>
                            <div className="mb-3">
                                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                                    <spam className="me-3">•</spam>
                                    <h6 className="ps-1 peso-bold">
                                        <spam className="color-naranja me-2">
                                            2.
                                        </spam>
                                        Diseño de la investigación
                                    </h6>
                                </Button>
                            </div>
                            <div className="mb-3">
                                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                                    <spam className="me-3">•</spam>
                                    <h6 className="ps-1 peso-bold">
                                        <spam className="color-naranja me-2">
                                            3.
                                        </spam>
                                        Obtención de información y datos
                                    </h6>
                                </Button>
                            </div>
                            <div className="mb-3">
                                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                                    <spam className="me-3">•</spam>
                                    <h6 className="ps-1 peso-bold">
                                        <spam className="color-naranja me-2 peso-bold">
                                            4.
                                        </spam>
                                        Tratamiento y análisis de los datos
                                    </h6>
                                </Button>
                            </div>
                            <div className="mb-3">
                                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                                    <spam className="me-3">•</spam>
                                    <h6 className="ps-1 peso-bold">
                                        <spam className="color-naranja me-2 peso-bold">
                                            5.
                                        </spam>
                                        Interpretación y presentación de los
                                        resultados
                                    </h6>
                                </Button>
                            </div>
                            <div className="mb-3">
                                <Button className="boton-proceso-investigacion color-gris-investigacion text-start d-flex justify-content-start cursor">
                                    <spam className="me-3">•</spam>
                                    <h6 className="ps-1 peso-bold">
                                        <spam className="color-naranja me-2">
                                            6.
                                        </spam>
                                        Acciones estratégicas basadas en los
                                        resultados obtenidos
                                    </h6>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center ">
                <Link
                    className="text-decoration-none text-white d-none d-lg-block pb-5"
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
