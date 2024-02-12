import { Image } from "react-bootstrap";
import NovedadesLista3EN from "./NovedadesLista3EN";

const noticia1 = {
  id: 1,
  seccion: "",
  titulo: "THE FIRST EDITION OF THE ADVERTISING FORUM WAS HELD IN TUCUMAN",
  subtitulo: "",
  descripcion:
    "The first edition of the Advertising Forum aimed at public good communication, in collaboration with the Argentine Advertising Council, brought together leading professionals to promote public good campaigns. This event sought to promote messages that generate a positive impact on society and encourage social responsibility in the advertising field.",
  descripcion1b:
    " The highly anticipated inaugural event of the Foro Publicitario in association with the Consejo Publicitario Argentino brought together industry leaders and experts to discuss and promote creative excellence, innovation and ethics in the field of advertising in Argentina. ",
  descripcion1c: " ",
  descripcion1d: "",
  tituloIntermedio: "",
  descripcion2:
    "This meeting sought to promote the exchange of ideas and knowledge, as well as to encourage the development of impactful and socially responsible advertising campaigns. During the event, efforts to raise ethical standards in advertising were highlighted and innovative strategies were shared to create messages that connect more effectively with the audience and generate a positive change in Argentine society.",
  descripcion2b:
    "In addition, new approaches to address current challenges in the public good advertising market were explored and success stories were presented to inspire the professionals in attendance. The event also provided networking opportunities for participants to establish valuable industry connections and collaborate on future projects that promote the welfare of society.",
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

export default function Novedades3DetallesEscEN() {
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
            All Articles:
          </h4>
          <div>
            <NovedadesLista3EN />
          </div>
        </div>
      </div>
    </div>
  );
}
