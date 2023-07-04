import React, { useEffect, useState } from "react";
import LineaNaranja from "../LineaNaranja";
import "../audioVisuales/audiovisual.css";
import BotonContactanos from "../BotonContactanos";
import axios from "axios";
import Papa from "papaparse";

import OtrosCasos from "../OtrosCasos";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AudioVisuales() {
    const [trabajos, setTrabajos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTrabajos = async () => {
            setLoading(true);
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=0&single=true&output=csv"
            );
            const imagenes = Papa.parse(response.data, { header: true });
            setTrabajos(imagenes.data);
        };
        getTrabajos();
        setLoading(false);
    }, []);

    return (
        <div className="color-negro-fondo">
            <div className="container padding-titulo">
                <div className="d-none d-lg-block">
                    <LineaNaranja />
                    <h1 className="peso-bold">
                        PRODUCCIONES <br /> AUDIOVISUALES
                    </h1>
                    <h4 className="padding-card peso-regular">
                        Spots publicitarios; cobertura de eventos y registros
                        sociales.Videos corporativos. Infomerciales.
                        Institucionales. Books.Producciones especiales.
                    </h4>
                    <div className="row">
                        <div className="col-12 col-md-6 ">
                            <div className="padding-card-pre">
                                <h2 className="peso-bold color-naranja py-2">
                                    {" "}
                                    CREATIVIDAD
                                </h2>
                                <h4 className="peso-regular texto-contenido-card">
                                    Spots publicitarios, cobertura de eventos y
                                    registros sociales. Videos
                                    corporativos.Infomerciales. Institucionales.
                                    Books.Producciones especiales.
                                </h4>
                            </div>
                            <div className="padding-card-pro pb-5">
                                <h2 className="peso-bold color-naranja py-2">
                                    {" "}
                                    PRODUCCIÓN
                                </h2>
                                <h4 className="peso-regular texto-contenido-card ">
                                    Equipo y personal técnico (diversos formatos
                                    según necesidad y presupuesto).Dirección;
                                    producción; dirección de
                                    fotografía.Dirección de arte. Realización de
                                    decorados.Casting. Make up, estilismo,
                                    vestuario.
                                </h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="padding-card-pre">
                                <h2 className="peso-bold color-naranja py-2">
                                    {" "}
                                    PREPRODUCCIÓN
                                </h2>
                                <h4 className="peso-regular texto-contenido-card">
                                    Devolución creativa y presentación
                                    preliminar. Relevamiento de
                                    locaciones.Diseño de producción.
                                </h4>
                            </div>
                            <div className="padding-card-pre">
                                <h2 className="peso-bold color-naranja pb-2">
                                    {" "}
                                    POSTPRODUCCIÓN
                                </h2>
                                <h4 className="peso-regular texto-contenido-card ">
                                    Edición. Montaje. Sonido. Etalonaje y
                                    corrección de color. Video fx. Audio
                                    fx.Música y sonido. Corte final y copias
                                    para cualquier medio.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-lg-none d-block mx-3">
                    <LineaNaranja />
                    <h3 className="peso-bold py-3">
                        PRODUCCIONES <br /> AUDIOVISUALES
                    </h3>
                    <h6 className="padding-card">
                        Spots publicitarios; cobertura de eventos y registros
                        sociales.Videos corporativos. Infomerciales.
                        Institucionales. Books.Producciones especiales.
                    </h6>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="padding-card-pre">
                                <h5 className="peso-bold color-naranja py-2 ">
                                    {" "}
                                    CREATIVIDAD
                                </h5>
                                <h6 className="peso-regular texto-contenido-card">
                                    Spots publicitarios, cobertura de eventos y
                                    registros sociales. Videos
                                    corporativos.Infomerciales. Institucionales.
                                    Books.Producciones especiales.
                                </h6>
                            </div>
                            <div className="padding-card-pro">
                                <h5 className="peso-bold color-naranja py-2">
                                    {" "}
                                    PRODUCCIÓN
                                </h5>
                                <h6 className="peso-regular texto-contenido-card">
                                    Equipo y personal técnico (diversos formatos
                                    según necesidad y presupuesto).Dirección;
                                    producción; dirección de
                                    fotografía.Dirección de arte. Realización de
                                    decorados.Casting. Make up, estilismo,
                                    vestuario.
                                </h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="padding-card-pre">
                                <h5 className="peso-bold color-naranja py-2">
                                    {" "}
                                    PREPRODUCCIÓN
                                </h5>
                                <h6 className="peso-regular texto-contenido-card">
                                    Devolución creativa y presentación
                                    preliminar. Relevamiento de
                                    locaciones.Diseño de producción.
                                </h6>
                            </div>
                            <div className="padding-card-pre">
                                <h5 className="peso-bold color-naranja pb-2">
                                    {" "}
                                    POSTPRODUCCIÓN
                                </h5>
                                <h6 className="peso-regular texto-contenido-card">
                                    Edición. Montaje. Sonido. Etalonaje y
                                    corrección de color. Video fx. Audio
                                    fx.Música y sonido. Corte final y copias
                                    para cualquier medio.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading ? (
                <div className="text-white spinner py-5">
                    <Spinner
                        className="fs-1"
                        animation="border"
                        role="status"
                        variant="light"
                    ></Spinner>
                </div>
            ) : (
                <OtrosCasos trabajos={trabajos} tipo="audiovisuales" />
            )}
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
