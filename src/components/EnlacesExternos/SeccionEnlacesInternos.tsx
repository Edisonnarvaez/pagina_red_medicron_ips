import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type { EnlaceInterno } from '../../types/enlacesTypes';

interface Props {
  enlaces: EnlaceInterno[];
}

export const SeccionEnlacesInternos: React.FC<Props> = ({ enlaces }) => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl mb-6">
          <span className="text-4xl">🏢</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
          Enlaces Internos
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Sistemas de acceso desde la red interna de la institución para
          <span className="text-blue-700 font-semibold"> personal autorizado </span>
          de Red Medicron IPS
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {enlaces.map((enlace) => (
          <a
            key={enlace.id}
            href={enlace.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden"
          >
            {/* Fondo con blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-white/50 to-indigo-500/10 rounded-3xl blur-sm group-hover:blur-none transition-all duration-500"></div>
            
            {/* Card principal */}
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 hover:border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
              
              {/* Efecto de brillo superior */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-center space-y-6">
                {/* Icono principal */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-4xl mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {enlace.icono}
                </div>
                
                {/* Título y categoría */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-3">
                    {enlace.nombre}
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold rounded-full border border-indigo-200">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                    {enlace.categoria}
                  </div>
                </div>
                
                {/* Descripción */}
                <p className="text-gray-700 leading-relaxed font-medium">
                  {enlace.descripcion}
                </p>
                
                {/* Botón de acción */}
                <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Acceder al sistema</span>
                    <FaExternalLinkAlt className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-blue-600 text-sm">→</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};