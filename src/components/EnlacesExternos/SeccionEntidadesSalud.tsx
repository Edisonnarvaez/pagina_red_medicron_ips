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
    <section className="space-y-12">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl shadow-2xl mb-6">
          <span className="text-4xl">🏥</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-rose-800 to-pink-900 bg-clip-text text-transparent mb-4">
          Entidades del Sector Salud
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
          <span className="text-rose-700 font-semibold">Asociaciones médicas</span>, 
          sociedades científicas y organizaciones de 
          <span className="text-pink-700 font-semibold"> interés institucional </span>
          del sector salud colombiano
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto rounded-full"></div>
      </div>

      {/* Barra de búsqueda y filtros ultramoderna */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-white/80 to-pink-50/50 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-rose-200/50">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Búsqueda mejorada */}
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <FaSearch className="h-5 w-5 text-white" />
                </div>
              </div>
              <input
                type="text"
                placeholder="Buscar entidades, siglas o especialidades..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-16 pr-6 py-4 border-2 border-rose-200/50 rounded-2xl focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 transition-all duration-300 text-gray-900 placeholder-gray-500 bg-white/80 backdrop-blur-sm shadow-lg font-medium"
              />
            </div>

            {/* Filtro de categorías mejorado */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                  <FaFilter className="h-5 w-5 text-white" />
                </div>
              </div>
              <select
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
                className="pl-16 pr-8 py-4 border-2 border-pink-200/50 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 text-gray-900 bg-white/80 backdrop-blur-sm min-w-[250px] shadow-lg font-medium appearance-none cursor-pointer"
              >
                <option value="todas">Todas las categorías ({contadorCategorias.todas})</option>
                {Object.entries(CATEGORIAS_CONFIG).map(([categoria, { icon }]) => (
                  <option key={categoria} value={categoria}>
                    {icon} {categoria} ({contadorCategorias[categoria] || 0})
                  </option>
                ))}
              </select>
              {/* Flecha personalizada del select */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filtros rápidos por categoría modernizados */}
          <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-rose-200/50">
            <button
              onClick={() => setFiltroCategoria('todas')}
              className={`group relative overflow-hidden px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                filtroCategoria === 'todas'
                  ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl'
                  : 'bg-white/80 text-gray-600 hover:bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg'
              }`}
            >
              <span className="relative z-10">🏥 Todas ({contadorCategorias.todas})</span>
              {filtroCategoria === 'todas' && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
            {Object.entries(CATEGORIAS_CONFIG).map(([categoria, { icon, color }]) => (
              <button
                key={categoria}
                onClick={() => setFiltroCategoria(categoria)}
                className={`group relative overflow-hidden px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filtroCategoria === categoria
                    ? `bg-gradient-to-r from-${color}-600 to-${color}-700 text-white shadow-xl`
                    : `bg-white/80 text-${color}-700 hover:bg-${color}-50 border-2 border-${color}-200 hover:border-${color}-300 shadow-lg`
                }`}
              >
                <span className="relative z-10">{icon} {categoria} ({contadorCategorias[categoria] || 0})</span>
                {filtroCategoria === categoria && (
                  <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500 to-${color}-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resultados de búsqueda mejorados */}
      {busqueda && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-indigo-50/30 rounded-2xl blur-xl"></div>
          <div className="relative text-center py-6 px-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200/50">
            <div className="inline-flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <FaSearch className="h-4 w-4 text-white" />
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {entidades.length > 0 
                  ? (
                    <>
                      Se encontraron <span className="text-blue-600 font-bold">{entidades.length} entidades</span> para 
                      <span className="text-indigo-600 font-bold"> "{busqueda}"</span>
                    </>
                  )
                  : (
                    <>
                      No se encontraron entidades para 
                      <span className="text-red-600 font-bold"> "{busqueda}"</span>
                    </>
                  )
                }
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grid de entidades ultramoderno */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {entidades.map((entidad) => {
          const categoria = CATEGORIAS_CONFIG[entidad.categoria as CategoriaKey];
          return (
            <a
              key={entidad.id}
              href={entidad.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
            >
              {/* Fondo con blur effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoria.bgGradient} opacity-10 rounded-3xl blur-sm group-hover:blur-none transition-all duration-500`}></div>
              
              {/* Card principal */}
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 hover:border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                {/* Efecto de brillo superior */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${categoria.color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Contenido de la card */}
                <div className="relative space-y-4">
                  {/* Header de la tarjeta modernizado */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${categoria.bgGradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <img 
                        src={entidad.imagen} 
                        alt={`Logo ${entidad.sigla}`}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="text-white text-2xl hidden">
                        {categoria.icon}
                      </span>
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${categoria.bgGradient} text-white text-xs font-bold rounded-full shadow-md`}>
                      {entidad.sigla}
                    </div>
                  </div>
                  
                  {/* Título mejorado */}
                  <h3 className={`font-bold text-lg mb-3 ${categoria.textColor} group-hover:text-gray-900 transition-colors duration-300 leading-tight`}>
                    {entidad.nombre}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    {entidad.descripcion}
                  </p>
                  
                  {/* Footer de la tarjeta modernizado */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                    <div className={`inline-flex items-center px-3 py-2 bg-gradient-to-r from-${categoria.color}-100 to-${categoria.color}-50 text-${categoria.color}-700 text-xs font-semibold rounded-full border border-${categoria.color}-200`}>
                      <span className={`w-2 h-2 bg-${categoria.color}-500 rounded-full mr-2 animate-pulse`}></span>
                      {categoria.icon}
                      <span className="ml-1">{entidad.categoria}</span>
                    </div>
                    <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                      <FaExternalLinkAlt className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Mensaje cuando no hay resultados - Modernizado */}
      {entidades.length === 0 && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/80 to-slate-50/50 rounded-3xl blur-xl"></div>
          <div className="relative text-center py-20 px-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-2xl">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-400 to-slate-500 rounded-3xl mx-auto mb-8 shadow-2xl">
              <FaSearch className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              No se encontraron entidades
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Intenta ajustar los filtros de búsqueda o selecciona una 
              <span className="font-semibold text-gray-800"> categoría diferente</span>
            </p>
            <button
              onClick={limpiarFiltros}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl hover:from-rose-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <span>Limpiar filtros</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};