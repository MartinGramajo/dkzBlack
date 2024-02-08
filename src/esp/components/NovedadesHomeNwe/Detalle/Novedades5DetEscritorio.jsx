import { Image } from "react-bootstrap";
import NovedadesLista3 from "./NovedadesLista3";
import NovedadesLista4 from "./NovedadesLista4";
import NovedadesLista5 from "./NovedadesLista5";

const noticia1 = {
  id: 1,
  seccion: "DKZ",
  titulo: "FABRICIO MERIGLIO ES EL NUEVO DGC DE DKZ STUDIO",
  subtitulo:
    "Fabricio es realizador audiovisual independiente con grandes proyectos en su espalda. ",
  descripcion:
    "Fabricio Meriglio, nació en San Miguel de Tucumán y hace más de 20 años se desempeña como creativo publicitario y realizador audiovisual independiente. Trabajo en proyectos por el mundo entero, gran parte de ellos en Buenos Aires y Latino América.",
  descripcion1b:
    " Guionista, documentalista, director, entre tantos roles que ocupó y ocupa actualmente.",
  descripcion1c:
    " Juan Manuel Ordoñez Director de Estrategias en Guatemala dice, “Fabricio es un director versátil. Hemos filmado con él grandes producciones regionales como producciones más pequeñas a nivel local y en ambas hemos tenido excelentes resultados” ",
  descripcion1d:
    "“Toda mi vida he trabajado en el ámbito de las comunicaciones sociales. En publicidad, prensa, imagen corporativa. gráfica aplicada. Audiovisuales y actualmente también en Social Media”, asegura Meriglio",
  tituloIntermedio: "Trabajó muchos años en Buenos Aires y Latinoamérica",
  descripcion2:
    "Fabricio tiene la capacidad de producir, dirigir, editar y post producir piezas de cualquier tipo para cualquier presupuesto. Vinculado también a la escritura y redacción creativa, es autor de diversos guiones y cortometrajes y cuenta entre sus producciones con un par de libros de breves relatos. Todos estos aspectos, además de los anteriormente mencionados, hacen de Fabricio una persona sumamente idónea y potencial para la agencia DKZ",
  descripcion2b:
    "“La energía creativa que impregna los pasillos de DKZ provoca vértigo. Sorprende el ritmo del crecimiento de la agencia tomando en cuenta los pocos años que llevan en el mercado. Por supuesto, la clave está en la actitud innovadora con la que encaran cada proyecto; sin importar su envergadura”, confesó Fabricio en una nota de bienvenida en las oficinas de la agencia en San Miguel de Tucumán",
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

export default function Novedades5DetEscritorio() {
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
