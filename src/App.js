import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./esp/pages/Home";
import Wapp from "./esp/components/wapp/Wsp";
import Conocenos from "./esp/pages/Conocenos";
import Novedades from "./esp/pages/Novedades";
import Casos from "./esp/pages/Casos";
import Contacto from "./esp/pages/Contacto";
import TrabajaConNosotros from "./esp/pages/TrabajaConNosotros";
import ProducionAV from "./esp/pages/ProducionAV";
import EventosPage from "./esp/pages/EventosPage";
import SitiosWeb from "./esp/pages/SitiosWeb";
import SocialMedialPage from "./esp/pages/SocialMediaPage";
import Consultoria from "./esp/pages/Consultoria";
import Coberturas from "./esp/pages/Coberturas";
import Publicidad from "./esp/pages/Publicidad";
import Investigacion from "./esp/pages/Investigacion";
import NovedadesDetalle from "./esp/pages/NovedadesDetalle";
import CasosDettalle from "./esp/pages/CasosDetalle";
import { ServiciosPage } from "./esp/pages/ServiciosPage";
import { SitiosWebDetallados } from "./esp/pages/SitiosWebDetallados";
import EventosDettalle from "./esp/pages/EventosDetalle";
import SocialMediaDetalle from "./esp/pages/SocialMediaDetalle";
import PublicidadDetalle from "./esp/pages/PublicidadDetalle";
import AudioVisualDetalle from "./esp/pages/AudioVisualDetalle";
import ScrollToTop2 from "./esp/components/ScrollToTop2";
import HomeEN from "./en/pages/HomeEN";
import Testeo from "./esp/pages/Testeo";
import ConocenosEN from "./en/pages/ConocenosEN";
import ServiciosPageEN from "./en/pages/ServiciosPageEN";
import NovedadesEN from "./en/pages/NovedadesEN";
import NovedadesDetalleEN from "./en/pages/NovedadesDetalleEN";
import ContactoEN from "./en/pages/ContactoEN";
import TrabajaConNosotrosEN from "./en/pages/TrabajaConNosotrosEN";
import EventosPageEN from "./en/pages/EventosPageEN";
import SocialMediaPageEN from "./en/pages/SocialMediaPageEN";
import SitiosWebPageEN from "./en/pages/SitiosWebPageEN";
import ProduccionAVPageEN from "./en/pages/ProduccionAVPageEN";
import CoberturaPageEN from "./en/pages/CoberturaPageEN";
import ConsultoriaPageEN from "./en/pages/ConsultoriaPageEN";
import PublicidadTradicionalPageEN from "./en/pages/PublicidadTradicionalPageEN";
import InvestigacionPageEN from "./en/pages/InvestigacionPageEN";
import CasosPageEN from "./en/pages/CasosPageEN";
import CasosDetalleEN from "./en/pages/CasosDetalleEN";
import AudioVisualDetalleEN from "./en/components/AudioVisualDetalleEN";
import { SitiosWebDetalladosEN } from "./en/components/SitiosWebDetalladosEN";
import SocialMediaDetalleEN from "./en/components/SocialMediaDetalleEN";
import EventosDetalleEN from "./en/components/EventosDetalleEN";
import PublicidadDetalleEN from "./en/components/PublicidadDetalleEN";
import Noticias1 from "./esp/pages/noticias/Noticias1";
import Noticias2 from "./esp/pages/noticias/Noticias2";
import Noticias3 from "./esp/pages/noticias/Noticias3";
import Noticias4 from "./esp/pages/noticias/Noticias4";
import Noticias5 from "./esp/pages/noticias/Noticias5";
import Noticias6 from "./esp/pages/noticias/Noticias6";
import NovedadesNew from "./esp/pages/NovedadesNew";
import Noticias1EN from "./en/pages/NoticiasEN/Noticias1EN";
import Noticias2EN from "./en/pages/NoticiasEN/Noticias2EN";
import Noticias3EN from "./en/pages/NoticiasEN/Noticias3EN";
import Noticias4EN from "./en/pages/NoticiasEN/Noticias4EN";
import Noticias5EN from "./en/pages/NoticiasEN/Noticias5EN";
import Noticias6EN from "./en/pages/NoticiasEN/Noticias6EN";

function App() {

    return (
        <div className="d-flex flex-column min-vh-100">
            <HashRouter>
                <Wapp />
                <ScrollToTop2 />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/en" element={<HomeEN />} />
                    <Route path="/test" element={<Testeo />} />
                    <Route path="/conocenos" element={<Conocenos />} />
                    <Route path="/meet-us" element={<ConocenosEN />} />
                    <Route path="/servicios" element={<ServiciosPage />} />
                    <Route path="/services" element={<ServiciosPageEN />} />
                    <Route path="/novedades" element={<Novedades />} />
                    <Route path="/novedades/todas" element={<NovedadesNew />} />
                    <Route path="/noticia/dkz-concluye-un-2023-con-grandes-exitos" element={<Noticias1 />} />
                    <Route path="/noticia/dkz-celebra-su-cuarto-aniversario-y-desembarca-en-españa" element={<Noticias2 />} />
                    <Route path="/noticia/se-realizo-la-primera-edicion-del-foro-publicitario-en-tucuman" element={<Noticias3 />} />
                    <Route path="/noticia/dkz-se-sumo-al-consejo-publicitario-argentino" element={<Noticias4 />} />
                    <Route path="/noticia/fabricio-meriglio-es-el-nuevo-dgc-de-dkz-studio" element={<Noticias5 />} />
                    <Route path="/noticia/un-tucumano-sera-jurado-del-consejo-publicitario" element={<Noticias6 />} />
                    <Route path="/news" element={<NovedadesEN />} />
                    <Route path="/news/dkz-concludes-2023-with-great-success" element={<Noticias1EN />} />
                    <Route path="/news/dkz-celebrates-its-fourth-anniversary-and-disembarks-in-spain" element={<Noticias2EN />} />
                    <Route path="/news/the-first-edition-of-the-advertising-forum-was-held-in-tucuman" element={<Noticias3EN />} />
                    <Route path="/news/DKZ-joined-the-Argentine-Advertising-Council" element={<Noticias4EN />} />
                    <Route path="/news/Fabricio-Meriglio-is-DKZ-Studio's-new-DGC" element={<Noticias5EN />} />
                    <Route path="/news/A-tucumano-will-be-a-jury-of-the-Argentine-Advertising-Council" element={<Noticias6EN />} />
                    <Route
                        path="/novedades/:id"
                        element={<NovedadesDetalle />}
                    />
                    <Route path="/news/:id" element={<NovedadesDetalleEN />} />
                    <Route path="/casos" element={<Casos />} />
                    <Route path="/cases" element={<CasosPageEN />} />
                    <Route path="/casos/:id" element={<CasosDettalle />} />
                    <Route path="/cases/:id" element={<CasosDetalleEN />} />
                    <Route path="/events/:id" element={<EventosDetalleEN />} />
                    <Route path="/eventos/:id" element={<EventosDettalle />} />
                    <Route path="/contactanos" element={<Contacto />} />
                    <Route path="/contact-us" element={<ContactoEN />} />
                    <Route
                        path="/trabajaconnosotros"
                        element={<TrabajaConNosotros />}
                    />
                    <Route
                        path="/work-with-us"
                        element={<TrabajaConNosotrosEN />}
                    />
                    <Route path="/audiovisuales" element={<ProducionAV />} />
                    <Route path="/audio-visual-production" element={<ProduccionAVPageEN />} />
                    <Route
                        path="/audiovisuales/:id"
                        element={<AudioVisualDetalle />}
                    />
                    <Route
                        path="/audio-visual-production/:id"
                        element={<AudioVisualDetalleEN />}
                    />
                    <Route path="/eventos" element={<EventosPage />} />
                    <Route path="/events" element={<EventosPageEN />} />
                    <Route path="/sitiosweb" element={<SitiosWeb />} />
                    <Route path="/web-sites" element={<SitiosWebPageEN />} />
                    <Route path="/web-sites/:id" element={<SitiosWebDetalladosEN />} />
                    <Route
                        path="/sitiosweb/:id"
                        element={<SitiosWebDetallados />}
                    />
                    <Route path="/socialmedia" element={<SocialMedialPage />} />
                    <Route path="/social-media" element={<SocialMediaPageEN />} />
                    <Route
                        path="/socialmedia/:id"
                        element={<SocialMediaDetalle />}
                    />
                    <Route
                        path="/social-media/:id"
                        element={<SocialMediaDetalleEN />}
                    />
                    <Route path="/consultoria" element={<Consultoria />} />
                    <Route path="/consulting-advice" element={<ConsultoriaPageEN />} />
                    <Route path="/coberturas" element={<Coberturas />} />
                    <Route path="/coverage" element={<CoberturaPageEN />} />
                    <Route path="/publicidad" element={<Publicidad />} />
                    <Route path="/traditional-advertising" element={<PublicidadTradicionalPageEN />} />
                    <Route
                        path="/publicidad/:id"
                        element={<PublicidadDetalle />}
                    />
                    <Route
                        path="/traditional-advertising/:id"
                        element={<PublicidadDetalleEN />}
                    />

                    <Route path="/investigacion" element={<Investigacion />} />
                    <Route path="/market-research-investigation" element={<InvestigacionPageEN />} />
                </Routes>

            </HashRouter>
        </div>
    );
}

export default App;
