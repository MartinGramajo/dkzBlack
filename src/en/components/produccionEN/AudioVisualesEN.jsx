import "./audiovisualEN.css";
import LineaNaranja from "../../../esp/components/LineaNaranja";
import { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import BotonContactanosEN from "../BotonContactanosEN";
import { Link } from "react-router-dom";
import OtrosCasosEN from "../OtrosCasosEN";
import { Spinner } from "react-bootstrap";

const AudioVisualesEN = () => {
  const [trabajos, setTrabajos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrabajos = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=0&single=true&output=csv"
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
        <div className="d-none d-lg-block">
          <LineaNaranja />
          <h1 className="peso-bold">
            AUDIOVISUAL <br /> PRODUCTIONS
          </h1>
          <h4 className="padding-card peso-regular">
            Advertising spots; coverage of events and social events. Corporate
            videos. Infomercials. Institutional. Special productions.
          </h4>
          <div className="row">
            <div className="col-12 col-md-6 ">
              <div className="padding-card-pre">
                <h2 className="peso-bold color-naranja py-2"> CREATIVITY</h2>
                <h4 className="peso-regular texto-contenido-card">
                  Advertising spots, event coverage and social
                  registers.Corporate videos, infomercials. Institutional.
                  Books.special productions.
                </h4>
              </div>
              <div className="padding-card-pro pb-5">
                <h2 className="peso-bold color-naranja py-2"> PRODUCTION</h2>
                <h4 className="peso-regular texto-contenido-card ">
                  Equipment and technical staff (different formats according to
                  need and budget). Direction; production; direction of
                  photography; art direction. Set design. Casting. Make up,
                  styling, wardrobe.
                </h4>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="padding-card-pre">
                <h2 className="peso-bold color-naranja py-2"> PREPRODUCTION</h2>
                <h4 className="peso-regular texto-contenido-card">
                  Creative feedback and preliminary presentation. Location
                  scouting. Production design.
                </h4>
              </div>
              <div className="padding-card-pre">
                <h2 className="peso-bold color-naranja pb-2">
                  {" "}
                  POSTPRODUCTION
                </h2>
                <h4 className="peso-regular texto-contenido-card ">
                  Editing. Sound. Color grading and color correction. Video fx.
                  Audio fx. Music and sound. Final cut and copies for any media.
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="d-lg-none d-block mx-3">
          <LineaNaranja />
          <h3 className="peso-bold py-3">
            AUDIOVISUAL <br /> PRODUCTIONS
          </h3>
          <h6 className="padding-card">
            Advertising spots; coverage of events and social events. Corporate
            videos. Infomercials. Institutional. Special productions.
          </h6>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="padding-card-pre">
                <h5 className="peso-bold color-naranja py-2 "> CREATIVITY</h5>
                <h6 className="peso-regular texto-contenido-card">
                  Advertising spots, event coverage and social
                  registers.Corporate videos, infomercials. Institutional.
                  Books.special productions.
                </h6>
              </div>
              <div className="padding-card-pro">
                <h5 className="peso-bold color-naranja py-2"> PRODUCTION</h5>
                <h6 className="peso-regular texto-contenido-card">
                  Equipment and technical staff (different formats according to
                  need and budget). Direction; production; direction of
                  photography; art direction. Set design. Casting. Make up,
                  styling, wardrobe.
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="padding-card-pre">
                <h5 className="peso-bold color-naranja py-2"> PREPRODUCTION</h5>
                <h6 className="peso-regular texto-contenido-card">
                  Creative feedback and preliminary presentation. Location
                  scouting. Production design.
                </h6>
              </div>
              <div className="padding-card-pre">
                <h5 className="peso-bold color-naranja pb-2">
                  {" "}
                  POSTPRODUCTION
                </h5>
                <h6 className="peso-regular texto-contenido-card">
                  Editing. Sound. Color grading and color correction. Video fx.
                  Audio fx. Music and sound. Final cut and copies for any media.
                </h6>
              </div>
            </div>
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
        <OtrosCasosEN trabajos={trabajos} tipo="audio-visual-production" />
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

export default AudioVisualesEN;
