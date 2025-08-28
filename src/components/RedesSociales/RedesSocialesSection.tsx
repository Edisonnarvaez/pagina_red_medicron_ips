import React, { useState, useEffect } from 'react';
import { FaYoutube, FaPlay, FaFacebook, FaInstagram, FaTiktok, FaHeart } from 'react-icons/fa';

// Extiende la interfaz Window para incluir FB
declare global {
    interface Window {
        FB?: any;
    }
}

interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
}

interface RedesSocialesSectionProps {
    videos?: Video[];
}

const RedesSocialesSection: React.FC<RedesSocialesSectionProps> = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Videos por defecto si no se pasan como props
    const defaultVideos: Video[] = [
        {
            id: "AcRy3TqP_DA",
            title: "FOMAC y Red Medicron IPS",
            description: "Conoce nuestra alianza estratégica",
            thumbnail: `https://img.youtube.com/vi/AcRy3TqP_DA/maxresdefault.jpg`
        },
        {
            id: "xFMYKF5lgho",
            title: "Plan Padrino Fundación Valle de Lili",
            description: "Programa de apoyo social",
            thumbnail: `https://img.youtube.com/vi/xFMYKF5lgho/maxresdefault.jpg`
        },
        {
            id: "fbFa74Kt61A",
            title: "Día del Trabajador - Red Medicron IPS",
            description: "Celebración y reconocimiento",
            thumbnail: `https://img.youtube.com/vi/fbFa74Kt61A/maxresdefault.jpg`
        }
    ];

    const youtubeVideos = videos || defaultVideos;

    // Reinicializar Facebook SDK con manejo de errores
    useEffect(() => {
        let retryCount = 0;
        const maxRetries = 3;
        
        const initFacebookSDK = () => {
            try {
                if (typeof window !== 'undefined' && window.FB) {
                    // Limpiar cualquier widget anterior
                    const existingWidgets = document.querySelectorAll('.fb-page');
                    existingWidgets.forEach(widget => {
                        if (widget.getAttribute('fb-xfbml-state') === 'rendered') {
                            widget.removeAttribute('fb-xfbml-state');
                        }
                    });
                    
                    // Re-parsear los widgets de Facebook
                    window.FB.XFBML.parse();
                } else if (retryCount < maxRetries) {
                    // Si FB no está disponible aún, reintentar
                    retryCount++;
                    setTimeout(initFacebookSDK, 2000 * retryCount);
                }
            } catch (error) {
                console.warn('Error inicializando Facebook SDK (no crítico):', error);
                // No mostrar error al usuario, es solo un widget
            }
        };
        
        // Esperar que el DOM y Facebook SDK estén listos
        const timer = setTimeout(initFacebookSDK, 3000);
        
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-primary-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-primary-100 rounded-full px-6 py-2 mb-4">
                        <FaHeart className="text-primary-600 mr-2" size={20} />
                        <span className="text-primary-700 font-semibold">Conecta con nosotros</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-primary-800 mb-6">
                        Síguenos en <span className="bg-gradient-to-r from-medical-500 to-primary-600 bg-clip-text text-transparent">Redes Sociales</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Mantente conectado con nosotros y descubre contenido exclusivo sobre salud, bienestar y los mejores cuidados médicos
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* YouTube Playlist Destacada con Reproductor */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-red-100 relative overflow-hidden">
                        {/* Fondo decorativo */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-100 rounded-full opacity-50"></div>
                        <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-red-50 rounded-full opacity-70"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                                    <FaYoutube className="text-white text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-gray-800">Canal YouTube</h3>
                                    <p className="text-gray-600 text-lg">Videos educativos y testimonios</p>
                                </div>
                            </div>

                            {/* Reproductor de Video */}
                            {selectedVideo ? (
                                <div className="mb-6">
                                    <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        ></iframe>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <button
                                            onClick={() => setSelectedVideo(null)}
                                            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                                        >
                                            ✕ Cerrar Reproductor
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 text-center">
                                    <FaPlay className="text-gray-400 text-6xl mx-auto mb-4" />
                                    <h4 className="text-xl font-bold text-gray-600 mb-2">Selecciona un video</h4>
                                    <p className="text-gray-500">Haz clic en cualquier video de la lista para reproducirlo aquí</p>
                                </div>
                            )}

                            {/* Playlist de Videos */}
                            <div className="space-y-4 mb-8">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">🎬 Videos Destacados</h4>
                                
                                {youtubeVideos.map((video) => (
                                    <div key={video.id} className={`group rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                                        selectedVideo === video.id 
                                            ? 'bg-gradient-to-r from-red-200 to-red-300 border-2 border-red-400' 
                                            : 'bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200'
                                    }`}
                                    onClick={() => setSelectedVideo(video.id)}
                                    >
                                        <div className="flex items-center">
                                            <div className="relative mr-4">
                                                <img 
                                                    src={video.thumbnail} 
                                                    alt={video.title}
                                                    className="w-20 h-12 object-cover rounded-lg"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        const fallback = target.nextElementSibling as HTMLElement;
                                                        if (fallback) fallback.style.display = 'flex';
                                                    }}
                                                />
                                                <div className="w-20 h-12 bg-red-500 rounded-lg hidden items-center justify-center">
                                                    <FaPlay className="text-white text-sm" />
                                                </div>
                                                <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                                    <FaPlay className="text-white text-lg drop-shadow-lg" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h5 className={`font-bold ${selectedVideo === video.id ? 'text-red-800' : 'text-red-700 group-hover:text-red-800'}`}>
                                                    {video.title}
                                                </h5>
                                                <p className={`text-sm ${selectedVideo === video.id ? 'text-red-700' : 'text-red-600'}`}>
                                                    {video.description}
                                                </p>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedVideo(video.id);
                                                    }}
                                                    className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${
                                                        selectedVideo === video.id
                                                            ? 'bg-red-600 text-white'
                                                            : 'bg-red-500 hover:bg-red-600 text-white'
                                                    }`}
                                                >
                                                    {selectedVideo === video.id ? '▶ Reproduciendo' : '▶ Reproducir'}
                                                </button>
                                                <a
                                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-white border border-red-500 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg font-semibold transition-colors text-sm text-center"
                                                >
                                                    🔗 YouTube
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Botones de acción del canal */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://youtube.com/@redmedicronips"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    🎥 Ver Canal Completo
                                </a>
                                <a
                                    href="https://youtube.com/@redmedicronips?sub_confirmation=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-white text-red-500 border-2 border-red-500 hover:bg-red-50 px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105"
                                >
                                    🔔 Suscribirse
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Otras Redes Sociales Modernas */}
                    <div className="space-y-6">
                        {/* Facebook Widget Embebido */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 relative overflow-hidden">
                            <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                        <FaFacebook className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-800 text-lg">Facebook</h4>
                                        <p className="text-gray-600">Síguenos en tiempo real</p>
                                        <p className="text-blue-500 text-sm font-semibold">@IPSmedicron</p>
                                    </div>
                                </div>
                                
                                {/* Widget de Facebook Mejorado */}
                                <div className="facebook-widget">
                                    <div className="fb-page" 
                                        data-href="https://www.facebook.com/IPSmedicron" 
                                        data-tabs="timeline" 
                                        data-width="300" 
                                        data-height="300" 
                                        data-small-header="true" 
                                        data-adapt-container-width="true" 
                                        data-hide-cover="false" 
                                        data-show-facepile="true"
                                        data-lazy="true"
                                        key="facebook-widget-unique">
                                        <blockquote className="fb-xfbml-parse-ignore" cite="https://www.facebook.com/IPSmedicron">
                                            <a href="https://www.facebook.com/IPSmedicron">Red Medicron IPS</a>
                                        </blockquote>
                                    </div>
                                    
                                    {/* Fallback si el widget no carga */}
                                    <div className="mt-3 text-center bg-blue-50 rounded-lg p-4">
                                        <p className="text-gray-600 text-sm mb-2">
                                            ¿No puedes ver nuestro feed de Facebook?
                                        </p>
                                        <a
                                            href="https://www.facebook.com/IPSmedicron"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 font-medium text-sm underline"
                                        >
                                            Visítanos directamente en Facebook
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Enlace directo */}
                                <div className="mt-4 text-center">
                                    <a
                                        href="https://www.facebook.com/IPSmedicron"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                                    >
                                        <FaFacebook className="mr-2" />
                                        Ver página completa
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/redmedicronips"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group relative overflow-hidden"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 group-hover:-translate-y-2 relative z-10">
                                <div className="absolute -top-2 -right-2 w-16 h-16 bg-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="flex items-center relative z-10">
                                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FaInstagram className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-800 text-lg">Instagram</h4>
                                        <p className="text-gray-600">Contenido visual</p>
                                        <p className="text-pink-500 text-sm font-semibold">@redmedicronips</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@redmedicronips"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group relative overflow-hidden"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-black/10 group-hover:-translate-y-2 relative z-10">
                                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-black/10 to-red-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="flex items-center relative z-10">
                                    <div className="w-14 h-14 bg-gradient-to-br from-black to-red-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FaTiktok className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-800 text-lg">TikTok</h4>
                                        <p className="text-gray-600">Videos creativos</p>
                                        <p className="text-black text-sm font-semibold">@redmedicronips</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Call to Action de Redes Sociales */}
                <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary-600 to-medical-500 rounded-3xl text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black mb-4">
                            🌟 ¡Únete a nuestra comunidad digital!
                        </h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                            Síguenos en todas nuestras redes sociales para estar al día con consejos de salud, noticias médicas y contenido educativo exclusivo.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">✨ Contenido educativo</span>
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">🏥 Noticias médicas</span>
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">💬 Interacción directa</span>
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">🎬 Videos exclusivos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RedesSocialesSection;
