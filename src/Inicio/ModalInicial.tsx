import { useState, useEffect } from "react";
import { FaTimes, FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";

interface ModalPortafolioProps {
    showPortafolioModal: boolean;
    setShowPortafolioModal: (show: boolean) => void;
}

export default function ModalPortafolio({ showPortafolioModal, setShowPortafolioModal }: ModalPortafolioProps) {
    const [step, setStep] = useState<1 | 2>(2); // Comenzar en pantalla 2 (docentes)
    const [timeLeft, setTimeLeft] = useState<string>("");

    // Fecha límite en zona horaria de Colombia (Bogotá, UTC-5)
    const targetDate = new Date("2025-08-28T23:59:59-05:00");

    useEffect(() => {
        const interval = setInterval(() => {
            // Obtener fecha actual en zona horaria de Colombia
            const now = new Date();
            const colombiaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Bogota"}));
            const difference = targetDate.getTime() - colombiaTime.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft("¡El plazo ha finalizado!");
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

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
                    className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-2 sm:p-4 z-50 overflow-hidden"
                    onClick={() => setShowPortafolioModal(false)}
                >
                    <div 
                        className={`relative rounded-2xl sm:rounded-3xl max-w-6xl w-full h-[95vh] max-h-[95vh] overflow-y-auto shadow-2xl animate-scale-in border modal-scrollbar ${
                            step === 1 ? 'bg-transparent border-transparent' : 'bg-white border-gray-200'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Botón cerrar */}
                        <button
                            onClick={() => setShowPortafolioModal(false)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 transition z-20"
                        >
                            <FaTimes size={16} className="sm:text-lg" />
                        </button>

                        {/* Controladores de navegación */}
                        <div className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-20">
                            <button
                                onClick={() => setStep(step === 1 ? 2 : 1)}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
                            >
                                <FaChevronLeft size={16} className="sm:text-lg" />
                            </button>
                        </div>
                        
                        <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-20">
                            <button
                                onClick={() => setStep(step === 1 ? 2 : 1)}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
                            >
                                <FaChevronRight size={16} className="sm:text-lg" />
                            </button>
                        </div>

                        {/* Indicadores de pantalla y ayuda de teclado */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-20">
                            <div className="flex space-x-2">
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${step === 1 ? 'bg-white' : 'bg-white/40'}`} />
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

                        {/* PANTALLA 1 - Portafolio (SECUNDARIA) */}
                        {step === 1 && (
                            <div className="relative h-full min-h-[80vh] rounded-2xl sm:rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/images/portafolio.jpg')" }}
                            >
                                {/* Overlay mejorado que cubre toda el área */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85" />
                                
                                <div className="relative z-10 h-full flex flex-col justify-center text-center p-4 sm:p-6 md:p-8 lg:p-12">
                                    <div className="flex justify-center mb-4 sm:mb-6">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-500 to-medical-500 rounded-2xl flex items-center justify-center shadow-glow">
                                            <MdHealthAndSafety className="text-white text-2xl sm:text-3xl md:text-4xl" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                                        Portafolio de Servicios
                                    </h3>
                                    
                                    <p className="text-gray-200 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                                        Descarga nuestro portafolio completo de servicios médicos y conoce todo lo que tenemos para ofrecerte.
                                    </p>

                                    <div className="space-y-4 max-w-lg mx-auto">
                                        <a
                                            href="/portafolio-servicios.pdf"
                                            download
                                            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 rounded-xl font-semibold flex items-center justify-center hover:scale-[1.02] hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-xl"
                                        >
                                            <FaDownload className="mr-2 sm:mr-3" />
                                            Descargar Portafolio PDF
                                        </a>
                                        
                                        <Link
                                            to="/servicios"
                                            className="w-full bg-medical-500 text-white py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 rounded-xl font-semibold flex items-center justify-center hover:bg-medical-600 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base md:text-lg shadow-xl"
                                            onClick={() => setShowPortafolioModal(false)}
                                        >
                                            Ver Servicios Online
                                        </Link>
                                        
                                        <button
                                            onClick={() => setStep(2)}
                                            className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white py-3 sm:py-4 transition-colors duration-200 font-medium hover:scale-[1.02] text-sm sm:text-base md:text-lg rounded-xl"
                                        >
                                            ← Volver a Invitación Docentes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PANTALLA 2 - Invitación Docentes (PRINCIPAL) */}
                        {step === 2 && (
                            <div className="relative bg-cover bg-center text-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center min-h-[80vh] overflow-y-auto"
                                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85" />

                                <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-5xl mx-auto px-2 sm:px-4 md:px-6">
                                    {/* Badge informativo */}
                                    <div className="inline-flex items-center bg-medical-500/20 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-medical-400/30 mb-3 sm:mb-4">
                                        <MdHealthAndSafety className="text-medical-400 mr-2 sm:mr-3" size={16} />
                                        <span className="text-medical-300 font-bold text-xs sm:text-sm md:text-base">ELECCIÓN IPS PRIMARIA FOMAG</span>
                                    </div>

                                    {/* Título principal mejorado */}
                                    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
                                        <span className="block text-white mb-1 sm:mb-2">¡Docente, elige a</span>
                                        <span className="block bg-gradient-to-r from-medical-300 to-medical-500 bg-clip-text text-transparent">
                                            Red Medicron IPS
                                        </span>
                                        <span className="block text-white text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-1 sm:mt-2">
                                            como tu IPS primaria!
                                        </span>
                                    </h3>

                                    {/* Descripción mejorada */}
                                    <div className="space-y-3 sm:space-y-4">
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto text-gray-200 leading-relaxed">
                                            Queremos acompañarte con <span className="text-medical-300 font-bold">atención médica de calidad</span>. 
                                            Realiza tu elección antes del cierre del plazo.
                                        </p>
                                        
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 max-w-3xl mx-auto">
                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-2">
                                                🎯 <strong>¿Quiénes pueden elegir?</strong>
                                            </p>
                                            <ul className="text-left text-xs sm:text-sm md:text-base text-white/80 space-y-1">
                                                <li>✅ Docentes activos del magisterio</li>
                                                <li>✅ Pensionados del magisterio</li>
                                                <li>✅ Beneficiarios del sistema FOMAG</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Contador regresivo destacado */}
                                    <div className="bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-red-400/30 max-w-lg mx-auto">
                                        <p className="text-white font-bold text-xs sm:text-sm md:text-base mb-2 sm:mb-3">⏰ TIEMPO RESTANTE:</p>
                                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono bg-black/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl shadow-lg">
                                            {timeLeft}
                                        </div>
                                        <p className="text-red-200 text-xs sm:text-sm mt-2 font-medium">Hasta el 28 de agosto de 2025 - 11:59 PM (Hora Colombia)</p>
                                    </div>

                                    {/* Botones de acción mejorados */}
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center justify-center pt-4">
                                        <a
                                            href="http://200.116.57.140:8080/formulario_primaria/public/formulario"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group w-full sm:w-auto bg-gradient-to-r from-medical-500 to-medical-600 hover:from-medical-600 hover:to-medical-700 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                                        >
                                            <span className="mr-2 sm:mr-3">🚀 REALIZAR ELECCIÓN AHORA</span>
                                            <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                                        </a>
                                        
                                        <button
                                            onClick={() => setStep(1)}
                                            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm md:text-base text-white/90 hover:text-white transition-all duration-300"
                                        >
                                            📋 Ver Portafolio de Servicios
                                        </button>
                                    </div>

                                    {/* Información adicional */}
                                    <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                                        <p className="text-xs sm:text-sm text-white/70 max-w-3xl mx-auto leading-relaxed">
                                            Al elegir Red Medicron IPS tendrás acceso a servicios de salud de alta calidad, 
                                            tecnología avanzada y atención humanizada en toda la región de Nariño.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
