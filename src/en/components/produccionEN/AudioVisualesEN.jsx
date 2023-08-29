import "./audiovisualEN.css";
import LineaNaranja from "../../../esp/components/LineaNaranja";

const AudioVisualesEN = () => {
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
                  Advertising spots, event coverage and social registers. social
                  media. Corporate videos, infomercials. Institutional.
                  Books.special productions.
                </h4>
              </div>
              <div className="padding-card-pro pb-5">
                <h2 className="peso-bold color-naranja py-2"> PRODUCTION</h2>
                <h4 className="peso-regular texto-contenido-card ">
                  Equipment and technical staff (different formats according to
                  need and budget). Direction; production; direction of
                  photography; art direction. Art direction. Set design.
                  Casting. Make up, styling, wardrobe.
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
                  copies for any media.
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
                  Advertising spots, event coverage and social registers. social
                  media. Corporate videos, infomercials. Institutional.
                  Books.special productions.
                </h6>
              </div>
              <div className="padding-card-pro">
                <h5 className="peso-bold color-naranja py-2"> PRODUCTION</h5>
                <h6 className="peso-regular texto-contenido-card">
                  Equipment and technical staff (different formats according to
                  need and budget). Direction; production; direction of
                  photography; art direction. Art direction. Set design.
                  Casting. Make up, styling, wardrobe.
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
                  copies for any media.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {loading ? (
        <div className="text-white spinner py-5">
            <Spinner
                className="fs-1"
                animation="border"
                role="status"
                variant="light"
            ></Spinner>
        </div>
    ) : (
        <OtrosCasos trabajos={trabajos} tipo="audiovisuales" />
    )}
    <div className="d-flex justify-content-center ">
        <Link
            className="text-decoration-none text-white d-none d-lg-block pb-5"
            to="/servicios"
        >
            <h3 className="peso-bold">{"< < Volver"}</h3>
        </Link>
        <Link
            className="text-decoration-none text-white d-lg-none d-block pt-5 pb-4"
            to="/servicios"
        >
            <h4 className="peso-bold">{"< < Volver"}</h4>
        </Link>
    </div>
    <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanos />
    </div> */}
    </div>
  );
};

export default AudioVisualesEN;
