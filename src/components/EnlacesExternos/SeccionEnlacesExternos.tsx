import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type { EnlaceExterno } from '../../types/enlacesTypes';

interface Props {
  enlaces: EnlaceExterno[];
}

export const SeccionEnlacesExternos: React.FC<Props> = ({ enlaces }) => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          🌐 Enlaces Externos
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sistemas de acceso externo y plataformas públicas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {enlaces.map((enlace) => (
          <a
            key={enlace.id}
            href={enlace.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {enlace.icono}
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                {enlace.nombre}
              </h3>
              <span className="inline-block mb-3 px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                {enlace.categoria}
              </span>
              <p className="text-gray-600 text-sm mb-4">
                {enlace.descripcion}
              </p>
              <div className="flex items-center justify-center text-green-600 font-medium">
                <span>Acceder</span>
                <FaExternalLinkAlt className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};