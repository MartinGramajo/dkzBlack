import { Image } from "react-bootstrap";
import NovedadesLista3 from "./NovedadesLista3";

const noticia1 = {
  id: 1,
  seccion: "DKZ",
  titulo: "SE REALIZÓ LA PRIMERA EDICIÓN DEL FORO PUBLICITARIO EN TUCUMÁN",
  subtitulo: "",
  descripcion:
    "La primera edición del Foro Publicitario destinado a la comunicación de bien público, en colaboración con el Consejo Publicitario Argentino, ha reunido a destacados profesionales  para promover campañas de bien público. Este evento buscó impulsar mensajes que generen un impacto positivo en la sociedad y fomentar la responsabilidad social en el ámbito publicitario. ",
  descripcion1b:
    " El esperado evento inaugural del Foro Publicitario en asociación con el Consejo Publicitario Argentino reunió a líderes y expertos de la industria para debatir y promover la excelencia creativa, la innovación y la ética en el campo de la publicidad en Argentina.",
  descripcion1c: " ",
  descripcion1d: "",
  tituloIntermedio: "",
  descripcion2:
    "Este encuentro buscó impulsar el intercambio de ideas y conocimientos, así como fomentar el desarrollo de campañas publicitarias impactantes y socialmente responsables. Durante el evento, se destacaron los esfuerzos por elevar los estándares éticos en la publicidad y se compartieron estrategias innovadoras para crear mensajes que conecten de manera más efectiva con la audiencia y generen un cambio positivo en la sociedad argentina.",
  descripcion2b:
    "Además, se exploraron nuevos enfoques para abordar los desafíos actuales del mercado publicitario destinado al bien público y se presentaron casos de éxito que sirvieron de inspiración para los profesionales presentes. El evento también ofreció oportunidades de networking para que los participantes pudieran establecer conexiones valiosas en la industria y colaborar en futuros proyectos que promuevan el bienestar de la sociedad.",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1686880194/Prensa/guille_y_fabri_mtrdip.jpg",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1686880310/Prensa/guille_y_fabri_MINI_gckvdn.jpg",
};

export default function Novedades3DetEscritorio() {
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
            <NovedadesLista3 />
          </div>
        </div>
      </div>
    </div>
  );
}
