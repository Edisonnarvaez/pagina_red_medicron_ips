import React, { useState, useEffect } from 'react';
import { FaUserMd, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaPlay, FaArrowRight, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdHealthAndSafety, MdTrendingUp, MdGroups, MdStars } from 'react-icons/md';
import { RiHeart3Fill, RiShieldCheckFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ModalPortafolio from './ModalInicial';
import { RedesSocialesSection } from '../components/RedesSociales';
import { NoticiasDestacadas } from '../components/NoticiasDestacadas';
import { SEOHelmet } from '../components/SEO';

const Inicio: React.FC = () => {
    const [showPortafolioModal, setShowPortafolioModal] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Videos de YouTube para el componente de redes sociales
    const youtubeVideos = [
        {
            id: "VT0SHXu2vS8",
            title: "Docente elije a tu prestador de servicos ",
            description: "Conoce como hacerlo ",
            thumbnail: `https://img.youtube.com/vi/VT0SHXu2vS8/maxresdefault.jpg`
        },
        {
            id: "AcRy3TqP_DA",
            title: "FOMAG y Red Medicron IPS",
            description: "Conoce nuestra alianza estratégica",
            thumbnail: `https://img.youtube.com/vi/AcRy3TqP_DA/maxresdefault.jpg`
        },
        {
            id: "xFMYKF5lgho",
            title: "Plan Padrino Fundación Valle de Lili",
            description: "Programa de apoyo social",
            thumbnail: `https://img.youtube.com/vi/xFMYKF5lgho/maxresdefault.jpg`
        },
        {
            id: "fbFa74Kt61A",
            title: "Día del Trabajador - Red Medicron IPS",
            description: "Celebración y reconocimiento",
            thumbnail: `https://img.youtube.com/vi/fbFa74Kt61A/maxresdefault.jpg`
        }
    ];

    // Modal automático al cargar la página (después de 3 segundos)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPortafolioModal(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // Data del carrusel informativo
    const carruselData = [
        {
            id: 1,
            titulo: "¿Eres docente activo, pensionado o beneficiario del magisterio en Nariño?",
            descripcion: "Sabemos que dedicas tu vida a la educación y el bienestar de tus estudiantes. Por eso, en Red Medicron IPS queremos apoyarte.",
            gradiente: "from-medical-600 to-medical-700",
            imagen: "/images/doctora.jpg",
            acciones: [
                { label: "Elige a Red Medicron IPS", type: "primary", onclick: () => window.open("http://200.116.57.140:8080/formulario_primaria/public/formulario", "_blank") },
                { label: "Conoce más", type: "secondary", onclick: () => window.location.href = "/quienes-somos" }
            ],
            
        },
        {
            id: 2,
            titulo: "Propuesta de valor",
            descripcion: "Hacemos grata la experiencia de la persona y su familia durante todo el ciclo de atención en salud, siendo resolutivos y promoviendo su bienestar, a través de servicios integrados, humanizados y seguros en los diferentes niveles de complejidad, a costos razonables y en cumplimiento de los resultados en salud.",
            gradiente: "from-primary-600 to-primary-700",
            imagen: "/images/sliderValores-1.jpg",
            acciones: [
                { label: "Acerca de nosotros", type: "primary", onclick: () => window.location.href = "/quienes-somos" }
            ],
            
        },
        {
            id: 3,
            titulo: "Líneas telefónicas para solicitar citas",
            descripcion: "Citas en Nariño al 602 738 2377 y en Tuquerres al 321 666 0990.",
            gradiente: "from-primary-400 to-medical-500",
            imagen: "/images/sliderCitas-1.jpg",
            acciones: [
                { label: "Contacto", type: "primary", onclick: () => window.location.href = "/contacto" }
            ],
            
        },
        {
            id: 4,
            titulo: "Protocolos de Vigilancia",
            descripcion: "A través del siguiente botón descarga los protocolos y las fichas de notificación de vigilancia en salud pública",
            gradiente: "from-medical-500 to-accent-600",
            imagen: "/images/seguridad.jpg",
            acciones: [
                { label: "Descargar Protocolos", type: "primary", onclick: () => window.open("/portafolio-servicios.pdf", "_blank") }
            ],
        
        },
        {
            id: 5,
            titulo: "Portafolio",
            descripcion: "Hemos puesto a tu disposicion nuestro portafolio de servicios para que consultes lo que tenemos para ti.",
            gradiente: "from-accent-400 to-primary-700 ",
            imagen: "/images/imgPortafolioiz.jpg",
            acciones: [
                { label: "Descargar Portafolio", type: "primary", onclick: () => window.open("/portafolio-servicios.pdf", "_blank") }
            ],
        }
    ];


    // Carrusel automático
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carruselData.length);
        }, 6000); // Cambia cada 6 segundos
        return () => clearInterval(interval);
    }, [carruselData.length]);

    // Funciones para navegación manual del carrusel
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carruselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carruselData.length) % carruselData.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const testimonios = [
        {
            nombre: "María González",
            ubicacion: "Pasto, Nariño",
            texto: "La atención en Red Medicron IPS es excepcional. Me trataron con mucho cariño y profesionalismo.",
            calificacion: 5
        },
        {
            nombre: "Carlos Ruiz",
            ubicacion: "Tuquerres, Nariño",
            texto: "Excelente servicio de urgencias. Personal muy capacitado y instalaciones modernas.",
            calificacion: 5
        },
        {
            nombre: "Ana Martínez",
            ubicacion: "Ipiales, Nariño",
            texto: "El programa de nefroprotección me ha cambiado la vida. Gracias por el cuidado especializado.",
            calificacion: 5
        }
    ];

    // Carousel de testimonios
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonios.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonios.length]);

    const estadisticasAvanzadas = [
        { numero: "100,000+", descripcion: "Pacientes atendidos", icon: MdGroups, color: "from-primary-500 to-primary-700" },
        { numero: "98%", descripcion: "Satisfacción del usuario", icon: MdStars, color: "from-medical-500 to-medical-700" },
        { numero: "24/7", descripcion: "Atención de urgencias", icon: MdHealthAndSafety, color: "from-accent-500 to-accent-700" },
        { numero: "7", descripcion: "Sedes estratégicas", icon: FaMapMarkerAlt, color: "from-primary-600 to-medical-600" }
    ];

    return (
        <>
            {/* SEO Meta Tags */}
            <SEOHelmet
                title="Red Medicron IPS - Institución de Salud Integral en Nariño"
                description="Red Medicron IPS ofrece servicios de salud integral en Nariño, Colombia. Atención médica de calidad en Pasto, Túquerres, Ipiales, Tumaco. Medicina general, odontología, promoción y prevención."
                keywords="red medicron ips, salud nariño, ips túquerres, medicina pasto, salud ipiales, servicios médicos colombia, eps nariño, atención médica integral"
                canonical="/"
            />
            
            {/* Modal Portafolio de Servicios Mejorado */}
            <ModalPortafolio 
                showPortafolioModal={showPortafolioModal} 
                setShowPortafolioModal={setShowPortafolioModal} 
            />

            {/* Hero Section RENOVADO - Máximo Impacto Visual */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
                {/* Background con múltiples capas para profundidad */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-medical-950" />
                <div className="absolute inset-0 bg-gradient-to-tr from-medical-900/50 via-transparent to-accent-900/30" />
                <div className="absolute inset-0 bg-medical-pattern opacity-10" />

                {/* Elementos geométricos animados mejorados */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-medical-400/30 to-medical-600/20 rounded-full blur-3xl animate-pulse-soft" />
                <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-primary-400/25 to-primary-600/15 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/4 right-1/6 w-[300px] h-[300px] bg-gradient-to-br from-accent-400/20 to-accent-600/10 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '3s' }} />
                <div className="absolute bottom-1/3 left-1/5 w-[200px] h-[200px] bg-gradient-to-br from-white/15 to-white/5 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: '5s' }} />

                

                {/* Contenido principal */}
                <div className="w-full max-w-7xl flex flex-col items-center text-center relative z-10">

                    {/* Título principal RENOVADO - RESPONSIVO */}
                    <div className="mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-3 sm:mb-4 tracking-tight leading-none">
                            <span className="block text-azul-600 drop-shadow-2xl">Red</span>
                            <span className="block bg-gradient-to-r from-azul via-medical-400 to-medical-500 bg-clip-text text-transparent drop-shadow-xl">
                                Medicron
                            </span>
                            <span className="block text-medical-600 drop-shadow-2xl">IPS</span>
                        </h1>

                        {/* Línea decorativa animada */}
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-azul to-transparent mx-auto animate-pulse-soft"></div>
                    </div>

                    {/* Subtítulo impactante - RESPONSIVO */}
                    <div className="max-w-5xl text-center mb-12 sm:mb-16 animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-4 sm:mb-6 leading-tight font-display">
                            Cuidamos vidas con <span className="text-azul-600">Calidad</span><br />
                            y <span className="text-medical-600">Humanidad</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                            <span className="font-semibold text-white">Más de 20 años</span> transformando vidas en el sur de Colombia con
                            <span className="text-medical-600 font-semibold"> tecnología de vanguardia</span>,
                            <span className="text-azul-500 font-semibold"> atención humanizada</span> y
                            <span className="text-white font-semibold"> compromiso absoluto</span> con tu salud.
                        </p>
                    </div>

                    {/* Botones de acción RENOVADOS - RESPONSIVOS */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 sm:mb-20 animate-slide-up px-4" style={{ animationDelay: '0.6s' }}>
                        <button
                            onClick={() => setShowPortafolioModal(true)}
                            className="group relative bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-black px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-glow transition-all duration-500 text-lg sm:text-xl hover:scale-110 hover:shadow-glow focus:outline-none focus:ring-4 focus:ring-accent-400/50 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            <div className="relative z-10 flex items-center justify-center">
                                <MdHealthAndSafety className="mr-3 sm:mr-4 group-hover:rotate-12 transition-transform duration-300" size={24} />
                                <span className="tracking-wide text-sm sm:text-base">DESCUBRE NUESTROS SERVICIOS</span>
                                <div className="ml-3 sm:ml-4 w-5 sm:w-6 h-5 sm:h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <FaArrowRight className="w-2.5 sm:w-3 h-2.5 sm:h-3 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </button>

                        <Link
                            to="/sedes"
                            className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-large border border-white/30 hover:border-white/50 transition-all duration-500 text-lg sm:text-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30"
                        >
                            <FaMapMarkerAlt className="mr-3 sm:mr-4 group-hover:animate-bounce-subtle" size={20} />
                            <span className="tracking-wide text-sm sm:text-base">ENCUENTRA TU SEDE</span>
                        </Link>
                    </div>

                    {/* Estadísticas destacadas RENOVADAS - RESPONSIVAS */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl mb-12 sm:mb-16 animate-slide-up px-4" style={{ animationDelay: '0.8s' }}>
                        {estadisticasAvanzadas.map((stat, index) => (
                            <div key={index} className="group bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center border border-white/10 shadow-soft hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow`}>
                                    <stat.icon className="text-white text-lg sm:text-2xl md:text-3xl" />
                                </div>
                                <div className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2 font-display group-hover:text-accent-300 transition-colors">{stat.numero}</div>
                                <div className="text-white/80 font-semibold text-xs sm:text-sm md:text-base group-hover:text-white transition-colors">{stat.descripcion}</div>

                                {/* Barra de progreso decorativa */}
                                <div className="w-full bg-white/10 rounded-full h-1 mt-2 sm:mt-3 overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-medical-400 to-accent-400 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" style={{ animationDelay: `${index * 200}ms` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                </div>

                {/* Scroll indicator elegante */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle cursor-pointer group" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse-soft group-hover:bg-white/80 transition-colors"></div>
                    </div>
                    <p className="text-white/50 text-xs mt-2 group-hover:text-white/70 transition-colors">Explora</p>
                </div>

                {/* Partículas flotantes decorativas */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/12 w-2 h-2 bg-medical-400/60 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-accent-400/80 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
                    <div className="absolute top-1/2 right-1/12 w-1 h-1 bg-primary-400/70 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-medical-300/50 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
                    <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-accent-300/60 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
                </div>

                {/* Overlay con imagen de fondo médica profesional */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-medical-950/95 mix-blend-multiply"
                    style={{
                        backgroundImage: `url('/images/hero-bg.jpg')`,
                        backgroundAttachment: 'fixed'
                    }}
                />
            </section>

            {/* CARRUSEL INFORMATIVO MEJORADO - Campañas, Protocolos y Propuestas de Valor */}
                <section className={`relative py-10 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 overflow-hidden transition-colors duration-700 ease-in-out 
                bg-gradient-to-br ${carruselData[currentSlide].gradiente} bg-black/40 md:bg-black/30 lg:bg-black/20`}>
                    <div className=" relative z-10">

                        {/* Carrusel principal mejorado */}
                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10">
                                
                                <div 
                                    className="flex transition-transform duration-700  ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {carruselData.map((slide) => (
                                        <div key={slide.id} className="w-full flex-shrink-0">
                                            <div className={`relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gradient-to-br ${slide.gradiente} overflow-hidden`}>
                                                {/* Imagen de fondo con efectos */}
                                                <div className="absolute inset-0">
                                                    <img
                                                        src={slide.imagen}
                                                        alt={`Imagen ilustrativa de ${slide.titulo} - ${slide.descripcion.substring(0, 100)}${slide.descripcion.length > 100 ? '...' : ''}`}
                                                        className="w-full h-full object-cover opacity-60 scale-110 hover:scale-105 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/5 to-transparent"></div>
                                                </div>

                                                {/* Elementos decorativos animados - RESPONSIVOS */}
                                                <div className="hidden sm:block absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse-soft"></div>
                                                <div className="hidden sm:block absolute -bottom-16 -left-16 w-32 h-32 bg-medical-400/20 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
                                                <div className="relative z-10 h-full flex items-center">
                                                    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
                                                        {/* Contenido principal - RESPONSIVO */}
                                                        <div className="text-white space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-0">
                                                            {/* Título con efectos de texto - RESPONSIVO */}
                                                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 sm:mb-3 md:mb-4 leading-tight pr-2 sm:pr-4">
                                                                <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-2xl">
                                                                    {slide.titulo}
                                                                </span>
                                                            </h3>
                                                            {/* Descripción mejorada - RESPONSIVO */}
                                                            <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-lg pr-2 sm:pr-4">
                                                                {slide.descripcion}
                                                            </p>
                                                            
                                                            {/* Botones de acción mejorados - RESPONSIVOS */}
                                                            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 md:gap-4 pr-2 sm:pr-4">
                                                                {slide.acciones?.map((btn, idx) => (
                                                                    <button
                                                                        key={idx}
                                                                        onClick={btn.onclick}
                                                                        className={`group inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 border backdrop-blur-sm font-bold text-xs sm:text-sm md:text-base w-full sm:w-auto ${
                                                                            btn.type === "primary"
                                                                                ? "bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl"
                                                                                : "bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white/70"
                                                                        }`}
                                                                    >
                                                                        <span className="mr-2 sm:mr-2.5 md:mr-3">{btn.label}</span>
                                                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={12} />
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Controles del carrusel mejorados - RESPONSIVOS OPTIMIZADOS */}
                            <button 
                                onClick={prevSlide}
                                className="absolute left-1 sm:left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-9 sm:w-10 md:w-12 lg:w-14 h-9 sm:h-10 md:h-12 lg:h-14 bg-white/15 backdrop-blur-lg border border-white/30 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl z-20 group"
                            >
                                <FaChevronLeft size={12} className="sm:text-sm md:text-base lg:text-lg group-hover:-translate-x-0.5 transition-transform duration-300" />
                            </button>
                            
                            <button 
                                onClick={nextSlide}
                                className="absolute right-1 sm:right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-9 sm:w-10 md:w-12 lg:w-14 h-9 sm:h-10 md:h-12 lg:h-14 bg-white/15 backdrop-blur-lg border border-white/30 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl z-20 group"
                            >
                                <FaChevronRight size={12} className="sm:text-sm md:text-base lg:text-lg group-hover:translate-x-0.5 transition-transform duration-300" />
                            </button>
                        </div>
                        {/* Indicadores mejorados - RESPONSIVOS OPTIMIZADOS */}
                        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1.5 sm:space-x-2 md:space-x-3 px-4">
                            {carruselData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentSlide 
                                            ? 'w-6 sm:w-8 md:w-10 h-2 sm:h-2.5 md:h-3 bg-white shadow-lg' 
                                            : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/40 hover:bg-white/70 hover:scale-125'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

            {/* SECCIÓN PORTAFOLIO PROMINENTE - PRIMERA PRIORIDAD */}
            <section className="relative py-24 px-4 bg-gradient-to-br from-primary-800 via-primary-900 to-medical-900 overflow-hidden">
                {/* Efectos de fondo modernos */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-medical-500/10 to-accent-500/10"></div>
                <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-accent-500/15 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-medical-500/15 rounded-full blur-2xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Encabezado llamativo moderno */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-accent-500/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-accent-500/30">
                            <MdHealthAndSafety className="text-accent-400 mr-3" size={24} />
                            <span className="text-accent-400 font-bold text-lg">PORTAFOLIO DE SERVICIOS</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight font-display">
                            Descubre Todo lo que <br />
                            <span className="bg-gradient-to-r from-accent-400 to-medical-400 bg-clip-text text-transparent">Tenemos para Ti</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 font-sans">
                            Servicios médicos especializados, tecnología de vanguardia y atención integral.
                            <span className="block mt-2 text-accent-400 font-semibold">Todo en un solo lugar, diseñado para tu bienestar.</span>
                        </p>
                    </div>

                    {/* Grid de servicios destacados moderno */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-[1.02] shadow-soft hover:shadow-medium">
                            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow">
                                <FaUserMd className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-display">Hospital Tuquerres</h3>
                            <p className="text-white/80 mb-4 leading-relaxed">Urgencias 24/7, UCI, Cirugía, Servicios de primer nivel y hospitalización con tecnología avanzada.</p>
                            <div className="flex items-center text-accent-400 font-semibold">
                                <span>Ver detalles</span>
                                <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-[1.02] shadow-soft hover:shadow-medium">
                            <div className="w-16 h-16 bg-gradient-to-br from-medical-500 to-medical-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow-green">
                                <MdHealthAndSafety className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-display">7 Sedes Especializadas</h3>
                            <p className="text-white/80 mb-4 leading-relaxed">Consulta externa, nefroprotección, promoción y prevención en toda la región.</p>
                            <div className="flex items-center text-medical-400 font-semibold">
                                <span>Ubicaciones</span>
                                <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-[1.02] md:col-span-2 lg:col-span-1 shadow-soft hover:shadow-medium">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow">
                                <RiShieldCheckFill className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-display">Programas Especiales</h3>
                            <p className="text-white/80 mb-4 leading-relaxed">Telemedicina, nefroprotección, rehabilitación y programas de medicina preventiva.</p>
                            <div className="flex items-center text-primary-400 font-semibold">
                                <span>Conoce más</span>
                                <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Botones de acción centrales modernos */}
                    <div className="text-center">
                        <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
                            <button
                                onClick={() => setShowPortafolioModal(true)}
                                className="group relative bg-gradient-to-r from-accent-500 to-accent-600 text-white font-black px-12 py-6 rounded-2xl shadow-large transition-all duration-300 text-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-400/50 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10 flex items-center">
                                    <FaDownload className="mr-4 group-hover:animate-bounce-subtle" size={24} />
                                    <span>DESCARGAR PORTAFOLIO COMPLETO</span>
                                </div>
                                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-soft"></div>
                            </button>

                            <Link
                                to="/servicios"
                                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-6 rounded-2xl shadow-medium transition-all duration-300 text-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 border border-white/20"
                            >
                                <div className="flex items-center">
                                    <FaPlay className="mr-3 group-hover:translate-x-1 transition-transform" size={20} />
                                    Ver Servicios Online
                                </div>
                            </Link>
                        </div>

                        <p className="text-white/70 mt-6 text-lg font-medium">
                            💼 Portafolio completo en PDF • 🏥 Información detallada de servicios • 📍 Ubicaciones y contactos
                        </p>
                    </div>

                    {/* Estadísticas de confianza modernizadas */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/20">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-accent-400 mb-2 font-display">30+</div>
                            <div className="text-white/80 font-semibold">Servicios Médicos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-medical-400 mb-2 font-display">20+</div>
                            <div className="text-white/80 font-semibold">Años de Experiencia</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">100K+</div>
                            <div className="text-white/80 font-semibold">Pacientes Atendidos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-accent-400 mb-2 font-display">98%</div>
                            <div className="text-white/80 font-semibold">Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Innovación y Confianza modernizada */}
            <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-primary-800 mb-6 font-display">
                            ¿Por qué somos tu <span className="bg-gradient-to-r from-medical-600 to-medical-500 bg-clip-text text-transparent">IPS de Confianza?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Innovación tecnológica, atención humanizada y excelencia médica nos posicionan como líderes en salud en el sur de Colombia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10 shadow-glow">
                                <FaUserMd className="text-white text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-4 font-display">Profesionales de Elite</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Equipo médico altamente especializado con formación continua en las mejores instituciones del país y el exterior.
                            </p>
                            <div className="flex items-center text-primary-600 font-semibold">
                                <span>Conoce nuestro equipo</span>
                                <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>

                        <div className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-medical-100/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="w-20 h-20 bg-gradient-to-br from-medical-500 to-medical-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10 shadow-glow-green">
                                <RiHeart3Fill className="text-white text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-medical-700 mb-4 font-display">Atención Humanizada</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Tratamiento integral centrado en la persona, con calidez humana y respeto por la dignidad de cada paciente.
                            </p>
                            <div className="flex items-center text-medical-600 font-semibold">
                                <span>Ver testimonios</span>
                                <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>

                        <div className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-100/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10 shadow-glow">
                                <MdTrendingUp className="text-white text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-accent-700 mb-4 font-display">Innovación Constante</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Tecnología de vanguardia, procesos optimizados y mejora continua en todos nuestros servicios médicos.
                            </p>
                            <div className="flex items-center text-accent-600 font-semibold">
                                <span>Ver innovaciones</span>
                                <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*}
            {/* Sección de Noticias 
            <section className="py-20 px-4 bg-gradient-to-r from-azul-light/10 to-verdeLima/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-acento/10 rounded-full px-6 py-2 mb-4">
                            <BiNews className="text-acento mr-2" size={20} />
                            <span className="text-acento font-semibold">Últimas Noticias</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-azul mb-6">
                            Mantente <span className="text-verdeOscuro">Informado</span>
                        </h2>
                        <p className="text-xl text-grisOscuro max-w-2xl mx-auto">
                            Conoce las últimas novedades, avances y logros de Red Medicron IPS
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {noticias.map((noticia, index) => (
                            <article key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="relative overflow-hidden">
                                    <div className="w-full h-48 bg-gradient-to-br from-azul-light to-verdeLima/30 flex items-center justify-center">
                                        <MdNotifications className="text-azul text-4xl" />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-acento text-negro text-xs font-bold px-3 py-1 rounded-full">
                                        {noticia.categoria}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-grisOscuro text-sm mb-3">
                                        <FaCalendarAlt className="mr-2" />
                                        {noticia.fecha}
                                    </div>
                                    <h3 className="text-xl font-bold text-azul mb-3 group-hover:text-verdeOscuro transition-colors">
                                        {noticia.titulo}
                                    </h3>
                                    <p className="text-grisOscuro leading-relaxed mb-4">
                                        {noticia.descripcion}
                                    </p>
                                    <Link
                                        to="/noticias"
                                        className="inline-flex items-center text-azul font-semibold hover:text-verdeOscuro transition-colors group"
                                    >
                                        <span>Leer más</span>
                                        <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/noticias"
                            className="inline-flex items-center bg-azul hover:bg-azul-dark text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <BiNews className="mr-2" />
                            Ver Todas las Noticias
                        </Link>
                    </div>
                </div>
            </section>*/}

            {/* Testimonios de Pacientes */}
            <section className="py-20 px-4 bg-gradient-to-br from-verdeOscuro to-azul">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Lo que dicen nuestros <span className="text-acento">Pacientes</span>
                    </h2>
                    <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
                        La confianza de nuestros usuarios es nuestro mayor logro
                    </p>

                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
                        <div className="mb-6">
                            <div className="flex justify-center mb-4">
                                {[...Array(testimonios[currentTestimonial].calificacion)].map((_, i) => (
                                    <MdStars key={i} className="text-acento text-2xl" />
                                ))}
                            </div>
                            <blockquote className="text-white text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                                "{testimonios[currentTestimonial].texto}"
                            </blockquote>
                            <div className="text-acento font-bold text-lg">
                                {testimonios[currentTestimonial].nombre}
                            </div>
                            <div className="text-white/80">
                                {testimonios[currentTestimonial].ubicacion}
                            </div>
                        </div>

                        <div className="flex justify-center space-x-2">
                            {testimonios.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? 'bg-acento' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Noticias Destacadas */}
            <NoticiasDestacadas />

            {/* Componente de Redes Sociales Separado */}
            <RedesSocialesSection videos={youtubeVideos} />

            {/* Call to Action Final Ultra Mejorado */}
            <section className="py-20 px-4 bg-gradient-to-r from-verdeOscuro via-azul to-verdeOscuro relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-acento/10 to-transparent"></div>
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        ¿Listo para cuidar tu <span className="text-acento">Salud?</span>
                    </h2>
                    <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                        Únete a miles de pacientes que confían en Red Medicron IPS. Tu bienestar es nuestra prioridad.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <FaPhone className="text-acento text-3xl mx-auto mb-4" />
                            <h3 className="text-white font-bold text-lg mb-2">Llámanos</h3>
                            <p className="text-white/80 mb-4">Atención telefónica.</p>
                            <a href="tel:+573183380107" className="text-acento font-semibold hover:text-warning transition-colors">
                                +57 318 338 0107
                            </a>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <FaWhatsapp className="text-green-400 text-3xl mx-auto mb-4" />
                            <h3 className="text-white font-bold text-lg mb-2">WhatsApp</h3>
                            <p className="text-white/80 mb-4">Respuesta inmediata</p>
                            <a href="https://wa.me/573183380107" className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                                Enviar mensaje
                            </a>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <FaMapMarkerAlt className="text-verdeLima text-3xl mx-auto mb-4" />
                            <h3 className="text-white font-bold text-lg mb-2">Visítanos</h3>
                            <p className="text-white/80 mb-4">7 sedes disponibles</p>
                            <Link to="/sedes" className="text-verdeLima font-semibold hover:text-verde-light transition-colors">
                                Ver ubicaciones
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/contacto"
                            className="inline-flex items-center justify-center bg-acento hover:bg-warning text-negro font-bold px-10 py-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                        >
                            <MdHealthAndSafety className="mr-3" size={24} />
                            Agendar Cita
                        </Link>
                        <button
                            onClick={() => setShowPortafolioModal(true)}
                            className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold px-10 py-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 text-lg border border-white/30"
                        >
                            <FaDownload className="mr-3" size={20} />
                            Descargar Portafolio
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Inicio;
