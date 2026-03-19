import { useEffect } from "react";
import { FaTimes, FaDownload } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";

interface ModalPortafolioProps {
    showPortafolioModal: boolean;
    setShowPortafolioModal: (show: boolean) => void;
}

export default function ModalPortafolio({ showPortafolioModal, setShowPortafolioModal }: ModalPortafolioProps) {

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!showPortafolioModal) return;
            if (e.key === 'Escape') setShowPortafolioModal(false);
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [showPortafolioModal, setShowPortafolioModal]);

    const stats = [
        { icon: "🏢", value: "8",    label: "Sedes en Nariño"   },
        { icon: "👥", value: "24/7", label: "Atención continua" },
        { icon: "❤️", value: "UCI",  label: "Cuidados intensivos" },
        { icon: "🏅", value: "+15",  label: "Especialidades"    },
    ];

    const servicios = [
        { icon: "🫀", title: "Nefroprotección",    desc: "Cuidado integral renal",  color: "text-blue-500"   },
        { icon: "🏥", title: "Hospital Tuquerres", desc: "UCI y quirófanos",        color: "text-purple-500" },
        { icon: "🦷", title: "Odontología",        desc: "Servicios dentales",      color: "text-pink-500"   },
        { icon: "🏃‍♀️", title: "Terapias",          desc: "Fisioterapia integral",   color: "text-orange-500" },
        { icon: "🔬", title: "Laboratorio",        desc: "Tecnología avanzada",     color: "text-cyan-500"   },
        { icon: "📍", title: "7 Sedes",            desc: "En toda Nariño",          color: "text-red-500"    },
    ];

    if (!showPortafolioModal) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 z-[90]"
            onClick={() => setShowPortafolioModal(false)}
        >
            <div
                className="relative w-full max-w-4xl lg:max-w-6xl max-h-[95vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                style={{ animation: "scaleIn 0.25s ease-out" }}
                onClick={(e) => e.stopPropagation()}
            >
                <style>{`
                    @keyframes scaleIn {
                        from { opacity: 0; transform: scale(0.95) translateY(10px); }
                        to   { opacity: 1; transform: scale(1)    translateY(0);    }
                    }
                    .modal-scrollbar::-webkit-scrollbar { width: 5px; }
                    .modal-scrollbar::-webkit-scrollbar-track { background: transparent; }
                    .modal-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
                `}</style>

                {/* Botón cerrar */}
                <button
                    onClick={() => setShowPortafolioModal(false)}
                    className="absolute top-4 right-4 z-30 bg-white/80 hover:bg-white shadow-md rounded-full p-2.5 transition-all duration-200 backdrop-blur-sm"
                >
                    <FaTimes size={14} className="text-gray-600" />
                </button>

                {/* Área con scroll */}
                <div className="overflow-y-auto flex-1 modal-scrollbar">

                    {/* ── HERO con imagen de fondo ── */}
                    <div
                        className="relative w-full h-72 sm:h-80 lg:h-96 bg-cover bg-center flex flex-col justify-end p-8 sm:p-10"
                        style={{ backgroundImage: "url('/images/portafolio1.jpg')" }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/55 to-blue-950/88" />

                        {/* Badge año */}
                        <div className="absolute top-6 left-7 z-10">
                            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30 tracking-widest">
                                2025
                            </span>
                        </div>

                        {/* Título */}
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

                    {/* ── STATS ── */}
                    <div className="grid grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
                        {stats.map((s, i) => (
                            <div key={i} className="bg-white py-5 px-3 flex flex-col items-center text-center gap-1.5">
                                <span className="text-2xl sm:text-3xl">{s.icon}</span>
                                <span className="text-xl sm:text-2xl font-extrabold text-gray-800">{s.value}</span>
                                <span className="text-[11px] sm:text-xs text-gray-400 leading-tight">{s.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* ── BODY ── */}
                    <div className="p-7  sm:p-9 lg:p-10 space-y-8">

                        {/* Descripción */}
                        <p className="text-center text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                            Con <span className="text-blue-600 font-semibold">7 sedes</span> estratégicamente ubicadas en Nariño,
                            ofrecemos servicios desde primer nivel hasta{" "}
                            <Link
                                to="/servicios"
                                className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-800 transition-colors"
                                onClick={() => setShowPortafolioModal(false)}
                            >
                                alta complejidad
                            </Link>.
                            {" "}Nuestro Hospital en Tuquerres cuenta con UCI, quirófanos y atención 24/7.
                        </p>

                        {/* ── TARJETAS DE ACCIÓN ── */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            {/* Descargar PDF */}
                            <div className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-blue-100/30 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer">
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

                            {/* Ver Servicios Online */}
                            <div className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-green-100/30 p-6 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 cursor-pointer">
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

                        {/* ── SERVICIOS DESTACADOS ── */}
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

                        {/* ── LOGO ── */}
                        <div className="flex justify-center pt-2 pb-4">
                            <div className="bg-white rounded-2xl px-8 py-4 shadow-sm border border-gray-100">
                                <img
                                    src="/logoRMIPS.png"
                                    alt="Red Medicron IPS"
                                    className="h-12 sm:h-14 object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}