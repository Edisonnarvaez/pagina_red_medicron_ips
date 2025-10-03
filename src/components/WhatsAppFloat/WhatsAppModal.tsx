import React, { useEffect } from 'react';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { useWhatsAppStore } from '../../store/whatsappStore';

interface ContactOption {
  id: string;
  label: string;
  number: string;
  description: string;
  icon: string;
}

const WhatsAppModal: React.FC = () => {
  const { isModalOpen, contactOptions, closeModal } = useWhatsAppStore();

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  const generateWhatsAppUrl = (number: string, service: string) => {
    const message = `Hola! Necesito información sobre ${service} de Red Medicron IPS.`;
    return `https://wa.me/57${number}?text=${encodeURIComponent(message)}`;
  };

  const handleContactClick = (option: ContactOption) => {
    const url = generateWhatsAppUrl(option.number, option.label);
    window.open(url, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  return (
    <>
      {/* Overlay para cerrar al hacer click fuera */}
      <div 
        className="fixed inset-0 z-40 md:bg-transparent bg-black bg-opacity-30 backdrop-blur-sm md:backdrop-blur-none"
        onClick={closeModal}
      />
      
      {/* Chat Popup */}
      <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 w-80 md:w-96 max-w-[calc(100vw-2rem)]">
        <div 
          className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Estilo Chat */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Avatar del chat */}
                <div className="relative">
                  <div className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-green-600 text-lg" />
                  </div>
                  {/* Indicador online */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-300 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-base font-semibold">Red Medicron IPS</h2>
                  <p className="text-green-100 text-xs flex items-center">
                    <span className="w-2 h-2 bg-green-300 rounded-full mr-1.5 animate-pulse"></span>
                    En línea • Responde en minutos
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:bg-white hover:bg-opacity-20 p-1.5 rounded-full transition-colors"
                aria-label="Cerrar chat"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
          </div>

          {/* Content - Estilo Chat */}
          <div className="p-4 bg-gray-50 min-h-[400px] max-h-[500px] overflow-y-auto">
            {/* Mensaje de bienvenida */}
            <div className="mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaWhatsapp className="text-white text-sm" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    ¡Hola!👋 Bienvenido a Red Medicron IPS
                  </p>
                  <p className="text-gray-800 text-sm leading-relaxed mt-1">
                    Selecciona el servicio que necesitas y ponte en contacto con nosotros:
                  </p>
                </div>
              </div>
            </div>

            {/* Opciones como botones de chat - Alineadas a la izquierda */}
            <div className="space-y-2 flex flex-col items-start">
              {contactOptions.map((option: ContactOption) => (
                <button
                  key={option.id}
                  onClick={() => handleContactClick(option)}
                  className="bg-white hover:bg-gray-50 rounded-2xl rounded-tl-sm p-3 border border-gray-200 hover:border-green-300 transition-all duration-200 text-left group shadow-sm hover:shadow-md max-w-[85%] mr-auto"
                >
                  <div className="flex items-center space-x-3">
                    {/* Icono */}
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 group-hover:bg-green-200 rounded-full flex items-center justify-center text-sm transition-colors">
                      {option.icon}
                    </div>
                    
                    {/* Contenido */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-800 group-hover:text-green-700 transition-colors text-sm">
                          {option.label}
                        </h3>
                        <FaWhatsapp className="text-green-500 text-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5 opacity-80">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer tipo chat */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">ℹ️</span>
                </div>
                <div className="bg-blue-50 rounded-2xl rounded-tl-sm p-2.5 text-xs text-blue-800 max-w-[85%]">
                  <p className="font-medium">⏰ Horario de atención:</p>
                  <p>Lunes a Viernes: 7:00 AM - 3:30 PM</p>
                  <p className="mt-1 text-blue-600">💬 Respuesta inmediata en horario laboral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppModal;