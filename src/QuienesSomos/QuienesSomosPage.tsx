import React from 'react';
import { FaHeart, FaUsers, FaLightbulb, FaHandshake, FaEye, FaShieldAlt } from 'react-icons/fa';
import { MdHealthAndSafety, MdTrendingUp, MdStar } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';

const QuienesSomos: React.FC = () => {
    const valores = [
        {
            icon: FaHandshake,
            nombre: "Ética",
            descripcion: "Actuamos con integridad y responsabilidad en cada decisión",
            color: "from-azul to-azul-dark"
        },
        {
            icon: FaUsers,
            nombre: "Respeto",
            descripcion: "Valoramos la dignidad de cada persona en nuestra atención",
            color: "from-verdeLima to-verdeOscuro"
        },
        {
            icon: FaHeart,
            nombre: "Compromiso",
            descripcion: "Cumplimos con excelencia nuestra labor diaria",
            color: "from-acento to-warning"
        },
        {
            icon: FaLightbulb,
            nombre: "Innovación",
            descripcion: "Mejoramos continuamente procesos y servicios",
            color: "from-azul-light to-azul"
        },
        {
            icon: FaEye,
            nombre: "Transparencia",
            descripcion: "Gestionamos con claridad y acceso a la información",
            color: "from-verdeOscuro to-verdeLima"
        },
        {
            icon: FaShieldAlt,
            nombre: "Humanización",
            descripcion: "Ponemos al usuario y su familia en el centro de nuestra atención",
            color: "from-azul to-verdeOscuro"
        }
    ];

    const estadisticas = [
        { numero: "2012", descripcion: "Año de fundación", icon: MdStar },
        { numero: "7", descripcion: "Sedes en operación", icon: RiTeamFill },
        { numero: "11+", descripcion: "Años de experiencia", icon: MdTrendingUp },
        { numero: "24/7", descripcion: "Atención hospitalaria", icon: MdHealthAndSafety }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-verdeLima/20 via-white to-azul-light/20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-verdeLima/20 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-azul-light/20 rounded-full blur-2xl -z-10" />
                
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-verdeOscuro">
                        ¿Quiénes <span className="text-azul">Somos?</span>
                    </h1>
                    <p className="text-lg md:text-xl text-grisOscuro max-w-3xl mx-auto mb-12 leading-relaxed">
                        Red Medicron IPS es una institución de salud comprometida con la excelencia, 
                        innovación y humanización en la atención médica del sur de Colombia.
                    </p>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {estadisticas.map((stat, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <stat.icon className="text-3xl text-verdeOscuro mx-auto mb-2" />
                                <div className="text-2xl font-bold text-azul">{stat.numero}</div>
                                <div className="text-sm text-grisOscuro">{stat.descripcion}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-azul to-azul-dark rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                                <FaHeart className="text-2xl text-acento" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Misión</h3>
                            <p className="text-azul-light leading-relaxed">
                                Brindar servicios de salud integrales, seguros y humanizados, con un equipo 
                                comprometido y tecnología de vanguardia, promoviendo el bienestar y la calidad 
                                de vida de nuestros usuarios y sus familias.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-verdeLima to-verdeOscuro rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                                <FaEye className="text-2xl text-acento" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Visión</h3>
                            <p className="text-verde-light leading-relaxed">
                                Ser reconocidos como la IPS líder en el sur de Colombia, referente en calidad, 
                                innovación y humanización en la atención en salud.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Historia */}
            <section className="py-16 px-4 bg-gradient-to-r from-white to-azul-light/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-azul mb-4">Nuestra Historia</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-azul to-verdeLima mx-auto"></div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-verdeOscuro mb-4">Desde 2012</h3>
                                <p className="text-grisOscuro leading-relaxed mb-6">
                                    Red Medicron IPS fue fundada en 2012 con el objetivo de transformar la atención 
                                    en salud en Nariño y el sur de Colombia. A lo largo de los años, hemos crecido 
                                    en infraestructura, servicios y cobertura, consolidándonos como una institución 
                                    innovadora, transparente y cercana a la comunidad.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-azul">11+</div>
                                        <div className="text-sm text-grisOscuro">Años</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-verdeOscuro">7</div>
                                        <div className="text-sm text-grisOscuro">Sedes</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-azul">100%</div>
                                        <div className="text-sm text-grisOscuro">Compromiso</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-azul/10 to-verdeLima/10 rounded-2xl p-8 text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-azul to-verdeOscuro rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MdHealthAndSafety className="text-white text-3xl" />
                                </div>
                                <h4 className="text-xl font-bold text-verdeOscuro mb-2">Crecimiento Continuo</h4>
                                <p className="text-grisOscuro text-sm">
                                    Evolucionando constantemente para brindar la mejor atención médica a nuestros usuarios
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores Institucionales */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-verdeOscuro mb-4">
                            Valores <span className="text-azul">Institucionales</span>
                        </h2>
                        <p className="text-grisOscuro text-lg max-w-2xl mx-auto">
                            Los principios que guían nuestro actuar diario y definen nuestra identidad institucional
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {valores.map((valor, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                <div className={`w-16 h-16 bg-gradient-to-br ${valor.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <valor.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-verdeOscuro mb-2">{valor.nombre}</h3>
                                <p className="text-grisOscuro leading-relaxed">{valor.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Final */}
            <section className="py-20 px-4 bg-gradient-to-r from-verdeOscuro to-azul">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        "Cuidamos tu salud, protegemos tu vida"
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Red Medicron IPS — Excelencia, innovación y humanización en salud
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/servicios"
                            className="inline-flex items-center justify-center bg-acento hover:bg-warning text-negro font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Conoce Nuestros Servicios
                        </a>
                        <a
                            href="/sedes"
                            className="inline-flex items-center justify-center bg-white/20 backdrop-blur hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Encuentra Tu Sede
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuienesSomos;
