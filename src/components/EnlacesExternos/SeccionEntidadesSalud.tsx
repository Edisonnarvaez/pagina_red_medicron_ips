import React from 'react';
import { FaSearch, FaFilter, FaExternalLinkAlt } from 'react-icons/fa';
import type { EntidadSalud, CategoriaKey } from '../../types/enlacesTypes';
import { CATEGORIAS_CONFIG } from '../../types/enlacesTypes';

interface Props {
  entidades: EntidadSalud[];
  filtroCategoria: string;
  setFiltroCategoria: (categoria: string) => void;
  busqueda: string;
  setBusqueda: (busqueda: string) => void;
  contadorCategorias: Record<string, number>;
  limpiarFiltros: () => void;
}

export const SeccionEntidadesSalud: React.FC<Props> = ({
  entidades,
  filtroCategoria,
  setFiltroCategoria,
  busqueda,
  setBusqueda,
  contadorCategorias,
  limpiarFiltros
}) => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          🏥 Entidades del Sector Salud
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Asociaciones médicas, sociedades científicas y organizaciones de interés institucional
        </p>
      </div>

      {/* Barra de búsqueda y filtros moderna */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Búsqueda */}
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar entidades, siglas o especialidades..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Filtro de categorías */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white min-w-[200px]"
            >
              <option value="todas">Todas las categorías ({contadorCategorias.todas})</option>
              {Object.entries(CATEGORIAS_CONFIG).map(([categoria, { icon }]) => (
                <option key={categoria} value={categoria}>
                  {icon} {categoria} ({contadorCategorias[categoria] || 0})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filtros rápidos por categoría */}
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
          <button
            onClick={() => setFiltroCategoria('todas')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filtroCategoria === 'todas'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            🏥 Todas ({contadorCategorias.todas})
          </button>
          {Object.entries(CATEGORIAS_CONFIG).map(([categoria, { icon, color }]) => (
            <button
              key={categoria}
              onClick={() => setFiltroCategoria(categoria)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filtroCategoria === categoria
                  ? `bg-${color}-600 text-white shadow-lg`
                  : `bg-${color}-50 text-${color}-700 hover:bg-${color}-100 border border-${color}-200`
              }`}
            >
              {icon} {categoria} ({contadorCategorias[categoria] || 0})
            </button>
          ))}
        </div>
      </div>

      {/* Resultados de búsqueda */}
      {busqueda && (
        <div className="text-center py-4">
          <p className="text-gray-600">
            {entidades.length > 0 
              ? `Se encontraron ${entidades.length} entidades para "${busqueda}"`
              : `No se encontraron entidades para "${busqueda}"`
            }
          </p>
        </div>
      )}

      {/* Grid de entidades con diseño modernizado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {entidades.map((entidad) => {
          const categoria = CATEGORIAS_CONFIG[entidad.categoria as CategoriaKey];
          return (
            <a
              key={entidad.id}
              href={entidad.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Fondo con gradiente dinámico */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoria.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative">
                {/* Header de la tarjeta */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${categoria.bgGradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <img 
                      src={entidad.imagen} 
                      alt={`Logo ${entidad.sigla}`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="text-white text-lg hidden">
                      {categoria.icon}
                    </span>
                  </div>
                  <div className={`px-2 py-1 bg-gradient-to-r ${categoria.bgGradient} text-white text-xs font-bold rounded-full`}>
                    {entidad.sigla}
                  </div>
                </div>
                
                {/* Título */}
                <h3 className={`font-bold text-lg mb-3 ${categoria.textColor} group-hover:text-gray-900 transition-colors duration-300 leading-tight line-clamp-2`}>
                  {entidad.nombre}
                </h3>
                
                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {entidad.descripcion}
                </p>
                
                {/* Footer de la tarjeta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className={`flex items-center text-xs font-medium text-${categoria.color}-600 bg-${categoria.color}-50 px-3 py-1 rounded-full`}>
                    {categoria.icon}
                    <span className="ml-1">{entidad.categoria}</span>
                  </span>
                  <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                    <FaExternalLinkAlt className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Mensaje cuando no hay resultados */}
      {entidades.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <FaSearch className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron entidades</h3>
          <p className="text-gray-600 mb-6">
            Intenta ajustar los filtros de búsqueda o selecciona una categoría diferente
          </p>
          <button
            onClick={limpiarFiltros}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </section>
  );
};