import React, { useState, useEffect } from 'react';
import { SEOHelmet } from '../components/SEO';

const Organigrama: React.FC = () => {
    const [selectedOrganigrama, setSelectedOrganigrama] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Manejar cierre con tecla ESC
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscKey);
            // Prevenir scroll del body cuando el modal está abierto
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    // Organigrama principal
    const organigramaGeneral = {
        title: "Organigrama General",
        subtitle: "Estructura Organizacional Completa",
        image: "/organigramas/Organigrama.png",
        description: "Estructura organizacional completa de Red Medicron IPS que muestra la jerarquía directiva y operativa de toda la institución."
    };

    // Mapa de procesos
    const mapaProcesos = {
        title: "Mapa de Procesos",
        subtitle: "Flujo de Procesos Institucionales",
        image: "/procesos/mapa de procesos.png",
        description: "Representación gráfica de todos los procesos institucionales de Red Medicron IPS, incluyendo procesos estratégicos, misionales y de apoyo que garantizan la calidad en la prestación de servicios de salud."
    };

    // Organigramas por áreas/departamentos
    const organigramasPorArea = [
        {
            id: "direccion-ejecutiva",
            title: "Dirección Ejecutiva",
            image: "/organigramas/DireccionEjectiva.jpeg",
            description: "Estructura y organización de la Dirección Ejecutiva de Red Medicron IPS.",
            area: "Dirección"
        },
        {
            id: "jefatura-financiera",
            title: "Jefatura Financiera y Administrativa",
            image: "/organigramas/JefaturaFinancieraAdministrativa.png",
            description: "Organización del área financiera y administrativa de la institución.",
            area: "Administración"
        },
        {
            id: "jefatura-calidad",
            title: "Jefatura de Gestión de Calidad",
            image: "/organigramas/JefaturaGestionCalidad.png",
            description: "Estructura del departamento de gestión y aseguramiento de la calidad.",
            area: "Calidad"
        },
        {
            id: "jefatura-talento-humano",
            title: "Jefatura de Gestión de Talento Humano",
            image: "/organigramas/jefaturaGestionTalenteoHumano.png",
            description: "Organización del área de recursos humanos y gestión del talento.",
            area: "Talento Humano"
        },
        {
            id: "jefatura-servicios-salud",
            title: "Jefatura de Servicios de Salud",
            image: "/organigramas/JefaturaServiciosSalud.png",
            description: "Estructura del área médica y servicios asistenciales.",
            area: "Servicios de Salud"
        },
        {
            id: "coordinacion-asistenciales",
            title: "Coordinación de Servicios Asistenciales",
            image: "/organigramas/CoordinacionServiciosAsistenciales.jpeg",
            description: "Organización de la coordinación de servicios médicos asistenciales.",
            area: "Servicios Asistenciales"
        },
        {
            id: "coordinacion-calidad-apoto",
            title: "Coordinación de Calidad - Servicios Apoto",
            image: "/organigramas/CoordinacionCalidadServiciosApoto.jpeg",
            description: "Estructura específica de calidad para los servicios de la sede Apoto.",
            area: "Calidad Regional"
        }
    ];

    const openModal = (image: string) => {
        setSelectedOrganigrama(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOrganigrama(null);
    };

    return (
        <>
            <SEOHelmet
                title="Organigrama y Mapa de Procesos - Red Medicron IPS"
                description="Conoce la estructura organizacional y el mapa de procesos de Red Medicron IPS en Nariño. Organigrama completo, procesos estratégicos, misionales y de apoyo para una gestión eficiente."
                keywords="organigrama red medicron ips, mapa procesos ips nariño, estructura organizacional red medicron, procesos institucionales ips túquerres, directivos red medicron, administración ips"
                canonical="/organigrama"
            />
            
            <section className="min-h-screen bg-gradient-to-br from-grisClaro via-white to-azul-light/10 text-negro px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-col items-center">
                <div className="w-full max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-center tracking-tight">
                            Organigrama y Mapa de Procesos
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                            Conoce la estructura organizacional completa y el mapa de procesos de Red Medicron IPS, diseñados para garantizar una gestión eficiente, transparente y orientada al usuario en todo el departamento de Nariño.
                        </p>
                    </div>

                    {/* Organigrama General */}
                    <div className="mb-12 sm:mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
                            <div className="text-center mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-azul mb-3 sm:mb-4">
                                    {organigramaGeneral.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2 sm:px-0">
                                    {organigramaGeneral.subtitle}
                                </p>
                                <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-2 sm:px-0">
                                    {organigramaGeneral.description}
                                </p>
                            </div>
                            
                            <div className="flex justify-center">
                                <div 
                                    className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] w-full max-w-5xl"
                                    onClick={() => openModal(organigramaGeneral.image)}
                                >
                                    <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200">
                                        <img 
                                            src={organigramaGeneral.image}
                                            alt={organigramaGeneral.title}
                                            className="w-full h-auto object-contain min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-azul/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white/90 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
                                                <span className="text-azul font-semibold flex items-center gap-2 text-sm sm:text-base">
                                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                    </svg>
                                                    Ver en grande
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mapa de Procesos */}
                    <div className="mb-12 sm:mb-16">
                        <div className="bg-gradient-to-r from-verdeLima/10 to-azul/10 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-verdeLima/20">
                            <div className="text-center mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-verdeLima mb-3 sm:mb-4">
                                    {mapaProcesos.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2 sm:px-0">
                                    {mapaProcesos.subtitle}
                                </p>
                                <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto px-2 sm:px-0">
                                    {mapaProcesos.description}
                                </p>
                            </div>
                            
                            <div className="flex justify-center">
                                <div 
                                    className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] w-full max-w-5xl"
                                    onClick={() => openModal(mapaProcesos.image)}
                                >
                                    <div className="relative overflow-hidden rounded-xl shadow-lg border border-verdeLima/30">
                                        <img 
                                            src={mapaProcesos.image}
                                            alt={mapaProcesos.title}
                                            className="w-full h-auto object-contain min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] bg-white"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-verdeLima/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white/90 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
                                                <span className="text-verdeLima font-semibold flex items-center gap-2 text-sm sm:text-base">
                                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                    </svg>
                                                    Ver mapa completo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Información sobre el mapa de procesos */}
                            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                <div className="text-center p-4 bg-white/50 rounded-xl">
                                    <div className="bg-blue-500/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Procesos Estratégicos</h4>
                                    <p className="text-xs sm:text-sm text-gray-600">Planificación y dirección institucional</p>
                                </div>
                                
                                <div className="text-center p-4 bg-white/50 rounded-xl">
                                    <div className="bg-green-500/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Procesos Misionales</h4>
                                    <p className="text-xs sm:text-sm text-gray-600">Atención directa al usuario</p>
                                </div>
                                
                                <div className="text-center p-4 bg-white/50 rounded-xl">
                                    <div className="bg-orange-500/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Procesos de Apoyo</h4>
                                    <p className="text-xs sm:text-sm text-gray-600">Soporte administrativo y técnico</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Organigramas por Áreas */}
                    <div className="mb-12">
                        <div className="text-center mb-8 sm:mb-10">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-azul mb-3 sm:mb-4 px-4 sm:px-0">
                                Organigramas por Áreas
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                                Explora la estructura organizacional específica de cada área y departamento de Red Medicron IPS.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {organigramasPorArea.map((item) => (
                                <div 
                                    key={item.id}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
                                    onClick={() => openModal(item.image)}
                                >
                                    <div className="relative overflow-hidden rounded-t-xl">
                                        <img 
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-36 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                                            <span className="bg-azul/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                                                {item.area}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-4 sm:p-6">
                                        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 min-h-[3rem] sm:min-h-[3.5rem]">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-azul font-semibold text-xs sm:text-sm">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                            Ver organigrama
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Información adicional */}
                    <div className="bg-gradient-to-r from-azul/10 to-verdeLima/10 rounded-2xl p-4 sm:p-6 lg:p-8 border border-azul/20">
                        <div className="text-center">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-azul mb-3 sm:mb-4 px-2 sm:px-0">
                                Gestión Organizacional Transparente
                            </h3>
                            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
                                Nuestra estructura organizacional está diseñada para garantizar una atención médica de calidad, 
                                con procesos eficientes y una clara definición de responsabilidades en cada nivel jerárquico.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                                <div className="text-center">
                                    <div className="bg-azul/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-azul" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Equipo Multidisciplinario</h4>
                                    <p className="text-xs sm:text-sm text-gray-600">Profesionales especializados en cada área</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-verdeLima/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-verdeLima" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Gestión de Calidad</h4>
                                    <p className="text-xs sm:text-sm text-gray-600">Procesos certificados y mejora continua</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-acento/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Eficiencia Operativa</h4>
                                    <p className="text-xs sm:text-sm text-gray-600">Procesos optimizados para mejor servicio</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer informativo */}
                    <div className="text-center mt-8 sm:mt-12 text-gray-500 px-4 sm:px-0">
                        <p className="text-xs sm:text-sm">
                            Para más información sobre la estructura organizacional, consulta la sección de 
                            <a href="/transparencia" className="text-azul hover:underline ml-1">transparencia</a> o 
                            <a href="/contacto" className="text-azul hover:underline ml-1">contáctanos</a>.
                        </p>
                    </div>
                </div>

                {/* Modal para ver imágenes en grande */}
                {isModalOpen && selectedOrganigrama && (
                    <div 
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4 lg:p-6"
                        onClick={closeModal}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Botón de cerrar */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors bg-black/60 rounded-full p-2 sm:p-3 hover:bg-black/80"
                                aria-label="Cerrar modal"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Contenedor de imagen optimizado */}
                            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
                                <img 
                                    src={selectedOrganigrama}
                                    alt="Organigrama ampliado"
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                    style={{
                                        maxWidth: '98vw',
                                        maxHeight: '90vh',
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>

                            {/* Indicadores de navegación */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="bg-black/60 rounded-full px-3 py-1 sm:px-4 sm:py-2">
                                    <p className="text-white text-xs sm:text-sm font-medium">
                                        Click en la imagen para hacer zoom • Presiona ESC para cerrar
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Organigrama;
