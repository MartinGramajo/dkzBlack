import { Image } from "react-bootstrap";
import NovedadesLista3 from "./NovedadesLista3";
import NovedadesLista4 from "./NovedadesLista4";

const noticia1 = {
  id: 1,
  seccion: "DKZ",
  titulo: "DKZ SE SUMÓ AL CONSEJO PUBLICITARIO ARGENTINO",
  subtitulo: "",
  descripcion:
    "En un mundo en cambio permanente, promover hábitos de conducta positivos en la sociedad representa un gran desafío. Por eso, DKZ decidió sumarse al Consejo Publicitario Argentino (CPA), convirtiéndose en la primera agencia de publicidad y comunicación del NOA en integrar esta organización sin fines de lucro.",
  descripcion1b:
    " El esperado evento inaugural del Foro Publicitario en asociación con el Consejo Publicitario Argentino reunió a líderes y expertos de la industria para debatir y promover la excelencia creativa, la innovación y la ética en el campo de la publicidad en Argentina.",
  descripcion1c: " ",
  descripcion1d: "",
  tituloIntermedio:
    "“Realmente estamos muy contentos y entusiasmados de formar parte del Consejo Publicitario Argentino para el bien público. Somos la primera agencia regional que tiene la posibilidad de formar parte de esta entidad que es una organización sin fines de lucro”, sostuvo Guillermo Sojo Bollini, @guillermodkz CEO de DKZ.",
  descripcion2:
    "El CPA es una comunidad de empresas, agencias, medios, organizaciones e instituciones que se unen para promover valor social a través de la comunicación. “DKZ decidió formar parte porque creemos que, por medio de una gestión continua y efectiva, podemos transformar la vida de algunas personas”, concluyó.",
  descripcion2b: "",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia2_novkwh_wxeuqi.png",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia2_novkwh_wxeuqi.png",
};

export default function Novedades4DetEscritorio() {
  const {
    id,
    titulo,
    subtitulo,
    descripcion,
    descripcion1b,
    descripcion1c,
    descripcion1d,
    tituloIntermedio,
    descripcion2,
    descripcion2b,
    imagen1,
    imagen2,
    imagen3,
    fecha,
    textoImagen1,
    textoImagen2,
    textoImagen3,
    imagenMini,
  } = noticia1;

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="color-negro-fondo">
      <div className="mt-5 container d-flex ">
        <div className="col-8">
          <h2 className="text-white peso-bold mx-5 px-5 py-2">{titulo}</h2>
          <h5 className="text-white mx-5 px-5">{subtitulo}</h5>
          <br />
          <Image
            className="w-100"
            src={imagen1}
            alt="imagen de la noticia"
            fluid
          />
          <br />
          <div className="d-flex">
            <h4 className="text-white mt-3 mb-0">
              {textoImagen1}
              <hr className="text-white px-5" />
            </h4>
          </div>
          {/* <h6 className="text-white my-4 py-2 mx-5 px-5">{fecha}</h6> */}
          <h5 className="text-white mt-4 wrap-pre mx-5 px-5">
            {descripcion} <br />
            {descripcion1b} <br />
            {descripcion1c} <br />
            {descripcion1d}
          </h5>
          {imagen2 === "" ? (
            ""
          ) : (
            <div>
              <Image
                className="w-100 mt-5 mb-4"
                src={imagen2}
                alt="imagen de la noticia"
                fluid
              />
            </div>
          )}
          {tituloIntermedio === "" ? (
            ""
          ) : (
            <div>
              <h4 className="text-white text-center mx-4 my-5 peso-bold">
                {tituloIntermedio}
              </h4>
            </div>
          )}
          <div className="pb-5">
            <h5 className="text-white mt-4 wrap-pre mx-5 px-5 mb-5">
              {descripcion2} <br />
              {descripcion2b}
            </h5>
          </div>
        </div>
        <div className="col-4 ms-4">
          <hr className="text-white" />
          <h4 className="text-white tamaño-mas-grande peso-bold">
            Todos los Artículos:
          </h4>
          <div>
            <NovedadesLista4 />
          </div>
        </div>
      </div>
    </div>
  );
}
