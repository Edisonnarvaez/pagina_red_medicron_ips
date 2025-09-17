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

  return (
    <>
      <SEOHelmet
        title="Enlaces de Sistemas y Herramientas - Red Medicron IPS"
        description="Accede a sistemas, portales y herramientas digitales de Red Medicron IPS. Enlaces directos a plataformas de gestión, consultas médicas y servicios en línea para usuarios en Nariño."
        keywords="sistemas red medicron ips, portales médicos nariño, herramientas digitales ips, plataforma salud túquerres, acceso sistemas red medicron, asociaciones médicas colombia"
        canonical="/enlaces-externos"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section con diseño moderno */}
        <section className="relative bg-gradient-to-r from-medical-600 via-primary-600 to-medical-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-6xl mx-auto px-8 text-center">
            <div className="inline-block p-3 bg-white bg-opacity-20 rounded-full mb-6">
              <FaExternalLinkAlt className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Enlaces de Sistemas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Accede rápidamente a las aplicaciones, plataformas institucionales y entidades del sector salud
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-3">🏢</div>
                <div className="text-lg font-semibold">Enlaces Internos</div>
                <div className="text-sm text-blue-100">{enlacesInternos.length} sistemas</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-3">🌐</div>
                <div className="text-lg font-semibold">Enlaces Externos</div>
                <div className="text-sm text-blue-100">{enlacesExternos.length} plataformas</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-3">�</div>
                <div className="text-lg font-semibold">Institucionales</div>
                <div className="text-sm text-blue-100">{enlacesInstitucionales.length} enlaces</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-3">🏥</div>
                <div className="text-lg font-semibold">Entidades Salud</div>
                <div className="text-sm text-blue-100">{entidadesSalud.length} organizaciones</div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-8 py-16 space-y-20">
          {/* Enlaces Internos */}
          <SeccionEnlacesInternos enlaces={enlacesInternos} />

          {/* Enlaces Externos */}
          <SeccionEnlacesExternos enlaces={enlacesExternos} />

          {/* Enlaces Institucionales */}
          <SeccionEnlacesInstitucionales enlaces={enlacesInstitucionales} />

          {/* Entidades del Sector Salud */}
          <SeccionEntidadesSalud
            entidades={entidadesFiltradas}
            filtroCategoria={filtroCategoria}
            setFiltroCategoria={setFiltroCategoria}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            contadorCategorias={contadorCategorias}
            limpiarFiltros={limpiarFiltros}
          />

          {/* Secciones informativas mejoradas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Nota de Seguridad */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-3 text-lg">Nota Importante de Seguridad</h4>
                  <p className="text-yellow-700 leading-relaxed">
                    Los enlaces internos solo funcionan dentro de la red corporativa de Red Medicron IPS. 
                    Para acceder desde ubicaciones externas, utilice los enlaces externos correspondientes o 
                    conéctese a la VPN institucional.
                  </p>
                </div>
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-3 text-lg">¿Necesitas Ayuda?</h4>
                  <p className="text-blue-700 mb-4 leading-relaxed">
                    ¿Tienes problemas con algún enlace o necesitas acceso a un sistema específico?
                  </p>
                  <a 
                    href="mailto:soporteips@redmedicronips.com.co" 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <FaEnvelope className="mr-2 h-4 w-4" />
                    <span>Contactar Soporte</span>
                  </a>
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
