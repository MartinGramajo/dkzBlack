import axios from "axios";
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";
import { Image, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import LineaNaranja from "../../LineaNaranja";
import DosBotonesSC from "../../dosBotonesSC/DosBotonesSC";

export const NovedadesDetallados = () => {
    const params = useParams();
    const [trabajos, setTrabajos] = useState({});
    const [loading, setLoading] = useState(true);

    const getTrabajos = async () => {
        setLoading(true);
        const response = await axios.get(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=574932737&single=true&output=csv"
        );

        const trabajos = Papa.parse(response.data, { header: true });
        const trabajo1 = trabajos.data;

        const trabajoFiltrado = trabajo1.filter(
            (trabajo) => trabajo.id === params.id
        );
        setTrabajos(trabajoFiltrado[0]);
        setLoading(false);
    };
    useEffect(() => {
        getTrabajos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        id,
        seccion,
        titulo,
        resumen,
        subtitulo,
        descripcion,
        tituloIntermedio,
        descripcion2,
        imagen1,
        imagen2,
        imagen3,
        fecha,
        textoImagen1,
        textoImagen2,
        textoImagen3,
        imagenMini,
    } = trabajos;

    const volver = "< < Volver";

    return (
        <div>
            {/* Escritorio */}
            <div className="d-md-block d-none">
                {loading ? (
                    <div className="text-white spinner ">
                        <Spinner
                            className="fs-1"
                            animation="border"
                            role="status"
                            variant="light"
                        ></Spinner>
                    </div>
                ) : (
                    <div className="container">
                        <LineaNaranja />
                        <div>
                            <h2 className="peso-bold my-2">{titulo}</h2>
                            <h4 className="peso-regular my-4">{resumen}</h4>
                        </div>
                        <div>
                            <Image
                                className="w-100"
                                src={imagen1}
                                alt="imagen de la noticia"
                                fluid
                            />
                        </div>
                        <div className="my-4 py-4">
                            <h4 className="peso-bold mt-2 ">{subtitulo} </h4>
                            <h4 className="peso-regular my-2">
                                {" "}
                                {descripcion}
                            </h4>
                        </div>
                        {imagen2 === "" ? (
                            ""
                        ) : (
                            <div>
                                <Image
                                    className="w-100"
                                    src={imagen2}
                                    alt="imagen de la noticia"
                                    fluid
                                />
                            </div>
                        )}
                        <div className="my-4 py-4">
                            <h4 className="peso-regular my-2">
                                {" "}
                                {descripcion2}
                            </h4>
                        </div>
                        <div className="d-flex justify-content-center py-4">
                            <Link
                                className="text-decoration-none text-white"
                                to="/novedades"
                            >
                                <h4 className="peso-regular">{volver}</h4>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            {/* Celular */}
            <div className="d-block d-md-none ">
                {loading ? (
                    <div className="text-white  spinner ">
                        <Spinner
                            className="fs-1"
                            animation="border"
                            role="status"
                            variant="light"
                        ></Spinner>
                    </div>
                ) : (
                    <div>
                        <div className="container">
                            <LineaNaranja />
                            <div>
                                <h3 className="peso-bold my-2">{titulo}</h3>
                                <h6 className="peso-regular my-4">{resumen}</h6>
                            </div>
                        </div>
                        <div>
                            <Image
                                className="w-100"
                                src={imagen1}
                                alt="imagen de la noticia"
                                fluid
                            />
                        </div>
                        <div className="my-4 py-4 container">
                            <h5 className="peso-bold mt-2 ">{subtitulo} </h5>
                            <h6 className="peso-regular my-2">
                                {" "}
                                {descripcion}
                            </h6>
                        </div>
                        {imagen2 === "" ? (
                            ""
                        ) : (
                            <div>
                                <Image
                                    className="w-100"
                                    src={imagen2}
                                    alt="imagen de la noticia"
                                    fluid
                                />
                            </div>
                        )}
                        <div className="my-4 py-4 container">
                            <h6 className="peso-regular my-2">
                                {" "}
                                {descripcion2}
                            </h6>
                        </div>
                        <div className="d-flex justify-content-center py-4">
                            <Link
                                className="text-decoration-none text-white"
                                to="/novedades"
                            >
                                <h5 className="peso-bold">{volver}</h5>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="color-negro-a-negroclaro-fondo">
                <DosBotonesSC />
            </div>
        </div>
    );
};
