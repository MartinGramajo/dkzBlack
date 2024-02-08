import { Image } from "react-bootstrap";
import NovedadesLista2 from "./NovedadesLista2";

const noticia1 = {
  id: 1,
  seccion: "Actualidad",
  titulo: "DKZ CELEBRA SU CUARTO ANIVERSARIO Y DESEMBARCA EN ESPAÑA",
  subtitulo: "",
  descripcion:
    "DKZ studio, celebra su cuarto aniversario y conmemora este hito con su exitoso desembarco en la ciudad de Murcia, España. Durante estos cuatro años, DKZ ha experimentado un crecimiento impresionante, convirtiéndose en un referente en el mundo del marketing y la tecnología, y ahora busca extender su experiencia a la región murciana.",
  descripcion1b:
    " Con cuatro años de éxito y crecimiento sostenido, DKZ se proyecta hacia un futuro prometedor. “Es un desafío enorme para todos los miembros de la agencia, pero sin dudas nos encontramos agradecidos y entusiasmados por la oportunidad”, sostiene Guillermo Sojo Bollini, Director General y socio fundador de DKZ.",
  descripcion1c: " ",
  descripcion1d: "",
  tituloIntermedio: "",
  descripcion2:
    "La agencia espera seguir evolucionando y ofreciendo soluciones creativas y efectivas que impulsen el éxito de sus clientes en el competitivo mundo digital, haciendo su enfoque como siempre hacia la excelencia, la innovación y la búsqueda constante de la satisfacción de sus clientes.",
  descripcion2b: "",
  imagen1:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg",
  imagen2: "",
  imagen3: "",
  fecha: "",
  textoImagen1: "",
  textoImagen2: "",
  textoImagen3: "",
  imagenMini:
    "https://res.cloudinary.com/dlzcbrqax/image/upload/v1693582932/Prensa/cuadradodkzesp_lsrdgd.jpg",
};

export default function Novedades2DetEscritorio() {
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
            <NovedadesLista2 />
          </div>
        </div>
      </div>
    </div>
  );
}
