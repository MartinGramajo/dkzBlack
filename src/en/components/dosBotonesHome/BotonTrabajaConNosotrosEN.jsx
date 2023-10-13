import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonTrabajaConNosotrosEN() {
  return (
    <Button
      as={Link}
      to="/work-with-us"
      className="boton-naranja-grande mt-4 mt-lg-0"
    >
      <h3 className="peso-bold ps-4 d-none d-lg-block">WORK WHIT US</h3>
      <h6 className="peso-bold ps-4 d-lg-none d-block">WORK WHIT US</h6>
      <h2 className="peso-bold pe-3 d-none d-lg-block">➝</h2>
      <h3 className="peso-bold pe-3 d-lg-none d-block">➝</h3>{" "}
    </Button>
  );
}
