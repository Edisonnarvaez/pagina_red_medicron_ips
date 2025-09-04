import React, { useState, useEffect } from 'react';
import { SEOHelmet } from '../components/SEO';
import {
    CalendarDaysIcon,
    UserIcon,
    TagIcon,
    PlayCircleIcon,
    LinkIcon,
    PhotoIcon,
    MagnifyingGlassIcon,
    EyeIcon,
    ShareIcon
} from '@heroicons/react/24/outline';
import noticiasData from '../data/noticias.json';

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

const Noticias: React.FC = () => {
    const [noticias] = useState<Noticia[]>(noticiasData.noticias);
    const [categorias] = useState<Categoria[]>(noticiasData.categorias);
    const [filtroCategoria, setFiltroCategoria] = useState<string>('todas');
    const [busqueda, setBusqueda] = useState<string>('');
    const [noticiaSeleccionada, setNoticiaSeleccionada] = useState<Noticia | null>(null);
    const [modalAbierto, setModalAbierto] = useState<boolean>(false);

    // Filtrar noticias
    const noticiasFiltradas = noticias.filter(noticia => {
        const coincideBusqueda = noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
            noticia.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
            noticia.tags.some(tag => tag.toLowerCase().includes(busqueda.toLowerCase()));

        const coincideCategoria = filtroCategoria === 'todas' || noticia.categoria === filtroCategoria;

        return coincideBusqueda && coincideCategoria;
    });

    // Separar noticias destacadas
    const noticiasDestacadas = noticiasFiltradas.filter(noticia => noticia.destacada);
    const noticiasRegulares = noticiasFiltradas.filter(noticia => !noticia.destacada);

    // Formatear fecha
    const formatearFecha = (fecha: string) => {
        return new Date(fecha).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Obtener color de categoría
    const obtenerColorCategoria = (categoriaId: string) => {
        const categoria = categorias.find(cat => cat.id === categoriaId);
        return categoria?.color || '#6B7280';
    };

    // Abrir modal de noticia
    const abrirNoticia = (noticia: Noticia) => {
        setNoticiaSeleccionada(noticia);
        setModalAbierto(true);
        document.body.style.overflow = 'hidden';
    };

    // Cerrar modal
    const cerrarModal = () => {
        setModalAbierto(false);
        setNoticiaSeleccionada(null);
        document.body.style.overflow = 'unset';
    };

    // Cerrar modal con ESC
    useEffect(() => {
        const manejarTecla = (e: KeyboardEvent) => {
            if (e.key === 'Escape') cerrarModal();
        };

        if (modalAbierto) {
            document.addEventListener('keydown', manejarTecla);
            return () => document.removeEventListener('keydown', manejarTecla);
        }
    }, [modalAbierto]);

    return (
        <>
            <SEOHelmet
                title="Noticias y Eventos - Red Medicron IPS"
                description="Mantente informado con las últimas noticias, eventos y novedades de Red Medicron IPS en Nariño. Actualidad en salud, capacitaciones y servicios médicos."
                keywords="noticias red medicron ips, eventos salud nariño, novedades ips túquerres, actualidad médica pasto, eventos red medicron"
                canonical="/noticias"
            />
            {/* Header Section */}
            <section className="bg-gradient-to-br from-verde to-verdeOscuro text-white py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                            Centro de Noticias
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-100 mb-6 sm:mb-8 px-4 sm:px-0">
                            Mantente informado con las últimas noticias, eventos y novedades de Red Medicron IPS
                        </p>

                        {/* Barra de búsqueda */}
                        <div className="relative max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
                            <MagnifyingGlassIcon className="absolute left-6 sm:left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
                            <input
                                type="text"
                                placeholder="Buscar noticias..."
                                className="w-full pl-12 sm:pl-12 pr-4 py-3 sm:py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:placeholder-gray-400 text-sm sm:text-base"
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                aria-label="Buscar noticias"
                            />
                        </div>

                        {/* Filtros de categoría */}
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0" role="group" aria-label="Filtros de categorías de noticias">
                            <button
                                onClick={() => setFiltroCategoria('todas')}
                                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 ${filtroCategoria === 'todas'
                                        ? 'bg-white text-verde shadow-lg border-2 border-white'
                                        : 'bg-green-800 text-white hover:bg-green-700 border-2 border-green-800 hover:border-green-700'
                                    }`}
                                aria-pressed={filtroCategoria === 'todas'}
                            >
                                Todas las noticias
                            </button>
                            {categorias.map((categoria) => (
                                <button
                                    key={categoria.id}
                                    onClick={() => setFiltroCategoria(categoria.id)}
                                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 ${filtroCategoria === categoria.id
                                            ? 'bg-white text-verde shadow-lg border-2 border-white'
                                            : 'bg-green-800 text-white hover:bg-green-700 border-2 border-green-800 hover:border-green-700'
                                        }`}
                                    aria-pressed={filtroCategoria === categoria.id}
                                >
                                    {categoria.nombre}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Main Content */}
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Noticias Destacadas */}
                    {noticiasDestacadas.length > 0 && (
                        <div className="mb-12 sm:mb-16">
                            <div className="flex items-center mb-6 sm:mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Noticias Destacadas</h2>
                                <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-verde to-transparent rounded"></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                {noticiasDestacadas.map((noticia) => (
                                    <article
                                        key={noticia.id}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                        onClick={() => abrirNoticia(noticia)}
                                    >
                                        <div className="relative h-48 sm:h-56 lg:h-64">
                                            <img
                                                src={noticia.imagen}
                                                alt={noticia.titulo}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/images/placeholder-news.jpg';
                                                }}
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span
                                                    className="px-3 py-1 rounded-full text-white text-xs font-semibold"
                                                    style={{ backgroundColor: obtenerColorCategoria(noticia.categoria) }}
                                                >
                                                    {categorias.find(cat => cat.id === noticia.categoria)?.nombre}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
                                                    {noticia.titulo}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="p-4 sm:p-6">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-700 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <CalendarDaysIcon className="h-4 w-4" />
                                                    {formatearFecha(noticia.fecha)}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <UserIcon className="h-4 w-4" />
                                                    {noticia.autor}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-4 line-clamp-3 text-sm sm:text-base">
                                                {noticia.descripcion}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex gap-2">
                                                    {noticia.video && (
                                                        <PlayCircleIcon className="h-5 w-5 text-red-600" title="Incluye video" />
                                                    )}
                                                    {noticia.enlaceExterno && (
                                                        <LinkIcon className="h-5 w-5 text-blue-600" title="Enlace externo" />
                                                    )}
                                                    {noticia.galeria.length > 1 && (
                                                        <PhotoIcon className="h-5 w-5 text-purple-600" title="Galería de fotos" />
                                                    )}
                                                </div>
                                                <button className="text-verde hover:text-verdeOscuro font-semibold text-sm flex items-center gap-1">
                                                    <EyeIcon className="h-4 w-4" />
                                                    <span className="hidden sm:inline">Leer más</span>
                                                    <span className="sm:hidden">Ver</span>
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Noticias Regulares */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center mb-6 sm:mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Últimas Noticias</h2>
                            <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-verde to-transparent rounded"></div>
                        </div>

                        {noticiasRegulares.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {noticiasRegulares.map((noticia) => (
                                    <article
                                        key={noticia.id}
                                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                        onClick={() => abrirNoticia(noticia)}
                                    >
                                        <div className="relative h-44 sm:h-48">
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
                                                    className="px-2 py-1 rounded-full text-white text-xs font-medium"
                                                    style={{ backgroundColor: obtenerColorCategoria(noticia.categoria) }}
                                                >
                                                    {categorias.find(cat => cat.id === noticia.categoria)?.nombre}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4 sm:p-5">
                                            <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-verde transition-colors">
                                                {noticia.titulo}
                                            </h3>
                                            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                                                {noticia.resumenCorto}
                                            </p>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-700">
                                                <div className="flex items-center gap-1">
                                                    <CalendarDaysIcon className="h-3 w-3" />
                                                    {formatearFecha(noticia.fecha)}
                                                </div>
                                                <div className="flex gap-1">
                                                    {noticia.video && (
                                                        <PlayCircleIcon className="h-4 w-4 text-red-600" title="Incluye video" />
                                                    )}
                                                    {noticia.enlaceExterno && (
                                                        <LinkIcon className="h-4 w-4 text-blue-600" title="Enlace externo" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <MagnifyingGlassIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron noticias</h3>
                                <p className="text-gray-700">Intenta ajustar los filtros de búsqueda</p>
                            </div>
                        )}
                    </div>

                    {/* Contacto */}
                    <div className="bg-gradient-to-r from-verde to-verdeOscuro rounded-2xl p-6 sm:p-8 text-white text-center">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Tienes una noticia para compartir?</h3>
                        <p className="text-green-50 mb-6 text-sm sm:text-base px-4 sm:px-0">
                            Comparte con nosotros los eventos, logros y novedades de tu área
                        </p>
                        <a
                            href="mailto:comunicaciones@redmedicronips.com.co"
                            className="inline-flex items-center gap-2 bg-white text-verde px-4 sm:px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                        >
                            <ShareIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="break-all sm:break-normal">comunicaciones@redmedicronips.com.co</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Modal de Noticia Completa */}
            {modalAbierto && noticiaSeleccionada && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[90] flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto">
                    <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[98vh] sm:max-h-[90vh] overflow-y-auto mt-2 sm:mt-0 news-modal">
                        {/* Header del Modal */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between rounded-t-xl sm:rounded-t-2xl z-10">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                <span
                                    className="px-3 py-1 rounded-full text-white text-sm font-semibold w-fit"
                                    style={{ backgroundColor: obtenerColorCategoria(noticiaSeleccionada.categoria) }}
                                >
                                    {categorias.find(cat => cat.id === noticiaSeleccionada.categoria)?.nombre}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {formatearFecha(noticiaSeleccionada.fecha)}
                                </span>
                            </div>
                            <button
                                onClick={cerrarModal}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1 sm:p-2 ml-2 z-20"
                                aria-label="Cerrar modal"
                            >
                                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Contenido del Modal */}
                        <div className="p-4 sm:p-6">
                            {/* Imagen Principal */}
                            <div className="relative h-48 sm:h-64 lg:h-96 mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden">
                                <img
                                    src={noticiaSeleccionada.imagen}
                                    alt={noticiaSeleccionada.titulo}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = '/images/placeholder-news.jpg';
                                    }}
                                />
                            </div>

                            {/* Título y Metadatos */}
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                                {noticiaSeleccionada.titulo}
                            </h1>

                            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm text-gray-800 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
                                <div className="flex items-center gap-1">
                                    <UserIcon className="h-4 w-4" />
                                    <span>Por {noticiaSeleccionada.autor}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CalendarDaysIcon className="h-4 w-4" />
                                    <span>{formatearFecha(noticiaSeleccionada.fecha)}</span>
                                </div>
                                {noticiaSeleccionada.tags.length > 0 && (
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-1">
                                        <div className="flex items-center gap-1">
                                            <TagIcon className="h-4 w-4" />
                                            <span className="text-xs sm:text-sm">Tags:</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {noticiaSeleccionada.tags.map((tag, index) => (
                                                <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Contenido Principal */}
                            <div className="prose prose-sm sm:prose-lg max-w-none mb-6 sm:mb-8">
                                <p className="text-lg sm:text-xl text-gray-800 font-medium mb-4 sm:mb-6">
                                    {noticiaSeleccionada.descripcion}
                                </p>
                                <div className="text-gray-800 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
                                    {noticiaSeleccionada.contenidoCompleto}
                                </div>
                            </div>

                            {/* Video si existe */}
                            {noticiaSeleccionada.video && (
                                <div className="mb-6 sm:mb-8">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <PlayCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                                        Video relacionado
                                    </h3>
                                    <div className="aspect-w-16 aspect-h-9 rounded-lg sm:rounded-xl overflow-hidden">
                                        <iframe
                                            src={noticiaSeleccionada.video.replace('watch?v=', 'embed/')}
                                            title={noticiaSeleccionada.titulo}
                                            className="w-full h-48 sm:h-64 lg:h-80 rounded-lg sm:rounded-xl"
                                            frameBorder="0"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            )}

                            {/* Galería si tiene más de una imagen */}
                            {noticiaSeleccionada.galeria.length > 1 && (
                                <div className="mb-6 sm:mb-8">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <PhotoIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                                        Galería de fotos
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                        {noticiaSeleccionada.galeria.map((imagen, index) => (
                                            <img
                                                key={index}
                                                src={imagen}
                                                alt={`Galería ${index + 1}`}
                                                className="w-full h-32 sm:h-40 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/images/placeholder-news.jpg';
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Enlace Externo si existe */}
                            {noticiaSeleccionada.enlaceExterno && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                                    <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                                        <LinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                        Enlace relacionado
                                    </h3>
                                    <a
                                        href={noticiaSeleccionada.enlaceExterno}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline font-medium text-sm sm:text-base break-all"
                                    >
                                        Ver más información →
                                    </a>
                                </div>
                            )}

                            {/* Botones de Acción */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 pt-4 sm:pt-6 border-t border-gray-200">
                                <button
                                    onClick={cerrarModal}
                                    className="px-4 sm:px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base order-2 sm:order-1"
                                >
                                    Cerrar
                                </button>
                                <div className="flex flex-col sm:flex-row gap-3 order-1 sm:order-2">
                                    <button
                                        onClick={() => {
                                            if (navigator.share) {
                                                navigator.share({
                                                    title: noticiaSeleccionada.titulo,
                                                    text: noticiaSeleccionada.descripcion,
                                                    url: window.location.href
                                                });
                                            }
                                        }}
                                        className="px-4 sm:px-6 py-3 bg-verde text-white rounded-lg hover:bg-verdeOscuro transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                                    >
                                        <ShareIcon className="h-4 w-4" />
                                        Compartir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Noticias;
