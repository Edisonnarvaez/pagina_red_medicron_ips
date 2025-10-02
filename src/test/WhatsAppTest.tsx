import React from 'react';
import WhatsAppFloatButton from '../components/WhatsAppFloat/WhatsAppFloatButton';

// Componente de prueba para verificar el modal de WhatsApp
const WhatsAppTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Prueba del Modal de WhatsApp
        </h1>
        <p className="text-gray-600 mb-8">
          Haz click en el botón flotante de WhatsApp para ver las opciones de contacto
        </p>
        
        {/* Información de contactos */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Opciones de Contacto:</h2>
          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <span className="font-medium">Nefroprotección 1:</span>
              <span>3160902783</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Nefroprotección 2:</span>
              <span>3188074300</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Fomag:</span>
              <span>602 7382377</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Hospital:</span>
              <span>3216660990</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Información General:</span>
              <span>318338-0107</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloatButton />
    </div>
  );
};

export default WhatsAppTest;