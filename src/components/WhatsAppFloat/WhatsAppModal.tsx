import { useState } from 'react';
import {
  FaWhatsapp,
  FaPhone,
  FaSpinner
} from 'react-icons/fa';
import {
  MdInfo,
  MdAccessTime,
  MdClose
} from 'react-icons/md';
import { useWhatsAppStore } from '../../store/whatsappStore';

const getCategoryIcon = (category: string) => {
  const icons = {
    nefroproteccion: '🫀',
    terapias: '🏃‍♀️',
    fomag: '👨‍⚕️',
    hospital: '🏥',
    general: '📞'
  };
  return icons[category as keyof typeof icons] || '📞';
};

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const { contactOptions } = useWhatsAppStore();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  // Obtener categorías únicas
  const categories = ['all', ...Array.from(new Set(contactOptions.map(option => option.category)))];

  // Filtrar opciones según la categoría seleccionada
  const filteredOptions = selectedCategory === 'all' 
    ? contactOptions 
    : contactOptions.filter(option => option.category === selectedCategory);

  const handleWhatsAppClick = async (phoneNumber: string, message: string) => {
    setIsLoading(true);
    try {
      const formattedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      // Simular un pequeño delay para mostrar el loading
      setTimeout(() => {
        setIsLoading(false);
        onClose();
      }, 1000);
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Overlay invisible para detectar clics fuera del modal */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Modal posicionado */}
      <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] md:max-w-96">
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] animate-slide-up border border-gray-200">
        {/* Header mejorado */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200 hover:rotate-90"
          >
            <MdClose size={20} />
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white bg-opacity-20 rounded-full p-3">
              <FaWhatsapp size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Contáctanos por WhatsApp</h2>
              <p className="text-green-100 text-sm">Estamos aquí para ayudarte</p>
            </div>
          </div>

          {/* Selector de categoría mejorado */}
          <div className="mb-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white bg-opacity-20 text-white placeholder-green-200 border border-green-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 transition-all duration-200"
            >
              <option value="all" className="text-gray-800">Todos los servicios</option>
              {categories.filter(cat => cat !== 'all').map(category => (
                <option key={category} value={category} className="text-gray-800">
                  {getCategoryIcon(category)} {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Lista de contactos mejorada */}
        <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
          {filteredOptions.map((option) => (
            <div
              key={option.id}
              className="bg-gray-50 rounded-xl p-4 hover:bg-green-50 hover:border-green-200 border border-gray-200 transition-all duration-200 cursor-pointer group"
              onClick={() => handleWhatsAppClick(option.number, `Hola, estoy interesado en el servicio de ${option.label}`)}
            >
              <div className="flex items-start space-x-4">
                {/* Icono más grande y atractivo */}
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 group-hover:bg-green-200 rounded-full flex items-center justify-center text-2xl transition-colors duration-200">
                  {getCategoryIcon(option.category)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-200">
                      {option.label}
                    </h3>
                    <FaWhatsapp 
                      className="text-green-500 group-hover:text-green-600 transition-colors duration-200" 
                      size={18} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MdAccessTime className="mr-2 text-gray-400" size={16} />
                      <span>{option.schedule ? `${option.schedule.start} - ${option.schedule.end}` : 'Horario disponible'}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <FaPhone className="mr-2 text-gray-400" size={14} />
                      <span>{option.number}</span>
                    </div>
                    
                    {option.description && (
                      <div className="flex items-start text-sm text-gray-600">
                        <MdInfo className="mr-2 text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                        <span className="line-clamp-2">{option.description}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {filteredOptions.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <FaWhatsapp size={48} className="mx-auto mb-4 text-gray-300" />
              <p>No hay contactos disponibles para esta categoría</p>
            </div>
          )}
        </div>

        {/* Footer informativo mejorado */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-center text-sm text-gray-600 space-x-2">
            <MdInfo size={16} />
            <span>Respuesta rápida durante horario de atención</span>
          </div>
        </div>

        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
            <div className="text-center">
              <FaSpinner className="animate-spin text-green-500 mx-auto mb-2" size={24} />
              <p className="text-gray-600">Abriendo WhatsApp...</p>
            </div>
          </div>
        )}
        
        {/* Flecha que apunta al botón flotante */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
        </div>
      </div>
    </>
  );
}

export default WhatsAppModal;
