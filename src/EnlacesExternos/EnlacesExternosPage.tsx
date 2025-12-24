import React from 'react';
import { FaExternalLinkAlt, FaEnvelope, FaShieldAlt } from 'react-icons/fa';
import { SEOHelmet } from '../components/SEO';
import { useEnlacesExternos } from '../hooks/useEnlacesExternos';
import {
  SeccionEnlacesInternos,
  SeccionEnlacesExternos,
  SeccionEnlacesInstitucionales,
  SeccionEntidadesSalud
} from '../components/EnlacesExternos';

const EnlacesExternosPage: React.FC = () => {
  const {
    filtroCategoria,
    setFiltroCategoria,
    busqueda,
    setBusqueda,
    enlacesInternos,
    enlacesExternos,
    enlacesInstitucionales,
    entidadesSalud,
    entidadesFiltradas,
    contadorCategorias,
    limpiarFiltros
  } = useEnlacesExternos();

  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

  return (
    <>
      <SEOHelmet
        title="Enlaces de Sistemas y Herramientas - Red Medicron IPS"
        description="Accede a sistemas, portales y herramientas digitales de Red Medicron IPS. Enlaces directos a plataformas de gestión, consultas médicas y servicios en línea para usuarios en Nariño."
        keywords="sistemas red medicron ips, portales médicos nariño, herramientas digitales ips, plataforma salud túquerres, acceso sistemas red medicron, asociaciones médicas colombia"
        canonical="/enlaces-externos"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Hero Section con diseño ultramoderno */}
        <section className="relative overflow-hidden bg-gradient-to-br from-medical-600 via-primary-600 to-accent-700 text-white py-24">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Icono principal con efectos modernos */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl mb-8 shadow-2xl hover:scale-110 transition-all duration-500">
              <FaExternalLinkAlt className="h-12 w-12 text-white drop-shadow-lg" />
            </div>
            
            {/* Título principal mejorado */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-accent-200 bg-clip-text text-transparent drop-shadow-2xl">
                Enlaces de 
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent-200 via-white to-medical-200 bg-clip-text text-transparent">
                Sistemas
              </span>
            </h1>
            
            {/* Descripción mejorada */}
            <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Accede rápidamente a las 
              <span className="font-semibold text-accent-200"> aplicaciones especializadas</span>, 
              <span className="font-semibold text-blue-200"> plataformas institucionales </span>
              y entidades del sector salud
            </p>
            {/* Grid de estadísticas modernizado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <button
                  type="button"
                  onClick={() => scrollToSection('enlaces-internos')}
                  className="relative w-full text-left scroll-mt-32
                            bg-white/10 backdrop-blur-lg rounded-2xl p-6
                            border border-white/20 hover:border-white/40
                            transition-all duration-500 hover:scale-105 hover:bg-white/15
                            cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40
                            flex flex-col justify-between
                            p-8 min-h-[220px]
                            text-center
                            "
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏢</div>
                  <div className="text-xl font-bold text-white mb-1">Enlaces Internos </div>
                  <div className="text-sm text-white/80 font-medium">{enlacesInternos.length} sistemas corporativos</div>
                  <div className="mt-3 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transform group-hover:scale-x-110 transition-transform duration-700"></div>
                  </div>
                </button>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400/30 to-primary-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <button
                  type="button"
                  onClick={() => scrollToSection('enlaces-externos')}
                  className="relative w-full text-left scroll-mt-32
                            bg-white/10 backdrop-blur-lg rounded-2xl p-6
                            border border-white/20 hover:border-white/40
                            transition-all duration-500 hover:scale-105 hover:bg-white/15
                            cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40
                            flex flex-col justify-between
                            p-8 min-h-[220px]
                            text-center
                            "
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🌐</div>
                  <div className="text-xl font-bold text-white mb-1">Enlaces Externos</div>
                  <div className="text-sm text-white/80 font-medium">{enlacesExternos.length} plataformas públicas</div>
                  <div className="mt-3 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent-400 to-orange-300 rounded-full transform group-hover:scale-x-110 transition-transform duration-700"></div>
                  </div>
                </button>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-medical-400/30 to-primary-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <button
                  type="button"
                  onClick={() => scrollToSection('enlaces-institucionales')}
                  className="relative w-full text-left scroll-mt-32
                            bg-white/10 backdrop-blur-lg rounded-2xl p-6
                            border border-white/20 hover:border-white/40
                            transition-all duration-500 hover:scale-105 hover:bg-white/15
                            cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40
                            flex flex-col justify-between
                            p-8 min-h-[220px]
                            text-center
                            "
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏛️</div>
                  <div className="text-xl font-bold text-white mb-1">Institucionales</div>
                  <div className="text-sm text-white/80 font-medium">{enlacesInstitucionales.length} enlaces oficiales</div>
                  <div className="mt-3 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-medical-400 to-green-300 rounded-full transform group-hover:scale-x-110 transition-transform duration-700"></div>
                  </div>
                </button>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-teal-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <button
                  type="button"
                  onClick={() => scrollToSection('entidades-salud')}
                  className="relative w-full text-left scroll-mt-32
                            bg-white/10 backdrop-blur-lg rounded-2xl p-6
                            border border-white/20 hover:border-white/40
                            transition-all duration-500 hover:scale-105 hover:bg-white/15
                            cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40
                            flex flex-col justify-between
                            p-8 min-h-[220px]
                            text-center
                            "
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏥</div>
                  <div className="text-xl font-bold text-white mb-1">Entidades Salud</div>
                  <div className="text-sm text-white/80 font-medium">{entidadesSalud.length} organizaciones</div>
                  <div className="mt-3 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-emerald-300 rounded-full transform group-hover:scale-x-110 transition-transform duration-700"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido principal con mejor espaciado */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          {/* Enlaces Internos con contenedor modernizado */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-3xl blur-3xl transform -rotate-1"></div>
            <div id="enlaces-internos" className="relative scroll-mt-32">
              <SeccionEnlacesInternos enlaces={enlacesInternos} />
            </div>
          </div>

          {/* Enlaces Externos con contenedor modernizado */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-50/50 to-orange-50/50 rounded-3xl blur-3xl transform rotate-1"></div>
            <div id="enlaces-externos" className="relative scroll-mt-32">
              <SeccionEnlacesExternos enlaces={enlacesExternos} />
            </div>
          </div>

          {/* Enlaces Institucionales con contenedor modernizado */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-medical-50/50 to-green-50/50 rounded-3xl blur-3xl transform -rotate-1"></div>
            <div id="enlaces-institucionales" className="relative scroll-mt-32">
              <SeccionEnlacesInstitucionales enlaces={enlacesInstitucionales} />
            </div>
          </div>

          {/* Entidades del Sector Salud con contenedor modernizado */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-3xl blur-3xl transform rotate-1"></div>
            <div id="entidades-salud" className="relative scroll-mt-32">
              <SeccionEntidadesSalud
                entidades={entidadesFiltradas}
                filtroCategoria={filtroCategoria}
                setFiltroCategoria={setFiltroCategoria}
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                contadorCategorias={contadorCategorias}
                limpiarFiltros={limpiarFiltros}
              />
            </div>
          </div>

          {/* Secciones informativas ultramodernas */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100/30 to-gray-100/30 rounded-3xl blur-3xl"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Nota de Seguridad modernizada */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-400/5 to-orange-500/10 rounded-3xl"></div>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl border border-yellow-200/50 group-hover:border-yellow-300/60 transition-all duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FaShieldAlt className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-amber-800 transition-colors">
                        🔒 Nota Importante de Seguridad
                      </h4>
                      <p className="text-amber-800/90 leading-relaxed text-lg font-medium">
                        Los enlaces internos solo funcionan dentro de la 
                        <span className="font-bold text-amber-900"> red corporativa de Red Medicron IPS</span>. 
                        Para acceder desde ubicaciones externas, utilice los enlaces externos correspondientes o 
                        <span className="font-bold text-amber-900"> conéctese a la VPN institucional</span>.
                      </p>
                      <div className="mt-4 inline-flex items-center px-4 py-2 bg-yellow-100/80 rounded-xl text-sm font-semibold text-amber-700 border border-yellow-200">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
                        Acceso Restringido a Red Interna
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información de Contacto modernizada */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-400/5 to-cyan-500/10 rounded-3xl"></div>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl border border-blue-200/50 group-hover:border-blue-300/60 transition-all duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FaEnvelope className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors">
                        💬 ¿Necesitas Ayuda?
                      </h4>
                      <p className="text-blue-800/90 leading-relaxed text-lg font-medium mb-6">
                        ¿Tienes problemas con algún enlace o necesitas acceso a un 
                        <span className="font-bold text-blue-900"> sistema específico</span>?
                      </p>
                      <a 
                        href="mailto:soporteips@redmedicronips.com.co" 
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
                      >
                        <FaEnvelope className="mr-3 h-5 w-5" />
                        <span>Contactar Soporte Técnico</span>
                      </a>
                      <div className="mt-4 text-sm text-blue-700/70 font-medium">
                        📞 Respuesta en menos de 24 horas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnlacesExternosPage;
