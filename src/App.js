import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
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
import { FooterReact } from "./esp/components/FooterReact/FooterReact";
import { NavbarReactV2 } from "./esp/components/navbarReactV2/NavbarReactV2";
import NovedadesDetalle from "./esp/pages/NovedadesDetalle";
import CasosDettalle from "./esp/pages/CasosDetalle";
import { ServiciosPage } from "./esp/pages/ServiciosPage";
import NovedadesDetalle2 from "./esp/pages/NovedadesDetalle2";
import { SitiosWebDetallados } from "./esp/pages/SitiosWebDetallados";
import EventosDettalle from "./esp/pages/EventosDetalle";
import SocialMediaDetalle from "./esp/pages/SocialMediaDetalle";
import PublicidadDetalle from "./esp/pages/PublicidadDetalle";
import AudioVisualDetalle from "./esp/pages/AudioVisualDetalle";
// import ScrollToTop from "react-scroll-to-top";
import ScrollToTop2 from "./esp/components/ScrollToTop2";
import HomeEN from "./esp/pages/HomeEN";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <HashRouter>
                <NavbarReactV2 />
                <Wapp />
                <ScrollToTop2 />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/en" element={<HomeEN />} />
                    <Route path="/conocenos" element={<Conocenos />} />
                    <Route path="/servicios" element={<ServiciosPage />} />
                    <Route path="/novedades" element={<Novedades />} />
                    <Route
                        path="/novedades/:id"
                        element={<NovedadesDetalle />}
                    />
                    <Route path="/casos" element={<Casos />} />
                    <Route path="/casos/:id" element={<CasosDettalle />} />
                    <Route path="/eventos/:id" element={<EventosDettalle />} />
                    <Route path="/contactanos" element={<Contacto />} />
                    <Route
                        path="/trabajaconnosotros"
                        element={<TrabajaConNosotros />}
                    />
                    <Route path="/audiovisuales" element={<ProducionAV />} />
                    <Route
                        path="/audiovisuales/:id"
                        element={<AudioVisualDetalle />}
                    />
                    <Route path="/eventos" element={<EventosPage />} />
                    <Route path="/sitiosweb" element={<SitiosWeb />} />
                    <Route
                        path="/sitioweb/:id"
                        element={<SitiosWebDetallados />}
                    />
                    <Route path="/socialmedia" element={<SocialMedialPage />} />
                    <Route
                        path="/socialmedia/:id"
                        element={<SocialMediaDetalle />}
                    />
                    <Route path="/consultoria" element={<Consultoria />} />
                    <Route path="/coberturas" element={<Coberturas />} />
                    <Route path="/publicidad" element={<Publicidad />} />
                    <Route
                        path="/publicidad/:id"
                        element={<PublicidadDetalle />}
                    />
                    <Route path="/investigacion" element={<Investigacion />} />
                </Routes>
                <FooterReact />
            </HashRouter>
        </div>
    );
}

export default App;
