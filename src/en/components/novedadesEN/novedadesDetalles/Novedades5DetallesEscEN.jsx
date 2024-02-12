import { Image } from "react-bootstrap";
import NovedadesLista5EN from "./NovedadesLista5EN";

const noticia1 = {
  id: 1,
  seccion: "DKZ",
  titulo: "Fabricio Meriglio is DKZ Studio's new DGC",
  subtitulo:
    "Fabricio is an independent audiovisual filmmaker with large projects on his back.",
  descripcion:
    "Fabricio Meriglio, was born in San Miguel de Tucumán and more than 20 years ago he serves as an advertising creative and independent audiovisual filmmaker. Work in projects around the world, much of them in Buenos Aires and Latin America.",
  descripcion1b:
    " Screenwriter, documentary filmmaker, director, among so many roles that he currently occupied and occupies.",
  descripcion1c:
    " Juan Manuel Ordoñez Director of Strategies in Guatemala says, “Fabricio is a versatile director. We have filmed with it large regional productions such as smaller productions at the local level and in both we have had excellent results”",
  descripcion1d:
    "“All my life I have worked in the field of social communications. In advertising, press, corporate image. Applied graphic. Audiovisuals and currently also in social media,” says Meriglio",
  tituloIntermedio: "He worked many years in Buenos Aires and Latin America",
  descripcion2:
    "Fabricio has the ability to produce, direct, edit and post produce pieces of any type for any budget. Linked to writing and creative writing, he is the author of various scripts and short films and has among his productions a couple of books of short stories. All these aspects, in addition to the aforementioned, make Fabricio an extremely suitable and potential person for the DKZ agency.",
  descripcion2b:
    "“The creative energy that permeates DKZ's halls causes vertigo. Surprise the rate of agency's growth taking into account the few years they have been in the market. Of course, the key is in the innovative attitude with which each project faces; regardless of its size,” manufactured manufacturing in a welcome note in the agency offices in San Miguel de Tucumán.",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663116234/Prensa/noticia2_novkwh_wxeuqi.png",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1663118036/Prensa/noticia1_tfk0yo_dlnncf.png",
};

export default function Novedades5DetallesEscEN() {
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
            <NovedadesLista5EN />
          </div>
        </div>
      </div>
    </div>
  );
}
