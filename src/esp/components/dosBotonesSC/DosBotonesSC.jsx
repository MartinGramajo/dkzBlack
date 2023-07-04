import React from "react";
import BotonServicios from "./BotonServicios";
import BotonCasos from "./BotonCasos";

export default function DosBotonesSC() {
    return (
        <div className="container d-flex flex-wrap justify-content-lg-between justify-content-center align-content-between py-4">
            <BotonServicios />
            <BotonCasos />
        </div>
    );
}
