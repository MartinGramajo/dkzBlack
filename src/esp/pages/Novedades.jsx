import React from "react";
import DosBotonesSC from "../components/dosBotonesSC/DosBotonesSC";
import NovedadesContenido from "../components/Novedades/NovedadesContenido/NovedadesContenido";

export default function Novedades() {
  return (
    <div>
      <div className="color-negro-fondo ">
        <NovedadesContenido />
      </div>
      <div className="color-negro-a-negroclaro-fondo">
        <DosBotonesSC />
      </div>
    </div>
  );
}
