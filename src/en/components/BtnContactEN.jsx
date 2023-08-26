import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BtnContactEN() {
  return (
    <div>
      <Button as={Link} to="/contactanos" className="boton-contactanos">
        <h4 className="peso-bold ">Contact</h4>
      </Button>
    </div>
  );
}
