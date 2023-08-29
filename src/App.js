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
                    <Route path="/news" element={<NovedadesEN />} />
                    <Route
                        path="/novedades/:id"
                        element={<NovedadesDetalle />}
                    />
                    <Route path="/news/:id" element={<NovedadesDetalleEN />} />
                    <Route path="/casos" element={<Casos />} />
                    <Route path="/casos/:id" element={<CasosDettalle />} />
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
                    <Route path="/eventos" element={<EventosPage />} />
                    <Route path="/events" element={<EventosPageEN />} />
                    <Route path="/sitiosweb" element={<SitiosWeb />} />
                    <Route path="/web-sites" element={<SitiosWebPageEN />} />
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
                    <Route path="/consultoria" element={<Consultoria />} />
                    <Route path="/coberturas" element={<Coberturas />} />
                    <Route path="/coverage" element={<CoberturaPageEN />} />
                    <Route path="/publicidad" element={<Publicidad />} />
                    <Route
                        path="/publicidad/:id"
                        element={<PublicidadDetalle />}
                    />
                    <Route path="/investigacion" element={<Investigacion />} />
                </Routes>

            </HashRouter>
        </div>
    );
}

export default App;
