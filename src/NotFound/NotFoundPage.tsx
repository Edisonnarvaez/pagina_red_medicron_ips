import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, FaMapMarkerAlt, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import { MdHealthAndSafety, MdContactSupport } from 'react-icons/md';

const NotFound: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-azul-light/20 via-white to-verdeLima/10 flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-azul-light/20 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-verdeLima/20 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute top-1/3 right-1/4 w-[150px] h-[150px] bg-acento/10 rounded-full blur-2xl opacity-40 -z-10" />

            <div className="w-full max-w-4xl flex flex-col items-center text-center">
                {/* Ícono principal */}
                <div className="relative mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-azul to-verdeOscuro rounded-full flex items-center justify-center shadow-2xl mb-4 animate-pulse-soft">
                        <FaExclamationTriangle className="text-white text-5xl" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-acento rounded-full flex items-center justify-center shadow-lg">
                        <MdHealthAndSafety className="text-white text-xl" />
                    </div>
                </div>

                {/* Código 404 */}
                <div className="mb-6">
                    <h1 className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-azul via-verdeOscuro to-acento bg-clip-text leading-none animate-fade-in">
                        404
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-azul to-verdeLima mx-auto mt-2 rounded-full"></div>
                </div>

                {/* Mensaje principal */}
                <h2 className="text-3xl md:text-4xl font-bold text-verdeOscuro mb-4 animate-fade-in-up">
                    ¡Ups! Página no encontrada
                </h2>
                
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed animate-fade-in-up">
                    La página que buscas no existe o ha sido movida. No te preocupes, en Red Medicron IPS 
                    siempre encontrarás el camino hacia el cuidado de tu salud.
                </p>

                {/* Sugerencias de navegación */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-3xl animate-fade-in">
                    {/* Inicio */}
                    <Link 
                        to="/"
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-azul to-azul-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <FaHome className="text-white text-2xl" />
                        </div>
                        <h3 className="font-bold text-azul mb-2">Página Principal</h3>
                        <p className="text-sm text-gray-600">Volver al inicio y conocer nuestros servicios</p>
                    </Link>

                    {/* Servicios */}
                    <Link 
                        to="/servicios"
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-verdeOscuro to-verdeLima rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <MdHealthAndSafety className="text-white text-2xl" />
                        </div>
                        <h3 className="font-bold text-verdeOscuro mb-2">Nuestros Servicios</h3>
                        <p className="text-sm text-gray-600">Descubre todo lo que tenemos para ti</p>
                    </Link>

                    {/* Contacto */}
                    <Link 
                        to="/contacto"
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-acento to-warning rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <MdContactSupport className="text-white text-2xl" />
                        </div>
                        <h3 className="font-bold text-acento mb-2">Contáctanos</h3>
                        <p className="text-sm text-gray-600">Estamos aquí para ayudarte</p>
                    </Link>
                </div>

                {/* Botones de acción principales */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-azul to-verdeOscuro hover:from-azul-dark hover:to-verdeOscuro text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                    >
                        <FaArrowLeft className="mr-3" size={18} />
                        Volver al Inicio
                    </Link>
                    
                    <Link
                        to="/sedes"
                        className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white text-azul font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 text-lg border border-azul/20"
                    >
                        <FaMapMarkerAlt className="mr-3" size={18} />
                        Nuestras Sedes
                    </Link>
                </div>

                {/* Información de contacto de emergencia */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-blue-100 max-w-2xl w-full animate-fade-in">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                            <FaPhone className="text-white text-xl" />
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-700 text-lg">¿Necesitas contactarnos?</h4>
                            <p className="text-blue-600">Nuestras líneas disponibles para ti son:</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                        <div className="bg-white/60 rounded-lg p-4">
                            <p className="font-bold text-blue-700">Nariño</p>
                            <a href="tel:+573183380107" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                318 338 0107
                            </a>
                        </div>
                        <div className="bg-white/60 rounded-lg p-4">
                            <p className="font-bold text-blue-700">Túquerres</p>
                            <a href="tel:+573216660990" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                321 666 0990
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mensaje de pie */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        Red Medicron IPS - Cuidamos vidas con calidad y humanidad.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
