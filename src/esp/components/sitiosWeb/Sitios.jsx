import React, { useEffect, useState } from "react";
import LineaNaranja from "../LineaNaranja";
import BotonContactanos from "../BotonContactanos";
import "./sitios.css";
import axios from "axios";
import Papa from "papaparse";

import OtrosCasos from "../OtrosCasos";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sitios() {
    const [trabajos, setTrabajos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTrabajos = async () => {
            setLoading(true);
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=361671608&single=true&output=csv"
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
                <div className="d-none d-md-block">
                    <LineaNaranja />
                    <h1 className="peso-bold">SITIOS WEB</h1>
                    <h4 className="py-4 peso-regular">
                        Trabajamos sobre cada uno de nuestros desarrollos de
                        manera exclusiva. Nuestras ideas parten desde una
                        concepción inicial en la cual implementamos todos
                        nuestros proyectos desde cero, sin utilización de
                        contenidos realizados por terceros o código fuente
                        reutilizable de otros trabajos, para DKZ cada cliente es
                        un nuevo desafío. Trabajamos sobre cada uno de nuestros
                        desarrollos de manera exclusiva.
                    </h4>
                    <h2 className="peso-bold color-naranja py-4">
                        Tecnologías utilizadas en nuestros desarrollos:
                    </h2>
                    <div>
                        <h4 className="peso-bold padding-item">
                            {" "}
                            • React + HTML 5 + CSS + Javascript
                        </h4>
                        <h4 className="peso-bold padding-item">
                            {" "}
                            • Linux + Apache + PHP + MySQL
                        </h4>
                        <h4 className="peso-bold padding-item">
                            {" "}
                            • Análisis funcional del sitio.
                        </h4>
                        <h4 className="peso-bold padding-item"> • UX UI</h4>
                        <h4 className="peso-bold padding-item">
                            {" "}
                            • Sitios Responsive
                        </h4>
                        <h4 className="peso-bold padding-item">
                            {" "}
                            • Codificación SEO Y SEM
                        </h4>
                        <h4 className="peso-bold padding-item">
                            {" "}
                            • Certificados SSL de seguridad
                        </h4>
                        <h4 className="peso-bold padding-item">
                            • Integración de API´s y Webservices
                        </h4>
                    </div>
                </div>
                <div className="d-md-none d-block mx-3">
                    <LineaNaranja />
                    <h3 className="peso-bold py-4">SITIOS WEB</h3>
                    <h6 className="py-4 peso-regular">
                        Trabajamos sobre cada uno de nuestros desarrollos de
                        manera exclusiva. Nuestras ideas parten desde una
                        concepción inicial en la cual implementamos todos
                        nuestros proyectos desde cero, sin utilización de
                        contenidos realizados por terceros o código fuente
                        reutilizable de otros trabajos, para DKZ cada cliente es
                        un nuevo desafío. Trabajamos sobre cada uno de nuestros
                        desarrollos de manera exclusiva.
                    </h6>
                    <h5 className="peso-bold color-naranja py-4">
                        Tecnologías utilizadas en nuestros desarrollos:
                    </h5>
                    <div>
                        <h5 className="peso-bold padding-item">
                            {" "}
                            • React + HTML 5 + CSS + Javascript
                        </h5>
                        <h5 className="peso-bold padding-item">
                            {" "}
                            • Linux + Apache + PHP + MySQL
                        </h5>
                        <h5 className="peso-bold padding-item">
                            {" "}
                            • Análisis funcional del sitio.
                        </h5>
                        <h5 className="peso-bold padding-item"> • UX UI</h5>
                        <h5 className="peso-bold padding-item">
                            {" "}
                            • Sitios Responsive
                        </h5>
                        <h5 className="peso-bold padding-item">
                            {" "}
                            • Codificación SEO Y SEM
                        </h5>
                        <h5 className="peso-bold padding-item">
                            {" "}
                            • Certificados SSL de seguridad
                        </h5>
                        <h5 className="peso-bold padding-item">
                            • Integración de API´s y Webservices
                        </h5>
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
                <OtrosCasos trabajos={trabajos} tipo="sitioweb" />
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
