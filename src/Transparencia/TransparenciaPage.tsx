import React, { useState } from 'react';
import { SEOHelmet } from '../components/SEO';

const Transparencia: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    // Componentes de la Matriz ITA según el Decreto 1081 de 2015
    const matrizITA = [
        {
            id: "informacion-entidad",
            numero: "1",
            titulo: "INFORMACIÓN DE LA ENTIDAD",
            color: "bg-azul",
            items: [
                { nombre: "Misión, Visión y Funciones", enlace: "/quienes-somos" },
                { nombre: "Estructura Orgánica y Organigrama", enlace: "/organigrama" },
                { nombre: "Directorio de Funcionarios", enlace: "/talento-humano" },
                { nombre: "Directorio de Entidades", enlace: "/enlacese-externos" },
                { nombre: "Localización Física, Sucursales", enlace: "/sedes" },
                { nombre: "Horarios de Atención", enlace: "/contacto" },
                { nombre: "Servicios que Brinda", enlace: "/servicios" }
            ]
        },
        {
            id: "normativa",
            numero: "2", 
            titulo: "NORMATIVA",
            color: "bg-verdeLima",
            items: [
                { nombre: "Normatividad de la Entidad", enlace: "#normatividad" },
                { nombre: "Actos Administrativos", enlace: "#actos-administrativos" },
                { nombre: "Políticas Lineamientos y Manuales", enlace: "#politicas-manuales" },
                { nombre: "Plan Anticorrupción", enlace: "#plan-anticorrupcion" },
                { nombre: "Modelo Integrado de Planeación y Gestión", enlace: "#mipg" }
            ]
        },
        {
            id: "contratacion",
            numero: "3",
            titulo: "CONTRATACIÓN", 
            color: "bg-acento",
            items: [
                { nombre: "Plan Anual de Adquisiciones", enlace: "#plan-adquisiciones" },
                { nombre: "Manual de Contratación", enlace: "#manual-contratacion" },
                { nombre: "Contratación Directa", enlace: "#contratacion-directa" },
                { nombre: "Convocatorias Públicas", enlace: "#convocatorias" },
                { nombre: "Contratos y Órdenes de Compra", enlace: "#contratos-ordenes" },
                { nombre: "Registro de Proveedores", enlace: "#registro-proveedores" }
            ]
        },
        {
            id: "planeacion",
            numero: "4",
            titulo: "PLANEACIÓN",
            color: "bg-verdeOscuro", 
            items: [
                { nombre: "Plan Estratégico", enlace: "#plan-estrategico" },
                { nombre: "Plan de Acción", enlace: "#plan-accion" },
                { nombre: "Plan de Compras", enlace: "#plan-compras" },
                { nombre: "Informes de Empalme", enlace: "#informes-empalme" },
                { nombre: "Presupuesto General", enlace: "#presupuesto" },
                { nombre: "Estados Financieros", enlace: "/contabilidad" },
                { nombre: "Informes de Gestión", enlace: "#informes-gestion" }
            ]
        },
        {
            id: "tramites",
            numero: "5", 
            titulo: "TRÁMITES Y SERVICIOS",
            color: "bg-amber-600",
            items: [
                { nombre: "Trámites y Servicios", enlace: "/servicios" },
                { nombre: "Formatos y Formularios", enlace: "#formatos" },
                { nombre: "Procedimientos", enlace: "#procedimientos" },
                { nombre: "Costos de Reproducción", enlace: "#costos-reproduccion" },
                { nombre: "Calendario de Actividades", enlace: "#calendario" }
            ]
        },
        {
            id: "participacion",
            numero: "6",
            titulo: "PARTICIPACIÓN CIUDADANA",
            color: "bg-sky-600", 
            items: [
                { nombre: "PQRSF", enlace: "/pqrsf" },
                { nombre: "Informes PQRSF", enlace: "#informes-pqrsf" },
                { nombre: "Participación Ciudadana", enlace: "#participacion-ciudadana" },
                { nombre: "Rendición de Cuentas", enlace: "#rendicion-cuentas" },
                { nombre: "Diálogo Participativo", enlace: "#dialogo-participativo" },
                { nombre: "Control Social", enlace: "#control-social" }
            ]
        },
        {
            id: "datos-abiertos",
            numero: "7",
            titulo: "DATOS ABIERTOS",
            color: "bg-azul-dark",
            items: [
                { nombre: "Datos Abiertos", enlace: "#datos-abiertos" },
                { nombre: "Inventario de Información", enlace: "#inventario-informacion" },
                { nombre: "Esquema de Publicación", enlace: "#esquema-publicacion" },
                { nombre: "Programa de Gestión Documental", enlace: "#gestion-documental" }
            ]
        },
        {
            id: "grupos-interes",
            numero: "8", 
            titulo: "INFORMACIÓN ESPECÍFICA PARA GRUPOS DE INTERÉS",
            color: "bg-verdeOscuro",
            items: [
                { nombre: "Información para Niños, Niñas y Adolescentes", enlace: "#info-ninos" },
                { nombre: "Información para Mujeres", enlace: "#info-mujeres" }, 
                { nombre: "Información para Adultos Mayores", enlace: "#info-adultos-mayores" },
                { nombre: "Información para Personas con Discapacidad", enlace: "/accesibilidad" },
                { nombre: "Información para Comunidades Étnicas", enlace: "#info-comunidades-etnicas" }
            ]
        },
        {
            id: "obligaciones-reporte", 
            numero: "9",
            titulo: "OBLIGACIÓN DE REPORTE DE INFORMACIÓN ESPECÍFICA",
            color: "bg-gray-700",
            items: [
                { nombre: "Informes a Organismos de Control", enlace: "#informes-control" },
                { nombre: "Informes de Ley", enlace: "#informes-ley" },
                { nombre: "Reportes Sector Salud", enlace: "#reportes-salud" },
                { nombre: "Informes de Gestión y Resultados", enlace: "#informes-resultados" }
            ]
        },
        {
            id: "atencion-ciudadania",
            numero: "10", 
            titulo: "ATENCIÓN Y SERVICIOS A LA CIUDADANÍA",
            color: "bg-verdeLima",
            items: [
                { nombre: "Mecanismos de Contacto", enlace: "/contacto" },
                { nombre: "Localización Física", enlace: "/sedes" },
                { nombre: "Horarios de Atención", enlace: "/contacto#horarios" },
                { nombre: "Líneas de Atención", enlace: "/contacto#lineas" },
                { nombre: "Correo Electrónico Institucional", enlace: "mailto:notificaciones@redmedicronips.com.co" },
                { nombre: "Canales de Atención Virtual", enlace: "/enlaces-externos" }
            ]
        }
    ];

    return (
        <>
            <SEOHelmet
                title="Transparencia y Acceso a la Información - Red Medicron IPS"
                description="Portal de transparencia de Red Medicron IPS en Nariño según matriz ITA. Accede a información pública, estados financieros, contratación, PQRSF y documentos institucionales conforme a la Ley 1712 de 2014."
                keywords="transparencia red medicron ips, matriz ITA nariño, información pública ips, ley 1712 transparencia, acceso información red medicron, portal transparencia ips túquerres"
                canonical="/transparencia"
            />

            <section className="min-h-screen bg-gradient-to-br from-grisClaro via-white to-azul-light/10 text-negro px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-center tracking-tight">
                            <span className="text-azul">Transparencia y</span><br/>
                            <span className="text-verdeOscuro">Acceso a la Información</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Red Medicron IPS cumple con la <strong>Matriz ITA</strong> (Índice de Transparencia y Acceso a la Información) 
                            establecida por el <strong>Decreto 1081 de 2015</strong> y la <strong>Ley 1712 de 2014</strong> de transparencia y acceso a la información pública.
                        </p>
                    </div>

                    {/* Información legal destacada */}
                    <div className="bg-gradient-to-r from-azul/10 to-verdeLima/10 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-azul/20">
                        <div className="text-center">
                            <h2 className="text-xl sm:text-2xl font-bold text-azul mb-3 sm:mb-4">
                                📋 Marco Normativo de Transparencia
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                <div className="bg-white/90 rounded-lg p-4 text-center shadow-sm border border-azul/20">
                                    <h3 className="font-bold text-azul text-sm sm:text-base">Ley 1712 de 2014</h3>
                                    <p className="text-xs sm:text-sm text-gray-700">Transparencia y Acceso a la Información</p>
                                </div>
                                <div className="bg-white/90 rounded-lg p-4 text-center shadow-sm border border-verdeOscuro/20">
                                    <h3 className="font-bold text-verdeOscuro text-sm sm:text-base">Decreto 1081 de 2015</h3>
                                    <p className="text-xs sm:text-sm text-gray-700">Matriz ITA</p>
                                </div>
                                <div className="bg-white/90 rounded-lg p-4 text-center shadow-sm border border-acento/20">
                                    <h3 className="font-bold text-green-700 text-sm sm:text-base">Ley 1581 de 2012</h3>
                                    <p className="text-xs sm:text-sm text-gray-700">Habeas Data</p>
                                </div>
                                <div className="bg-white/90 rounded-lg p-4 text-center shadow-sm border border-amber-500/20">
                                    <h3 className="font-bold text-amber-700 text-sm sm:text-base">Resolución 3100/2019</h3>
                                    <p className="text-xs sm:text-sm text-gray-700">Sector Salud</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Matriz ITA - Componentes Oficiales */}
                    <div className="space-y-6 sm:space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-azul mb-6 sm:mb-8">
                            📊 Matriz ITA - Índice de Transparencia y Acceso a la Información
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                            {matrizITA.map((componente) => (
                                <div 
                                    key={componente.id}
                                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                                >
                                    {/* Header del componente */}
                                    <div 
                                        className={`${componente.color} text-white p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:opacity-90`}
                                        onClick={() => toggleSection(componente.id)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 sm:space-x-4">
                                                <div className="bg-white/20 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                                    <span className="font-bold text-lg sm:text-xl">{componente.numero}</span>
                                                </div>
                                                <h3 className="font-bold text-sm sm:text-lg">{componente.titulo}</h3>
                                            </div>
                                            <svg 
                                                className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
                                                    activeSection === componente.id ? 'rotate-180' : ''
                                                }`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Contenido expandible */}
                                    <div className={`transition-all duration-300 overflow-hidden ${
                                        activeSection === componente.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <div className="p-4 sm:p-6">
                                            <ul className="space-y-2 sm:space-y-3">
                                                {componente.items.map((item, index) => (
                                                    <li key={index} className="flex items-center space-x-2 sm:space-x-3">
                                                        <svg className="w-4 h-4 text-verdeLima flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        <a 
                                                            href={item.enlace}
                                                            className="text-azul hover:text-verdeOscuro hover:underline transition-colors duration-200 text-sm sm:text-base"
                                                            target={item.enlace.startsWith('#') ? '_self' : item.enlace.startsWith('http') ? '_blank' : '_self'}
                                                            rel={item.enlace.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                        >
                                                            {item.nombre}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enlaces institucionales importantes */}
                    <div className="mt-12 sm:mt-16">
                        <h2 className="text-xl sm:text-2xl font-bold text-center text-azul mb-6 sm:mb-8">
                            🔗 Enlaces Institucionales y de Control
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {/* Organismos de Control */}
                            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200">
                                <h3 className="font-bold text-azul mb-3 sm:mb-4 text-sm sm:text-base">🏛️ Organismos de Control</h3>
                                <ul className="space-y-2 text-xs sm:text-sm">
                                    <li><a href="https://www.procuraduria.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Procuraduría General de la Nación</a></li>
                                    <li><a href="https://www.contraloria.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Contraloría General de la República</a></li>
                                    <li><a href="https://www.defensoria.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Defensoría del Pueblo</a></li>
                                    <li><a href="https://www.fiscalia.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Fiscalía General de la Nación</a></li>
                                </ul>
                            </div>

                            {/* Sector Salud */}
                            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200">
                                <h3 className="font-bold text-verdeLima mb-3 sm:mb-4 text-sm sm:text-base">🏥 Sector Salud</h3>
                                <ul className="space-y-2 text-xs sm:text-sm">
                                    <li><a href="https://www.minsalud.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Ministerio de Salud y Protección Social</a></li>
                                    <li><a href="https://www.supersalud.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Superintendencia Nacional de Salud</a></li>
                                    <li><a href="https://www.ins.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Instituto Nacional de Salud</a></li>
                                    <li><a href="https://www.invima.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">INVIMA</a></li>
                                </ul>
                            </div>

                            {/* Gobierno Nacional */}
                            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200">
                                <h3 className="font-bold text-verdeOscuro mb-3 sm:mb-4 text-sm sm:text-base">🇨🇴 Gobierno Nacional</h3>
                                <ul className="space-y-2 text-xs sm:text-sm">
                                    <li><a href="https://www.funcionpublica.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Función Pública</a></li>
                                    <li><a href="https://www.colombiacompra.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Colombia Compra Eficiente</a></li>
                                    <li><a href="https://www.urnadecristal.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Urna de Cristal</a></li>
                                    <li><a href="https://www.datos.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul hover:underline">Datos Abiertos Colombia</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Acciones rápidas */}
                    <div className="mt-12 sm:mt-16">
                        <div className="bg-gradient-to-r from-azul/10 to-verdeLima/10 rounded-2xl p-6 sm:p-8 border border-azul/20">
                            <h2 className="text-xl sm:text-2xl font-bold text-center text-azul mb-6 sm:mb-8">
                                🚀 Acciones Rápidas
                            </h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                <a 
                                    href="/pqrsf" 
                                    className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-azul/20"
                                >
                                    <div className="bg-azul/15 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-azul" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-azul mb-2 text-sm sm:text-base">PQRSF</h3>
                                    <p className="text-xs sm:text-sm text-gray-700">Presentar peticiones, quejas, reclamos</p>
                                </a>

                                <a 
                                    href="/contacto" 
                                    className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-600/20"
                                >
                                    <div className="bg-green-600/15 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-green-600 mb-2 text-sm sm:text-base">Contacto</h3>
                                    <p className="text-xs sm:text-sm text-gray-700">Información de contacto oficial</p>
                                </a>

                                <a 
                                    href="/linea-etica" 
                                    className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-600/20"
                                >
                                    <div className="bg-orange-600/15 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-orange-600 mb-2 text-sm sm:text-base">Línea Ética</h3>
                                    <p className="text-xs sm:text-sm text-gray-700">Denuncias y reportes éticos</p>
                                </a>

                                <a 
                                    href="/habeas-data" 
                                    className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-verdeOscuro/20"
                                >
                                    <div className="bg-verdeOscuro/15 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-verdeOscuro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-verdeOscuro mb-2 text-sm sm:text-base">Habeas Data</h3>
                                    <p className="text-xs sm:text-sm text-gray-700">Protección de datos personales</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer informativo */}
                    <div className="text-center mt-8 sm:mt-12 text-gray-600 text-xs sm:text-sm">
                        <p className="mb-2">
                            Para ejercer tu derecho a la información pública según la <strong className="text-gray-800">Ley 1712 de 2014</strong>, consulta los enlaces anteriores o  
                            <a href="mailto:notificaciones@redmedicronips.com.co" className="text-azul hover:text-azul-dark hover:underline ml-1 font-medium">contáctanos directamente</a>.
                        </p>
                        <p>
                            Red Medicron IPS garantiza el acceso a la información pública conforme al <strong className="text-gray-800">Decreto 1081 de 2015</strong> y la normatividad vigente.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Transparencia;
