import React, { useState } from 'react';
import { FaCheckCircle, FaClock, FaRocket, FaLightbulb, FaCode, FaMobile, FaShieldAlt, FaUsers, FaChartLine, FaEnvelope, FaCalendarAlt, FaArrowRight, FaStar, FaTools, FaBug, FaHeart, FaGavel, FaCheck, FaEye, FaFileAlt, FaUniversalAccess, FaBalanceScale, FaSitemap } from 'react-icons/fa';
import { MdAccessibility, MdUpdate, MdIntegrationInstructions, MdAnalytics } from 'react-icons/md';
import { SEOHelmet } from '../components/SEO';

interface RoadmapItem {
    id: string;
    title: string;
    description: string;
    status: 'completed' | 'in-progress' | 'planned' | 'future';
    category: 'tecnologia' | 'accesibilidad' | 'servicios' | 'seguridad' | 'experiencia';
    date: string;
    progress?: number;
    icon: React.ComponentType<any>;
    details?: string[];
}

const Roadmap: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const categories = [
        { id: 'all', label: 'Todos', icon: FaRocket, color: 'bg-gradient-to-r from-azul to-azul-light' },
        { id: 'tecnologia', label: 'Tecnología', icon: FaCode, color: 'bg-gradient-to-r from-blue-600 to-blue-700' },
        { id: 'accesibilidad', label: 'Accesibilidad', icon: MdAccessibility, color: 'bg-gradient-to-r from-green-600 to-green-700' },
        { id: 'servicios', label: 'Servicios', icon: FaUsers, color: 'bg-gradient-to-r from-purple-600 to-purple-700' },
        { id: 'seguridad', label: 'Seguridad', icon: FaShieldAlt, color: 'bg-gradient-to-r from-red-600 to-red-700' },
        { id: 'experiencia', label: 'Experiencia', icon: FaHeart, color: 'bg-gradient-to-r from-pink-600 to-pink-700' }
    ];

    const roadmapItems: RoadmapItem[] = [
        // COMPLETADOS
        {
            id: 'matriz-ita',
            title: 'Implementación Matriz ITA',
            description: 'Cumplimiento integral de los 9 criterios de accesibilidad según Resolución 1519 de 2020 del MinTIC',
            status: 'completed',
            category: 'accesibilidad',
            date: '2024-12-15',
            progress: 100,
            icon: MdAccessibility,
            details: [
                'Cumplimiento Resolución 1519 de 2020 MinTIC',
                'Implementación de texto alternativo descriptivo',
                'Soporte para multimedia accesible',
                'Escalado de fuentes hasta 200%',
                'Navegación por teclado completa',
                'Formularios WCAG 2.1 AA compliant',
                '9/9 criterios Matriz ITA certificados'
            ]
        },
        {
            id: 'portal-web',
            title: 'Nuevo Portal Web Institucional',
            description: 'Rediseño completo del sitio web con tecnologías modernas y responsive design',
            status: 'completed',
            category: 'tecnologia',
            date: '2024-12-01',
            progress: 100,
            icon: FaCode,
            details: [
                'React 19 + TypeScript para mayor robustez',
                'Tailwind CSS para diseño responsivo',
                'Optimización SEO avanzada',
                'Sistema de componentes reutilizables'
            ]
        },
        {
            id: 'transparencia',
            title: 'Portal de Transparencia',
            description: 'Publicación completa de información institucional según Ley 1712',
            status: 'completed',
            category: 'servicios',
            date: '2024-11-15',
            progress: 100,
            icon: FaChartLine,
            details: [
                'Estados financieros actualizados',
                'Organigrama institucional',
                'Procesos y procedimientos',
                'Información contractual'
            ]
        },
        
        // EN PROGRESO
        {
            id: 'chat-online',
            title: 'Chat de Atención en Línea',
            description: 'Sistema de chat integrado para atención inmediata a usuarios',
            status: 'in-progress',
            category: 'servicios',
            date: '2025-01-30',
            progress: 75,
            icon: FaUsers,
            details: [
                'Integración con WhatsApp Business API',
                'Sistema de tickets automático',
                'Horarios de atención configurables',
                'Dashboard de métricas de atención'
            ]
        },
        {
            id: 'app-movil',
            title: 'Aplicación Móvil',
            description: 'App nativa para agendamiento de citas y consulta de servicios',
            status: 'in-progress',
            category: 'tecnologia',
            date: '2025-03-15',
            progress: 45,
            icon: FaMobile,
            details: [
                'Agendamiento de citas médicas',
                'Consulta de historia clínica',
                'Notificaciones push',
                'Integración con sistemas HIS'
            ]
        },
        {
            id: 'monitoreo-normativo',
            title: 'Monitoreo Continuo de Cumplimiento Normativo',
            description: 'Sistema de seguimiento y auditoria automatizada para el cumplimiento de la Resolución 1519 de 2020',
            status: 'in-progress',
            category: 'accesibilidad',
            date: '2025-02-28',
            progress: 60,
            icon: FaGavel,
            details: [
                'Auditorías automatizadas WCAG 2.1 AA',
                'Reportes trimestrales de cumplimiento',
                'Alertas de no conformidades',
                'Dashboard de métricas de accesibilidad',
                'Seguimiento Resolución 1519 de 2020',
                'Certificación continua Matriz ITA'
            ]
        },
        
        // PLANIFICADOS
        {
            id: 'ia-diagnosticos',
            title: 'IA para Diagnósticos',
            description: 'Sistema de inteligencia artificial para apoyo en diagnósticos médicos',
            status: 'planned',
            category: 'tecnologia',
            date: '2025-06-01',
            progress: 15,
            icon: FaRocket,
            details: [
                'Análisis de imágenes médicas',
                'Algoritmos de machine learning',
                'Integración con equipos médicos',
                'Validación clínica rigurosa'
            ]
        },
        {
            id: 'telemedicina',
            title: 'Plataforma de Telemedicina',
            description: 'Sistema completo para consultas médicas virtuales',
            status: 'planned',
            category: 'servicios',
            date: '2025-04-20',
            progress: 25,
            icon: MdIntegrationInstructions,
            details: [
                'Video consultas HD',
                'Prescripción digital',
                'Historia clínica electrónica',
                'Integración con farmacias'
            ]
        },
        {
            id: 'blockchain-hc',
            title: 'Blockchain para Historias Clínicas',
            description: 'Tecnología blockchain para seguridad y trazabilidad de datos médicos',
            status: 'planned',
            category: 'seguridad',
            date: '2025-08-15',
            progress: 10,
            icon: FaShieldAlt,
            details: [
                'Inmutabilidad de registros',
                'Trazabilidad completa',
                'Interoperabilidad entre IPS',
                'Cumplimiento GDPR y HABEAS DATA'
            ]
        },

        // FUTURO
        {
            id: 'realidad-virtual',
            title: 'Realidad Virtual en Rehabilitación',
            description: 'Uso de VR para terapias de rehabilitación física y cognitiva',
            status: 'future',
            category: 'tecnologia',
            date: '2026-01-01',
            progress: 5,
            icon: FaStar,
            details: [
                'Terapias inmersivas',
                'Seguimiento de progreso en 3D',
                'Gamificación de ejercicios',
                'Reducción de costos de terapia'
            ]
        },
        {
            id: 'iot-salud',
            title: 'IoT para Monitoreo de Salud',
            description: 'Red de sensores IoT para monitoreo continuo de pacientes',
            status: 'future',
            category: 'tecnologia',
            date: '2026-06-01',
            progress: 0,
            icon: MdAnalytics,
            details: [
                'Sensores de signos vitales',
                'Alertas automáticas',
                'Análisis predictivo',
                'Monitoreo remoto 24/7'
            ]
        }
    ];

    const getStatusInfo = (status: string) => {
        switch (status) {
            case 'completed':
                return { 
                    label: 'Completado', 
                    color: 'bg-green-600', 
                    textColor: 'text-green-800',
                    bgColor: 'bg-green-100',
                    icon: FaCheckCircle 
                };
            case 'in-progress':
                return { 
                    label: 'En Progreso', 
                    color: 'bg-blue-600', 
                    textColor: 'text-blue-800',
                    bgColor: 'bg-blue-100',
                    icon: FaClock 
                };
            case 'planned':
                return { 
                    label: 'Planificado', 
                    color: 'bg-yellow-600', 
                    textColor: 'text-yellow-800',
                    bgColor: 'bg-yellow-100',
                    icon: FaCalendarAlt 
                };
            case 'future':
                return { 
                    label: 'Futuro', 
                    color: 'bg-purple-600', 
                    textColor: 'text-purple-800',
                    bgColor: 'bg-purple-100',
                    icon: FaRocket 
                };
            default:
                return { 
                    label: 'Desconocido', 
                    color: 'bg-gray-500', 
                    textColor: 'text-gray-700',
                    bgColor: 'bg-gray-50',
                    icon: FaTools 
                };
        }
    };

    const filteredItems = selectedCategory === 'all' 
        ? roadmapItems 
        : roadmapItems.filter(item => item.category === selectedCategory);

    const sortedItems = filteredItems.sort((a, b) => {
        const statusOrder = { 'completed': 1, 'in-progress': 2, 'planned': 3, 'future': 4 };
        const statusA = statusOrder[a.status as keyof typeof statusOrder];
        const statusB = statusOrder[b.status as keyof typeof statusOrder];
        
        if (statusA !== statusB) {
            return statusA - statusB;
        }
        
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <>
            <SEOHelmet
                title="Roadmap de Desarrollo Tecnológico - Red Medicron IPS"
                description="Conoce el plan de desarrollo tecnológico, próximos hitos y mejoras continuas de Red Medicron IPS en Nariño. Innovación en salud digital, accesibilidad web y servicios médicos según Resolución 1519 de 2020."
                keywords="roadmap red medicron ips, plan desarrollo tecnológico nariño, innovación salud digital, mejoras sitio web ips túquerres, hitos tecnológicos red medicron, accesibilidad matriz ITA, resolución 1519 2020"
                canonical="/roadmap"
            />
            
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-azul via-azul-light to-verdeLima">
                {/* Elementos decorativos */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-soft"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-verdeLima/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                            🚀 Roadmap de Innovación
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
                            Descubre el futuro de la salud digital en <span className="font-bold text-verdeLima">Red Medicron IPS</span>. 
                            Nuestro plan de desarrollo tecnológico para transformar la atención médica en Nariño.
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white">
                                    {roadmapItems.filter(item => item.status === 'completed').length}
                                </div>
                                <div className="text-white/80 text-sm">Completados</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white">
                                    {roadmapItems.filter(item => item.status === 'in-progress').length}
                                </div>
                                <div className="text-white/80 text-sm">En Progreso</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white">
                                    {roadmapItems.filter(item => item.status === 'planned').length}
                                </div>
                                <div className="text-white/80 text-sm">Planificados</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white">
                                    {roadmapItems.filter(item => item.status === 'future').length}
                                </div>
                                <div className="text-white/80 text-sm">Futuros</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filtros de Categorías */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-azul mb-12">
                        Explora por Categorías
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            const isActive = selectedCategory === category.id;
                            
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`
                                        flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300
                                        ${isActive 
                                            ? `${category.color} text-white shadow-lg scale-105` 
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                        }
                                        hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-azul focus:ring-offset-2
                                    `}
                                    aria-pressed={isActive}
                                    role="tab"
                                >
                                    <Icon className="mr-2" size={18} />
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline de Roadmap */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Línea central del timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-azul via-verdeLima to-purple-500"></div>
                        
                        <div className="space-y-12">
                            {sortedItems.map((item, index) => {
                                const statusInfo = getStatusInfo(item.status);
                                const Icon = item.icon;
                                const StatusIcon = statusInfo.icon;
                                const isLeft = index % 2 === 0;
                                
                                return (
                                    <div 
                                        key={item.id} 
                                        className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                                    >
                                        {/* Contenido */}
                                        <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                            <div className={`
                                                bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300
                                                ${selectedItem === item.id ? 'ring-2 ring-azul transform scale-105' : ''}
                                                cursor-pointer
                                            `}
                                            onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    setSelectedItem(selectedItem === item.id ? null : item.id);
                                                }
                                            }}
                                            aria-expanded={selectedItem === item.id}
                                            >
                                                {/* Header */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className={`flex items-center ${!isLeft ? 'flex-row-reverse' : ''}`}>
                                                        <div className="w-12 h-12 bg-gradient-to-br from-azul to-azul-light rounded-xl flex items-center justify-center mr-3">
                                                            <Icon className="text-white" size={20} />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-azul">{item.title}</h3>
                                                            <p className="text-sm text-gray-500">{item.date}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className={`
                                                        flex items-center px-3 py-1 rounded-full text-xs font-semibold
                                                        ${statusInfo.bgColor} ${statusInfo.textColor}
                                                    `}>
                                                        <StatusIcon className="mr-1" size={12} />
                                                        {statusInfo.label}
                                                    </div>
                                                </div>
                                                
                                                {/* Descripción */}
                                                <p className="text-gray-600 mb-4">{item.description}</p>
                                                
                                                {/* Progreso */}
                                                {item.progress !== undefined && (
                                                    <div className="mb-4">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="text-sm font-medium text-gray-700">Progreso</span>
                                                            <span className="text-sm font-bold text-azul">{item.progress}%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div 
                                                                className={`h-2 rounded-full transition-all duration-500 ${statusInfo.color}`}
                                                                style={{ width: `${item.progress}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                )}
                                                
                                                {/* Detalles expandibles */}
                                                {selectedItem === item.id && item.details && (
                                                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                                                        <h4 className="font-semibold text-gray-800 mb-3">Características:</h4>
                                                        <ul className="space-y-2">
                                                            {item.details.map((detail, idx) => (
                                                                <li key={idx} className="flex items-start">
                                                                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                                                                    <span className="text-sm text-gray-600">{detail}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                
                                                {/* Botón de expansión */}
                                                <div className="flex justify-center mt-4">
                                                    <FaArrowRight 
                                                        className={`
                                                            text-azul transition-transform duration-300
                                                            ${selectedItem === item.id ? 'rotate-90' : ''}
                                                        `} 
                                                        size={16} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Punto central del timeline */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-azul rounded-full z-10"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Contribuciones */}
            <section className="bg-gradient-to-r from-azul to-verdeLima py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        🤝 ¡Ayúdanos a Innovar!
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Tu opinión es fundamental para seguir mejorando. Comparte tus ideas y sugerencias 
                        para el futuro de la salud digital en Red Medicron IPS.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <FaLightbulb className="text-yellow-300 text-3xl mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-white mb-2">Ideas Innovadoras</h3>
                            <p className="text-white/80 text-sm">
                                Comparte nuevas funcionalidades o mejoras que te gustaría ver implementadas
                            </p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <FaBug className="text-red-300 text-3xl mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-white mb-2">Reportar Problemas</h3>
                            <p className="text-white/80 text-sm">
                                Ayúdanos a identificar y solucionar problemas en nuestros servicios digitales
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:tics@redmedicronips.com.co?subject=Sugerencia para el Roadmap"
                            className="
                                inline-flex items-center justify-center
                                bg-white text-azul font-bold px-8 py-4 rounded-xl
                                shadow-lg hover:shadow-xl hover:scale-105
                                transition-all duration-300
                                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-azul
                            "
                        >
                            <FaEnvelope className="mr-3" size={20} />
                            Enviar Sugerencia
                        </a>
                        
                        <a
                            href="/pqrsf"
                            className="
                                inline-flex items-center justify-center
                                bg-transparent text-white font-bold px-8 py-4 rounded-xl
                                border-2 border-white hover:bg-white hover:text-azul
                                transition-all duration-300
                                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-azul
                            "
                        >
                            <FaUsers className="mr-3" size={20} />
                            PQRSF
                        </a>
                    </div>
                </div>
            </section>

            {/* Cumplimiento Normativo */}
            <section className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <FaShieldAlt className="text-green-600 text-4xl mb-4 mx-auto" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Cumplimiento Normativo y Regulatorio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Nuestro roadmap está alineado con las normativas colombianas de accesibilidad 
                            web y transparencia en el sector salud.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Resolución 1519 de 2020 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
                            <div className="flex items-start">
                                <FaGavel className="text-green-600 text-2xl mr-4 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Resolución 1519 de 2020
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Cumplimiento de los lineamientos de accesibilidad web para 
                                        entidades del sector salud establecidos por el MinTIC.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm">
                                            <FaCheck className="text-green-500 mr-2" />
                                            <span>Matriz ITA implementada (9/9 criterios)</span>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <FaCheck className="text-green-500 mr-2" />
                                            <span>Estándares WCAG 2.1 AA certificados</span>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <FaCheck className="text-green-500 mr-2" />
                                            <span>Navegación accesible y contenido adaptable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Transparencia y Acceso */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                            <div className="flex items-start">
                                <FaEye className="text-blue-600 text-2xl mr-4 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Transparencia y Acceso
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Compromiso con la transparencia en la información y 
                                        acceso universal a nuestros servicios digitales.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm">
                                            <FaCheck className="text-green-500 mr-2" />
                                            <span>Portal de transparencia activo</span>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <FaCheck className="text-green-500 mr-2" />
                                            <span>PQRSF digital habilitado</span>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <FaCheck className="text-green-500 mr-2" />
                                            <span>Información pública disponible</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certificaciones y Enlaces */}
                    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                            Documentación de Cumplimiento
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/transparencia"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                                <FaFileAlt className="mr-2" />
                                Matriz ITA
                            </a>
                            <a
                                href="/accesibilidad"
                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                            >
                                <FaUniversalAccess className="mr-2" />
                                Accesibilidad Web
                            </a>
                            <a
                                href="/derechos-deberes"
                                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                            >
                                <FaBalanceScale className="mr-2" />
                                Derechos y Deberes
                            </a>
                            <a
                                href="/mapa-sitio"
                                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                            >
                                <FaSitemap className="mr-2" />
                                Mapa del Sitio
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer informativo */}
            <section className="bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <MdUpdate className="text-azul text-3xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-azul mb-2">Actualizaciones Constantes</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Este roadmap se actualiza trimestralmente para reflejar nuestro compromiso 
                            con la innovación continua en salud digital.
                        </p>
                        <div className="text-xs text-gray-500">
                            <p>Última actualización: Diciembre 2024</p>
                            <p>Próxima revisión: Marzo 2025</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Roadmap;
