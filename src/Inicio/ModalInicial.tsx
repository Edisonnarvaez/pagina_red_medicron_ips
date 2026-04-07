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
    const convocatoriaPdfUrl = "/convocatoria-revisor-fiscal.pdf";

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
        { icon: "📍", title: "6 Sedes", desc: "En toda Nariño", color: "text-red-500" },
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
                    className="relative w-full max-w-4xl lg:max-w-5xl max-h-[95vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-0"
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
                                Portafolio
                            </button>
                        </div>
                        <button
                            onClick={() => setShowPortafolioModal(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                            >
                            <FaTimes className="text-lg" />
                        </button>
                    </div>

                        {currentView === 0 && (
                            <div className="slide-left flex-1 overflow-y-auto modal-scrollbar p-5">
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
            
        </>
    );
} 

