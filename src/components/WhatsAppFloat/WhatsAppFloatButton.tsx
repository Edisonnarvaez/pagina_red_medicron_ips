import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppFloatButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Mostrar el botón después de 2 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Mostrar tooltip automáticamente después de 5 segundos
    useEffect(() => {
        if (isVisible) {
            const tooltipTimer = setTimeout(() => {
                setShowTooltip(true);
                // Ocultar tooltip después de 5 segundos
                setTimeout(() => setShowTooltip(false), 5000);
            }, 3000);

            return () => clearTimeout(tooltipTimer);
        }
    }, [isVisible]);

    // Mensaje predeterminado para WhatsApp
    const whatsappMessage = encodeURIComponent(
        "¡Hola Red Medicron IPS! 👋\n\nMe gustaría obtener información sobre sus servicios de salud. ¿Podrían ayudarme?\n\nGracias."
    );

    const whatsappUrl = `https://wa.me/573183380107?text=${whatsappMessage}`;

    if (!isVisible) return null;

    return (
        <>
            {/* Botón flotante de WhatsApp */}
            <div className={`fixed bottom-6 right-6 z-50 ${isVisible ? 'animate-bounce-in' : ''}`}>
                {/* Tooltip */}
                {showTooltip && (
                    <div className="absolute bottom-full right-0 mb-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-3 animate-bounce-in">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-bold text-gray-800 mb-1">
                                    💬 ¿Necesitas ayuda?
                                </p>
                                <p className="text-xs text-gray-600">
                                    Chatea con nosotros por WhatsApp. Estamos aquí para ayudarte 24/7.
                                </p>
                            </div>
                            <button
                                onClick={() => setShowTooltip(false)}
                                className="ml-2 text-gray-400 hover:text-gray-600 flex-shrink-0 transition-colors"
                            >
                                <FaTimes size={12} />
                            </button>
                        </div>
                        {/* Flecha del tooltip */}
                        <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                    </div>
                )}

                {/* Botón principal */}
                <div className="relative">
                    {/* Anillo de pulso */}
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse-ring"></div>
                    
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-float hover:animate-none"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        aria-label="Contactar por WhatsApp"
                    >
                        <FaWhatsapp className="text-white text-3xl drop-shadow-sm" />
                        
                        {/* Badge de notificación */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                            <span className="text-white text-xs font-bold">!</span>
                        </div>

                        {/* Texto flotante para desktop */}
                        <div className="hidden lg:block absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                            💬 Chatea con nosotros
                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-gray-900 border-r-transparent border-t-transparent"></div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default WhatsAppFloatButton;
