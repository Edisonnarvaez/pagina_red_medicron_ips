import React, { useState } from 'react';
import { FaHome, FaEnvelopeOpenText, FaPhone, FaLink, FaRocket, FaBalanceScale, FaChevronDown, FaChevronUp, FaSitemap, FaSearch, FaAccessibleIcon, FaRoute, FaEye } from 'react-icons/fa';
import { SEOHelmet } from '../components/SEO';
import { Link } from 'react-router-dom';

interface SiteMapSection {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    color: string;
    pages: {
        path: string;
        title: string;
        description: string;
        status?: 'active' | 'development' | 'planned';
    }[];
}

const MapaSitio: React.FC = () => {
    const [expandedSections, setExpandedSections] = useState<string[]>(['principales']);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const siteMapSections: SiteMapSection[] = [
        {
            id: 'principales',
            title: 'Páginas Principales',
            description: 'Información esencial y servicios principales de Red Medicron IPS',
            icon: FaHome,
            color: 'from-azul to-azul-light',
            pages: [
                {
                    path: '/',
                    title: 'Inicio',
                    description: 'Página principal con información institucional y acceso rápido a servicios'
                },
                {
                    path: '/quienes-somos',
                    title: 'Quiénes Somos',
                    description: 'Misión, visión, valores, historia y filosofía institucional'
                },
                {
                    path: '/sedes',
                    title: 'Sedes y Ubicaciones',
                    description: 'Direcciones, horarios y servicios disponibles en cada sede'
                },
                {
                    path: '/servicios',
                    title: 'Servicios de Salud',
                    description: 'Portafolio completo de servicios médicos de primer y segundo nivel'
                },
                {
                    path: '/talento-humano',
                    title: 'Talento Humano',
                    description: 'Convocatorias laborales, perfiles profesionales y oportunidades de empleo'
                }
            ]
        },
        {
            id: 'atencion',
            title: 'Atención al Usuario',
            description: 'Canales de comunicación y servicios de atención ciudadana',
            icon: FaEnvelopeOpenText,
            color: 'from-green-600 to-green-700',
            pages: [
                {
                    path: '/pqrsf',
                    title: 'PQRSF',
                    description: 'Sistema de Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones'
                },
                {
                    path: '/contacto',
                    title: 'Contacto',
                    description: 'Información de contacto, formularios y canales de comunicación'
                },
                {
                    path: '/linea-etica',
                    title: 'Línea Ética',
                    description: 'Canal confidencial para reportes éticos y de integridad institucional'
                }
            ]
        },
        {
            id: 'transparencia',
            title: 'Transparencia y Rendición de Cuentas',
            description: 'Cumplimiento normativo y acceso a información pública',
            icon: FaEye,
            color: 'from-blue-600 to-blue-700',
            pages: [
                {
                    path: '/transparencia',
                    title: 'Portal de Transparencia',
                    description: 'Matriz ITA completa con los 10 criterios de transparencia y acceso'
                },
                {
                    path: '/organigrama',
                    title: 'Organigrama Institucional',
                    description: 'Estructura organizacional y mapa de procesos institucionales'
                },
                {
                    path: '/contabilidad',
                    title: 'Información Contable',
                    description: 'Estados financieros, presupuesto e información fiscal'
                },
                {
                    path: '/asamblea',
                    title: 'Asamblea General',
                    description: 'Información sobre asambleas, actas y decisiones institucionales'
                }
            ]
        },
        {
            id: 'normativo',
            title: 'Marco Legal y Normativo',
            description: 'Información legal, derechos, deberes y políticas institucionales',
            icon: FaBalanceScale,
            color: 'from-purple-600 to-purple-700',
            pages: [
                {
                    path: '/derechos-deberes',
                    title: 'Derechos y Deberes',
                    description: 'Derechos y deberes de usuarios y pacientes según normativa colombiana'
                },
                {
                    path: '/habeas-data',
                    title: 'Habeas Data',
                    description: 'Política de tratamiento de datos personales y protección de privacidad'
                },
                {
                    path: '/confidencialidad',
                    title: 'Política de Confidencialidad',
                    description: 'Términos de uso, privacidad y manejo de información confidencial'
                },
                {
                    path: '/accesibilidad',
                    title: 'Accesibilidad Web',
                    description: 'Portal de accesibilidad con herramientas y configuraciones inclusivas'
                }
            ]
        },
        {
            id: 'recursos',
            title: 'Recursos y Herramientas',
            description: 'Enlaces externos, capacitaciones y recursos adicionales',
            icon: FaLink,
            color: 'from-orange-600 to-orange-700',
            pages: [
                {
                    path: '/enlaces-externos',
                    title: 'Enlaces de Sistemas',
                    description: 'Acceso a sistemas, portales y herramientas digitales externos'
                },
                {
                    path: '/capacitaciones',
                    title: 'Capacitaciones',
                    description: 'Programas de formación continua y desarrollo profesional',
                    status: 'development'
                },
                {
                    path: '/asociados',
                    title: 'Asociados',
                    description: 'Información para entidades asociadas y aliados estratégicos',
                    status: 'development'
                },
                {
                    path: '/noticias',
                    title: 'Noticias y Eventos',
                    description: 'Actualidad institucional, eventos y comunicados',
                    status: 'development'
                }
            ]
        },
        {
            id: 'desarrollo',
            title: 'Desarrollo y Mejora Continua',
            description: 'Planificación tecnológica y mejoras futuras',
            icon: FaRocket,
            color: 'from-indigo-600 to-indigo-700',
            pages: [
                {
                    path: '/roadmap',
                    title: 'Roadmap de Desarrollo',
                    description: 'Plan de desarrollo tecnológico y cumplimiento normativo'
                },
                {
                    path: '/mapa-sitio',
                    title: 'Mapa del Sitio',
                    description: 'Estructura completa y navegación del sitio web institucional'
                }
            ]
        }
    ];

    // Filtrar páginas basado en la búsqueda
    const filteredSections = siteMapSections.map(section => ({
        ...section,
        pages: section.pages.filter(page =>
            page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            page.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            section.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(section => section.pages.length > 0);

    const totalPages = siteMapSections.reduce((total, section) => total + section.pages.length, 0);

    return (
        <>
            <SEOHelmet
                title="Mapa del Sitio Web - Red Medicron IPS"
                description="Mapa completo del sitio web de Red Medicron IPS en Nariño. Navegación estructurada, acceso a todas las páginas y servicios digitales según Resolución 1519 de 2020."
                keywords="mapa sitio red medicron ips, navegación web ips nariño, estructura sitio web túquerres, acceso información red medicron, índice páginas ips, sitemap red medicron"
                canonical="/mapa-sitio"
            />

            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-azul via-azul-light to-verdeLima">
                {/* Elementos decorativos */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-soft"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-verdeLima/20 rounded-full blur-3xl animate-pulse-soft"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-6">
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                                <FaSitemap className="text-white text-5xl" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Mapa del <span className="text-verdeLima">Sitio Web</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
                            Navegación completa y estructurada del sitio web institucional de Red Medicron IPS
                        </p>

                        {/* Estadísticas */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-white mb-2">{totalPages}</div>
                                <div className="text-white/80 text-sm">Páginas Totales</div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-white mb-2">{filteredSections.length}</div>
                                <div className="text-white/80 text-sm">Secciones</div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-white/80 text-sm">Accesibilidad</div>
                            </div>
                        </div>

                        {/* Buscador */}
                        <div className="max-w-md mx-auto">
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Buscar páginas..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="
                                        w-full pl-12 pr-4 py-4 rounded-xl
                                        bg-white/20 backdrop-blur-sm
                                        border border-white/30
                                        text-white placeholder-white/70
                                        focus:outline-none focus:ring-2 focus:ring-white/50
                                        transition-all duration-300
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa del Sitio */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Encabezado de sección */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Estructura del Sitio Web
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Accede fácilmente a cualquier sección de nuestro sitio web. 
                            Organizado por categorías para una navegación intuitiva y accesible.
                        </p>
                    </div>

                    {/* Secciones del mapa */}
                    <div className="space-y-6">
                        {filteredSections.map((section) => (
                            <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                {/* Header de sección */}
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="
                                        w-full px-6 py-6 text-left
                                        bg-gradient-to-r bg-gray-50 hover:bg-gray-100
                                        transition-all duration-300
                                        focus:outline-none focus:ring-2 focus:ring-azul/50
                                    "
                                    aria-expanded={expandedSections.includes(section.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className={`bg-gradient-to-r ${section.color} p-3 rounded-lg`}>
                                                <section.icon className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                                    {section.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {section.description}
                                                </p>
                                                <div className="text-xs text-gray-500 mt-1">
                                                    {section.pages.length} página{section.pages.length !== 1 ? 's' : ''}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-gray-400">
                                            {expandedSections.includes(section.id) ? (
                                                <FaChevronUp size={20} />
                                            ) : (
                                                <FaChevronDown size={20} />
                                            )}
                                        </div>
                                    </div>
                                </button>

                                {/* Contenido expandible */}
                                {expandedSections.includes(section.id) && (
                                    <div className="px-6 pb-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {section.pages.map((page) => (
                                                <Link
                                                    key={page.path}
                                                    to={page.path}
                                                    className="
                                                        block p-4 rounded-lg border border-gray-200
                                                        hover:border-azul hover:shadow-md
                                                        transition-all duration-300
                                                        group
                                                    "
                                                >
                                                    <div className="flex items-start justify-between mb-2">
                                                        <h4 className="font-medium text-gray-900 group-hover:text-azul transition-colors">
                                                            {page.title}
                                                        </h4>
                                                        {page.status && (
                                                            <span className={`
                                                                px-2 py-1 text-xs rounded-full font-medium
                                                                ${page.status === 'active' ? 'bg-green-600 text-white' :
                                                                  page.status === 'development' ? 'bg-yellow-600 text-white' :
                                                                  'bg-blue-600 text-white'}
                                                            `}>
                                                                {page.status === 'active' ? 'Activo' :
                                                                 page.status === 'development' ? 'En desarrollo' : 'Planificado'}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-2">
                                                        {page.description}
                                                    </p>
                                                    <div className="text-xs text-azul font-medium">
                                                        {page.path}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mensaje sin resultados */}
                    {searchTerm && filteredSections.length === 0 && (
                        <div className="text-center py-12">
                            <FaSearch className="text-gray-400 text-4xl mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No se encontraron resultados
                            </h3>
                            <p className="text-gray-600">
                                Intenta con otros términos de búsqueda o explora las secciones disponibles.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Cumplimiento Normativo */}
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <FaAccessibleIcon className="text-azul text-4xl mb-4 mx-auto" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Cumplimiento Normativo
                        </h2>
                        <p className="text-lg text-gray-600">
                            Este mapa del sitio cumple con la Resolución 1519 de 2020 del MinTIC
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-green-100 rounded-xl p-6 border-l-4 border-green-600">
                            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                                <FaRoute className="text-green-700 mr-2" />
                                Navegación Accesible
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>✓ Estructura jerárquica clara</li>
                                <li>✓ Enlaces descriptivos y funcionales</li>
                                <li>✓ Navegación por teclado completa</li>
                                <li>✓ Indicadores de estado de páginas</li>
                            </ul>
                        </div>

                        <div className="bg-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                                <FaEye className="text-blue-700 mr-2" />
                                Transparencia Total
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>✓ Acceso a toda la información pública</li>
                                <li>✓ Matriz ITA implementada completamente</li>
                                <li>✓ Búsqueda y filtrado disponibles</li>
                                <li>✓ Descripción detallada de cada sección</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer informativo */}
            <section className="bg-azul text-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda navegando?</h3>
                    <p className="text-azul-light mb-6">
                        Si necesitas asistencia para encontrar información específica, 
                        nuestro equipo está disponible para ayudarte.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contacto"
                            className="
                                inline-flex items-center justify-center
                                bg-white text-azul font-bold px-8 py-3 rounded-lg
                                hover:bg-gray-100 transition-colors duration-300
                                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-azul
                            "
                        >
                            <FaPhone className="mr-2" />
                            Contactar Soporte
                        </Link>
                        
                        <Link
                            to="/accesibilidad"
                            className="
                                inline-flex items-center justify-center
                                bg-transparent text-white font-bold px-8 py-3 rounded-lg
                                border-2 border-white hover:bg-white hover:text-azul
                                transition-colors duration-300
                                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-azul
                            "
                        >
                            <FaAccessibleIcon className="mr-2" />
                            Herramientas de Accesibilidad
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MapaSitio;
