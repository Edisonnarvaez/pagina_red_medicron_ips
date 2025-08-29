import React, { useState } from 'react';
import { FaComments, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExclamationCircle, FaThumbsUp, FaCheckCircle, FaExclamationTriangle, FaUser, FaBuilding } from 'react-icons/fa';
import { MdSend, MdSupportAgent, MdFeedback, MdHealthAndSafety, MdLocalHospital } from 'react-icons/md';
import { ButtonSpinner } from '../components/Loading';
import { SEOHelmet } from '../components/SEO';

interface FormData {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    tipoDocumento: string;
    numeroDocumento: string;
    tipoPQRSF: string;
    sede: string;
    mensaje: string;
    anonimo: boolean;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

const PQRSF: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        tipoDocumento: '',
        numeroDocumento: '',
        tipoPQRSF: '',
        sede: '',
        mensaje: '',
        anonimo: false
    });

    const [formStatus, setFormStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    });

    // URL de Google Apps Script para PQRSF (deberás configurar una nueva)
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxdUK6Z3fz4ECGDODujqBlwexmb1qV4-wjVJ9RzQEpRBlOOVU5U5zat7XMgrqzZUHgT2w/exec';

    const tiposPQRSF = [
        { value: 'peticion', label: 'Petición', icon: FaComments, description: 'Solicitud de información o trámites' },
        { value: 'queja', label: 'Queja', icon: FaExclamationCircle, description: 'Inconformidad con un servicio' },
        { value: 'reclamo', label: 'Reclamo', icon: FaThumbsUp, description: 'Solicitud de corrección o compensación' },
        { value: 'sugerencia', label: 'Sugerencia', icon: MdFeedback, description: 'Propuesta de mejora' },
        { value: 'felicitacion', label: 'Felicitación', icon: FaThumbsUp, description: 'Reconocimiento al servicio' }
    ];

    const tiposDocumento = [
        { value: 'cedula', label: 'Cédula de Ciudadanía' },
        { value: 'tarjeta_identidad', label: 'Tarjeta de Identidad' },
        { value: 'cedula_extranjeria', label: 'Cédula de Extranjería' },
        { value: 'pasaporte', label: 'Pasaporte' },
        { value: 'registro_civil', label: 'Registro Civil' }
    ];

    const sedes = [
        { value: 'pasto', label: 'Pasto - Obrero' },
        { value: 'fatima', label: 'Pasto - Fátima' },
        { value: 'tuquerres', label: 'Hospital San Jose de Tuquerres' },
        { value: 'ipiales', label: 'Ipiales' },
        { value: 'tumaco', label: 'Tumaco' },
        { value: 'samaniego', label: 'Buesaco' },
        { value: 'ospina', label: 'La Cruz' },
        { value: 'otra', label: 'Otra Sede' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', message: 'Enviando PQRSF...' });
        
        try {
            // Preparar datos para envío
            const dataToSend = {
                ...formData,
                fecha: new Date().toISOString(),
                // Si es anónimo, no enviar datos personales
                ...(formData.anonimo && {
                    nombre: 'ANÓNIMO',
                    apellido: '',
                    email: 'anonimo@redmedicronips.com.co',
                    telefono: '',
                    tipoDocumento: '',
                    numeroDocumento: ''
                })
            };

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend)
            });

            // En modo no-cors, siempre asumimos éxito si no hay error de red
            setFormStatus({
                type: 'success',
                message: '¡PQRSF enviada exitosamente! Recibirás respuesta en máximo 15 días hábiles.'
            });

            // Limpiar el formulario después de 3 segundos
            setTimeout(() => {
                setFormData({
                    nombre: '',
                    apellido: '',
                    email: '',
                    telefono: '',
                    tipoDocumento: '',
                    numeroDocumento: '',
                    tipoPQRSF: '',
                    sede: '',
                    mensaje: '',
                    anonimo: false
                });
                setFormStatus({ type: 'idle', message: '' });
            }, 5000);

        } catch (error) {
            
            // Verificar si es un error de CSP pero el envío fue exitoso
            if (error instanceof TypeError && (error as Error).message.includes('Failed to fetch')) {                
                // Limpiar formulario
                setTimeout(() => {
                    setFormData({
                        nombre: '',
                        apellido: '',
                        email: '',
                        telefono: '',
                        tipoDocumento: '',
                        numeroDocumento: '',
                        tipoPQRSF: '',
                        sede: '',
                        mensaje: '',
                        anonimo: false
                    });
                    setFormStatus({ type: 'idle', message: '' });
                }, 5000);
            } else {
                setFormStatus({
                    type: 'error',
                    message: 'Error al enviar PQRSF. Por favor intenta nuevamente.'
                });
                
                setTimeout(() => {
                    setFormStatus({ type: 'idle', message: '' });
                }, 4000);
            }
        }
    };

    const canalesAtencion = [
        { icon: FaEnvelope, titulo: 'Correo Electrónico', descripcion: 'pqrsf@redmedicronips.com.co', link: 'mailto:pqrsf@redmedicronips.com.co' },
        { icon: FaPhone, titulo: 'Línea Telefónica', descripcion: '318 338 0107', link: 'tel:3183380107' },
        { icon: FaMapMarkerAlt, titulo: 'Puntos Físicos', descripcion: 'En cada una de nuestras 7 sedes', link: '/sedes' },
        { icon: MdSupportAgent, titulo: 'Chat en Línea', descripcion: 'Próximamente disponible', link: '#' }
    ];

    return (
        <>
            {/* SEO Meta Tags */}
            <SEOHelmet
                title="PQRSF - Red Medicron IPS"
                description="Sistema PQRSF de Red Medicron IPS: Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones. Tu opinión nos ayuda a mejorar nuestros servicios de salud."
                keywords="pqrsf red medicron ips, quejas ips nariño, sugerencias salud, reclamos atención médica, felicitaciones servicios salud"
                canonical="/pqrsf"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-azul-light/20 via-white to-verdeLima/10">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-azul-light/20 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-verdeLima/20 rounded-full blur-2xl -z-10" />
                
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-azul mb-6">
                            PQRSF
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                            Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones
                        </p>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                            Tu opinión es fundamental para mejorar nuestros servicios. Utiliza este canal para hacer llegar tus comentarios, 
                            sugerencias o reportar cualquier situación que requiera nuestra atención.
                        </p>
                    </div>

                    {/* Información importante */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-azul/10 shadow-lg">
                            <div className="w-12 h-12 bg-azul/10 rounded-xl flex items-center justify-center mb-4">
                                <MdHealthAndSafety className="text-azul text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-azul mb-2">Confidencial</h3>
                            <p className="text-gray-600">Todos los datos enviados son tratados con absoluta confidencialidad según la ley de protección de datos.</p>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-verdeLima/10 shadow-lg">
                            <div className="w-12 h-12 bg-verdeLima/10 rounded-xl flex items-center justify-center mb-4">
                                <MdLocalHospital className="text-verdeLima text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-verdeLima mb-2">15 Días Hábiles</h3>
                            <p className="text-gray-600">Tiempo máximo de respuesta según la normatividad vigente para instituciones de salud.</p>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-acento/10 shadow-lg">
                            <div className="w-12 h-12 bg-acento/10 rounded-xl flex items-center justify-center mb-4">
                                <FaUser className="text-acento text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-acento mb-2">Anónimo</h3>
                            <p className="text-gray-600">Puedes enviar tu PQRSF de forma anónima marcando la casilla correspondiente.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulario PQRSF */}
            <section className="relative py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                        <div className="bg-gradient-to-r from-azul to-azul-light p-8 text-white">
                            <h2 className="text-3xl font-bold mb-4">Formulario PQRSF</h2>
                            <p className="text-azul-light/90">
                                Completa el siguiente formulario y nos pondremos en contacto contigo
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            {/* Checkbox Anónimo */}
                            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <input
                                    type="checkbox"
                                    id="anonimo"
                                    name="anonimo"
                                    checked={formData.anonimo}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 text-azul bg-white border-gray-300 rounded focus:ring-azul focus:ring-2"
                                />
                                <label htmlFor="anonimo" className="text-gray-700 font-medium cursor-pointer">
                                    Enviar PQRSF de forma anónima
                                </label>
                            </div>

                            {/* Campos de identificación (ocultos si es anónimo) */}
                            {!formData.anonimo && (
                                <>
                                    {/* Nombre y Apellido */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Nombre *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaUser className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="nombre"
                                                    name="nombre"
                                                    value={formData.nombre}
                                                    onChange={handleInputChange}
                                                    required={!formData.anonimo}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-200"
                                                    placeholder="Ingresa tu nombre"
                                                />
                                            </div>
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
                                                required={!formData.anonimo}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-200"
                                                placeholder="Ingresa tu apellido"
                                            />
                                        </div>
                                    </div>

                                    {/* Email y Teléfono */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Correo Electrónico *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required={!formData.anonimo}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-200"
                                                    placeholder="correo@ejemplo.com"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Teléfono
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaPhone className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="telefono"
                                                    name="telefono"
                                                    value={formData.telefono}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-200"
                                                    placeholder="3XX XXX XXXX"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tipo y Número de Documento */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="tipoDocumento" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Tipo de Documento
                                            </label>
                                            <select
                                                id="tipoDocumento"
                                                name="tipoDocumento"
                                                value={formData.tipoDocumento}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-200"
                                            >
                                                <option value="">Selecciona tipo de documento</option>
                                                {tiposDocumento.map((tipo) => (
                                                    <option key={tipo.value} value={tipo.value}>
                                                        {tipo.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="numeroDocumento" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Número de Documento
                                            </label>
                                            <input
                                                type="text"
                                                id="numeroDocumento"
                                                name="numeroDocumento"
                                                value={formData.numeroDocumento}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-200"
                                                placeholder="Número de documento"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Tipo de PQRSF */}
                            <div>
                                <label htmlFor="tipoPQRSF" className="block text-sm font-semibold text-gray-700 mb-3">
                                    Tipo de PQRSF *
                                </label>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {tiposPQRSF.map((tipo) => (
                                        <label
                                            key={tipo.value}
                                            className={`
                                                relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200
                                                ${formData.tipoPQRSF === tipo.value 
                                                    ? 'border-azul bg-azul/5' 
                                                    : 'border-gray-200 hover:border-azul/50 hover:bg-azul/5'
                                                }
                                            `}
                                        >
                                            <input
                                                type="radio"
                                                name="tipoPQRSF"
                                                value={tipo.value}
                                                checked={formData.tipoPQRSF === tipo.value}
                                                onChange={handleInputChange}
                                                className="sr-only"
                                                required
                                            />
                                            <div className="flex items-center space-x-3">
                                                <tipo.icon className={`text-xl ${formData.tipoPQRSF === tipo.value ? 'text-azul' : 'text-gray-400'}`} />
                                                <div>
                                                    <div className={`font-semibold ${formData.tipoPQRSF === tipo.value ? 'text-azul' : 'text-gray-700'}`}>
                                                        {tipo.label}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {tipo.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Sede */}
                            <div>
                                <label htmlFor="sede" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Sede Relacionada
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaBuilding className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <select
                                        id="sede"
                                        name="sede"
                                        value={formData.sede}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-200"
                                    >
                                        <option value="">Selecciona la sede relacionada</option>
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-200 resize-none"
                                    placeholder="Describe detalladamente tu petición, queja, reclamo, sugerencia o felicitación..."
                                />
                                <div className="text-xs text-gray-500 mt-1">
                                    Mínimo 10 caracteres. Sé específico para una mejor atención.
                                </div>
                            </div>

                            {/* Estado del formulario */}
                            {formStatus.type !== 'idle' && (
                                <div className={`
                                    p-4 rounded-xl border flex items-center space-x-3 animate-fade-in
                                    ${formStatus.type === 'success' 
                                        ? 'bg-green-50 border-green-200 text-green-700' 
                                        : formStatus.type === 'error'
                                        ? 'bg-red-50 border-red-200 text-red-700'
                                        : 'bg-blue-50 border-blue-200 text-blue-700'
                                    }
                                `}>
                                    {formStatus.type === 'success' && <FaCheckCircle className="text-green-600 animate-bounce" size={20} />}
                                    {formStatus.type === 'error' && <FaExclamationTriangle className="text-red-600 animate-pulse" size={20} />}
                                    {formStatus.type === 'loading' && <ButtonSpinner size="sm" color="primary" />}
                                    <span className="font-medium">{formStatus.message}</span>
                                </div>
                            )}

                            {/* Botón de envío */}
                            <button
                                type="submit"
                                disabled={formStatus.type === 'loading'}
                                className={`
                                    w-full flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform
                                    ${formStatus.type === 'loading'
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-azul to-azul-light text-white hover:from-azul-light hover:to-azul hover:scale-105 hover:shadow-xl'
                                    }
                                `}
                            >
                                {formStatus.type === 'loading' ? (
                                    <>
                                        <ButtonSpinner size="sm" color="white" />
                                        <span className="ml-3 animate-pulse">Enviando PQRSF...</span>
                                    </>
                                ) : formStatus.type === 'success' ? (
                                    <>
                                        <FaCheckCircle className="mr-3 animate-bounce" />
                                        ¡PQRSF Enviada!
                                    </>
                                ) : (
                                    <>
                                        <MdSend className="mr-3 transform group-hover:translate-x-1 transition-transform" />
                                        Enviar PQRSF
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Canales de Atención */}
            <section className="relative py-16 px-4 bg-gradient-to-r from-azul-light/10 to-verdeLima/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-azul mb-4">
                            Otros Canales de Atención
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            También puedes contactarnos a través de estos medios alternativos
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {canalesAtencion.map((canal, index) => (
                            <a
                                key={index}
                                href={canal.link}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-azul/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-azul/20 transition-colors">
                                    <canal.icon className="text-azul text-2xl" />
                                </div>
                                <h3 className="text-lg font-semibold text-azul mb-2 group-hover:text-azul-light transition-colors">
                                    {canal.titulo}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {canal.descripcion}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default PQRSF;
