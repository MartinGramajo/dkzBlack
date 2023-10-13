import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonContactanos() {
  return (
    <Button as={Link} to="/contactanos" className="boton-naranja-grande">
      <h3 className="peso-bold ps-4 d-none d-lg-block">CONTACTANOS</h3>
      <h6 className="peso-bold ps-4 d-lg-none d-block">CONTACTANOS</h6>
      <h2 className="peso-bold pe-3 d-none d-lg-block">➝</h2>
      <h3 className="peso-bold pe-3 d-lg-none d-block">➝</h3>
    </Button>
  );
}
