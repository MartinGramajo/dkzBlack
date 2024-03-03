import React from "react";
import { Image } from "react-bootstrap";
import wsp from "../../../esp/assets/img/wapp.png";

export default function WspEN() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <a
          className=""
          href="https://wa.link/0nt3p8"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="fixed-bottom ms-auto mb-5 me-4"
            src={wsp}
            alt="wsp"
            fluid
          />
        </a>
      </div>
    </div>
  );
}
