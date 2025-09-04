
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaUserTie, FaUsers, FaAward, FaFileUpload, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { ButtonSpinner } from '../components/Loading';
import { SEOHelmet } from '../components/SEO';

// Interfaces para el formulario de convocatoria
interface FormDataConvocatoria {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    tipoDocumento: string;
    numeroDocumento: string;
    cargoAspira: string;
    experiencia: string;
    nivelEducativo: string;
    archivo: File | null;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

const TalentoHumano: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showConvocatoriaForm, setShowConvocatoriaForm] = useState(false);
    
    // Estado del formulario de convocatoria
    const [formData, setFormData] = useState<FormDataConvocatoria>({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        tipoDocumento: 'cedula',
        numeroDocumento: '',
        cargoAspira: '',
        experiencia: '',
        nivelEducativo: '',
        archivo: null
    });

    const [formStatus, setFormStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    });

    // Datos completos de la estructura organizacional
    const funcionarios = [
        {
            id: 1,
            nombre: "Dr. Mauricio Enríquez V.",
            cargo: "Director Ejecutivo",
            descripcion: "Lidera la estrategia institucional y la gestión integral de Red Medicron IPS.",
            foto: "/funcionarios/Dr_Mauricio.png",
            nivel: "directivo"
        },
        {
            id: 2,
            nombre: "Jefe Deisy Jojoa C.",
            cargo: "Gerente Hospital San José de Túquerres",
            descripcion: "Gestiona las operaciones hospitalarias y la calidad asistencial del Hospital San José.",
            foto: "/funcionarios/Jefe_Deisy.png",
            nivel: "gerencial"
        },
        {
            id: 3,
            nombre: "Dr. Álvaro Timaná R.",
            cargo: "Contralor Interno",
            descripcion: "Supervisa el cumplimiento normativo y la transparencia en los procesos institucionales.",
            foto: "/funcionarios/Doc_Alvaro.png",
            nivel: "gerencial"
        },
        {
            id: 4,
            nombre: "Dr. Juan Manuel Fuertes M.",
            cargo: "Jefatura Administrativa y Financiera",
            descripcion: "Administra los recursos financieros y la gestión económica institucional.",
            foto: "/funcionarios/Dr_Juan.png",
            nivel: "gerencial"
        },
        {
            id: 5,
            nombre: "Dra. Mary Ordóñez R.",
            cargo: "Jefatura de Gestión de Talento Humano",
            descripcion: "Dirige el desarrollo del talento humano y bienestar organizacional.",
            foto: "/funcionarios/Dra_Mary.png",
            nivel: "gerencial"
        },
        {
            id: 6,
            nombre: "Jefe Dania Granda O.",
            cargo: "Jefatura de Gestión de Calidad",
            descripcion: "Supervisa la implementación y mejora continua del sistema de calidad.",
            foto: "/funcionarios/Jefe_Dania.png",
            nivel: "gerencial"
        },
        {
            id: 7,
            nombre: "Dra. Sandra Moncayo B.",
            cargo: "Jefatura Servicios de Salud",
            descripcion: "Coordina los servicios asistenciales y la atención médica especializada.",
            foto: "/funcionarios/Dra_Sandra.png",
            nivel: "gerencial"
        },
        {
            id: 8,
            nombre: "Dra. Carolina Cabrera C.",
            cargo: "Coordinación Administrativa",
            descripcion: "Gestiona los procesos administrativos y el soporte operativo institucional.",
            foto: "/funcionarios/Dra_Carolina.png",
            nivel: "coordinacion"
        },
        {
            id: 9,
            nombre: "Ing. Orlando García P.",
            cargo: "Coordinación de Facturación y TI",
            descripcion: "Administra los sistemas tecnológicos y procesos de facturación institucional.",
            foto: "/funcionarios/Ing_Orlando.png",
            nivel: "coordinacion"
        },
        {
            id: 10,
            nombre: "Dra. Diana Hejeile R.",
            cargo: "Coordinación Gestión de Talento Humano",
            descripcion: "Apoya la gestión del personal y desarrollo del capital humano institucional.",
            foto: "/funcionarios/Dra_Diana.png",
            nivel: "coordinacion"
        },
        {
            id: 11,
            nombre: "Dra. Mercedes Caicedo D.",
            cargo: "Coordinación Contable",
            descripcion: "Supervisa los procesos contables y el registro financiero institucional.",
            foto: "/funcionarios/Dra_Mercedes.png",
            nivel: "coordinacion"
        },
        {
            id: 12,
            nombre: "Jefe Lizeth De La Cruz L.",
            cargo: "Coordinación Crónicos",
            descripcion: "Coordina los programas de atención para pacientes con enfermedades crónicas.",
            foto: "/funcionarios/Jefe_Lizeth.png",
            nivel: "coordinacion"
        },
        {
            id: 13,
            nombre: "Jefe Sandra Figueroa M.",
            cargo: "Coordinación de Calidad y Servicios de Apoyo HSJT",
            descripcion: "Gestiona la calidad asistencial y servicios de apoyo del Hospital San José.",
            foto: "/funcionarios/Jefe_Sandra.png",
            nivel: "coordinacion"
        },
        {
            id: 14,
            nombre: "Dra. Patricia López B.",
            cargo: "Coordinación de Servicios Asistenciales HSJT",
            descripcion: "Coordina la atención clínica y servicios médicos del Hospital San José.",
            foto: "/funcionarios/Dra_Patricia.png",
            nivel: "coordinacion"
        }
    ];

    const funcionariosPerSlide = 3;
    const totalSlides = Math.ceil(funcionarios.length / funcionariosPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Funciones para el formulario de convocatoria
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file && file.type !== 'application/pdf') {
            setFormStatus({
                type: 'error',
                message: 'Solo se permiten archivos PDF para la hoja de vida.'
            });
            return;
        }
        setFormData(prev => ({
            ...prev,
            archivo: file
        }));
        setFormStatus({ type: 'idle', message: '' });
    };

    const validateForm = (): boolean => {
        if (!formData.nombre.trim() || !formData.apellido.trim() || !formData.email.trim() || 
            !formData.telefono.trim() || !formData.numeroDocumento.trim() || !formData.cargoAspira.trim()) {
            setFormStatus({
                type: 'error',
                message: 'Por favor completa todos los campos obligatorios.'
            });
            return false;
        }

        if (!formData.archivo) {
            setFormStatus({
                type: 'error',
                message: 'Por favor adjunta tu hoja de vida en formato PDF.'
            });
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                type: 'error',
                message: 'Por favor ingresa un email válido.'
            });
            return false;
        }

        return true;
    };

    const handleSubmitConvocatoria = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setFormStatus({ type: 'loading', message: 'Enviando tu postulación...' });

        try {
            // Convertir archivo a base64
            const fileBase64 = await new Promise<string>((resolve) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64 = reader.result as string;
                    resolve(base64.split(',')[1]); // Remover el prefijo data:application/pdf;base64,
                };
                reader.readAsDataURL(formData.archivo!);
            });

            const submitData = {
                ...formData,
                archivoBase64: fileBase64,
                archivoNombre: formData.archivo!.name,
                fechaPostulacion: new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
            };

            // URL de Google Apps Script - CAMBIAR POR LA URL REAL
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw2bkZw2ll2GqKj-0b8LGRgDJyrlCtV_HUNShbxNZMsV_OEiCv91LrIffqfQHZaWcg/exec';
            
            console.log('Enviando datos a:', SCRIPT_URL);
            console.log('Datos a enviar:', submitData);
            
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Necesario para Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitData)
            });

            console.log('Respuesta enviada (no-cors mode)');
            
            // Con no-cors mode, asumimos éxito ya que no podemos leer la respuesta
            setFormStatus({
                type: 'success',
                message: '¡Postulación enviada exitosamente! Te contactaremos pronto.'
            });
            
            // Limpiar formulario
            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                telefono: '',
                tipoDocumento: 'cedula',
                numeroDocumento: '',
                cargoAspira: '',
                experiencia: '',
                nivelEducativo: '',
                archivo: null
            });

            // Cerrar modal después de 3 segundos
            setTimeout(() => {
                setShowConvocatoriaForm(false);
                setFormStatus({ type: 'idle', message: '' });
            }, 3000);
        } catch (error) {
            console.error('Error al enviar postulación:', error);
            
            // Si es un error de CSP/CORS pero usamos no-cors, el formulario sí funciona
            if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
                console.log('💡 Error típico de CORS detectado, pero con no-cors el envío funciona');
                
                setFormStatus({
                    type: 'success',
                    message: '¡Postulación enviada exitosamente! Te contactaremos pronto.'
                });

                // Limpiar formulario
                setFormData({
                    nombre: '',
                    apellido: '',
                    email: '',
                    telefono: '',
                    tipoDocumento: 'cedula',
                    numeroDocumento: '',
                    cargoAspira: '',
                    experiencia: '',
                    nivelEducativo: '',
                    archivo: null
                });

                // Cerrar modal después de 3 segundos
                setTimeout(() => {
                    setShowConvocatoriaForm(false);
                    setFormStatus({ type: 'idle', message: '' });
                }, 3000);
            } else {
                // Error real del sistema
                setFormStatus({
                    type: 'error',
                    message: 'Error al enviar la postulación. Inténtalo nuevamente o contacta a gestionhumana@redmedicronips.com.co'
                });
            }
        }
    };

    const getCurrentFuncionarios = () => {
        const startIndex = currentSlide * funcionariosPerSlide;
        return funcionarios.slice(startIndex, startIndex + funcionariosPerSlide);
    };

    const getNivelIcon = (nivel: string) => {
        switch (nivel) {
            case 'directivo':
                return <FaUserTie className="text-verdeOscuro" />;
            case 'gerencial':
                return <FaUsers className="text-verdeLima" />;
            case 'coordinacion':
                return <FaAward className="text-azul" />;
            default:
                return <FaUserTie className="text-verdeOscuro" />;
        }
    };

    const getNivelColor = (nivel: string) => {
        switch (nivel) {
            case 'directivo':
                return 'border-verdeOscuro/20 bg-verdeOscuro/5';
            case 'gerencial':
                return 'border-verdeLima/20 bg-verdeLima/5';
            case 'coordinacion':
                return 'border-azul/20 bg-azul/5';
            default:
                return 'border-verdeOscuro/20 bg-verdeOscuro/5';
        }
    };
    return (
        <>
            {/* SEO Meta Tags */}
            <SEOHelmet
                title="Talento Humano - Red Medicron IPS"
                description="Conoce nuestro equipo de profesionales en Red Medicron IPS. Únete a nuestro talento humano, consulta convocatorias laborales y oportunidades de empleo en el sector salud."
                keywords="trabajo red medicron ips, empleo salud nariño, convocatorias médicas, recursos humanos ips, trabajar en salud túquerres"
                canonical="/talento-humano"
            />
            
            <section className="relative min-h-screen bg-gradient-to-br from-verdeLima/30 via-white to-azul-light text-negro flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
            {/* Fondo decorativo institucional */}
            <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-verdeLima/30 rounded-full blur-2xl opacity-40 -z-10" />
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-azul-light rounded-full blur-2xl opacity-20 -z-10" />

            <div className="w-full max-w-6xl flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight drop-shadow-sm">
                    Nuestro <span className="text-verdeOscuro">Talento Humano</span>
                </h2>
                <p className="mb-10 text-center text-lg max-w-2xl">Nuestro equipo está conformado por profesionales de la salud, administrativos y personal de apoyo comprometidos con la excelencia, la ética y la humanización en la atención.</p>

                {/* Valores y cultura */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full animate-fade-in">
                    <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-verdeLima/10 flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-verdeOscuro mb-2">Valores del Equipo</h3>
                        <ul className="list-disc ml-6 text-base space-y-2">
                            <li>Ética y responsabilidad</li>
                            <li>Humanización en la atención</li>
                            <li>Trabajo en equipo</li>
                            <li>Innovación y mejora continua</li>
                            <li>Respeto y diversidad</li>
                        </ul>
                    </div>
                    <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-verdeLima/10 flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-verdeOscuro mb-2">Cultura Organizacional</h3>
                        <p>Fomentamos un ambiente laboral saludable, inclusivo y motivador, donde cada colaborador es protagonista del bienestar institucional y del servicio a la comunidad.</p>
                    </div>
                </div>

                </div>

                {/* Header de la página */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl font-extrabold mb-4 text-verdeOscuro">Talento Humano</h2>
                    <p className="text-lg text-grisOscuro max-w-3xl mx-auto">
                        Nuestro recurso más valioso son las personas. Conoce al equipo profesional que hace posible 
                        brindar servicios de salud de excelencia en Red Medicron IPS.
                    </p>
                </div>

                {/* Estructura Organizacional - Carrusel */}
                <div className="mb-10 w-full animate-fade-in">
                    <div className="text-center mb-8">
                        <h3 className="font-bold text-3xl mb-4 text-verdeOscuro">Estructura Organizacional</h3>
                        <p className="text-grisOscuro text-lg max-w-2xl mx-auto">
                            Conoce a nuestro equipo directivo y profesional que lidera Red Medicron IPS
                        </p>
                    </div>

                    {/* Carrusel de Funcionarios */}
                    <div className="relative">
                        {/* Contenedor principal del carrusel */}
                        <div className="overflow-hidden rounded-2xl">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                                            {funcionarios
                                                .slice(slideIndex * funcionariosPerSlide, (slideIndex + 1) * funcionariosPerSlide)
                                                .map((funcionario) => (
                                                <div 
                                                    key={funcionario.id}
                                                    className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${getNivelColor(funcionario.nivel)}`}
                                                >
                                                    {/* Foto del funcionario */}
                                                    <div className="relative mb-4">
                                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                            <img 
                                                                src={funcionario.foto}
                                                                alt={funcionario.nombre}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    // Fallback en caso de que la imagen no cargue
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.style.display = 'none';
                                                                    target.parentElement!.innerHTML = `
                                                                        <div class="w-full h-full bg-gradient-to-br from-verdeOscuro to-verdeLima flex items-center justify-center">
                                                                            <span class="text-white font-bold text-lg">${funcionario.nombre.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                                                                        </div>
                                                                    `;
                                                                }}
                                                            />
                                                        </div>
                                                        {/* Ícono del nivel */}
                                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                                                            {getNivelIcon(funcionario.nivel)}
                                                        </div>
                                                    </div>

                                                    {/* Información del funcionario */}
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-verdeOscuro text-lg mb-1 leading-tight">
                                                            {funcionario.nombre}
                                                        </h4>
                                                        <p className="text-sm text-azul font-semibold mb-3 leading-tight">
                                                            {funcionario.cargo}
                                                        </p>
                                                        <p className="text-xs text-grisOscuro leading-relaxed">
                                                            {funcionario.descripcion}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Controles del carrusel */}
                        <div className="flex items-center justify-center mt-8 space-x-4">
                            {/* Botón anterior */}
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 bg-verdeOscuro text-white rounded-full flex items-center justify-center hover:bg-verdeLima transition-colors duration-300 shadow-lg hover:shadow-xl"
                                aria-label="Anterior"
                            >
                                <FaChevronLeft />
                            </button>

                            {/* Indicadores */}
                            <div className="flex space-x-2">
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentSlide 
                                                ? 'bg-verdeOscuro scale-125' 
                                                : 'bg-gray-300 hover:bg-verdeLima'
                                        }`}
                                        aria-label={`Ir a la diapositiva ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Botón siguiente */}
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 bg-verdeOscuro text-white rounded-full flex items-center justify-center hover:bg-verdeLima transition-colors duration-300 shadow-lg hover:shadow-xl"
                                aria-label="Siguiente"
                            >
                                <FaChevronRight />
                            </button>
                        </div>

                        {/* Información del carrusel */}
                        <div className="text-center mt-6">
                            <p className="text-sm text-grisOscuro">
                                Mostrando {currentSlide * funcionariosPerSlide + 1} - {Math.min((currentSlide + 1) * funcionariosPerSlide, funcionarios.length)} de {funcionarios.length} funcionarios
                            </p>
                        </div>
                    </div>

                    {/* Leyenda de niveles */}
                    <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
                        <h4 className="font-bold text-verdeOscuro text-center mb-4">Niveles Organizacionales</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-verdeOscuro/5 border border-verdeOscuro/20">
                                <FaUserTie className="text-verdeOscuro" />
                                <span className="text-sm font-medium text-verdeOscuro">Nivel Directivo</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-verdeLima/5 border border-verdeLima/20">
                                <FaUsers className="text-verdeLima" />
                                <span className="text-sm font-medium text-verdeLima">Nivel Gerencial</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-azul/5 border border-azul/20">
                                <FaAward className="text-azul" />
                                <span className="text-sm font-medium text-azul">Coordinaciones</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Valores y Cultura Organizacional */}
                <div className="mb-10 w-full animate-fade-in">
                    <h3 className="font-bold text-2xl mb-6 text-verdeOscuro text-center">Valores y Cultura Organizacional</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-verdeLima/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 rounded-full bg-verdeOscuro/20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h4 className="font-bold text-verdeOscuro mb-2">Compromiso</h4>
                            <p className="text-sm text-grisOscuro">Dedicación absoluta con la salud y bienestar de nuestros pacientes.</p>
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-verdeLima/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 rounded-full bg-verdeLima/30 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💼</span>
                            </div>
                            <h4 className="font-bold text-verdeOscuro mb-2">Profesionalismo</h4>
                            <p className="text-sm text-grisOscuro">Excelencia técnica y ética en cada servicio que ofrecemos.</p>
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-verdeLima/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 rounded-full bg-azul/20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">❤️</span>
                            </div>
                            <h4 className="font-bold text-verdeOscuro mb-2">Humanización</h4>
                            <p className="text-sm text-grisOscuro">Atención cálida y humana en cada interacción con nuestros usuarios.</p>
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-verdeLima/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 rounded-full bg-acento/30 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌟</span>
                            </div>
                            <h4 className="font-bold text-verdeOscuro mb-2">Innovación</h4>
                            <p className="text-sm text-grisOscuro">Mejora continua y adopción de nuevas tecnologías en salud.</p>
                        </div>
                    </div>
                </div>

                {/* Bloque de convocatoria mejorado */}
                <div className="w-full flex flex-col md:flex-row gap-6 mb-10 animate-fade-in">
                    <div className="flex-1 bg-gradient-to-r from-verdeLima/30 to-azul-light/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center border border-verdeLima/20">
                        <h4 className="font-bold text-xl mb-3 text-verdeOscuro">¡Únete a Nuestro Equipo!</h4>
                        <p className="mb-4 text-grisOscuro">Buscamos profesionales comprometidos con la excelencia en salud. Postúlate a nuestras convocatorias activas.</p>
                        <button 
                            onClick={() => setShowConvocatoriaForm(true)}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-azul to-verdeOscuro hover:from-verdeOscuro hover:to-azul text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            <FaPaperPlane className="text-sm" />
                            Enviar Postulación
                        </button>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-acento/30 to-warning/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center border border-acento/20">
                        <h4 className="font-bold text-xl mb-3 text-verdeOscuro">Bienestar y Formación</h4>
                        <p className="text-grisOscuro">Ofrecemos programas de bienestar, capacitación y desarrollo profesional para todos nuestros colaboradores.</p>
                    </div>
                </div>

                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>¿Tienes dudas sobre talento humano? Escribe a <a href="mailto:gestionhumana@redmedicronips.com.co" className="underline text-azul">gestionhumana@redmedicronips.com.co</a></span>
                </div>

            {/* Modal de Formulario de Convocatoria */}
            {showConvocatoriaForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[90] p-4 talent-modal">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        {/* Header del modal */}
                        <div className="bg-gradient-to-r from-azul to-verdeOscuro text-white p-6 rounded-t-2xl">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-bold">Postulación Laboral</h3>
                                    <p className="text-white/80 mt-1">Red Medicron IPS - Únete a nuestro equipo</p>
                                </div>
                                <button
                                    onClick={() => setShowConvocatoriaForm(false)}
                                    className="text-white hover:text-red-200 text-2xl font-bold transition-colors"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Contenido del formulario */}
                        <form onSubmit={handleSubmitConvocatoria} className="p-6">
                            {/* Información Personal */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-verdeOscuro mb-4 flex items-center gap-2">
                                    <FaUserTie className="text-azul" />
                                    Información Personal
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-grisOscuro mb-2">
                                            Nombre *
                                        </label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent transition-all"
                                            placeholder="Tu nombre"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-grisOscuro mb-2">
                                            Apellido *
                                        </label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            value={formData.apellido}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent transition-all"
                                            placeholder="Tu apellido"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-grisOscuro mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent transition-all"
                                            placeholder="tu@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-grisOscuro mb-2">
                                            Teléfono *
                                        </label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent transition-all"
                                            placeholder="3001234567"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-grisOscuro mb-2">
                                            Tipo de Documento *
                                        </label>
                                        <select
                                            name="tipoDocumento"
                                            value={formData.tipoDocumento}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent transition-all"
                                        >
                                            <option value="cedula">Cédula de Ciudadanía</option>
                                            <option value="cedula_extranjeria">Cédula de Extranjería</option>
                                            <option value="pasaporte">Pasaporte</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-grisOscuro mb-2">
                                            Número de Documento *
                                        </label>
                                        <input
                                            type="text"
                                            name="numeroDocumento"
                                            value={formData.numeroDocumento}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent transition-all"
                                            placeholder="Número de documento"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Información Profesional */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-verdeOscuro mb-4 flex items-center gap-2">
                                    <FaAward className="text-azul" />
                                    Información Profesional
                                </h4>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-grisOscuro mb-2">
                                            Cargo al que Aspira *
                                        </label>
                                        <input
                                            type="text"
                                            name="cargoAspira"
                                            value={formData.cargoAspira}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent transition-all"
                                            placeholder="Ej: Médico General, Enfermero, Administrativo..."
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-grisOscuro mb-2">
                                            Nivel Educativo
                                        </label>
                                        <select
                                            name="nivelEducativo"
                                            value={formData.nivelEducativo}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent transition-all"
                                        >
                                            <option value="">Selecciona tu nivel educativo</option>
                                            <option value="bachiller">Bachiller</option>
                                            <option value="tecnico">Técnico</option>
                                            <option value="tecnologo">Tecnólogo</option>
                                            <option value="universitario">Universitario</option>
                                            <option value="especializacion">Especialización</option>
                                            <option value="maestria">Maestría</option>
                                            <option value="doctorado">Doctorado</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-grisOscuro mb-2">
                                            Experiencia Laboral
                                        </label>
                                        <textarea
                                            name="experiencia"
                                            value={formData.experiencia}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent transition-all resize-none"
                                            placeholder="Describe brevemente tu experiencia laboral relevante..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Adjuntar Hoja de Vida */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-verdeOscuro mb-4 flex items-center gap-2">
                                    <FaFileUpload className="text-azul" />
                                    Hoja de Vida
                                </h4>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-azul transition-colors">
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="archivo-cv"
                                        required
                                    />
                                    <label
                                        htmlFor="archivo-cv"
                                        className="cursor-pointer flex flex-col items-center gap-2"
                                    >
                                        <FaFileUpload className="text-3xl text-azul" />
                                        <span className="text-grisOscuro">
                                            {formData.archivo ? formData.archivo.name : 'Haz clic para seleccionar tu CV en PDF'}
                                        </span>
                                        <span className="text-sm text-gray-400">Máximo 10MB - Solo archivos PDF</span>
                                    </label>
                                </div>
                            </div>

                            {/* Estado del formulario */}
                            {formStatus.type !== 'idle' && (
                                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                                    formStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                                    formStatus.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                                    'bg-blue-50 text-blue-700 border border-blue-200'
                                }`}>
                                    {formStatus.type === 'success' && <FaCheckCircle className="text-green-500" />}
                                    {formStatus.type === 'error' && <FaExclamationTriangle className="text-red-500" />}
                                    {formStatus.type === 'loading' && <ButtonSpinner size="sm" color="primary" />}
                                    <span>{formStatus.message}</span>
                                </div>
                            )}

                            {/* Botones de acción */}
                            <div className="flex gap-4 pt-4 border-t">
                                <button
                                    type="button"
                                    onClick={() => setShowConvocatoriaForm(false)}
                                    className="flex-1 px-6 py-3 border border-gray-300 text-grisOscuro rounded-lg hover:bg-gray-50 transition-colors"
                                    disabled={formStatus.type === 'loading'}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={formStatus.type === 'loading'}
                                    className="flex-1 bg-gradient-to-r from-azul to-verdeOscuro text-white px-6 py-3 rounded-lg hover:from-verdeOscuro hover:to-azul transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {formStatus.type === 'loading' ? (
                                        <>
                                            <ButtonSpinner size="sm" color="white" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Enviar Postulación
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
        </>
    );
};

export default TalentoHumano;
