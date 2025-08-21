import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaUser, FaBuilding, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { MdHealthAndSafety, MdLocalHospital, MdSend } from 'react-icons/md';

interface FormData {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    tipoConsulta: string;
    sede: string;
    mensaje: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

const Contacto: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        tipoConsulta: '',
        sede: '',
        mensaje: ''
    });

    const [formStatus, setFormStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    });

    // URL de tu Google Apps Script (deberás reemplazar esto con tu URL real)
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

    const tiposConsulta = [
        { value: 'informacion-general', label: 'Información General', icon: MdHealthAndSafety },
        { value: 'citas-medicas', label: 'Citas Médicas', icon: MdLocalHospital },
        { value: 'servicios', label: 'Consulta sobre Servicios', icon: FaBuilding },
        { value: 'facturacion', label: 'Facturación', icon: FaUser },
        { value: 'urgencias', label: 'Urgencias/Emergencias', icon: FaPhone },
        { value: 'otro', label: 'Otro', icon: FaEnvelope }
    ];

    const sedes = [
        { value: 'hospital-pasto', label: 'Hospital - Pasto' },
        { value: 'sede-ipiales', label: 'Sede Ipiales' },
        { value: 'sede-tuquerres', label: 'Sede Túquerres' },
        { value: 'sede-tumaco', label: 'Sede Tumaco' },
        { value: 'sede-samaniego', label: 'Sede Samaniego' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', message: 'Enviando mensaje...' });

        try {
            // Preparar los datos para enviar
            const dataToSend = {
                ...formData,
                timestamp: new Date().toISOString(),
                fechaEnvio: new Date().toLocaleDateString('es-CO'),
                horaEnvio: new Date().toLocaleTimeString('es-CO')
            };

            // Enviar a Google Apps Script
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Necesario para Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend)
            });

            // Como usamos no-cors, asumimos que se envió correctamente
            setFormStatus({
                type: 'success',
                message: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.'
            });

            // Limpiar el formulario
            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                telefono: '',
                tipoConsulta: '',
                sede: '',
                mensaje: ''
            });

        } catch (error) {
            console.error('Error al enviar:', error);
            setFormStatus({
                type: 'error',
                message: 'Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente.'
            });
        }
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-medical-50 py-16 px-4 overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-medical-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] bg-primary-200/30 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-accent-200/20 rounded-full blur-2xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-medical-200/50 shadow-soft">
                        <FaEnvelope className="text-medical-600 mr-3" size={20} />
                        <span className="text-medical-700 font-bold text-sm tracking-wider uppercase">CONTÁCTANOS</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6 leading-tight">
                        Estamos Aquí Para 
                        <span className="block bg-gradient-to-r from-medical-600 to-primary-600 bg-clip-text text-transparent">
                            Ayudarte
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comunícate con nosotros para resolver tus dudas, agendar citas o conocer más sobre nuestros servicios de salud
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Información de contacto */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-medical-200/50 shadow-soft hover:shadow-medium transition-all duration-300">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <MdHealthAndSafety className="text-medical-600 mr-3" size={28} />
                                Información de Contacto
                            </h3>

                            <div className="space-y-6">
                                {/* Teléfono principal */}
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                                        <FaPhone className="text-primary-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Teléfono Principal</h4>
                                        <p className="text-gray-600">+57 (2) 123-4567</p>
                                        <p className="text-sm text-gray-500">Línea de atención 24/7</p>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                                        <FaWhatsapp className="text-green-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">WhatsApp</h4>
                                        <p className="text-gray-600">+57 300 123 4567</p>
                                        <p className="text-sm text-gray-500">Disponible 24 horas</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent-200 transition-colors">
                                        <FaEnvelope className="text-accent-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Email</h4>
                                        <p className="text-gray-600">contacto@redmedicronips.com</p>
                                        <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                                    </div>
                                </div>

                                {/* Ubicación */}
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-medical-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-medical-200 transition-colors">
                                        <FaMapMarkerAlt className="text-medical-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Sede Principal</h4>
                                        <p className="text-gray-600">Calle 18 No. 23-45</p>
                                        <p className="text-gray-600">Pasto, Nariño</p>
                                        <p className="text-sm text-gray-500">Colombia</p>
                                    </div>
                                </div>

                                {/* Horarios */}
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-200 transition-colors">
                                        <FaClock className="text-gray-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Horarios de Atención</h4>
                                        <p className="text-gray-600">Lun - Vie: 7:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Sábados: 8:00 AM - 2:00 PM</p>
                                        <p className="text-sm text-gray-500">Urgencias 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botón de WhatsApp */}
                        <a
                            href="https://wa.me/573001234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105"
                        >
                            <FaWhatsapp className="inline mr-3" size={24} />
                            Chatea con nosotros por WhatsApp
                        </a>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-medical-200/50 shadow-soft">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <FaPaperPlane className="text-primary-600 mr-3" size={24} />
                                Envíanos un Mensaje
                            </h3>

                            {/* Estado del formulario */}
                            {formStatus.type !== 'idle' && (
                                <div className={`mb-6 p-4 rounded-xl border ${
                                    formStatus.type === 'success' 
                                        ? 'bg-green-50 border-green-200 text-green-800' 
                                        : formStatus.type === 'error'
                                        ? 'bg-red-50 border-red-200 text-red-800'
                                        : 'bg-blue-50 border-blue-200 text-blue-800'
                                }`}>
                                    <div className="flex items-center">
                                        {formStatus.type === 'success' && <FaCheckCircle className="mr-2" />}
                                        {formStatus.type === 'error' && <FaExclamationTriangle className="mr-2" />}
                                        {formStatus.type === 'loading' && <div className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full mr-2" />}
                                        <span>{formStatus.message}</span>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Nombres */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nombre *
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white/70 backdrop-blur-sm"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="apellido" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Apellido *
                                        </label>
                                        <input
                                            type="text"
                                            id="apellido"
                                            name="apellido"
                                            value={formData.apellido}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white/70 backdrop-blur-sm"
                                            placeholder="Tu apellido"
                                        />
                                    </div>
                                </div>

                                {/* Email y Teléfono */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white/70 backdrop-blur-sm"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white/70 backdrop-blur-sm"
                                            placeholder="300 123 4567"
                                        />
                                    </div>
                                </div>

                                {/* Tipo de consulta y Sede */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="tipoConsulta" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Tipo de Consulta *
                                        </label>
                                        <select
                                            id="tipoConsulta"
                                            name="tipoConsulta"
                                            value={formData.tipoConsulta}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white/70 backdrop-blur-sm"
                                        >
                                            <option value="">Selecciona un tipo</option>
                                            {tiposConsulta.map((tipo) => (
                                                <option key={tipo.value} value={tipo.value}>
                                                    {tipo.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="sede" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Sede de Interés
                                        </label>
                                        <select
                                            id="sede"
                                            name="sede"
                                            value={formData.sede}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white/70 backdrop-blur-sm"
                                        >
                                            <option value="">Selecciona una sede</option>
                                            {sedes.map((sede) => (
                                                <option key={sede.value} value={sede.value}>
                                                    {sede.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white/70 backdrop-blur-sm resize-none"
                                        placeholder="Escribe tu mensaje aquí..."
                                    />
                                </div>

                                {/* Botón de envío */}
                                <button
                                    type="submit"
                                    disabled={formStatus.type === 'loading'}
                                    className="w-full bg-gradient-to-r from-primary-600 to-medical-600 hover:from-primary-700 hover:to-medical-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] flex items-center justify-center"
                                >
                                    {formStatus.type === 'loading' ? (
                                        <>
                                            <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <MdSend className="mr-3" size={20} />
                                            Enviar Mensaje
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Información adicional */}
                            <div className="mt-8 p-4 bg-medical-50 rounded-xl border border-medical-200">
                                <p className="text-sm text-medical-700">
                                    <strong>Nota:</strong> Los campos marcados con (*) son obligatorios. 
                                    Tu información será tratada de acuerdo a nuestra política de privacidad y será utilizada únicamente para dar respuesta a tu consulta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de urgencias */}
                <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                        <FaPhone className="mr-3 animate-pulse" size={28} />
                        ¿Tienes una Emergencia?
                    </h3>
                    <p className="text-xl mb-6">
                        Para urgencias médicas, contacta inmediatamente:
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="tel:+573001234567"
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            📞 Llamar Urgencias: +57 300 123 4567
                        </a>
                        <a
                            href="https://wa.me/573001234567?text=Tengo%20una%20emergencia%20médica"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            📱 WhatsApp Urgencias
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
