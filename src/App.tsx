import Footer from './Footer/FooterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Inicio from './Inicio/InicioPage';
import QuienesSomos from './QuienesSomos/QuienesSomosPage';
import MainMenu from './components/MainMenu';
import Accesibilidad from './Accesibilidad/AccesibilidadPage';
import Sedes from './Sedes/SedesPage';
import Servicios from './Servicios/ServiciosPage';
import Transparencia from './Transparencia/TransparenciaPage';
import Organigrama from './Organigrama/OrganigramaPage';
import TalentoHumano from './TalentoHumano/TalentoHumanoPage';
import Contabilidad from './Contabilidad/ContabilidadPage';
import Capacitaciones from './Capacitaciones/CapacitacionesPage';
import EnlacesExternos from './EnlacesExternos/EnlacesExternosPage';
import HabeasData from './HabeasData/HabeasDataPage';
import Confidencialidad from './Confidencialidad/ConfidencialidadPage';
import Noticias from './Noticias/NoticiasPage';
import Roadmap from './Roadmap/RoadmapPage';
import Asociados from './Asociados/AsociadosPage';
import DerechosDeberes from './DerechosDeberes/DerechosDeberesPage';
import LineaEtica from './LineaEtica/LineaEticaPage';
import PQRSF from './PQRSF/PQRSFPage';
import Contacto from './Contacto/ContactoPage';
import Asamblea from './Asamblea/AsambleaPage';
import NotFound from './NotFound/NotFoundPage';
import ModalPortafolio from './Inicio/ModalInicial';
import WhatsAppFloatButton from './components/WhatsAppFloat/WhatsAppFloatButton';
import SkipLinks from './components/SkipLinks';

function App() {
  const [showPortafolioModal, setShowPortafolioModal] = useState(false);

  // Configuración de accesibilidad global
  useEffect(() => {
    // Cargar preferencias de accesibilidad del localStorage
    const fontScale = localStorage.getItem('font-scale');
    const highContrast = localStorage.getItem('high-contrast');
    const reduceMotion = localStorage.getItem('reduce-motion');

    if (fontScale) {
      document.documentElement.style.setProperty('--font-scale', fontScale);
    }

    if (highContrast === 'true') {
      document.body.classList.add('high-contrast');
    }

    if (reduceMotion === 'true') {
      document.body.classList.add('reduce-motion');
    }

    // Configurar variables CSS de accesibilidad
    document.documentElement.style.setProperty('--focus-outline', '3px solid #0066cc');
    document.documentElement.style.setProperty('--focus-offset', '2px');

    // Anuncio inicial para lectores de pantalla
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = 'Sitio web de Red Medicron IPS cargado. Navegación accesible disponible.';
    document.body.appendChild(announcement);

    // Limpiar el anuncio después de 3 segundos
    setTimeout(() => {
      if (announcement.parentNode) {
        announcement.parentNode.removeChild(announcement);
      }
    }, 3000);

    return () => {
      // Limpiar eventos si es necesario
    };
  }, []);

  return (
    <Router>
      {/* Skip Links para navegación accesible - Criterio F matriz ITA */}
      <SkipLinks />
      
      {/* Navegación principal */}
      <div id="main-navigation">
        <MainMenu onOpenModal={() => setShowPortafolioModal(true)} />
      </div>
      
      {/* Contenido principal */}
      <main id="main-content" role="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/sedes" element={<Sedes />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/organigrama" element={<Organigrama />} />
          <Route path="/talento-humano" element={<TalentoHumano />} />
          <Route path="/contabilidad" element={<Contabilidad />} />
          <Route path="/capacitaciones" element={<Capacitaciones />} />
          <Route path="/enlaces-externos" element={<EnlacesExternos />} />
          <Route path="/habeas-data" element={<HabeasData />} />
          <Route path="/confidencialidad" element={<Confidencialidad />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/asociados" element={<Asociados />} />
          <Route path="/derechos-deberes" element={<DerechosDeberes />} />
          <Route path="/linea-etica" element={<LineaEtica />} />
          <Route path="/pqrsf" element={<PQRSF />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/asamblea" element={<Asamblea />} />
          <Route path="/accesibilidad" element={<Accesibilidad />} />
          {/* Ruta catch-all para páginas no encontradas (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Pie de página */}
      <div id="footer">
        <Footer />
      </div>
      
      {/* Botón flotante de WhatsApp - disponible en todas las páginas */}
      <WhatsAppFloatButton />
      
      {/* Modal global */}
      <ModalPortafolio 
        showPortafolioModal={showPortafolioModal} 
        setShowPortafolioModal={setShowPortafolioModal} 
      />
      
      {/* Región de anuncios en vivo para lectores de pantalla */}
      <div 
        id="live-announcements"
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      />
    </Router>
  );
}

export default App;
