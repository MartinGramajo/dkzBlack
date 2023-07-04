import axios from "axios";
import Papa from "papaparse";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import BotonContactanos from "../components/BotonContactanos";
import OtrosCasos from "../components/OtrosCasos";
import ContenidoDetalle from "../components/ContenidoDetalle";

export default function CasosDetalle() {
    const params = useParams();
    const [trabajos, setTrabajos] = useState({});
    const [casos, setCasos] = useState([]);

    useEffect(() => {
        const getCasos = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=2150379&single=true&output=csv"
            );
            const imagenes = Papa.parse(response.data, { header: true });
            setCasos(imagenes.data);
        };
        getCasos();
    }, []);

    const getTrabajos = async () => {
        const response = await axios.get(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=2150379&single=true&output=csv"
        );

        const trabajos = Papa.parse(response.data, { header: true });
        const trabajo1 = trabajos.data;

        const trabajoFiltrado = trabajo1.filter(
            (trabajo) => trabajo.id === params.id
        );
        setTrabajos(trabajoFiltrado[0]);
    };
    useEffect(() => {
        getTrabajos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <ContenidoDetalle trabajos={trabajos}/>
            <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
                <BotonContactanos />
            </div>
            <div className="color-negroclaro-fondo">
                <OtrosCasos trabajos={casos} tipo="casos" />
            </div>
        </div>
    );
}
