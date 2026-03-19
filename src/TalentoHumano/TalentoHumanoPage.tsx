import React, { useState } from 'react';
import {
    FaChevronLeft,
    FaChevronRight,
    FaUserTie,
    FaUsers,
    FaAward,
    FaFileUpload,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationTriangle,
    FaCalendarAlt,
    FaEnvelope,
    FaFileAlt
} from 'react-icons/fa';
import { ButtonSpinner } from '../components/Loading';
import { SEOHelmet } from '../components/SEO';
import ConsejoCarousel, { type Miembro } from "../TalentoHumano/ConsejoCarousel";

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

    const [formStatus, setFormStatus] = useState<FormStatus>({ type: 'idle', message: '' });

    const funcionarios = [
        { id: 1, nombre: "Dr. Mauricio Enríquez V.", cargo: "Director Ejecutivo", descripcion: "Lidera la estrategia institucional y la gestión integral de Red Medicron IPS.", foto: "/funcionarios/Dr_Mauricio.png", nivel: "directivo" },
        { id: 2, nombre: "Jefe Deisy Jojoa C.", cargo: "Gerente Hospital San José de Túquerres", descripcion: "Gestiona las operaciones hospitalarias y la calidad asistencial del Hospital San José.", foto: "/funcionarios/Jefe_Deisy.png", nivel: "gerencial" },
        { id: 3, nombre: "Dr. Álvaro Timaná R.", cargo: "Contralor Interno", descripcion: "Supervisa el cumplimiento normativo y la transparencia en los procesos institucionales.", foto: "/funcionarios/Doc_Alvaro.png", nivel: "gerencial" },
        { id: 4, nombre: "Dr. Juan Manuel Fuertes M.", cargo: "Jefatura Administrativa y Financiera", descripcion: "Administra los recursos financieros y la gestión económica institucional.", foto: "/funcionarios/Dr_Juan.png", nivel: "gerencial" },
        { id: 5, nombre: "Dra. Mary Ordóñez R.", cargo: "Jefatura de Gestión de Talento Humano", descripcion: "Dirige el desarrollo del talento humano y bienestar organizacional.", foto: "/funcionarios/Dra_Mary.png", nivel: "gerencial" },
        { id: 6, nombre: "Jefe Dania Granda O.", cargo: "Jefatura de Gestión de Calidad", descripcion: "Supervisa la implementación y mejora continua del sistema de calidad.", foto: "/funcionarios/Jefe_Dania.png", nivel: "gerencial" },
        { id: 7, nombre: "Dra. Sandra Moncayo B.", cargo: "Jefatura Servicios de Salud", descripcion: "Coordina los servicios asistenciales y la atención médica especializada.", foto: "/funcionarios/Dra_Sandra.png", nivel: "gerencial" },
        { id: 8, nombre: "Dra. Carolina Cabrera C.", cargo: "Coordinación Administrativa", descripcion: "Gestiona los procesos administrativos y el soporte operativo institucional.", foto: "/funcionarios/Dra_Carolina.png", nivel: "coordinacion" },
        { id: 9, nombre: "Ing. Aldemar Santiago Lucano.", cargo: "Coordinación de Facturación y TI", descripcion: "Administra los sistemas tecnológicos y procesos de facturación institucional.", foto: "/funcionarios/Ing_Aldemar.png", nivel: "coordinacion" },
        { id: 10, nombre: "Dra. Diana Hejeile R.", cargo: "Coordinación Gestión de Talento Humano", descripcion: "Apoya la gestión del personal y desarrollo del capital humano institucional.", foto: "/funcionarios/Dra_Diana.png", nivel: "coordinacion" },
        { id: 11, nombre: "Dra. Nelly Lucia Constain M.", cargo: "Coordinación Contable", descripcion: "Supervisa los procesos contables y el registro financiero institucional.", foto: "/funcionarios/Dra_Nelly.png", nivel: "coordinacion" },
        { id: 12, nombre: "Jefe Lizeth De La Cruz L.", cargo: "Coordinación Crónicos", descripcion: "Coordina los programas de atención para pacientes con enfermedades crónicas.", foto: "/funcionarios/Jefe_Lizeth.png", nivel: "coordinacion" },
        { id: 13, nombre: "Jefe Sandra Figueroa M.", cargo: "Coordinación de Calidad y Servicios de Apoyo HSJT", descripcion: "Gestiona la calidad asistencial y servicios de apoyo del Hospital San José.", foto: "/funcionarios/Jefe_Sandra.png", nivel: "coordinacion" },
        { id: 14, nombre: "Dra. Patricia López B.", cargo: "Coordinación de Servicios Asistenciales HSJT", descripcion: "Coordina la atención clínica y servicios médicos del Hospital San José.", foto: "/funcionarios/Dra_Patricia.png", nivel: "coordinacion" },
    ];

    const miembrosConsejo: Miembro[] = [
        { id: 1, nombre: "Yuli Cabrera Eraso.", cargo: "Presidente del Consejo de Administración", foto: "/funcionarios/Ing_Yuli.png" },
        { id: 2, nombre: "Jesus Andres Vallejo C.", cargo: "Secretario del Consejo de Administración", foto: "/funcionarios/Dr_Jesus.png" },
        { id: 3, nombre: "Carolina Alejandra Cabrera C.", cargo: "Miembro del Consejo de Administración", foto: "/funcionarios/Dra_Carolina.png" },
        { id: 4, nombre: "Ines Graciela Arenas S.", cargo: "Miembro del Consejo de Administración", foto: "/funcionarios/Dra_Ines.png" },
        { id: 5, nombre: "Luis Ignacio Ortiz A.", cargo: "Miembro del Consejo de Administración", foto: "/funcionarios/Ing_Luis.png" },
        { id: 6, nombre: "Brigida del Rosario Torres G.", cargo: "Miembro del Consejo de Administración", foto: "/funcionarios/Dra_Brigida.png" },
        { id: 7, nombre: "Nora Lilia Cordoba C.", cargo: "Miembro del Consejo de Administración", foto: "/funcionarios/Dra_Nora.png" },
    ];

    const funcionariosPerSlide = 3;
    const totalSlides = Math.ceil(funcionarios.length / funcionariosPerSlide);

    const nextSlide = () => setCurrentSlide(p => (p + 1) % totalSlides);
    const prevSlide = () => setCurrentSlide(p => (p - 1 + totalSlides) % totalSlides);
    const goToSlide = (i: number) => setCurrentSlide(i);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        if (file && file.type !== 'application/pdf') {
            setFormStatus({ type: 'error', message: 'Solo se permiten archivos PDF para la hoja de vida.' });
            return;
        }

        setFormData(prev => ({ ...prev, archivo: file }));
        setFormStatus({ type: 'idle', message: '' });
    };

    const validateForm = (): boolean => {
        if (
            !formData.nombre.trim() ||
            !formData.apellido.trim() ||
            !formData.email.trim() ||
            !formData.telefono.trim() ||
            !formData.numeroDocumento.trim() ||
            !formData.cargoAspira.trim()
        ) {
            setFormStatus({ type: 'error', message: 'Por favor completa todos los campos obligatorios.' });
            return false;
        }

        if (!formData.archivo) {
            setFormStatus({ type: 'error', message: 'Por favor adjunta tu hoja de vida en formato PDF.' });
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setFormStatus({ type: 'error', message: 'Por favor ingresa un email válido.' });
            return false;
        }

        return true;
    };

    const emptyForm: FormDataConvocatoria = {
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
    };

    const handleSubmitConvocatoria = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setFormStatus({ type: 'loading', message: 'Enviando tu postulación...' });

        try {
            const fileBase64 = await new Promise<string>((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve((reader.result as string).split(',')[1]);
                reader.readAsDataURL(formData.archivo!);
            });

            const submitData = {
                ...formData,
                archivoBase64: fileBase64,
                archivoNombre: formData.archivo!.name,
                fechaPostulacion: new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
            };

            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw2bkZw2ll2GqKj-0b8LGRgDJyrlCtV_HUNShbxNZMsV_OEiCv91LrIffqfQHZaWcg/exec';

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submitData)
            });

            setFormStatus({ type: 'success', message: '¡Postulación enviada exitosamente! Te contactaremos pronto.' });
            setFormData(emptyForm);

            setTimeout(() => {
                setShowConvocatoriaForm(false);
                setFormStatus({ type: 'idle', message: '' });
            }, 3000);
        } catch (error) {
            if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
                setFormStatus({ type: 'success', message: '¡Postulación enviada exitosamente! Te contactaremos pronto.' });
                setFormData(emptyForm);

                setTimeout(() => {
                    setShowConvocatoriaForm(false);
                    setFormStatus({ type: 'idle', message: '' });
                }, 3000);
            } else {
                setFormStatus({
                    type: 'error',
                    message: 'Error al enviar. Inténtalo nuevamente o contacta a gestionhumana@redmedicronips.com.co'
                });
            }
        }
    };

    const getNivelColor = (nivel: string) => {
        if (nivel === 'directivo') return 'border-blue-200 bg-blue-50/50';
        if (nivel === 'gerencial') return 'border-emerald-200 bg-emerald-50/50';
        return 'border-gray-200 bg-gray-50/50';
    };

    const getNivelIcon = (nivel: string) => {
        if (nivel === 'directivo') return <FaUserTie className="text-blue-600" />;
        if (nivel === 'gerencial') return <FaUsers className="text-emerald-600" />;
        return <FaAward className="text-gray-500" />;
    };

    const requisitosConvocatoria = [
        "Contador Público con tarjeta profesional vigente",
        "Mínimo 3 años de experiencia en sector salud (IPS / EPS / cooperativas)",
        "Conocimiento en NIIF, Normativa Supersolidaria y Supersalud",
        "Gestión de riesgos (SARLAFT / SAGRILAFT)",
    ];

    const documentosConvocatoria = [
        "Hoja de vida con soportes",
        "Tarjeta profesional + certificado vigente",
        "Antecedentes disciplinarios, fiscales, judiciales y REDAM",
        "Propuesta técnica y económica",
    ];

    return (
        <>
            <SEOHelmet
                title="Talento Humano - Red Medicron IPS"
                description="Conoce nuestro equipo de profesionales en Red Medicron IPS. Únete a nuestro talento humano, consulta convocatorias laborales y oportunidades de empleo en el sector salud."
                keywords="trabajo red medicron ips, empleo salud nariño, convocatorias médicas, recursos humanos ips, trabajar en salud túquerres"
                canonical="/talento-humano"
            />

            <style>{`
                @keyframes pulseDot {
                    0%,100% { opacity:1; transform:scale(1); }
                    50%     { opacity:.5; transform:scale(.8); }
                }
                .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }

                @keyframes fadeUp {
                    from { opacity:0; transform:translateY(20px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                .fade-up { animation: fadeUp .6s ease both; }

                .conv-card-hover {
                    transition: transform .3s ease, box-shadow .3s ease;
                }
                .conv-card-hover:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 50px rgba(37,99,235,.15);
                }
            `}</style>

            <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50/40 text-gray-800 flex flex-col items-center px-4 pt-32 pb-20 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

                <div className="w-full max-w-6xl flex flex-col items-center relative z-10">
                    <div className="text-center mb-12 fade-up">
                        <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block pulse-dot" />
                            Red Medicron IPS
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                            Nuestro <span className="text-blue-600">Talento Humano</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Profesionales de la salud, administrativos y personal de apoyo comprometidos con la excelencia, la ética y la humanización en la atención.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 w-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                    <span className="text-white text-lg">⭐</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Valores del Equipo</h3>
                            </div>
                            <ul className="space-y-3">
                                {["Ética y responsabilidad", "Humanización en la atención", "Trabajo en equipo", "Innovación y mejora continua", "Respeto y diversidad"].map((v, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                                    <span className="text-white text-lg">🌱</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Cultura Organizacional</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Fomentamos un ambiente laboral saludable, inclusivo y motivador, donde cada colaborador es protagonista del bienestar institucional y del servicio a la comunidad.
                            </p>
                        </div>
                    </div>

                    <div className="mb-14 w-full">
                        <div className="text-center mb-8">
                            <h2 className="font-extrabold text-3xl text-gray-900 mb-2">Estructura Organizacional</h2>
                            <p className="text-gray-500 text-base max-w-xl mx-auto">Conoce al equipo directivo y profesional que lidera Red Medicron IPS</p>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                                            {funcionarios
                                                .slice(slideIndex * funcionariosPerSlide, (slideIndex + 1) * funcionariosPerSlide)
                                                .map(f => (
                                                    <div
                                                        key={f.id}
                                                        className={`bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center border-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${getNivelColor(f.nivel)}`}
                                                    >
                                                        <div className="relative mb-4">
                                                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                                                                <img
                                                                    src={f.foto}
                                                                    alt={f.nombre}
                                                                    className="w-full h-full object-cover"
                                                                    onError={(e) => {
                                                                        const t = e.target as HTMLImageElement;
                                                                        t.style.display = 'none';
                                                                        t.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center"><span class="text-white font-bold text-lg">${f.nombre.split(' ').map(n => n[0]).join('').substring(0, 2)}</span></div>`;
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                                                                {getNivelIcon(f.nivel)}
                                                            </div>
                                                        </div>
                                                        <h4 className="font-bold text-gray-800 text-base mb-1 leading-tight">{f.nombre}</h4>
                                                        <p className="text-xs text-blue-600 font-semibold mb-3 leading-tight">{f.cargo}</p>
                                                        <p className="text-xs text-gray-500 leading-relaxed">{f.descripcion}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-8 gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-11 h-11 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
                            >
                                <FaChevronLeft size={13} />
                            </button>

                            <div className="flex gap-2">
                                {Array.from({ length: totalSlides }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className={`rounded-full transition-all duration-300 ${i === currentSlide ? 'w-7 h-3 bg-blue-600' : 'w-3 h-3 bg-gray-200 hover:bg-blue-300'}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="w-11 h-11 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
                            >
                                <FaChevronRight size={13} />
                            </button>
                        </div>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            Mostrando {currentSlide * funcionariosPerSlide + 1}–{Math.min((currentSlide + 1) * funcionariosPerSlide, funcionarios.length)} de {funcionarios.length} funcionarios
                        </p>

                        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                            <h4 className="font-bold text-gray-700 text-sm text-center mb-4 uppercase tracking-wide">Niveles Organizacionales</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {[
                                    { icon: <FaUserTie className="text-blue-600" />, label: "Nivel Directivo", bg: "bg-blue-50 border-blue-200" },
                                    { icon: <FaUsers className="text-emerald-600" />, label: "Nivel Gerencial", bg: "bg-emerald-50 border-emerald-200" },
                                    { icon: <FaAward className="text-gray-500" />, label: "Coordinaciones", bg: "bg-gray-50 border-gray-200" },
                                ].map((item, i) => (
                                    <div key={i} className={`flex items-center justify-center gap-2 p-3 rounded-xl border ${item.bg}`}>
                                        {item.icon}
                                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <ConsejoCarousel miembros={miembrosConsejo} miembrosPerSlide={3} maxMiembros={7} />

                    <div className="mb-14 w-full">
                        <h2 className="font-extrabold text-2xl text-gray-900 text-center mb-8">Valores y Cultura Organizacional</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { emoji: "🤝", title: "Compromiso", desc: "Dedicación absoluta con la salud y bienestar de nuestros pacientes.", bg: "bg-blue-50 border-blue-100" },
                                { emoji: "💼", title: "Profesionalismo", desc: "Excelencia técnica y ética en cada servicio que ofrecemos.", bg: "bg-emerald-50 border-emerald-100" },
                                { emoji: "❤️", title: "Humanización", desc: "Atención cálida y humana en cada interacción con nuestros usuarios.", bg: "bg-rose-50 border-rose-100" },
                                { emoji: "🌟", title: "Innovación", desc: "Mejora continua y adopción de nuevas tecnologías en salud.", bg: "bg-amber-50 border-amber-100" },
                            ].map((v, i) => (
                                <div
                                    key={i}
                                    className={`bg-white rounded-2xl shadow-sm border p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${v.bg}`}
                                >
                                    <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-4 text-2xl">{v.emoji}</div>
                                    <h4 className="font-bold text-gray-800 mb-2">{v.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full mb-14" id="convocatoria">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-6">
                            <div className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-6 sm:p-8 overflow-hidden">
                                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-700/30 pointer-events-none" />
                                <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-blue-600/15 blur-2xl pointer-events-none" />

                                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-5">
                                            <span className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block pulse-dot" />
                                                Convocatoria activa
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/60 text-xs px-3 py-1.5 rounded-full">
                                                RED MEDICRON IPS · 2026
                                            </span>
                                        </div>

                                        <h2 className="text-4xl sm:text-5xl font-black text-white leading-none tracking-tight mb-1">
                                            REVISOR
                                        </h2>
                                        <h2 className="text-3xl sm:text-4xl font-black text-blue-300 leading-none tracking-tight mb-4">
                                            FISCAL
                                        </h2>

                                        <div className="w-12 h-0.5 bg-blue-400 mb-4" />

                                        <p className="text-white/70 text-sm sm:text-base font-medium mb-5">
                                            Principal y Suplente · Periodo Mar 2026 – Mar 2029
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                { icon: "📅", label: "Elección 26 Mar 2026" },
                                                { icon: "💼", label: "Prestación de servicios" },
                                                { icon: "💰", label: "$3.600.000 COP / mes" },
                                            ].map((c, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs px-3 py-1.5 rounded-lg"
                                                >
                                                    {c.icon} {c.label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 min-w-[220px]">
                                        <div className="bg-amber-400/15 border border-amber-400/35 rounded-2xl p-4 text-center">
                                            <FaCalendarAlt className="text-amber-400 mx-auto mb-2" size={20} />
                                            <p className="text-amber-300/80 text-xs font-bold uppercase tracking-wider mb-1">Fecha límite</p>
                                            <p className="text-white font-extrabold text-lg leading-tight">24 de marzo</p>
                                            <p className="text-white/60 text-sm">2026 · 5:00 PM</p>
                                        </div>

                                        <button
                                            onClick={() => setShowConvocatoriaForm(true)}
                                            className="conv-card-hover w-full flex items-center justify-center gap-2 bg-white text-blue-700 font-extrabold py-3 px-5 rounded-2xl text-sm shadow-lg hover:bg-blue-50 transition-colors"
                                        >
                                            <FaPaperPlane size={14} />
                                            Postularme ahora
                                        </button>

                                        <a
                                            href="mailto:jefaturagestionhumana@redmedicronips.com.co"
                                            className="w-full flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/15 font-semibold py-3 px-6 rounded-2xl text-xs transition-all"
                                        >
                                            <FaEnvelope size={12} />
                                            Enviar por correo
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
                                {[
                                    { icon: "📅", value: "26 Mar", label: "Fecha de elección" },
                                    { icon: "💰", value: "$3.6M", label: "Honorarios/mes" },
                                    { icon: "🗓️", value: "3 años", label: "Duración del cargo" },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white py-5 px-3 flex flex-col items-center text-center gap-1.5">
                                        <span className="text-2xl">{s.icon}</span>
                                        <span className="text-lg font-extrabold text-gray-800">{s.value}</span>
                                        <span className="text-xs text-gray-400">{s.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-50 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-blue-100/30 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow flex-shrink-0">
                                            <FaCheckCircle className="text-white" size={16} />
                                        </div>
                                        <h4 className="font-bold text-gray-800 text-base">Requisitos principales</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {requisitosConvocatoria.map((req, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-green-100/30 p-6 hover:shadow-md hover:border-emerald-300 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow flex-shrink-0">
                                            <FaFileAlt className="text-white" size={14} />
                                        </div>
                                        <h4 className="font-bold text-gray-800 text-base">Documentos requeridos</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {documentosConvocatoria.map((doc, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                                                {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col sm:flex-row items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-2xl">🌱</div>
                            <div className="flex-1 text-center sm:text-left">
                                <h4 className="font-bold text-gray-800 text-lg mb-1">Bienestar y Formación</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Ofrecemos programas de bienestar, capacitación y desarrollo profesional para todos nuestros colaboradores.
                                </p>
                            </div>
                            <a
                                href="mailto:gestionhumana@redmedicronips.com.co"
                                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors flex-shrink-0"
                            >
                                <FaEnvelope size={12} />
                                Más información
                            </a>
                        </div>
                    </div>

                    <p className="text-xs text-gray-400 text-center">
                        ¿Tienes dudas sobre talento humano? Escribe a{" "}
                        <a
                            href="mailto:gestionhumana@redmedicronips.com.co"
                            className="underline text-blue-500 hover:text-blue-700 transition-colors"
                        >
                            gestionhumana@redmedicronips.com.co
                        </a>
                    </p>
                </div>
            </section>

            {showConvocatoriaForm && (
                <div
                    className="fixed inset-0 z-[90] bg-slate-950/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
                    onClick={() => setShowConvocatoriaForm(false)}
                >
                    <div
                        className="w-full max-w-2xl h-[88vh] sm:h-[86vh] rounded-[24px] border border-white/20 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.28)] overflow-hidden flex flex-col"
                        style={{ animation: "fadeUp .3s ease both" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 px-5 sm:px-6 py-5 sm:py-6 flex-shrink-0">
                            <div className="absolute -top-14 -right-14 w-44 h-44 rounded-full bg-blue-600/20 blur-2xl pointer-events-none" />
                            <div className="absolute bottom-0 left-1/3 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none" />

                            <div className="relative z-10 flex items-start justify-between gap-4">
                                <div>
                                    <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-blue-100 text-[10px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-[0.18em] mb-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                                        Postulación abierta
                                    </span>

                                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                                        Formulario de Postulación
                                    </h3>
                                    <p className="text-white/70 text-sm mt-2 max-w-lg leading-relaxed">
                                        Completa tu información personal y profesional para postularte a las convocatorias de Red Medicron IPS.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setShowConvocatoriaForm(false)}
                                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 flex items-center justify-center transition-all flex-shrink-0"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-50 to-white">
                            <form id="form-postulacion" onSubmit={handleSubmitConvocatoria} className="p-4 sm:p-5 space-y-4">
                                <div className="rounded-2xl border border-blue-100 bg-white shadow-sm p-4 sm:p-5">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                                            <FaUserTie className="text-white" size={13} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm sm:text-base font-bold text-gray-800">Información Personal</h4>
                                            <p className="text-xs sm:text-sm text-gray-500">Datos básicos del postulante</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">Nombre *</label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                                placeholder="Tu nombre"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">Apellido *</label>
                                            <input
                                                type="text"
                                                name="apellido"
                                                value={formData.apellido}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                                placeholder="Tu apellido"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                                placeholder="tu@email.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">Teléfono *</label>
                                            <input
                                                type="tel"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                                placeholder="3001234567"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">Tipo de Documento *</label>
                                            <select
                                                name="tipoDocumento"
                                                value={formData.tipoDocumento}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                            >
                                                <option value="cedula">Cédula de Ciudadanía</option>
                                                <option value="cedula_extranjeria">Cédula de Extranjería</option>
                                                <option value="pasaporte">Pasaporte</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">Número de Documento *</label>
                                            <input
                                                type="text"
                                                name="numeroDocumento"
                                                value={formData.numeroDocumento}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                                placeholder="Número de documento"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-emerald-100 bg-white shadow-sm p-4 sm:p-5">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
                                            <FaAward className="text-white" size={13} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm sm:text-base font-bold text-gray-800">Información Profesional</h4>
                                            <p className="text-xs sm:text-sm text-gray-500">Perfil, formación y experiencia</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">Cargo al que Aspira *</label>
                                            <input
                                                type="text"
                                                name="cargoAspira"
                                                value={formData.cargoAspira}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                                placeholder="Ej: Revisor Fiscal, Médico General..."
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">Nivel Educativo</label>
                                            <select
                                                name="nivelEducativo"
                                                value={formData.nivelEducativo}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                            >
                                                <option value="">Selecciona tu nivel educativo</option>
                                                {["bachiller", "tecnico", "tecnologo", "universitario", "especializacion", "maestria", "doctorado"].map(v => (
                                                    <option key={v} value={v}>
                                                        {v.charAt(0).toUpperCase() + v.slice(1)}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">Experiencia Laboral</label>
                                            <textarea
                                                name="experiencia"
                                                value={formData.experiencia}
                                                onChange={handleInputChange}
                                                rows={3}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 resize-none focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                                placeholder="Describe brevemente tu experiencia laboral relevante..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 sm:p-5">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center shadow-sm">
                                            <FaFileUpload className="text-white" size={12} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm sm:text-base font-bold text-gray-800">Hoja de Vida</h4>
                                            <p className="text-xs sm:text-sm text-gray-500">Adjunta tu documento en formato PDF</p>
                                        </div>
                                    </div>

                                    <label
                                        htmlFor="archivo-cv"
                                        className="group block cursor-pointer rounded-2xl border-2 border-dashed border-gray-200 bg-gradient-to-br from-slate-50 to-white p-5 sm:p-6 text-center transition-all hover:border-blue-400 hover:bg-blue-50/40"
                                    >
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="archivo-cv"
                                            required
                                        />

                                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:border-blue-200">
                                            <FaFileUpload className="text-lg text-gray-400 group-hover:text-blue-500 transition-colors" />
                                        </div>

                                        <p className="text-sm font-semibold text-gray-700 break-words">
                                            {formData.archivo ? formData.archivo.name : "Haz clic para seleccionar tu CV"}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            Máximo 10MB · Solo archivos PDF
                                        </p>
                                    </label>
                                </div>

                                {formStatus.type !== 'idle' && (
                                    <div
                                        className={`rounded-2xl border px-4 py-4 flex items-center gap-3 text-sm shadow-sm ${
                                            formStatus.type === 'success'
                                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                                : formStatus.type === 'error'
                                                ? 'bg-red-50 text-red-700 border-red-200'
                                                : 'bg-blue-50 text-blue-700 border-blue-200'
                                        }`}
                                    >
                                        {formStatus.type === 'success' && <FaCheckCircle className="text-emerald-500 flex-shrink-0" />}
                                        {formStatus.type === 'error' && <FaExclamationTriangle className="text-red-500 flex-shrink-0" />}
                                        {formStatus.type === 'loading' && <ButtonSpinner size="sm" color="primary" />}
                                        <span>{formStatus.message}</span>
                                    </div>
                                )}
                            </form>
                        </div>

                        <div className="border-t border-gray-100 bg-white px-4 sm:px-5 py-4 flex-shrink-0">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowConvocatoriaForm(false)}
                                    disabled={formStatus.type === 'loading'}
                                    className="flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    form="form-postulacion"
                                    disabled={formStatus.type === 'loading'}
                                    className="flex-1 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                                >
                                    {formStatus.type === 'loading'
                                        ? <><ButtonSpinner size="sm" color="white" /> Enviando...</>
                                        : <><FaPaperPlane size={12} /> Enviar Postulación</>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TalentoHumano;