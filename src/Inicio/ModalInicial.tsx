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
                        className={`modal-container relative rounded-2xl sm:rounded-3xl lg:rounded-3xl shadow-2xl animate-scale-in border modal-scrollbar ${
                            step === 1 
                                ? 'max-w-6xl lg:max-w-7xl xl:max-w-none w-full max-h-[95vh] lg:max-h-[90vh] bg-transparent border-transparent' 
                                : 'max-w-2xl lg:max-w-3xl w-full h-auto max-h-[85vh] bg-transparent border-transparent'
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

                        {/* PANTALLA 1 - Portafolio (SECUNDARIA) */}
                        {step === 1 && (
                            <div className="modal-section relative w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/images/portafolio.jpg')" }}
                            >
                                {/* Overlay que cubre toda el área uniformemente */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/80 via-black/70 to-black/85" />
                                
                                <div className="relative z-10 h-full overflow-y-auto">
                                    <div className="flex flex-col justify-center text-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 min-h-full">
                                    <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-br from-primary-500 to-medical-500 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-glow">
                                            <MdHealthAndSafety className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                                        Portafolio de Servicios
                                    </h3>
                                    
                                    <p className="text-gray-200 mb-6 sm:mb-8 lg:mb-12 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl lg:max-w-4xl mx-auto">
                                        Descarga nuestro portafolio completo de servicios médicos y conoce todo lo que tenemos para ofrecerte.
                                    </p>

                                    <div className="space-y-4 lg:space-y-6 max-w-lg lg:max-w-2xl mx-auto">
                                        <a
                                            href="/portafolio-servicios.pdf"
                                            download
                                            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 rounded-xl lg:rounded-2xl font-semibold flex items-center justify-center hover:scale-[1.02] hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl shadow-xl"
                                        >
                                            <FaDownload className="mr-2 sm:mr-3 lg:mr-4 text-base lg:text-xl xl:text-2xl" />
                                            Descargar Portafolio PDF
                                        </a>
                                        
                                        <Link
                                            to="/servicios"
                                            className="w-full bg-medical-500 text-white py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 rounded-xl lg:rounded-2xl font-semibold flex items-center justify-center hover:bg-medical-600 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl shadow-xl"
                                            onClick={() => setShowPortafolioModal(false)}
                                        >
                                            Ver Servicios Online
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PANTALLA 2 - Información FOMAG - COMPACTA */}
                        {step === 2 && (
                            <div className="modal-section relative w-full overflow-hidden rounded-2xl sm:rounded-3xl">
                                {/* Contenedor de la imagen responsive - Compacto y centrado */}
                                <div className="relative w-full flex flex-col items-center justify-center pt-6 pb-4 px-4 sm:px-6">
                                    <img 
                                        src="/images/modales/informacion_fomag.png" 
                                        alt="Información FOMAG - Red Medicron IPS"
                                        className="max-w-full object-contain rounded-lg shadow-2xl"
                                        style={{ 
                                            maxHeight: '70vh',
                                            width: 'auto',
                                            height: 'auto'
                                        }}
                                    />
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}