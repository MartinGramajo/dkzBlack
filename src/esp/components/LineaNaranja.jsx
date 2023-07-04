import React from "react";
import { Image } from "react-bootstrap";
import lineaNaranja from "../assets/img/linea-naranja.png";
import lineaNaranjaCelu from "../assets/img/linea-naranja-celu.png";

export default function LineaNaranja() {
    return (
        <div className="">
            <div className="py-5 d-none d-lg-block">
                <Image className="" src={lineaNaranja} alt="spain" fluid />
            </div>
            <div className="pt-3 d-lg-none d-block">
                <Image className="" src={lineaNaranjaCelu} alt="spain" fluid />
            </div>
        </div>
    );
}
