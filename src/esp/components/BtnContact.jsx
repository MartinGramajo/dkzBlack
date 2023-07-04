import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BtnContact() {
  return (
    <div>
      <Button as={Link} to="/contactanos" className="boton-contactanos">
        <h4 className="peso-bold ">Contactanos</h4>
      </Button>
    </div>
  );
}
