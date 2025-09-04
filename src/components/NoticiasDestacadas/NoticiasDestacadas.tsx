import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CalendarDaysIcon,
    UserIcon,
    PlayCircleIcon,
    LinkIcon,
    PhotoIcon,
    EyeIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline';
import noticiasData from '../../data/noticias.json';

interface Noticia {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;
    categoria: string;
    imagen: string;
    enlaceExterno: string | null;
    video: string | null;
    resumenCorto: string;
    autor: string;
    destacada: boolean;
    contenidoCompleto: string;
    tags: string[];
    galeria: string[];
}

interface Categoria {
    id: string;
    nombre: string;
    descripcion: string;
    color: string;
    icono: string;
}

interface NoticiasDestacadasProps {
    maxNoticias?: number;
    mostrarTitulo?: boolean;
}

const NoticiasDestacadas: React.FC<NoticiasDestacadasProps> = ({ 
    maxNoticias = 3, 
    mostrarTitulo = true 
}) => {
    const navigate = useNavigate();
    const [noticias] = useState<Noticia[]>(noticiasData.noticias);
    const [categorias] = useState<Categoria[]>(noticiasData.categorias);

    // Filtrar solo noticias destacadas
    const noticiasDestacadas = noticias
        .filter(noticia => noticia.destacada)
        .slice(0, maxNoticias);

    // Formatear fecha (ajustada para zona horaria de Bogotá, Colombia)
    const formatearFecha = (fecha: string) => {
        // Crear fecha local sin problemas de zona horaria
        const [year, month, day] = fecha.split('-').map(num => parseInt(num, 10));
        const fechaLocal = new Date(year, month - 1, day); // month - 1 porque los meses en JS van de 0-11
        
        return fechaLocal.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'America/Bogota'
        });
    };

    // Obtener color de categoría
    const obtenerColorCategoria = (categoriaId: string) => {
        const categoria = categorias.find(cat => cat.id === categoriaId);
        return categoria?.color || '#6B7280';
    };

    // Navegar a la página de noticias
    const irANoticias = () => {
        navigate('/noticias');
    };

    // Abrir noticia específica
    const abrirNoticia = (noticia: Noticia) => {
        navigate('/noticias', { state: { noticiaId: noticia.id } });
    };

    if (noticiasDestacadas.length === 0) {
        return null;
    }

    return (
        <section className="py-12 sm:py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {mostrarTitulo && (
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            Noticias Destacadas
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Mantente informado con las últimas novedades y eventos de Red Medicron IPS
                        </p>
                    </div>
                )}

                {/* Grid de noticias destacadas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {noticiasDestacadas.map((noticia) => (
                        <article
                            key={noticia.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                            onClick={() => abrirNoticia(noticia)}
                        >
                            <div className="relative h-48 sm:h-56">
                                <img
                                    src={noticia.imagen}
                                    alt={noticia.titulo}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        e.currentTarget.src = '/images/placeholder-news.jpg';
                                    }}
                                />
                                <div className="absolute top-3 left-3">
                                    <span
                                        className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                                        style={{ backgroundColor: obtenerColorCategoria(noticia.categoria) }}
                                    >
                                        {categorias.find(cat => cat.id === noticia.categoria)?.nombre}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            
                            <div className="p-4 sm:p-6">
                                <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-verde transition-colors">
                                    {noticia.titulo}
                                </h3>
                                
                                <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-3">
                                    {noticia.resumenCorto}
                                </p>
                                
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                    <div className="flex flex-col gap-2 text-xs text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <CalendarDaysIcon className="h-3 w-3" />
                                            {formatearFecha(noticia.fecha)}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <UserIcon className="h-3 w-3" />
                                            {noticia.autor}
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-2">
                                        {noticia.video && (
                                            <PlayCircleIcon className="h-4 w-4 text-red-600" title="Incluye video" />
                                        )}
                                        {noticia.enlaceExterno && (
                                            <LinkIcon className="h-4 w-4 text-blue-600" title="Enlace externo" />
                                        )}
                                        {noticia.galeria.length > 1 && (
                                            <PhotoIcon className="h-4 w-4 text-purple-600" title="Galería de fotos" />
                                        )}
                                    </div>
                                </div>
                                
                                <button className="w-full text-verde hover:text-verdeOscuro font-semibold text-sm flex items-center justify-center gap-2 py-2 px-4 border border-verde hover:border-verdeOscuro rounded-lg transition-colors">
                                    <EyeIcon className="h-4 w-4" />
                                    Leer más
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Botón para ver todas las noticias */}
                <div className="text-center">
                    <button
                        onClick={irANoticias}
                        className="inline-flex items-center gap-2 bg-verde hover:bg-verdeOscuro text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Ver todas las noticias
                        <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NoticiasDestacadas;
