import { Spinner } from "react-bootstrap";
import LineaNaranja from "../../../esp/components/LineaNaranja";
import OtrosCasosEN from "../OtrosCasosEN";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import BotonContactanosEN from "../BotonContactanosEN";

const EventoEn = () => {
  const [trabajos, setTrabajos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrabajos = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=1632136573&single=true&output=csv"
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
          <h1 className="peso-bold">EVENTS</h1>
          <h4 className="py-4 peso-regular">
            In our agency, we put at your disposal a team of highly qualified
            professionals. Who are capable of executing and events according to
            the highest standards of organizational quality and style.
          </h4>
          <h4 className="py-4 peso-regular">
            We make sure that every event we organize is a unique and
            unforgettable experience, with a special focus on attention to
            detail and customer attention to detail and customer satisfaction.
            In addition, we offer audiovisual coverage services so you can
            remember and share the highlights of your event. share the
            highlights of your event.
          </h4>
          <h2 className="peso-bold color-naranja py-4">
            Organization, professionalism, quality, and attention to detail.
          </h2>
          <div>
            <h2 className="peso-bold py-4">Turnkey service:</h2>
            <h4 className="peso-regular">
              A turnkey event is an integral service in which we take care of
              the entire process, from planning and design to the execution and
              coordination of the event itself. This This means that DKZ takes
              care of all aspects, including venue selection, stage design,
              supplier contracting, catering, logistics, decoration,lighting,
              sound, security, among other aspects, leaving you worry free.
            </h4>
          </div>
        </div>
        <div className="d-md-none d-block mx-3">
          <LineaNaranja />
          <h3 className="peso-bold py-4">EVENTS</h3>
          <h6 className="py-3 peso-regular">
            In our agency, we put at your disposal a team of highly qualified
            professionals. Who are capable of executing and events according to
            the highest standards of organizational quality and style.
          </h6>
          <h6 className="py-3 peso-regular">
            We make sure that every event we organize is a unique and
            unforgettable experience, with a special focus on attention to
            detail and customer attention to detail and customer satisfaction.
            In addition, we offer audiovisual coverage services so you can
            remember and share the highlights of your event. share the
            highlights of your event.
          </h6>
          <h5 className="peso-bold color-naranja pt-3">
            Organization, professionalism, quality, and attention to detail.
          </h5>
          <div>
            <h5 className="peso-bold py-3"> Turnkey service:</h5>
            <h6 className="peso-regular">
              A turnkey event is an integral service in which we take care of
              the entire process, from planning and design to the execution and
              coordination of the event itself. This This means that DKZ takes
              care of all aspects, including venue selection, stage design,
              supplier contracting, catering, logistics, decoration,lighting,
              sound, security, among other aspects, leaving you worry free.
            </h6>
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
        <OtrosCasosEN trabajos={trabajos} tipo="events" />
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

export default EventoEn;
