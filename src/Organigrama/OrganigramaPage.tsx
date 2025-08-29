import React, { useState } from 'react';
import { SEOHelmet } from '../components/SEO';

const Organigrama: React.FC = () => {
    const [selectedOrganigrama, setSelectedOrganigrama] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Organigrama principal
    const organigramaGeneral = {
        title: "Organigrama General",
        subtitle: "Estructura Organizacional Completa",
        image: "/organigramas/Organigrama.png",
        description: "Estructura organizacional completa de Red Medicron IPS que muestra la jerarquía directiva y operativa de toda la institución."
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

    const openModal = (image: string, title: string) => {
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
                title="Organigrama Institucional - Red Medicron IPS"
                description="Conoce la estructura organizacional de Red Medicron IPS en Nariño. Organigrama completo con jerarquía directiva, área administrativa y operativa para una gestión eficiente."
                keywords="organigrama red medicron ips, estructura organizacional ips nariño, jerarquía red medicron, directivos ips túquerres, administración red medicron"
                canonical="/organigrama"
            />
            
            <section className="min-h-screen bg-gradient-to-br from-grisClaro via-white to-azul-light/10 text-negro p-8 flex flex-col items-center">
                <div className="w-full max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-tight">
                            Organigrama Institucional
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Conoce la estructura organizacional de Red Medicron IPS, diseñada para garantizar una gestión eficiente, transparente y orientada al usuario en todo el departamento de Nariño.
                        </p>
                    </div>

                    {/* Organigrama General */}
                    <div className="mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-azul mb-4">
                                    {organigramaGeneral.title}
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    {organigramaGeneral.subtitle}
                                </p>
                                <p className="text-gray-500 max-w-2xl mx-auto">
                                    {organigramaGeneral.description}
                                </p>
                            </div>
                            
                            <div className="flex justify-center">
                                <div 
                                    className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                                    onClick={() => openModal(organigramaGeneral.image, organigramaGeneral.title)}
                                >
                                    <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200">
                                        <img 
                                            src={organigramaGeneral.image}
                                            alt={organigramaGeneral.title}
                                            className="w-full max-w-4xl h-auto object-contain"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-azul/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white/90 px-6 py-3 rounded-lg shadow-lg">
                                                <span className="text-azul font-semibold flex items-center gap-2">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                    {/* Organigramas por Áreas */}
                    <div className="mb-12">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-azul mb-4">
                                Organigramas por Áreas
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Explora la estructura organizacional específica de cada área y departamento de Red Medicron IPS.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {organigramasPorArea.map((item) => (
                                <div 
                                    key={item.id}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
                                    onClick={() => openModal(item.image, item.title)}
                                >
                                    <div className="relative overflow-hidden rounded-t-xl">
                                        <img 
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-azul/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                {item.area}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-azul font-semibold text-sm">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="bg-gradient-to-r from-azul/10 to-verdeLima/10 rounded-2xl p-8 border border-azul/20">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-azul mb-4">
                                Gestión Organizacional Transparente
                            </h3>
                            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
                                Nuestra estructura organizacional está diseñada para garantizar una atención médica de calidad, 
                                con procesos eficientes y una clara definición de responsabilidades en cada nivel jerárquico.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center">
                                    <div className="bg-azul/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-8 h-8 text-azul" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Equipo Multidisciplinario</h4>
                                    <p className="text-sm text-gray-600">Profesionales especializados en cada área</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-verdeLima/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-8 h-8 text-verdeLima" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Gestión de Calidad</h4>
                                    <p className="text-sm text-gray-600">Procesos certificados y mejora continua</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-acento/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-8 h-8 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Eficiencia Operativa</h4>
                                    <p className="text-sm text-gray-600">Procesos optimizados para mejor servicio</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer informativo */}
                    <div className="text-center mt-12 text-gray-500">
                        <p className="text-sm">
                            Para más información sobre la estructura organizacional, consulta la sección de 
                            <a href="/transparencia" className="text-azul hover:underline ml-1">transparencia</a> o 
                            <a href="/contacto" className="text-azul hover:underline ml-1">contáctanos</a>.
                        </p>
                    </div>
                </div>

                {/* Modal para ver imágenes en grande */}
                {isModalOpen && selectedOrganigrama && (
                    <div 
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        onClick={closeModal}
                    >
                        <div className="relative max-w-7xl max-h-full">
                            <button
                                onClick={closeModal}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img 
                                src={selectedOrganigrama}
                                alt="Organigrama ampliado"
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Organigrama;
