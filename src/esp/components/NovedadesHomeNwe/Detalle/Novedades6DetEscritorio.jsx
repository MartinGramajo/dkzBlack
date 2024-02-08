import { Image } from "react-bootstrap";
import NovedadesLista5 from "./NovedadesLista5";

const noticia1 = {
  id: 1,
  seccion: "DKZ",
  titulo: "UN TUCUMANO SERÁ JURADO DEL CONSEJO PUBLICITARIO ARGENTINO",
  subtitulo:
    "Guillermo, @guillermodkz CEO de DKZ studio fue invitado a participar como jurado del CPA para los premios Obrar Federal 2022 ",
  descripcion:
    "Guillermo fundó DKZ studio en marzo de 2019 junto a Ignacio Pintos @nacho_pintos10 . La agencia ha trabajado de manera integral y colaborativa en más de 10 provincias de Argentina y en diferentes partes del mundo.",
  descripcion1b:
    " Hace un tiempo atrás DKZ comenzó a formar parte de manera activa del Consejo en diferentes ámbitos y, a tan solo 6 meses de esta unión, Guillermo fue invitado como jurado de los Premios Obrar Federal. Los Premios Obrar Federal buscan reconocer a las mejores campañas de comunicación con impacto positivo, que aborden temas de interés regional, provincial o local, dirigidas especialmente a audiencias argentinas fuera del AMBA.",
  descripcion1c: "",
  descripcion1d: "",
  tituloIntermedio:
    "Estos premios que vienen consolidándose de manera nacional hace más de 13 años, buscan fomentar por medio del Consejo Publicitario, que diferentes empresas, instituciones, organizaciones o agencias trabajen sobre mensajes de bien público.",
  descripcion2:
    "Este 16 de septiembre en las instalaciones del Hotel Pullman City Center de Rosario se vivirá esta gran jornada del Consejo Publicitario Argentino, “Invitamos a todos los colegas y colaboradores a nivel regional a unirse al Consejo, además nos parece de suma importancia que establezcan campañas destinadas a la comunicación con impacto positivo”, sostuvo Guillermo Sojo Bollini.",
  descripcion2b: "",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663184171/306549749_857291485261505_7534753838600488974_n_-_copia_vbrp7n.jpg",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663185587/306549749_857291485261505_7534753838600488974_n_-_copia_q6sgx5.jpg",
};

export default function Novedades6DetEscritorio() {
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
            <NovedadesLista5 />
          </div>
        </div>
      </div>
    </div>
  );
}
