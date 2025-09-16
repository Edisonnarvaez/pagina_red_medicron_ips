import { useState, useMemo } from 'react';
import enlacesData from '../data/enlacesExternos.json';
import type { EnlaceInterno, EnlaceExterno, EnlaceInstitucional, EntidadSalud } from '../types/enlacesTypes';

export const useEnlacesExternos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todas');
  const [busqueda, setBusqueda] = useState<string>('');

  // Cargar datos del JSON
  const enlacesInternos = enlacesData.enlacesInternos as EnlaceInterno[];
  const enlacesExternos = enlacesData.enlacesExternos as EnlaceExterno[];
  const enlacesInstitucionales = enlacesData.enlacesInstitucionales as EnlaceInstitucional[];
  const entidadesSalud = enlacesData.entidadesSalud as EntidadSalud[];

  // Filtrar entidades de salud
  const entidadesFiltradas = useMemo(() => {
    return entidadesSalud.filter(entidad => {
      const coincideBusqueda = 
        entidad.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        entidad.sigla.toLowerCase().includes(busqueda.toLowerCase()) ||
        entidad.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      
      const coincideCategoria = filtroCategoria === 'todas' || entidad.categoria === filtroCategoria;
      
      return coincideBusqueda && coincideCategoria;
    });
  }, [busqueda, filtroCategoria, entidadesSalud]);

  // Contador de categorías
  const contadorCategorias = useMemo(() => {
    const contador: Record<string, number> = { todas: entidadesSalud.length };
    entidadesSalud.forEach(entidad => {
      contador[entidad.categoria] = (contador[entidad.categoria] || 0) + 1;
    });
    return contador;
  }, [entidadesSalud]);

  // Función para limpiar filtros
  const limpiarFiltros = () => {
    setBusqueda('');
    setFiltroCategoria('todas');
  };

  return {
    // Estados
    filtroCategoria,
    setFiltroCategoria,
    busqueda,
    setBusqueda,
    
    // Datos
    enlacesInternos,
    enlacesExternos,
    enlacesInstitucionales,
    entidadesSalud,
    entidadesFiltradas,
    contadorCategorias,
    
    // Funciones
    limpiarFiltros
  };
};