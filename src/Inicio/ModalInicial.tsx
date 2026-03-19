import { useEffect, useState } from "react";
import {
    FaTimes,
    FaDownload,
    FaEnvelope,
    FaChevronLeft,
    FaChevronRight,
    FaCheckCircle,
    FaFileAlt,
    FaBriefcase,
    FaCalendarAlt,
    FaUserTie,
    FaAward,
    FaFileUpload,
    FaPaperPlane,
    FaExclamationTriangle
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";
import { ButtonSpinner } from "../components/Loading";

interface ModalPortafolioProps {
    showPortafolioModal: boolean;
    setShowPortafolioModal: (show: boolean) => void;
}

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
    type: "idle" | "loading" | "success" | "error";
    message: string;
}

export default function ModalPortafolio({ showPortafolioModal, setShowPortafolioModal }: ModalPortafolioProps) {
    const [currentView, setCurrentView] = useState(0); // 0 = convocatoria, 1 = portafolio
    const [showConvocatoriaForm, setShowConvocatoriaForm] = useState(false);

    const [formData, setFormData] = useState<FormDataConvocatoria>({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        tipoDocumento: "cedula",
        numeroDocumento: "",
        cargoAspira: "",
        experiencia: "",
        nivelEducativo: "",
        archivo: null
    });

    const [formStatus, setFormStatus] = useState<FormStatus>({ type: "idle", message: "" });

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (showConvocatoriaForm) {
                if (e.key === "Escape") setShowConvocatoriaForm(false);
                return;
            }

            if (!showPortafolioModal) return;
            if (e.key === "Escape") setShowPortafolioModal(false);
            if (e.key === "ArrowRight") setCurrentView((v) => Math.min(1, v + 1));
            if (e.key === "ArrowLeft") setCurrentView((v) => Math.max(0, v - 1));
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [showPortafolioModal, setShowPortafolioModal, showConvocatoriaForm]);

    useEffect(() => {
        if (showPortafolioModal) setCurrentView(0);
    }, [showPortafolioModal]);

    const stats = [
        { icon: "🏢", value: "8", label: "Sedes en Nariño" },
        { icon: "👥", value: "24/7", label: "Atención continua" },
        { icon: "❤️", value: "UCI", label: "Cuidados intensivos" },
        { icon: "🏅", value: "+15", label: "Especialidades" },
    ];

    const servicios = [
        { icon: "🫀", title: "Nefroprotección", desc: "Cuidado integral renal", color: "text-blue-500" },
        { icon: "🏥", title: "Hospital Tuquerres", desc: "UCI y quirófanos", color: "text-purple-500" },
        { icon: "🦷", title: "Odontología", desc: "Servicios dentales", color: "text-pink-500" },
        { icon: "🏃‍♀️", title: "Terapias", desc: "Fisioterapia integral", color: "text-orange-500" },
        { icon: "🔬", title: "Laboratorio", desc: "Tecnología avanzada", color: "text-cyan-500" },
        { icon: "📍", title: "7 Sedes", desc: "En toda Nariño", color: "text-red-500" },
    ];

    const requisitos = [
        "Contador Público con tarjeta profesional vigente",
        "Mínimo 3 años de experiencia en secxtor salud (IPS / EPS / cooperativas)",
        "Conocimiento en NIIF, Normativa Supersolidaria y Supersalud",
        "Gestión de riesgos (SARLAFT / SAGRILAFT)",
    ];

    const documentos = [
        "Hoja de vida con soportes",
        "Tarjeta profesional + certificado vigente",
        "Antecedentes disciplinarios, fiscales, judiciales y REDAM",
        "Propuesta técnica y económica",
    ];

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        if (file && file.type !== "application/pdf") {
            setFormStatus({
                type: "error",
                message: "Solo se permiten archivos PDF para la hoja de vida."
            });
            return;
        }

        setFormData((prev) => ({ ...prev, archivo: file }));
        setFormStatus({ type: "idle", message: "" });
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
            setFormStatus({
                type: "error",
                message: "Por favor completa todos los campos obligatorios."
            });
            return false;
        }

        if (!formData.archivo) {
            setFormStatus({
                type: "error",
                message: "Por favor adjunta tu hoja de vida en formato PDF."
            });
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setFormStatus({
                type: "error",
                message: "Por favor ingresa un email válido."
            });
            return false;
        }

        return true;
    };

    const emptyForm: FormDataConvocatoria = {
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        tipoDocumento: "cedula",
        numeroDocumento: "",
        cargoAspira: "",
        experiencia: "",
        nivelEducativo: "",
        archivo: null
    };

    const handleSubmitConvocatoria = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setFormStatus({ type: "loading", message: "Enviando tu postulación..." });

        try {
            const fileBase64 = await new Promise<string>((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve((reader.result as string).split(",")[1]);
                reader.readAsDataURL(formData.archivo!);
            });

            const submitData = {
                ...formData,
                archivoBase64: fileBase64,
                archivoNombre: formData.archivo!.name,
                fechaPostulacion: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })
            };

            const SCRIPT_URL =
                "https://script.google.com/macros/s/AKfycbw2bkZw2ll2GqKj-0b8LGRgDJyrlCtV_HUNShbxNZMsV_OEiCv91LrIffqfQHZaWcg/exec";

            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submitData)
            });

            setFormStatus({
                type: "success",
                message: "¡Postulación enviada exitosamente! Te contactaremos pronto."
            });
            setFormData(emptyForm);

            setTimeout(() => {
                setShowConvocatoriaForm(false);
                setFormStatus({ type: "idle", message: "" });
            }, 3000);
        } catch (error) {
            if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
                setFormStatus({
                    type: "success",
                    message: "¡Postulación enviada exitosamente! Te contactaremos pronto."
                });
                setFormData(emptyForm);

                setTimeout(() => {
                    setShowConvocatoriaForm(false);
                    setFormStatus({ type: "idle", message: "" });
                }, 3000);
            } else {
                setFormStatus({
                    type: "error",
                    message:
                        "Error al enviar. Inténtalo nuevamente o contacta a gestionhumana@redmedicronips.com.co"
                });
            }
        }
    };

    if (!showPortafolioModal) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 z-[90]"
                onClick={() => setShowPortafolioModal(false)}
            >
                <div
                    className="relative w-full max-w-4xl lg:max-w-5xl max-h-[95vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    style={{ animation: "scaleIn 0.25s ease-out" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <style>{`
                        @keyframes scaleIn {
                            from { opacity: 0; transform: scale(0.95) translateY(10px); }
                            to   { opacity: 1; transform: scale(1) translateY(0); }
                        }
                        @keyframes slideInRight {
                            from { opacity: 0; transform: translateX(40px); }
                            to   { opacity: 1; transform: translateX(0); }
                        }
                        @keyframes slideInLeft {
                            from { opacity: 0; transform: translateX(-40px); }
                            to   { opacity: 1; transform: translateX(0); }
                        }
                        @keyframes pulseDot {
                            0%,100% { opacity: 1; transform: scale(1); }
                            50%     { opacity: .5; transform: scale(.8); }
                        }
                        @keyframes fadeUp {
                            from { opacity: 0; transform: translateY(20px); }
                            to   { opacity: 1; transform: translateY(0); }
                        }
                        .modal-scrollbar::-webkit-scrollbar       { width: 5px; }
                        .modal-scrollbar::-webkit-scrollbar-track { background: transparent; }
                        .modal-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
                        .pulse-dot   { animation: pulseDot 1.8s ease-in-out infinite; }
                        .slide-right { animation: slideInRight .35s cubic-bezier(.22,1,.36,1) both; }
                        .slide-left  { animation: slideInLeft .35s cubic-bezier(.22,1,.36,1) both; }
                    `}</style>

                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white flex-shrink-0">
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setCurrentView(0)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                                    currentView === 0
                                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                                        : "text-gray-400 hover:text-gray-600"
                                }`}
                            >
                                <span
                                    className={`w-2 h-2 rounded-full inline-block flex-shrink-0 ${
                                        currentView === 0 ? "bg-blue-500 pulse-dot" : "bg-gray-300"
                                    }`}
                                />
                                Convocatoria
                            </button>

                            <span className="text-gray-200 mx-1 select-none">|</span>

                            <button
                                onClick={() => setCurrentView(1)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                                    currentView === 1
                                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                                        : "text-gray-400 hover:text-gray-600"
                                }`}
                            >
                                <span
                                    className={`w-2 h-2 rounded-full inline-block flex-shrink-0 ${
                                        currentView === 1 ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                                />
                                Portafolio
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentView((v) => Math.max(0, v - 1))}
                                disabled={currentView === 0}
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
                                title="Vista anterior"
                            >
                                <FaChevronLeft size={11} />
                            </button>

                            <span className="text-xs text-gray-400 font-medium tabular-nums w-8 text-center select-none">
                                {currentView + 1} / 2
                            </span>

                            <button
                                onClick={() => setCurrentView((v) => Math.min(1, v + 1))}
                                disabled={currentView === 1}
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
                                title="Vista siguiente"
                            >
                                <FaChevronRight size={11} />
                            </button>

                            <div className="w-px h-5 bg-gray-200 mx-1" />

                            <button
                                onClick={() => setShowPortafolioModal(false)}
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-all duration-200"
                                title="Cerrar"
                            >
                                <FaTimes size={12} />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-y-auto flex-1 modal-scrollbar">
                        {currentView === 0 && (
                            <div className="slide-right">
                                <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex flex-col justify-end p-8 sm:p-10 overflow-hidden">
                                    <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-700/30 pointer-events-none" />
                                    <div className="absolute top-6 left-7 z-10">
                                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30 tracking-widest">
                                            2026
                                        </span>
                                    </div>
                                    <div className="absolute top-6 right-7 z-10">
                                        <span className="inline-flex items-center gap-1.5 bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block pulse-dot" />
                                            Activa
                                        </span>
                                    </div>
                                    <div className="relative z-10">
                                        <h2 className="text-4xl sm:text-5xl font-black text-white leading-none tracking-tight">
                                            REVISOR
                                        </h2>
                                        <h2 className="text-4xl sm:text-5xl font-black text-blue-300 leading-none tracking-tight">
                                            FISCAL
                                        </h2>
                                        <div className="w-12 h-0.5 bg-blue-400 mt-4 mb-3" />
                                        <p className="text-white/70 text-sm sm:text-base font-medium">
                                            Red Medicron IPS · Principal y Suplente · 2026–2029
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
                                    {[
                                        { icon: "📅", value: "26 Mar", label: "Fecha de elección" },
                                        { icon: "💰", value: "$3.6M", label: "Honorarios/mes" },
                                        { icon: "🗓️", value: "3 años", label: "Duración del cargo" },
                                    ].map((s, i) => (
                                        <div key={i} className="bg-white py-5 px-3 flex flex-col items-center text-center gap-1.5">
                                            <span className="text-2xl sm:text-3xl">{s.icon}</span>
                                            <span className="text-lg sm:text-xl font-extrabold text-gray-800">{s.value}</span>
                                            <span className="text-[11px] sm:text-xs text-gray-400 leading-tight">{s.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-7 sm:p-9 space-y-6">
                                    <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
                                        <FaCalendarAlt className="text-amber-500 flex-shrink-0" size={18} />
                                        <div>
                                            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                                                Fecha límite de postulación
                                            </p>
                                            <p className="text-gray-800 font-extrabold text-base leading-tight">
                                                24 de marzo de 2026 · 5:00 PM
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-blue-100/30 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow flex-shrink-0">
                                                    <FaCheckCircle className="text-white" size={16} />
                                                </div>
                                                <h4 className="font-bold text-gray-800 text-base leading-tight">
                                                    Requisitos principales
                                                </h4>
                                            </div>
                                            <ul className="space-y-2">
                                                {requisitos.map((req, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-green-100/30 p-6 hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow flex-shrink-0">
                                                    <FaFileAlt className="text-white" size={14} />
                                                </div>
                                                <h4 className="font-bold text-gray-800 text-base leading-tight">
                                                    Documentos requeridos
                                                </h4>
                                            </div>
                                            <ul className="space-y-2">
                                                {documentos.map((doc, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                                                        {doc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setShowConvocatoriaForm(true)}
                                            className="group flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <FaEnvelope size={15} />
                                            </div>
                                            <div className="min-w-0 text-left">
                                                <p className="font-bold text-sm leading-tight">Enviar postulación</p>
                                                <p className="text-white/70 text-xs truncate mt-0.5">
                                                    Abrir formulario de postulación
                                                </p>
                                            </div>
                                        </button>

                                        <Link
                                            to="/talento-humano"
                                            onClick={() => setShowPortafolioModal(false)}
                                            className="group flex items-center gap-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-gray-700 rounded-2xl px-6 py-4 transition-all duration-300 hover:-translate-y-0.5"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                                <FaBriefcase size={13} className="text-gray-500" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm leading-tight">Ver convocatoria completa</p>
                                                <p className="text-gray-400 text-xs mt-0.5">
                                                    Ir a Talento Humano <span className="text-sm">›</span>
                                                </p>
                                            </div>
                                        </Link>
                                    </div>

                                    <button
                                        onClick={() => setCurrentView(1)}
                                        className="w-full flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-blue-600 py-1 transition-colors duration-200"
                                    >
                                        Ver Portafolio de Servicios
                                        <FaChevronRight size={9} />
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentView === 1 && (
                            <div className="slide-left">
                                <div
                                    className="relative w-full h-72 sm:h-80 lg:h-96 bg-cover bg-center flex flex-col justify-end p-8 sm:p-10"
                                    style={{ backgroundImage: "url('/images/portafolio1.jpg')" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/55 to-blue-950/88" />
                                    <div className="absolute top-6 left-7 z-10">
                                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30 tracking-widest">
                                            2025
                                        </span>
                                    </div>
                                    <div className="relative z-10">
                                        <h2 className="text-4xl sm:text-5xl font-black text-white leading-none tracking-tight">
                                            PORTAFOLIO
                                        </h2>
                                        <h2 className="text-4xl sm:text-5xl font-black text-blue-300 leading-none tracking-tight">
                                            DE SERVICIOS
                                        </h2>
                                        <div className="w-12 h-0.5 bg-blue-400 mt-4 mb-3" />
                                        <p className="text-white/70 text-sm sm:text-base font-medium">
                                            Red Medicron IPS · Servicios médicos especializados de alta calidad
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
                                    {stats.map((s, i) => (
                                        <div key={i} className="bg-white py-5 px-3 flex flex-col items-center text-center gap-1.5">
                                            <span className="text-2xl sm:text-3xl">{s.icon}</span>
                                            <span className="text-xl sm:text-2xl font-extrabold text-gray-800">{s.value}</span>
                                            <span className="text-[11px] sm:text-xs text-gray-400 leading-tight">{s.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-7 sm:p-9 lg:p-10 space-y-8">
                                    <p className="text-center text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                                        Con <span className="text-blue-600 font-semibold">7 sedes</span> estratégicamente ubicadas en Nariño,
                                        ofrecemos servicios desde primer nivel hasta{" "}
                                        <Link
                                            to="/servicios"
                                            className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-800 transition-colors"
                                            onClick={() => setShowPortafolioModal(false)}
                                        >
                                            alta complejidad
                                        </Link>
                                        . Nuestro Hospital en Tuquerres cuenta con UCI, quirófanos y atención 24/7.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-blue-100/30 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                                            <div className="flex flex-col h-full">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                                        <FaDownload className="text-white text-base" />
                                                    </div>
                                                    <h4 className="font-bold text-gray-800 text-lg leading-tight">Descargar Portafolio</h4>
                                                </div>
                                                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                                                    Descarga el portafolio completo en formato PDF con toda la información detallada de nuestros servicios y sedes.
                                                </p>
                                                <a
                                                    href="/portafolio-servicios.pdf"
                                                    download
                                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors duration-200"
                                                >
                                                    Descargar PDF <span className="text-base leading-none">›</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-green-100/30 p-6 hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                                            <div className="flex flex-col h-full">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                                        <MdHealthAndSafety className="text-white text-xl" />
                                                    </div>
                                                    <h4 className="font-bold text-gray-800 text-lg leading-tight">Ver Servicios Online</h4>
                                                </div>
                                                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                                                    Explora de forma interactiva todos nuestros servicios médicos, especialidades y ubicaciones en Nariño.
                                                </p>
                                                <Link
                                                    to="/servicios"
                                                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-800 transition-colors duration-200"
                                                    onClick={() => setShowPortafolioModal(false)}
                                                >
                                                    Explorar servicios <span className="text-base leading-none">›</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-center text-gray-800 font-bold text-lg sm:text-xl mb-5">
                                            Servicios Destacados
                                        </h3>
                                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                            {servicios.map((s, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm rounded-2xl p-4 sm:p-5 transition-all duration-200 flex items-center gap-3"
                                                >
                                                    <span className="text-2xl sm:text-3xl flex-shrink-0">{s.icon}</span>
                                                    <div className="min-w-0">
                                                        <p className={`font-semibold text-xs sm:text-sm leading-tight ${s.color}`}>{s.title}</p>
                                                        <p className="text-[11px] sm:text-xs text-gray-400 leading-tight mt-0.5">{s.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-center pt-2 pb-4">
                                        <div className="bg-white rounded-2xl px-8 py-4 shadow-sm border border-gray-100">
                                            <img src="/logoRMIPS.png" alt="Red Medicron IPS" className="h-12 sm:h-14 object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showConvocatoriaForm && (
                <div
                    className="fixed inset-0 z-[100] bg-slate-950/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
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
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">
                                                Nombre *
                                            </label>
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
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">
                                                Apellido *
                                            </label>
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
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">
                                                Email *
                                            </label>
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
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">
                                                Teléfono *
                                            </label>
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
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">
                                                Tipo de Documento *
                                            </label>
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
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">
                                                Número de Documento *
                                            </label>
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
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">
                                                Cargo al que Aspira *
                                            </label>
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
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">
                                                Nivel Educativo
                                            </label>
                                            <select
                                                name="nivelEducativo"
                                                value={formData.nivelEducativo}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                            >
                                                <option value="">Selecciona tu nivel educativo</option>
                                                {[
                                                    "bachiller",
                                                    "tecnico",
                                                    "tecnologo",
                                                    "universitario",
                                                    "especializacion",
                                                    "maestria",
                                                    "doctorado"
                                                ].map((v) => (
                                                    <option key={v} value={v}>
                                                        {v.charAt(0).toUpperCase() + v.slice(1)}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-[0.16em]">
                                                Experiencia Laboral
                                            </label>
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

                                {formStatus.type !== "idle" && (
                                    <div
                                        className={`rounded-2xl border px-4 py-4 flex items-center gap-3 text-sm shadow-sm ${
                                            formStatus.type === "success"
                                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                                : formStatus.type === "error"
                                                ? "bg-red-50 text-red-700 border-red-200"
                                                : "bg-blue-50 text-blue-700 border-blue-200"
                                        }`}
                                    >
                                        {formStatus.type === "success" && (
                                            <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                                        )}
                                        {formStatus.type === "error" && (
                                            <FaExclamationTriangle className="text-red-500 flex-shrink-0" />
                                        )}
                                        {formStatus.type === "loading" && <ButtonSpinner size="sm" color="primary" />}
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
                                    disabled={formStatus.type === "loading"}
                                    className="flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    form="form-postulacion"
                                    disabled={formStatus.type === "loading"}
                                    className="flex-1 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                                >
                                    {formStatus.type === "loading" ? (
                                        <>
                                            <ButtonSpinner size="sm" color="white" /> Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane size={12} /> Enviar Postulación
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}