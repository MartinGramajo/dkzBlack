import React from "react";
import BotonContactanos from "../BotonContactanos";
import BotonTrabajaConNosotros from "./BotonTrabajaConNosotros";

export default function DosBotonesHome() {
    return (
        <div className="container d-flex flex-wrap justify-content-lg-between justify-content-center align-content-between py-4">
            <BotonContactanos />
            <BotonTrabajaConNosotros />
        </div>
    );
}
