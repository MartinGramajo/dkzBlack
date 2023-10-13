import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonTrabajaConNosotros() {
  return (
    <Button
      as={Link}
      to="/trabajaconnosotros"
      className="boton-naranja-grande mt-4 mt-lg-0"
    >
      <h3 className="peso-bold ps-4 d-none d-lg-block">TRABAJA CON NOSOTROS</h3>
      <h6 className="peso-bold ps-4 d-lg-none d-block">TRABAJA CON NOSOTROS</h6>
      <h2 className="peso-bold pe-3 d-none d-lg-block">➝</h2>
      <h3 className="peso-bold pe-3 d-lg-none d-block">➝</h3>{" "}
    </Button>
  );
}
