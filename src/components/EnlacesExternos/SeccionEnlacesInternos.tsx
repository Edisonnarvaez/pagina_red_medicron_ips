import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type { EnlaceInterno } from '../../types/enlacesTypes';

interface Props {
  enlaces: EnlaceInterno[];
}

export const SeccionEnlacesInternos: React.FC<Props> = ({ enlaces }) => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          🏢 Enlaces Internos
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sistemas de acceso interno para personal autorizado
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {enlaces.map((enlace) => (
          <a
            key={enlace.id}
            href={enlace.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {enlace.icono}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {enlace.nombre}
                  </h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {enlace.categoria}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                {enlace.descripcion}
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Acceder al sistema</span>
                <FaExternalLinkAlt className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};