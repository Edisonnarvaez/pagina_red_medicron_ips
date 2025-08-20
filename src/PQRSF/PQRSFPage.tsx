import React, { useState } from 'react';
import { FaComments, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExclamationCircle, FaThumbsUp, FaPaperPlane } from 'react-icons/fa';
import { MdSend, MdSupportAgent, MdFeedback } from 'react-icons/md';

const PQRSF: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        tipo: '',
        mensaje: '',
        sede: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        console.log('Formulario enviado:', formData);
        alert('Tu PQRSF ha sido enviada exitosamente. Te contactaremos pronto.');
    };

    const tiposSolicitud = [
        { value: 'peticion', label: 'Petición', icon: FaComments, color: 'text-azul', description: 'Solicitud de información o servicio' },
        { value: 'queja', label: 'Queja', icon: FaExclamationCircle, color: 'text-warning', description: 'Inconformidad por la atención recibida' },
        { value: 'reclamo', label: 'Reclamo', icon: MdFeedback, color: 'text-red-500', description: 'Exigencia de un derecho o corrección' },
        { value: 'sugerencia', label: 'Sugerencia', icon: MdSend, color: 'text-verdeLima', description: 'Propuesta de mejora' },
        { value: 'felicitacion', label: 'Felicitación', icon: FaThumbsUp, color: 'text-verdeOscuro', description: 'Reconocimiento a un buen servicio' }
    ];

    const canalesAtencion = [
        { icon: FaEnvelope, titulo: 'Correo Electrónico', descripcion: 'pqrsf@redmedicron.com', link: 'mailto:pqrsf@redmedicron.com' },
        { icon: FaPhone, titulo: 'Línea Telefónica', descripcion: '01 8000 123 456 opción 3', link: 'tel:018000123456' },
        { icon: FaMapMarkerAlt, titulo: 'Puntos Físicos', descripcion: 'En cada una de nuestras 7 sedes', link: '/sedes' },
        { icon: MdSupportAgent, titulo: 'Chat en Línea', descripcion: 'Próximamente disponible', link: '#' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-azul-light/20 via-white to-verdeLima/10">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-azul-light/20 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-verdeLima/20 rounded-full blur-2xl -z-10" />
                
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-azul">
                        PQRSF
                    </h1>
                    <p className="text-lg md:text-xl text-grisOscuro max-w-3xl mx-auto mb-12 leading-relaxed">
                        En Red Medicron IPS valoramos tu opinión. Utiliza este canal para enviar peticiones, 
                        quejas, reclamos, sugerencias o felicitaciones. Cada mensaje es una oportunidad para mejorar.
                    </p>
                </div>
            </section>

            {/* Tipos de Solicitud */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-verdeOscuro mb-4">
                            ¿Qué puedes <span className="text-azul">registrar?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        {tiposSolicitud.map((tipo, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-azul-light to-azul rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <tipo.icon className={`text-2xl text-white`} />
                                </div>
                                <h3 className="text-lg font-bold text-verdeOscuro mb-2">{tipo.label}</h3>
                                <p className="text-sm text-grisOscuro">{tipo.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Canales de Atención */}
            <section className="py-16 px-4 bg-gradient-to-r from-verdeLima/10 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-verdeOscuro mb-4">
                            Canales de <span className="text-azul">Atención</span>
                        </h2>
                        <p className="text-grisOscuro text-lg">Múltiples formas de contactarnos</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {canalesAtencion.map((canal, index) => (
                            <a 
                                key={index} 
                                href={canal.link}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group block"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-verdeLima to-verdeOscuro rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <canal.icon className="text-white text-xl" />
                                </div>
                                <h3 className="text-lg font-bold text-verdeOscuro mb-2">{canal.titulo}</h3>
                                <p className="text-sm text-grisOscuro">{canal.descripcion}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulario */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-azul mb-4">Formulario PQRSF</h2>
                            <p className="text-grisOscuro">Completa el formulario y nos pondremos en contacto contigo</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-verdeOscuro mb-2">
                                        Nombre Completo *
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-azul focus:outline-none transition-colors"
                                        placeholder="Tu nombre completo"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-verdeOscuro mb-2">
                                        Correo Electrónico *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-azul focus:outline-none transition-colors"
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-verdeOscuro mb-2">
                                        Tipo de Solicitud *
                                    </label>
                                    <select
                                        name="tipo"
                                        value={formData.tipo}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-azul focus:outline-none transition-colors"
                                        required
                                    >
                                        <option value="">Selecciona el tipo</option>
                                        {tiposSolicitud.map((tipo) => (
                                            <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-verdeOscuro mb-2">
                                        Sede Relacionada
                                    </label>
                                    <select
                                        name="sede"
                                        value={formData.sede}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-azul focus:outline-none transition-colors"
                                    >
                                        <option value="">Selecciona una sede</option>
                                        <option value="tuquerres">Hospital Tuquerres</option>
                                        <option value="pasto">Sede Pasto</option>
                                        <option value="ipiales">Sede Ipiales</option>
                                        <option value="tumaco">Sede Tumaco</option>
                                        <option value="launion">Sede La Unión</option>
                                        <option value="sandona">Sede Sandoná</option>
                                        <option value="samaniego">Sede Samaniego</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-verdeOscuro mb-2">
                                    Describe tu solicitud *
                                </label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-azul focus:outline-none transition-colors resize-vertical"
                                    placeholder="Describe detalladamente tu petición, queja, reclamo, sugerencia o felicitación..."
                                    required
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center bg-gradient-to-r from-azul to-verdeOscuro hover:from-azul-dark hover:to-verdeOscuro text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <FaPaperPlane className="mr-2" />
                                    Enviar PQRSF
                                </button>
                            </div>

                            <div className="bg-azul-light/10 rounded-xl p-4 text-center">
                                <p className="text-sm text-grisOscuro">
                                    * Campos obligatorios. Tu información será tratada con confidencialidad 
                                    y recibirás respuesta en los tiempos establecidos por la ley.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Info */}
            <section className="py-16 px-4 bg-gradient-to-r from-verdeOscuro to-azul">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Nuestro Compromiso</h3>
                    <p className="text-white/90 text-lg mb-6">
                        Red Medicron IPS responde a todas las PQRSF con transparencia y oportunidad. 
                        Gracias por ayudarnos a mejorar continuamente nuestros servicios.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                            <span className="text-acento font-bold">Peticiones:</span>
                            <span className="text-white ml-2">15 días hábiles</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                            <span className="text-acento font-bold">Quejas/Reclamos:</span>
                            <span className="text-white ml-2">15 días hábiles</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PQRSF;
