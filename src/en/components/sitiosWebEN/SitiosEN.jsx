import React, { useEffect, useState } from "react";
import LineaNaranja from "../../../esp/components/LineaNaranja";
import "./sitiosEN.css";
import axios from "axios";
import Papa from "papaparse";
import BotonContactanosEN from "../BotonContactanosEN";
import { Link } from "react-router-dom";
import OtrosCasosEN from "../OtrosCasosEN";
import { Spinner } from "react-bootstrap";

const SitiosEN = () => {
  const [trabajos, setTrabajos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrabajos = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=361671608&single=true&output=csv"
      );
      const imagenes = Papa.parse(response.data, { header: true });
      setTrabajos(imagenes.data);
    };
    getTrabajos();
    setLoading(false);
  }, []);

  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo">
        <div className="d-none d-md-block">
          <LineaNaranja />
          <h1 className="peso-bold">WEB SITES</h1>
          <h4 className="py-4 peso-regular">
            We work on each of our developments in an exclusive way. Our ideas
            start from an initial conception in which we implement all our
            projects from which we implement all of our projects from scratch,
            without the use of use of content made by third parties or reusable
            source code from other reusable source code from other works, for
            DKZ each client is a new challenge. We work on each of our
            developments in an exclusive way.
          </h4>
          <h2 className="peso-bold color-naranja py-4">
            Technologies used in our developments:
          </h2>
          <div>
            <h4 className="peso-bold padding-item">
              {" "}
              • React + HTML 5 + CSS + Javascript
            </h4>
            <h4 className="peso-bold padding-item">
              {" "}
              • Linux + Apache + PHP + MySQL
            </h4>
            <h4 className="peso-bold padding-item">
              {" "}
              • Functional site analysis.
            </h4>
            <h4 className="peso-bold padding-item"> • UX UI</h4>
            <h4 className="peso-bold padding-item"> • Responsive Sites</h4>
            <h4 className="peso-bold padding-item"> • SEO & SEM coding</h4>
            <h4 className="peso-bold padding-item"> • SSL Certificates</h4>
            <h4 className="peso-bold padding-item">
              • API's and Webservices Integration
            </h4>
          </div>
        </div>
        <div className="d-md-none d-block mx-3">
          <LineaNaranja />
          <h3 className="peso-bold py-4">WEB SITES</h3>
          <h6 className="py-4 peso-regular">
            We work on each of our developments in an exclusive way. Our ideas
            start from an initial conception in which we implement all our
            projects from which we implement all of our projects from scratch,
            without the use of use of content made by third parties or reusable
            source code from other reusable source code from other works, for
            DKZ each client is a new challenge. We work on each of our
            developments in an exclusive way.
          </h6>
          <h5 className="peso-bold color-naranja py-4">
            Technologies used in our developments:
          </h5>
          <div>
            <h5 className="peso-bold padding-item">
              {" "}
              • React + HTML 5 + CSS + Javascript
            </h5>
            <h5 className="peso-bold padding-item">
              {" "}
              • Linux + Apache + PHP + MySQL
            </h5>
            <h5 className="peso-bold padding-item">
              {" "}
              • Functional site analysis.
            </h5>
            <h5 className="peso-bold padding-item"> • UX UI</h5>
            <h5 className="peso-bold padding-item"> • Responsive Sites</h5>
            <h5 className="peso-bold padding-item"> • SEO & SEM coding</h5>
            <h5 className="peso-bold padding-item"> • SSL Certificates</h5>
            <h5 className="peso-bold padding-item">
              • API's and Webservices Integration
            </h5>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-white spinner py-5">
          <Spinner
            className="fs-1"
            animation="border"
            role="status"
            variant="light"
          ></Spinner>
        </div>
      ) : (
        <OtrosCasosEN trabajos={trabajos} tipo="web-sites" />
      )}
      <div className="d-flex justify-content-center ">
        <Link
          className="text-decoration-none text-white d-none d-lg-block pb-5"
          to="/services"
        >
          <h3 className="peso-bold">{"< < Back To"}</h3>
        </Link>
        <Link
          className="text-decoration-none text-white d-lg-none d-block pt-5 pb-4"
          to="/services"
        >
          <h4 className="peso-bold">{"< < Back To"}</h4>
        </Link>
      </div>
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanosEN />
      </div>
    </div>
  );
};

export default SitiosEN;
