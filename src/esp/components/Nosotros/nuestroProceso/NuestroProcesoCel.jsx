import React from "react";
import { Button, Image } from "react-bootstrap";
import femenino from "../../../assets/img/equipofemenino.jpg";
import masculino from "../../../assets/img/equipomasculino.jpg";
import LineaNaranja from "../../LineaNaranja";

export const NuestroProcesoCel = () => {
    return (
        <div>
            <div className="container">
                <div className="mx-3">
                    <LineaNaranja />
                    <h3 className="peso-bold py-4"> NUESTRO PROCESO</h3>
                </div>
            </div>
            <div className="container py-2">
                <div className="mx-3  ">
                    <Button className="boton-proceso-a me-5 cursor">
                        <h6 className="ms-3 fs-14 ">Análisis del mercado</h6>
                        <h3 className="mx-2 fs-14  text-white-50">↓</h3>
                    </Button>
                </div>
                <div className="mx-3">
                    <Button className="boton-proceso-b me-5 cursor">
                        <h6 className="ms-3 fs-14">
                            Determinación de objetivos
                        </h6>
                        <h3 className="mx-2 fs-14 text-white-50">↓</h3>
                    </Button>
                </div>
                <div className="mx-3">
                    <Button className="boton-proceso-a me-5 cursor">
                        <h6 className="ms-3 fs-14">
                            Elaboración de estrategias
                        </h6>
                        <h3 className="mx-2 fs-14 text-white-50">↓</h3>
                    </Button>
                </div>
                <div className="mx-3">
                    <Button className="boton-proceso-b me-5 cursor">
                        <h6 className="ms-3 fs-14">Plan de acción</h6>
                        <h3 className="mx-2 fs-14 text-white-50">↓</h3>
                    </Button>
                </div>
                <div className="mx-3">
                    <Button className="boton-proceso-a me-5 cursor">
                        <h6 className="ms-3 fs-14 text-start">
                            Establecimiento de presupuesto{" "}
                        </h6>
                        <h3 className="mx-2 fs-14 text-white-50">↓</h3>
                    </Button>
                </div>
                <div className="mx-3">
                    <Button className="boton-proceso-b me-5 cursor">
                        <h6 className="ms-3 fs-14">Métodos de control</h6>
                    </Button>
                </div>
            </div>

            <div className="">
                <div className="py-2">
                    <Image
                        className="foto-equipo"
                        src={masculino}
                        alt="Nuestro Proceso"
                        fluid
                    />
                </div>
                <div className="py-2 ">
                    <Image
                        className="foto-equipo"
                        src={femenino}
                        alt="Nuestro Proceso"
                        fluid
                    />
                </div>
            </div>
        </div>
    );
};
