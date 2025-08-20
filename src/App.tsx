import Footer from './Footer/FooterPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <MainMenu />
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
        <Route path="/accesibilidad" element={<Accesibilidad />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
