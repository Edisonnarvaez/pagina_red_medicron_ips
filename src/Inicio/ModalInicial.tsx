import { useState, useEffect } from "react";
import { FaTimes, FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";

interface ModalPortafolioProps {
    showPortafolioModal: boolean;
    setShowPortafolioModal: (show: boolean) => void;
}

export default function ModalPortafolio({ showPortafolioModal, setShowPortafolioModal }: ModalPortafolioProps) {
    const [step, setStep] = useState<1 | 2>(2); // Comenzar en pantalla 2 (información FOMAG)

    // Manejo de teclas para navegación
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!showPortafolioModal) return;

            switch (e.key) {
                case 'Escape':
                    setShowPortafolioModal(false);
                    break;
                case 'ArrowLeft':
                    setStep(step === 1 ? 2 : 1);
                    break;
                case 'ArrowRight':
                    setStep(step === 1 ? 2 : 1);
                    break;
                case '1':
                    setStep(1);
                    break;
                case '2':
                    setStep(2);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [showPortafolioModal, step, setShowPortafolioModal]);

    return (
        <>
            {showPortafolioModal && (
                <div
                    className="modal-backdrop fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-2 sm:p-4 z-[90]"
                    onClick={() => setShowPortafolioModal(false)}
                >
                    <div
                        className={`modal-container relative rounded-2xl sm:rounded-3xl lg:rounded-3xl shadow-2xl animate-scale-in border ${step === 1
                            ? 'max-w-6xl lg:max-w-7xl xl:max-w-none w-full max-h-[95vh] lg:max-h-[90vh] bg-transparent border-transparent'
                            : 'max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full h-auto max-h-[90vh] bg-transparent border-transparent'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Botón cerrar */}
                        <button
                            onClick={() => setShowPortafolioModal(false)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 transition z-30"
                        >
                            <FaTimes size={16} className="sm:text-lg" />
                        </button>

                        {/* Controladores de navegación */}
                        <div className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-30">
                            <button
                                onClick={() => setStep(step === 1 ? 2 : 1)}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
                            >
                                <FaChevronLeft size={16} className="sm:text-lg" />
                            </button>
                        </div>

                        <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-30">
                            <button
                                onClick={() => setStep(step === 1 ? 2 : 1)}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
                            >
                                <FaChevronRight size={16} className="sm:text-lg" />
                            </button>
                        </div>

                        {/* Indicadores de pantalla y ayuda de teclado */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-30">
                            <div className="flex space-x-2">
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${step === 1 ? 'bg-white/40' : 'bg-white'}`} />
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${step === 2 ? 'bg-white' : 'bg-white/40'}`} />
                            </div>
                            <div className="hidden sm:flex items-center space-x-2 text-white/60 text-xs">
                                <span>↔ Flechas</span>
                                <span>•</span>
                                <span>ESC Cerrar</span>
                                <span>•</span>
                                <span>1/2 Directo</span>
                            </div>
                        </div>

                        {/* PANTALLA 1 - Portafolio Mejorado */}
                        {step === 1 && (
                            <div className="modal-section relative w-full rounded-2xl sm:rounded-3xl overflow-hidden h-[90vh] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/images/portafolio.jpg')" }}
                            >
                                {/* Overlay que cubre toda el área uniformemente */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/80 via-black/70 to-black/85 rounded-2xl sm:rounded-3xl" />

                                {/* Contenedor de scroll */}
                                <div className="relative w-full h-full overflow-y-auto modal-scrollbar rounded-2xl sm:rounded-3xl">
                                    {/* Contenedor interno con bordes redondeados */}
                                    <div className="relative min-h-full rounded-2xl sm:rounded-3xl overflow-hidden">

                                        {/* Contenido principal */}
                                        <div className="relative z-10 p-4 sm:p-6 lg:p-8 pb-8 sm:pb-12 min-h-full">
                                            {/* Encabezado */}
                                            <div className="text-center mb-6 sm:mb-8">
                                                <div className="flex justify-center mb-4">
                                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-medical-500 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
                                                        <MdHealthAndSafety className="text-3xl text-white" />
                                                    </div>
                                                </div>
                                                
                                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                                                    PORTAFOLIO DE <span className="text-medical-400">SERVICIOS</span>
                                                </h2>
                                                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-300 mb-4">
                                                    RED MEDICRON IPS
                                                </p>
                                                <div className="text-center mb-4">
                                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-500 via-medical-400 to-medical-500 bg-clip-text text-transparent drop-shadow-xl">
                                                        SERVICIOS MÉDICOS ESPECIALIZADOS
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Descripción introductoria */}
                                            <p className="text-center text-gray-200 max-w-4xl mx-auto mb-8 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-4">
                                                Con <span className="text-medical-400 font-semibold">8 sedes</span> estratégicamente ubicadas en Nariño, ofrecemos servicios desde 
                                                <span className="text-primary-400 font-semibold"> primer nivel hasta alta complejidad</span>. Nuestro Hospital en Tuquerres cuenta con 
                                                <span className="text-accent-400 font-semibold"> UCI, quirófanos y atención 24/7</span>, complementado por nuestras sedes especializadas 
                                                en <span className="text-medical-400 font-semibold">nefroprotección, odontología y terapias integrales</span>.
                                            </p>

                                            {/* Grid de opciones de portafolio */}
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 max-w-5xl mx-auto">
                                                {/* Descarga PDF */}
                                                <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105">
                                                    <div className="relative p-6 sm:p-8 border-2 border-white/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 hover:border-primary-400 transition-all duration-500 h-[520px] sm:h-[550px] lg:h-[580px]">
                                                        {/* Fondo decorativo */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-medical-500/20" />
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                        {/* Contenido */}
                                                        <div className="relative z-10 h-full flex flex-col text-center">
                                                            <div className="mb-6">
                                                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/80 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                                                    <FaDownload className="text-2xl text-white" />
                                                                </div>
                                                                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary-200 transition-colors duration-300">
                                                                    Portafolio PDF
                                                                </h4>
                                                                <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-medical-400 mx-auto rounded-full group-hover:w-16 transition-all duration-300 mb-4" />
                                                            </div>
                                                            
                                                            <div className="flex-1 flex flex-col justify-between">
                                                                <div className="space-y-3 mb-6">
                                                                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-primary-300/50 transition-colors duration-300">
                                                                        <p className="font-semibold text-primary-200 mb-1">🏥 8 Sedes en Nariño</p>
                                                                        <p className="text-xs sm:text-sm text-gray-200">Hospital + 7 centros de atención</p>
                                                                    </div>
                                                                    
                                                                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-primary-300/50 transition-colors duration-300">
                                                                        <p className="font-semibold text-primary-200 mb-1">📋 Servicios Completos</p>
                                                                        <p className="text-xs sm:text-sm text-gray-200">Desde primer nivel hasta alta complejidad</p>
                                                                    </div>
                                                                    
                                                                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-primary-300/50 transition-colors duration-300">
                                                                        <p className="font-semibold text-primary-200 mb-1">💾 Descarga Instantánea</p>
                                                                        <p className="text-xs sm:text-sm text-gray-200">Formato PDF optimizado</p>
                                                                    </div>
                                                                </div>

                                                                <a
                                                                    href="/portafolio-servicios.pdf"
                                                                    download
                                                                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-sm sm:text-base shadow-xl transform hover:scale-105"
                                                                >
                                                                    Descargar PDF
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Ver Servicios Online */}
                                                <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105">
                                                    <div className="relative p-6 sm:p-8 border-2 border-white/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 hover:border-medical-400 transition-all duration-500 h-[520px] sm:h-[550px] lg:h-[580px]">
                                                        {/* Fondo decorativo */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-medical-500/20 to-accent-500/20" />
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                        {/* Contenido */}
                                                        <div className="relative z-10 h-full flex flex-col text-center">
                                                            <div className="mb-6">
                                                                <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-500/80 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                                                    <MdHealthAndSafety className="text-2xl text-white" />
                                                                </div>
                                                                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-medical-200 transition-colors duration-300">
                                                                    Servicios Online
                                                                </h4>
                                                                <div className="w-12 h-1 bg-gradient-to-r from-medical-400 to-accent-400 mx-auto rounded-full group-hover:w-16 transition-all duration-300 mb-4" />
                                                            </div>
                                                            
                                                            <div className="flex-1 flex flex-col justify-between">
                                                                <div className="space-y-3 mb-6">
                                                                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-medical-300/50 transition-colors duration-300">
                                                                        <p className="font-semibold text-medical-200 mb-1">🌐 Navegación Interactiva</p>
                                                                        <p className="text-xs sm:text-sm text-gray-200">Explora servicios por sede</p>
                                                                    </div>
                                                                    
                                                                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-medical-300/50 transition-colors duration-300">
                                                                        <p className="font-semibold text-medical-200 mb-1">🏨 Hospital Tuquerres</p>
                                                                        <p className="text-xs sm:text-sm text-gray-200">UCI, quirófanos, urgencias 24/7</p>
                                                                    </div>
                                                                    
                                                                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-medical-300/50 transition-colors duration-300">
                                                                        <p className="font-semibold text-medical-200 mb-1">📱 Info Actualizada</p>
                                                                        <p className="text-xs sm:text-sm text-gray-200">Horarios, contactos y especialidades</p>
                                                                    </div>
                                                                </div>

                                                                <Link
                                                                    to="/servicios"
                                                                    className="w-full bg-gradient-to-r from-medical-600 to-medical-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-medical-700 hover:to-medical-800 transition-all duration-300 text-sm sm:text-base shadow-xl transform hover:scale-105"
                                                                    onClick={() => setShowPortafolioModal(false)}
                                                                >
                                                                    Ver Servicios
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Información de servicios destacados */}
                                            <div className="max-w-5xl mx-auto mb-6">
                                                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                                                    <div className="text-center mb-6">
                                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full mb-4 shadow-lg">
                                                            <span className="text-2xl">🏥</span>
                                                        </div>
                                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                                            Nuestros Servicios Destacados
                                                        </h3>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base text-gray-200">
                                                        <div className="bg-black/20 rounded-lg p-4 border border-white/10 hover:border-primary-300/50 transition-colors duration-300">
                                                            <p className="font-semibold text-primary-300 mb-2">🫀 Programa Nefroprotección</p>
                                                            <p>Cuidado integral de salud renal en todas nuestras sedes</p>
                                                        </div>
                                                        <div className="bg-black/20 rounded-lg p-4 border border-white/10 hover:border-medical-300/50 transition-colors duration-300">
                                                            <p className="font-semibold text-medical-300 mb-2">🏥 Hospital Tuquerres</p>
                                                            <p>UCI, quirófanos, urgencias 24/7, hospitalización</p>
                                                        </div>
                                                        <div className="bg-black/20 rounded-lg p-4 border border-white/10 hover:border-accent-300/50 transition-colors duration-300">
                                                            <p className="font-semibold text-accent-300 mb-2">🦷 Odontología Especializada</p>
                                                            <p>Servicios dentales integrales en Sede Aurora</p>
                                                        </div>
                                                        <div className="bg-black/20 rounded-lg p-4 border border-white/10 hover:border-primary-300/50 transition-colors duration-300">
                                                            <p className="font-semibold text-primary-300 mb-2">🏃‍♀️ Terapias Integrales</p>
                                                            <p>Fisioterapia, ocupacional, respiratoria en Sede Fátima</p>
                                                        </div>
                                                        <div className="bg-black/20 rounded-lg p-4 border border-white/10 hover:border-medical-300/50 transition-colors duration-300">
                                                            <p className="font-semibold text-medical-300 mb-2">🔬 Laboratorio Clínico</p>
                                                            <p>Procesamiento de muestras con tecnología avanzada</p>
                                                        </div>
                                                        <div className="bg-black/20 rounded-lg p-4 border border-white/10 hover:border-accent-300/50 transition-colors duration-300">
                                                            <p className="font-semibold text-accent-300 mb-2">📍 8 Sedes Estratégicas</p>
                                                            <p>Pasto, Tuquerres, Ipiales, Tumaco, Buesaco, La Cruz</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Logo */}
                                            <div className="flex justify-center">
                                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-300">
                                                    <img
                                                        src="/logoRMIPS.png"
                                                        alt="Red Medicron IPS"
                                                        className="h-12 sm:h-16 lg:h-20 object-contain filter drop-shadow-lg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PANTALLA 2 - Información FOMAG - CAPAS COMPLETAMENTE CORREGIDAS */}
                        {step === 2 && (
                            <div className="modal-section relative w-full rounded-2xl sm:rounded-3xl overflow-hidden h-[90vh]">
                                {/* Contenedor de scroll - ASEGURA SCROLL COMPLETO CON BORDES REDONDEADOS */}
                                <div className="relative w-full h-full overflow-y-auto modal-scrollbar rounded-2xl sm:rounded-3xl">
                                    {/* Background con múltiples capas - ESTAS CAPAS AHORA CUBREN TODO */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-650 via-primary-600 to-medical-650" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-medical-600 via-transparent to-accent-600" />
                                    <div className="absolute inset-0 bg-medical-pattern opacity-10" />

                                    

                                    {/* Contenedor interno que permite scroll completo con bordes redondeados */}
                                    <div className="relative min-h-full rounded-2xl sm:rounded-3xl overflow-hidden">
                                        {/* Background adicional para asegurar cobertura completa */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-650 via-primary-600 to-medical-500 rounded-2xl sm:rounded-3xl" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-medical-600 via-primary-600 to-primary-400 rounded-2xl sm:rounded-3xl" />
                                        <div className="absolute inset-0 bg-medical-pattern opacity-10 rounded-2xl sm:rounded-3xl" />

                                        {/* Contenido con z-index elevado y padding adecuado para scroll */}
                                        <div className="relative z-10 p-4 sm:p-6 lg:p-8 pb-8 sm:pb-12 min-h-full">
                                        {/* Encabezado */}
                                        <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                                            USUARIOS <span className="text-medical-400">FOMAG</span>
                                        </h2>
                                        <p className="text-center text-base sm:text-lg lg:text-xl font-semibold text-gray-300 mb-4 sm:mb-6">
                                            PASTO • IPIALES • TUMACO
                                        </p>
                                        <div className="text-center mb-4 sm:mb-6">
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-500 via-medical-400 to-medical-500 bg-clip-text text-transparent drop-shadow-xl">
                                                BIENVENIDOS A RED MEDICRON IPS
                                            </h3>
                                        </div>

                                        {/* Texto introductorio */}
                                        <p className="text-center text-gray-200 max-w-4xl mx-auto mb-6 sm:mb-8 text-xs sm:text-sm lg:text-base leading-relaxed px-2 sm:px-4">
                                            Es un honor para nosotros recibirlos en nuestra institución, trabajamos con un
                                            compromiso firme por su bienestar, brindándoles atención preferencial y de alta calidad
                                            en los servicios de primer nivel de atención; nuestro equipo humano y profesional está
                                            preparado para acompañarlos con calidez, seguridad y excelencia en cada consulta.
                                        </p>

                                        {/* Grid mejorado de sedes con efectos modernos */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
                                            {/* Pasto - Sede Principal */}
                                            <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105">
                                                <div className="relative p-6 sm:p-7 lg:p-8 border-2 border-white/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 hover:border-medical-400 transition-all duration-500 h-[420px] sm:h-[450px]">
                                                    {/* Imagen de fondo con efectos */}
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                                        style={{ backgroundImage: 'url(/sedes/Obrero.jpeg)' }}
                                                    />
                                                    {/* Overlay con gradiente dinámico */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-medical-600/40 transition-all duration-500" />
                                                    {/* Efecto de brillo en hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                    {/* Contenido mejorado */}
                                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                                        <div className="text-center mb-4">
                                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-500/80 backdrop-blur-sm rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                                                                <MdHealthAndSafety className="text-2xl text-white" />
                                                            </div>
                                                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-2xl group-hover:text-medical-200 transition-colors duration-300">
                                                                PASTO
                                                            </h4>
                                                            <div className="w-12 h-1 bg-gradient-to-r from-medical-400 to-primary-400 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
                                                        </div>
                                                        
                                                        <div className="space-y-2 text-gray-100 text-sm sm:text-base leading-relaxed">
                                                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-medical-300/50 transition-colors duration-300">
                                                                <p className="font-semibold text-medical-200 mb-1">🏥 Sede Obrero</p>
                                                                <p className="text-xs sm:text-sm">Carrera 26 #9-22 Barrio Obrero</p>
                                                            </div>
                                                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-medical-300/50 transition-colors duration-300">
                                                                <p className="font-semibold text-medical-200 mb-1">🌟 Sede Aurora</p>
                                                                <p className="text-xs sm:text-sm">Carrera 29 #10-29 Barrio Aurora</p>
                                                            </div>
                                                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-medical-300/50 transition-colors duration-300">
                                                                <p className="font-semibold text-medical-200 mb-1">🏃‍♀️ Sede Integral de Terapias</p>
                                                                <p className="text-xs sm:text-sm">Calle 20 #11-40 Barrio Fátima</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Ipiales */}
                                            <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105">
                                                <div className="relative p-6 sm:p-7 lg:p-8 border-2 border-white/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 hover:border-primary-400 transition-all duration-500 h-[420px] sm:h-[450px]">
                                                    {/* Imagen de fondo con efectos */}
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                                        style={{ backgroundImage: 'url(/sedes/ipiales.jpg)' }}
                                                    />
                                                    {/* Overlay con gradiente dinámico */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-primary-600/40 transition-all duration-500" />
                                                    {/* Efecto de brillo en hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                    {/* Contenido mejorado */}
                                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                                        <div className="text-center mb-4">
                                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/80 backdrop-blur-sm rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                                                                <MdHealthAndSafety className="text-2xl text-white" />
                                                            </div>
                                                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-2xl group-hover:text-primary-200 transition-colors duration-300">
                                                                IPIALES
                                                            </h4>
                                                            <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-medical-400 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
                                                        </div>
                                                        
                                                        <div className="space-y-3">
                                                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-primary-300/50 transition-colors duration-300">
                                                                <p className="font-semibold text-primary-200 mb-1">🏢 Sede Principal</p>
                                                                <p className="text-xs sm:text-sm text-gray-200">Carrera 4A #11-52</p>
                                                                <p className="text-xs sm:text-sm text-primary-200">Barrio San Felipe</p>
                                                            </div>
                                                            
                                                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-primary-300/50 transition-colors duration-300">
                                                                <p className="font-semibold text-primary-200 mb-1">🕒 Horarios</p>
                                                                <p className="text-xs sm:text-sm text-gray-200">Lunes a Viernes</p>
                                                                <p className="text-xs sm:text-sm text-primary-200">Atención personalizada</p>
                                                            </div>
                                                            
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tumaco */}
                                            <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 md:col-span-2 xl:col-span-1">
                                                <div className="relative p-6 sm:p-7 lg:p-8 border-2 border-white/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 hover:border-accent-400 transition-all duration-500 h-[420px] sm:h-[450px]">
                                                    {/* Imagen de fondo con efectos */}
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                                        style={{ backgroundImage: 'url(/sedes/Tumaco.jpg)' }}
                                                    />
                                                    {/* Overlay con gradiente dinámico */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-accent-600/40 transition-all duration-500" />
                                                    {/* Efecto de brillo en hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                    {/* Contenido mejorado */}
                                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                                        <div className="text-center mb-4">
                                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/80 backdrop-blur-sm rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                                                                <MdHealthAndSafety className="text-2xl text-white" />
                                                            </div>
                                                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-2xl group-hover:text-accent-200 transition-colors duration-300">
                                                                TUMACO
                                                            </h4>
                                                            <div className="w-12 h-1 bg-gradient-to-r from-accent-400 to-primary-400 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
                                                        </div>
                                                        
                                                        <div className="space-y-3">
                                                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-accent-300/50 transition-colors duration-300">
                                                                <p className="font-semibold text-accent-200 mb-1">🌊 Sede Costera</p>
                                                                <p className="text-xs sm:text-sm text-gray-200">Carrera 7 #15A-14</p>
                                                                <p className="text-xs sm:text-sm text-accent-200">Calle Rafael Nuñez y Córdoba</p>
                                                            </div>
                                                            
                                                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:border-accent-300/50 transition-colors duration-300">
                                                                <p className="font-semibold text-accent-200 mb-1">🏖️ Región Pacífica</p>
                                                                <p className="text-xs sm:text-sm text-gray-200">Atención especializada</p>
                                                                <p className="text-xs sm:text-sm text-accent-200">Costa Nariñense</p>
                                                            </div>
                                                            

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Información de contacto mejorada */}
                                        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
                                            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                                                <div className="text-center space-y-4">
                                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-medical-500 to-primary-500 rounded-full mb-4 shadow-lg">
                                                        <span className="text-3xl">📞</span>
                                                    </div>
                                                    
                                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                                        Información y Citas
                                                    </h3>
                                                    
                                                    <div className="bg-black/30 rounded-xl p-4 border border-medical-300/30">
                                                        <p className="text-2xl sm:text-3xl font-bold text-medical-300 mb-2">
                                                            (602) 738 2377
                                                        </p>
                                                        <p className="text-sm sm:text-base text-gray-200">
                                                            Horario de atención telefónica Lunes a Viernes de 8:00 AM a 5:00 PM
                                                        </p>
                                                    </div>
                                                    
                                                    <div className="bg-gradient-to-r from-medical-500/20 to-primary-500/20 rounded-xl p-4 border border-white/20">
                                                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                                                            En <span className="font-bold text-medical-300 bg-gradient-to-r from-medical-300 to-primary-300 bg-clip-text text-transparent">RED MEDICRON IPS</span>, 
                                                            su salud y la de su familia son nuestra prioridad.
                                                        </p>
                                                        <p className="text-xs sm:text-sm text-gray-300 mt-2">
                                                            ✨ Atención de calidad • 🤝 Compromiso humano • 💙 Excelencia médica
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Logo mejorado */}
                                        <div className="flex justify-center">
                                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-300">
                                                <img
                                                    src="/logoRMIPS.png"
                                                    alt="Red Medicron IPS"
                                                    className="h-12 sm:h-16 lg:h-20 object-contain filter drop-shadow-lg"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Logo FOMAG superpuesto */}
                                    <div className="absolute inset-0 fomag-logo-responsive bg-contain bg-center bg-no-repeat mix-blend-multiply rounded-2xl sm:rounded-3xl"
                                        style={{
                                            backgroundImage: `url('https://www.fomag.gov.co/wp-content/uploads/2025/04/Logo-color.png')`,
                                            backgroundPosition: 'center'
                                        }} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}