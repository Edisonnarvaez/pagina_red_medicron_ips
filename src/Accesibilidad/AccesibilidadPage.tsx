import React, { useState, useEffect } from 'react';
import { SEOHelmet } from '../components/SEO';

const Accesibilidad: React.FC = () => {
    const [contraste, setContraste] = useState(false);
    const [fontSize, setFontSize] = useState(1);
    const [autoPlay, setAutoPlay] = useState(true);
    const [animaciones, setAnimaciones] = useState(true);

    // Aplicar configuraciones de accesibilidad globalmente
    useEffect(() => {
        const root = document.documentElement;
        
        // Aplicar alto contraste
        if (contraste) {
            root.classList.add('high-contrast');
        } else {
            root.classList.remove('high-contrast');
        }

        // Aplicar tamaño de fuente
        root.style.setProperty('--font-scale', fontSize.toString());

        // Controlar animaciones
        if (!animaciones) {
            root.classList.add('reduce-motion');
        } else {
            root.classList.remove('reduce-motion');
        }

        // Guardar preferencias en localStorage
        localStorage.setItem('accessibility-preferences', JSON.stringify({
            contraste,
            fontSize,
            autoPlay,
            animaciones
        }));

    }, [contraste, fontSize, autoPlay, animaciones]);

    // Cargar preferencias guardadas
    useEffect(() => {
        const saved = localStorage.getItem('accessibility-preferences');
        if (saved) {
            try {
                const preferences = JSON.parse(saved);
                setContraste(preferences.contraste || false);
                setFontSize(preferences.fontSize || 1);
                setAutoPlay(preferences.autoPlay !== false);
                setAnimaciones(preferences.animaciones !== false);
            } catch (e) {
                console.warn('Error loading accessibility preferences:', e);
            }
        }

        // Detectar preferencias del sistema
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setAnimaciones(false);
        }
    }, []);

    const resetearConfiguracion = () => {
        setContraste(false);
        setFontSize(1);
        setAutoPlay(true);
        setAnimaciones(true);
        localStorage.removeItem('accessibility-preferences');
    };

    const criteriosITA = [
        {
            id: 'a',
            titulo: 'Elementos no textuales',
            descripcion: 'Todas las imágenes, diagramas y elementos multimedia tienen texto alternativo descriptivo.',
            cumple: true,
            detalles: ['Alt tags en todas las imágenes', 'Descripciones en mapas y gráficos', 'Textos alternativos contextuales']
        },
        {
            id: 'b',
            titulo: 'Videos y multimedia',
            descripcion: 'Videos con subtítulos, audio descripción y guiones en texto disponibles.',
            cumple: true,
            detalles: ['Subtítulos en videos institucionales', 'Audio descripción disponible', 'Transcripciones de audio']
        },
        {
            id: 'c',
            titulo: 'Tamaño de texto y contraste',
            descripcion: 'Texto mínimo de 12pt, alto contraste y ampliación hasta 200% sin pérdida de funcionalidad.',
            cumple: true,
            detalles: ['Texto base de 16px (12pt+)', 'Contraste WCAG AA', 'Zoom hasta 200% funcional']
        },
        {
            id: 'd',
            titulo: 'Código y estructura',
            descripcion: 'Código semántico, navegación lineal, enlaces descriptivos y buscador interno.',
            cumple: true,
            detalles: ['HTML semántico', 'Navegación por teclado', 'Enlaces descriptivos', 'Estructura organizada']
        },
        {
            id: 'e',
            titulo: 'Formularios accesibles',
            descripcion: 'Formularios con instrucciones claras, campos obligatorios marcados y múltiples canales sensoriales.',
            cumple: true,
            detalles: ['Campos obligatorios con asterisco', 'Instrucciones claras', 'Validación accesible', 'Labels apropiados']
        },
        {
            id: 'f',
            titulo: 'Navegación por teclado',
            descripción: 'Navegación tabulada en orden lógico con indicadores visuales claros.',
            cumple: true,
            detalles: ['Orden de tabulación lógico', 'Focus visible', 'Skip links', 'Accesos directos']
        },
        {
            id: 'g',
            titulo: 'Control de contenido dinámico',
            descripcion: 'Control de animaciones, movimientos y eventos temporizados.',
            cumple: true,
            detalles: ['Pausar animaciones', 'Control de autoplay', 'Sin parpadeo peligroso', 'Timeouts configurables']
        },
        {
            id: 'h',
            titulo: 'Lenguaje claro',
            descripcion: 'Contenido en español claro siguiendo las guías del DAFP.',
            cumple: true,
            detalles: ['Lenguaje sencillo', 'Términos médicos explicados', 'Estructura clara', 'Contenido comprensible']
        },
        {
            id: 'i',
            titulo: 'Documentos accesibles',
            descripcion: 'PDFs y documentos cumplen Resolución 1519 de 2020.',
            cumple: true,
            detalles: ['PDFs con estructura', 'Documentos etiquetados', 'Textos alternativos', 'Orden de lectura lógico']
        }
    ];

    return (
        <>
            <SEOHelmet
                title="Accesibilidad Web - Red Medicron IPS"
                description="Portal de accesibilidad de Red Medicron IPS en Nariño. Herramientas y configuraciones para una navegación inclusiva según matriz ITA, WCAG 2.1 y normatividad colombiana de accesibilidad digital."
                keywords="accesibilidad web red medicron ips, navegación inclusiva nariño, matriz ITA accesibilidad, WCAG 2.1 colombia, ley 1618 2013, resolución 1519 2020"
                canonical="/accesibilidad"
            />
            
            <section className={`min-h-screen ${contraste ? 'bg-black text-white' : 'bg-gradient-to-br from-grisClaro via-white to-azul-light/10'} text-negro px-4 sm:px-6 lg:px-8 py-8 lg:py-12`} style={{ fontSize: `${fontSize}rem` }}>
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-center tracking-tight">
                            <span className="text-azul">Accesibilidad</span><br/>
                            <span className="text-verdeOscuro">Digital Inclusiva</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Red Medicron IPS garantiza el acceso universal a la información y servicios digitales, cumpliendo con la 
                            <strong> Ley 1618 de 2013</strong>, <strong>Resolución 1519 de 2020</strong> y estándares <strong>WCAG 2.1 AA</strong>.
                        </p>
                    </div>

                    {/* Panel de controles de accesibilidad */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-12 border border-azul/20">
                        <h2 className="text-xl sm:text-2xl font-bold text-azul mb-6 text-center">
                            🛠️ Herramientas de Accesibilidad
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {/* Alto contraste */}
                            <div className="text-center">
                                <h3 className="font-semibold text-gray-800 mb-3">Contraste</h3>
                                <button
                                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 w-full ${
                                        contraste 
                                            ? 'bg-yellow-500 text-black border-2 border-yellow-600' 
                                            : 'bg-azul text-white hover:bg-azul-dark'
                                    }`}
                                    onClick={() => setContraste(!contraste)}
                                    aria-label={contraste ? 'Desactivar alto contraste' : 'Activar alto contraste'}
                                    aria-pressed={contraste}
                                >
                                    {contraste ? '🌙 Modo Normal' : '☀️ Alto Contraste'}
                                </button>
                            </div>

                            {/* Tamaño de fuente */}
                            <div className="text-center">
                                <h3 className="font-semibold text-gray-800 mb-3">Tamaño de Texto</h3>
                                <div className="flex gap-2">
                                    <button 
                                        className="flex-1 px-3 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors"
                                        onClick={() => setFontSize(f => Math.max(0.8, f - 0.1))}
                                        aria-label="Disminuir tamaño de texto"
                                        disabled={fontSize <= 0.8}
                                    >
                                        A-
                                    </button>
                                    <button 
                                        className="flex-1 px-3 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
                                        onClick={() => setFontSize(f => Math.min(2, f + 0.1))}
                                        aria-label="Aumentar tamaño de texto"
                                        disabled={fontSize >= 2}
                                    >
                                        A+
                                    </button>
                                </div>
                                <div className="text-xs text-gray-600 mt-1">
                                    Actual: {Math.round(fontSize * 100)}%
                                </div>
                            </div>

                            {/* Control de animaciones */}
                            <div className="text-center">
                                <h3 className="font-semibold text-gray-800 mb-3">Animaciones</h3>
                                <button
                                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 w-full ${
                                        animaciones 
                                            ? 'bg-purple-500 text-white hover:bg-purple-600' 
                                            : 'bg-gray-500 text-white hover:bg-gray-600'
                                    }`}
                                    onClick={() => setAnimaciones(!animaciones)}
                                    aria-label={animaciones ? 'Reducir animaciones' : 'Habilitar animaciones'}
                                    aria-pressed={!animaciones}
                                >
                                    {animaciones ? '⚡ Reducir Movimiento' : '🔄 Habilitar Animaciones'}
                                </button>
                            </div>

                            {/* Resetear */}
                            <div className="text-center">
                                <h3 className="font-semibold text-gray-800 mb-3">Restablecer</h3>
                                <button
                                    className="px-4 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors w-full"
                                    onClick={resetearConfiguracion}
                                    aria-label="Restablecer todas las configuraciones de accesibilidad"
                                >
                                    🔄 Valores por Defecto
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Criterios de la Matriz ITA */}
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-azul mb-6 sm:mb-8">
                            ✅ Cumplimiento de Matriz ITA - Criterios de Accesibilidad
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                            {criteriosITA.map((criterio) => (
                                <div key={criterio.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                                criterio.cumple ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                            }`}>
                                                {criterio.cumple ? '✅' : '❌'}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-800 mb-2">
                                                {criterio.id.toUpperCase()}. {criterio.titulo}
                                            </h3>
                                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                                {criterio.descripcion}
                                            </p>
                                            <ul className="space-y-1">
                                                {criterio.detalles.map((detalle, index) => (
                                                    <li key={index} className="flex items-center text-xs text-gray-500">
                                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {detalle}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Información adicional y contacto */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Normatividad */}
                        <div className="bg-gradient-to-br from-azul/10 to-verdeLima/10 rounded-2xl p-6 sm:p-8 border border-azul/20">
                            <h3 className="text-xl font-bold text-azul mb-4">📋 Marco Normativo</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold">•</span>
                                    <div>
                                        <strong>Ley 1618 de 2013:</strong> Disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold">•</span>
                                    <div>
                                        <strong>Resolución 1519 de 2020:</strong> Lineamientos de accesibilidad web para el sector público.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold">•</span>
                                    <div>
                                        <strong>WCAG 2.1 AA:</strong> Pautas de Accesibilidad para el Contenido Web nivel AA.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold">•</span>
                                    <div>
                                        <strong>Matriz ITA:</strong> Índice de Transparencia y Acceso a la Información.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Contacto y soporte */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
                            <h3 className="text-xl font-bold text-verdeOscuro mb-4">🤝 Soporte de Accesibilidad</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                Si experimentas dificultades para acceder a nuestro contenido o necesitas información en un formato específico, contáctanos:
                            </p>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3">
                                    <span className="text-azul">📧</span>
                                    <a href="mailto:tics@redmedicronips.com.co" className="text-azul hover:underline font-medium">
                                        tics@redmedicronips.com.co
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-azul">📞</span>
                                    <a href="tel:+573183380107" className="text-azul hover:underline font-medium">
                                        +57 318 338 0107
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-azul">⏰</span>
                                    <span className="text-gray-600">Atención: Lunes a Viernes, 7:00 AM - 3:30 PM</span>
                                </div>
                            </div>
                            
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-xs text-blue-800">
                                    <strong>Tiempo de respuesta:</strong> Respondemos a solicitudes de accesibilidad en máximo 48 horas hábiles.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer informativo */}
                    <div className="text-center mt-8 sm:mt-12 text-gray-600 text-xs sm:text-sm">
                        <p className="mb-2">
                            Red Medicron IPS se compromete con la accesibilidad universal y la mejora continua de nuestros servicios digitales.
                        </p>
                        <p>
                            <strong>Última actualización:</strong> Agosto 2025 | 
                            <strong> Próxima evaluación:</strong> Febrero 2026
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Accesibilidad;
