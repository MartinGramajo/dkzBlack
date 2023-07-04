import { Card, Image } from "react-bootstrap";
import LineaNaranja from "../../LineaNaranja";
import BotonContactanos from "../../BotonContactanos";

import cobertura from "../../../assets/img/cobertura.png";
import cobertura2 from "../../../assets/img/cobertura2.png";
import cobertura3 from "../../../assets/img/cobertura3.png";
import cobertura4 from "../../../assets/img/cobertura4.png";

import coberturaCel from "../../../assets/img/cobertura-cel.png";
import coberturaCel2 from "../../../assets/img/cobertura-cel2.png";
import coberturaCel3 from "../../../assets/img/cobertura-cel3.png";
import coberturaCel4 from "../../../assets/img/cobertura-cel4.png";
import { Link } from "react-router-dom";

export default function CoberturasContenido() {
    return (
        <div className="color-negro-fondo">
            <div className="container padding-titulo d-lg-block d-none">
                <LineaNaranja />
                <div className="">
                    <h1 className="peso-bold mb-5 pb-4">
                        COBERTURAS DE PRENSA <br /> Y REDACCIÓN DE NOTICIAS
                    </h1>
                </div>
                <div className="d-flex mb-5 pb-4">
                    <Card className="carta-trans-servicios me-4 py-xl-5 py-0">
                        <Card.Body className="d-flex align-items-center">
                            <Card.Text className="peso-bold">
                                <h4>
                                    Utilizamos diferentes estrategias con el
                                    objetivo de informar, persuadir, promover,
                                    formar opiniones, educar y entretener.
                                    Ofrecemos contenido original, con valor
                                    genuino y relevantes para los diferentes
                                    sectores.
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="w-50 d-flex align-items-center">
                        <Image src={cobertura} alt="Imagen coberturas" fluid />
                    </div>
                </div>
                <h2 className="peso-bold color-naranja mb-5">
                    ¿CÓMO LO HACEMOS?
                </h2>
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
                                        Contamos con un sector de prensa y
                                        difusión
                                    </spam>{" "}
                                    encargado de elaborar y comunicar
                                    informaciones relacionadas con diferentes
                                    actividades periodísticas e institucionales.
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
                                    • Realizamos relevamiento en diferentes
                                    medios gráficos y audiovisuales,{" "}
                                    <spam className="peso-bold">
                                        contamos con nuestro propio departamento
                                        de producción y post producción.
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
                                    • Confeccionamos piezas de comunicación
                                    interna con contenidos de carácter
                                    institucional.
                                    <br />
                                    <br />• Diseñamos y ejecutamos piezas
                                    gráficas de alto impacto con el objetivo de
                                    comunicarnos con profesionalismo y eficacia.
                                </h4>
                                <h5 className="d-xl-none d-block">
                                    • Confeccionamos piezas de comunicación
                                    interna con contenidos de carácter
                                    institucional.
                                    <br />
                                    <br />• Diseñamos y ejecutamos piezas
                                    gráficas de alto impacto con el objetivo de
                                    comunicarnos con profesionalismo y eficacia.
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
                                COBERTURAS DE PRENSA Y REDACCIÓN DE NOTICIAS
                            </h3>
                            <Card className="carta-trans-servicios pb-4 mb-2">
                                <Card.Body className="d-flex align-items-center p-0">
                                    <Card.Text className="peso-bold">
                                        <h6 className="interlineado">
                                            Utilizamos diferentes estrategias
                                            con el objetivo de informar,
                                            persuadir, promover, formar
                                            opiniones, educar y entretener.
                                            Ofrecemos contenido original, con
                                            valor genuino y relevantes para los
                                            diferentes sectores.
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
                        ¿CÓMO LO HACEMOS?
                    </h5>
                    <div className="d-flex flex-column">
                        <Card className="carta-naranja-servicios p-4">
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Text className="peso-regular">
                                    <h6>
                                        •{" "}
                                        <spam className="peso-bold">
                                            Contamos con un sector de prensa y
                                            difusión
                                        </spam>{" "}
                                        encargado de elaborar y comunicar
                                        informaciones relacionadas con
                                        diferentes actividades periodísticas e
                                        institucionales.
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
                                    • Realizamos relevamiento en diferentes
                                    medios gráficos y audiovisuales,{" "}
                                    <spam className="peso-bold">
                                        contamos con nuestro propio departamento
                                        de producción y post producción.
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
                                    • Confeccionamos piezas de comunicación
                                    interna con contenidos de carácter
                                    institucional.
                                    <br />
                                    <br />
                                    <br />• Diseñamos y ejecutamos piezas
                                    gráficas de alto impacto con el objetivo de
                                    comunicarnos con profesionalismo y eficacia.
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
