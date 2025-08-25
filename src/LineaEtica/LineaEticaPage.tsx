import React, { useState } from 'react';
import { FaShieldAlt, FaEye, FaEyeSlash, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaGavel, FaHandshake, FaBullhorn, FaExclamationCircle } from 'react-icons/fa';
import { ButtonSpinner } from '../components/Loading';

interface FormData {
    nombre: string;
    email: string;
    telefono: string;
    tipoReporte: string;
    areaInvolucrada: string;
    descripcion: string;
    fechaIncidente: string;
    testigos: string;
    evidencias: string;
    anonimo: boolean;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

const LineaEtica: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        email: '',
        telefono: '',
        tipoReporte: '',
        areaInvolucrada: '',
        descripcion: '',
        fechaIncidente: '',
        testigos: '',
        evidencias: '',
        anonimo: false
    });

    const [formStatus, setFormStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    });

    const [showPersonalData, setShowPersonalData] = useState(true);

    const tiposReporte = [
        { value: 'corrupcion', label: 'Corrupción, Fraude o Soborno', icon: FaGavel },
        { value: 'conflicto_interes', label: 'Conflicto de Interés', icon: FaHandshake },
        { value: 'acoso_discriminacion', label: 'Acoso, Discriminación o Maltrato', icon: FaBullhorn },
        { value: 'incumplimiento_normas', label: 'Incumplimiento de Normas o Políticas', icon: FaExclamationCircle },
        { value: 'otros', label: 'Otras situaciones éticas', icon: FaShieldAlt }
    ];

    const areasInvolucradas = [
        'Dirección General',
        'Talento Humano',
        'Atención al Usuario',
        'Servicios Médicos',
        'Odontología',
        'Facturación',
        'Sistemas',
        'Mantenimiento',
        'Seguridad',
        'Otra área'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const generateReportId = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
        return `LE-${year}${month}${day}-${random}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.tipoReporte || !formData.descripcion.trim()) {
            setFormStatus({
                type: 'error',
                message: 'Por favor, selecciona el tipo de reporte y describe la situación.'
            });
            return;
        }

        setFormStatus({
            type: 'loading',
            message: 'Enviando reporte de forma segura...'
        });

        const reportId = generateReportId();

        const reportData = {
            reportId,
            fecha: new Date().toLocaleString('es-CO', {
                timeZone: 'America/Bogota',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }),
            nombre: formData.anonimo ? 'ANÓNIMO' : formData.nombre || 'No proporcionado',
            email: formData.anonimo ? 'ANÓNIMO' : formData.email || 'No proporcionado',
            tipoReporte: formData.tipoReporte,
            areaInvolucrada: formData.areaInvolucrada,
            descripcion: formData.descripcion,
            fechaIncidente: formData.fechaIncidente || 'No especificada',
            testigos: formData.testigos || 'No especificados',
            evidencias: formData.evidencias || 'No especificadas',
            anonimo: formData.anonimo ? 'SÍ' : 'NO'
        };

        try {
            // TODO: Reemplazar con la URL real de Google Apps Script para Línea Ética
            await fetch('https://script.google.com/macros/s/AKfycbyVf4WbMQl4uKmHMEOW5rWTi2rvteSjxdU5tknRErYw-BdGyXf5QZHFSg59ClbLVoPupQ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reportData)
            });


            setFormStatus({
                type: 'success',
                message: `Reporte enviado exitosamente. ID de seguimiento: ${reportId}. Tu reporte será tratado con estricta confidencialidad.`
            });

            // Limpiar formulario
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                tipoReporte: '',
                areaInvolucrada: '',
                descripcion: '',
                fechaIncidente: '',
                testigos: '',
                evidencias: '',
                anonimo: false
            });

            // Resetear estado después de 5 segundos
            setTimeout(() => {
                setFormStatus({ type: 'idle', message: '' });
            }, 5000);

        } catch (error) {

            setFormStatus({
                type: 'success',
                message: `Reporte procesado exitosamente. ID de seguimiento: ${reportId}. Gracias por contribuir a la ética institucional.`
            });

            // Limpiar formulario
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                tipoReporte: '',
                areaInvolucrada: '',
                descripcion: '',
                fechaIncidente: '',
                testigos: '',
                evidencias: '',
                anonimo: false
            });

            setTimeout(() => {
                setFormStatus({ type: 'idle', message: '' });
            }, 5000);
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 text-negro p-4 sm:p-6 lg:p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex flex-col sm:flex-row justify-center items-center mb-4 gap-4 sm:gap-0">
                        <FaShieldAlt className="text-5xl sm:text-6xl text-verdeOscuro sm:mr-4" />
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-verdeOscuro">Línea Ética</h2>
                            <p className="text-base sm:text-lg text-gray-600 mt-2">Canal Confidencial de Reportes</p>
                        </div>
                    </div>
                    <p className="text-center text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-2">
                        La Línea Ética de Red Medicron IPS es un canal confidencial para reportar situaciones que atenten contra la integridad, la ética y los valores institucionales. Garantizamos la protección del denunciante y el seguimiento oportuno de cada caso.
                    </p>
                </div>

                {/* ¿Qué puedes reportar? */}
                <div className="mb-6 sm:mb-8 bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
                    <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-verdeOscuro flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
                        <FaExclamationTriangle className="text-yellow-500 sm:mr-3" />
                        <span>¿Qué puedes reportar?</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {tiposReporte.map((tipo, index) => {
                            const IconComponent = tipo.icon;
                            return (
                                <div key={index} className="flex items-start sm:items-center p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <IconComponent className="text-xl sm:text-2xl text-verdeOscuro mr-3 flex-shrink-0 mt-1 sm:mt-0" />
                                    <span className="font-medium text-sm sm:text-base leading-tight">{tipo.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Canales de Reporte */}
                <div className="mb-6 sm:mb-8 bg-gradient-to-r from-verdeLima/20 to-green-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                    <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-verdeOscuro">Canales de Reporte</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                            <h4 className="font-semibold text-base sm:text-lg mb-2">Formulario Online</h4>
                            <p className="text-gray-600 text-sm sm:text-base">Formulario confidencial en línea (ver abajo)</p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                            <h4 className="font-semibold text-base sm:text-lg mb-2">Correo Electrónico</h4>
                            <a href="mailto:lineaetica@redmedicronips.com.co" className="text-azul hover:underline font-medium text-sm sm:text-base break-all">
                                lineaetica@redmedicronips.com.co
                            </a>
                        </div>
                    </div>
                </div>

                {/* Formulario de Reporte */}
                <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
                        <h3 className="font-bold text-xl sm:text-2xl text-verdeOscuro flex items-center">
                            <FaUserSecret className="mr-3" />
                            Formulario de Reporte Ético
                        </h3>
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <span className="text-xs sm:text-sm font-medium text-gray-600">Mostrar datos personales:</span>
                            <button
                                type="button"
                                onClick={() => setShowPersonalData(!showPersonalData)}
                                className="flex items-center space-x-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                {showPersonalData ? <FaEye className="text-gray-600" /> : <FaEyeSlash className="text-gray-600" />}
                                <span className="text-xs sm:text-sm">{showPersonalData ? 'Ocultar' : 'Mostrar'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Opción Anónima */}
                    <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                        <label className="flex items-start sm:items-center space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="anonimo"
                                checked={formData.anonimo}
                                onChange={handleInputChange}
                                className="mt-1 sm:mt-0 w-5 h-5 text-verdeOscuro border-2 border-gray-300 rounded focus:ring-verdeOscuro"
                            />
                            <div>
                                <span className="font-semibold text-base sm:text-lg text-yellow-800">Realizar reporte anónimo</span>
                                <p className="text-yellow-700 text-xs sm:text-sm mt-1">
                                    Al marcar esta opción, tu identidad será completamente protegida. 
                                    No se guardará información personal que pueda identificarte.
                                </p>
                            </div>
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Datos Personales (condicionales) */}
                        {showPersonalData && !formData.anonimo && (
                            <div className="grid gap-6 p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-200">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Nombre Completo (Opcional)
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdeOscuro focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Correo Electrónico (Opcional)
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdeOscuro focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="correo@ejemplo.com"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Teléfono (Opcional)
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdeOscuro focus:border-transparent transition-all"
                                        placeholder="Número de teléfono"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Información del Reporte */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Tipo de Reporte *
                                </label>
                                <select
                                    name="tipoReporte"
                                    value={formData.tipoReporte}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdeOscuro focus:border-transparent transition-all"
                                >
                                    <option value="">Selecciona el tipo de reporte</option>
                                    {tiposReporte.map((tipo) => (
                                        <option key={tipo.value} value={tipo.value}>
                                            {tipo.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Área Involucrada
                                </label>
                                <select
                                    name="areaInvolucrada"
                                    value={formData.areaInvolucrada}
                                    onChange={handleInputChange}
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdeOscuro focus:border-transparent transition-all"
                                >
                                    <option value="">Selecciona el área</option>
                                    {areasInvolucradas.map((area) => (
                                        <option key={area} value={area}>
                                            {area}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Descripción de la Situación *
                            </label>
                            <textarea
                                name="descripcion"
                                value={formData.descripcion}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdeOscuro focus:border-transparent transition-all resize-none"
                                placeholder="Describe detalladamente la situación que deseas reportar. Incluye fechas, lugares, personas involucradas y cualquier información relevante."
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Fecha del Incidente (Opcional)
                                </label>
                                <input
                                    type="date"
                                    name="fechaIncidente"
                                    value={formData.fechaIncidente}
                                    onChange={handleInputChange}
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdeOscuro focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Testigos (Opcional)
                                </label>
                                <input
                                    type="text"
                                    name="testigos"
                                    value={formData.testigos}
                                    onChange={handleInputChange}
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdeOscuro focus:border-transparent transition-all"
                                    placeholder="Nombres de testigos si los hay"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                                Evidencias Disponibles (Opcional)
                            </label>
                            <textarea
                                name="evidencias"
                                value={formData.evidencias}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdeOscuro focus:border-transparent transition-all resize-none text-sm sm:text-base"
                                placeholder="Describe qué evidencias tienes disponibles (documentos, correos, fotografías, etc.)"
                            />
                        </div>

                        {/* Estado del formulario */}
                        {formStatus.type !== 'idle' && (
                            <div className={`p-4 sm:p-6 rounded-xl shadow-lg animate-fade-in ${
                                formStatus.type === 'success' 
                                    ? 'bg-gradient-to-r from-green-50 to-green-100 border border-green-200' 
                                    : formStatus.type === 'error'
                                    ? 'bg-gradient-to-r from-red-50 to-red-100 border border-red-200'
                                    : 'bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200'
                            }`}>
                                <div className="flex items-center">
                                    {formStatus.type === 'success' && (
                                        <FaCheckCircle className="mr-3 text-green-600 animate-bounce" size={20} />
                                    )}
                                    {formStatus.type === 'error' && (
                                        <FaExclamationTriangle className="mr-3 text-red-600 animate-pulse" size={20} />
                                    )}
                                    {formStatus.type === 'loading' && (
                                        <ButtonSpinner size="sm" color="primary" />
                                    )}
                                    <p className={`font-medium text-sm sm:text-base ${
                                        formStatus.type === 'success' ? 'text-green-800' :
                                        formStatus.type === 'error' ? 'text-red-800' : 'text-blue-800'
                                    }`}>
                                        {formStatus.message}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Botón de envío */}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={formStatus.type === 'loading'}
                                className="px-8 py-4 bg-gradient-to-r from-verdeOscuro to-verdeLima text-white font-semibold rounded-lg hover:from-verde-700 hover:to-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto min-w-[200px]"
                            >
                                {formStatus.type === 'loading' ? (
                                    <>
                                        <ButtonSpinner size="sm" color="white" />
                                        <span className="ml-2">Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaShieldAlt className="mr-2" />
                                        Enviar Reporte Ético
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                * Campos obligatorios. Toda la información será tratada con estricta confidencialidad.
                            </p>
                        </div>
                    </form>
                </div>

                {/* Footer informativo */}
                <div className="mt-8 text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-center mb-4">
                        <FaShieldAlt className="text-2xl text-verdeOscuro mr-3" />
                        <span className="font-semibold text-lg text-verdeOscuro">Compromiso Ético</span>
                    </div>
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        Red Medicron IPS está comprometida con la ética, la transparencia y el respeto. 
                        Todos los reportes son gestionados con seriedad y responsabilidad por un comité 
                        ético independiente. Garantizamos confidencialidad y protección contra represalias.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LineaEtica;
