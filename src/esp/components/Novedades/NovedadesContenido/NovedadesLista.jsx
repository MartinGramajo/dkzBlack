import axios from "axios";
import Papa from "papaparse";
import "./novedadesContenido.css";
import { Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function NovedadesLista({idNovedad}) {
    const [trabajos, setTrabajos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTrabajos = async () => {
            setLoading(true);
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?output=csv"
            );

            const imagenes = Papa.parse(response.data, { header: true });

            setTrabajos(imagenes.data);
            setLoading(false);
        };
        getTrabajos();
    }, []);
    return (
        <div id="novedades">
            <div className="container">
                <div className="mx-4 mx-sm-0"></div>
                {loading ? (
                    <div className="text-white color-negro-fondo  d-flex justify-content-center py-5">
                        <Spinner
                            className="fs-1"
                            animation="border"
                            role="status"
                            variant="light"
                        ></Spinner>
                    </div>
                ) : (
                    <div>
                        <div className="py-4 novedades-nav w-100">
                            {trabajos.slice(0, 5).map((trabajo, id) => {
                                // Ignorar el elemento actual basado en su id
                                if (trabajo.id === idNovedad) {
                                    return null; // Ignora el elemento
                                }
                                return (
                                    <Link
                                        to={"/novedades/" + trabajo.id}
                                        className="tamaño-card-novedades"
                                        key={id}
                                    >
                                        <div className="fondo-novedades mb-4">
                                            <Image
                                                className="mb-3 imagen-lista-noticia "
                                                src={trabajo.imagenMini}
                                                alt="imagen novedades"
                                                fluid
                                            />
                                            <div className="">
                                                <div className="d-flex justify-content-between mb-3 mx-4 mx-sm-0">
                                                    <h5 className="peso-bold ">
                                                        {trabajo.titulo}
                                                    </h5>
                                                </div>
                                                <h6 className="peso-regular mx-4 mx-sm-0">
                                                    {trabajo.resumen}
                                                </h6>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
