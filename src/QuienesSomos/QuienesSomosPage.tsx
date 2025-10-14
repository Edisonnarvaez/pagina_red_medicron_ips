import React from 'react';
import { FaHeart, FaUsers, FaLightbulb, FaHandshake, FaEye, FaShieldAlt } from 'react-icons/fa';
import { MdHealthAndSafety, MdTrendingUp, MdStar } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { SEOHelmet } from '../components/SEO';

const QuienesSomos: React.FC = () => {
    const valores = [
        {
            icon: FaHeart,
            nombre: "HUMANIDAD",
            descripcion: "Servimos con amabilidad, dignidad, seguridad y empatía, respondiendo a las necesidades de las personas",
            color: "from-azul to-azul-dark"
        },
        {
            icon: FaUsers,
            nombre: "RESPONSABILIDAD",
            descripcion: "Cumplimos nuestros compromisos",
            color: "from-verdeLima to-verdeOscuro"
        },
        {
            icon: FaHandshake,
            nombre: "INTEGRIDAD",
            descripcion: "Actuamos y servimos de una manera respetuosa y honesta, generando relaciones de confianza con todos los grupos de interés",
            color: "from-acento to-warning"
        }
    ];

    const estadisticas = [
        { numero: "2005", descripcion: "Año de fundación", icon: MdStar },
        { numero: "8", descripcion: "Sedes en operación", icon: RiTeamFill },
        { numero: "20+", descripcion: "Años de experiencia", icon: MdTrendingUp },
        { numero: "24/7", descripcion: "Atención hospitalaria", icon: MdHealthAndSafety }
    ];

    return (
        <>
            {/* SEO Meta Tags */}
            <SEOHelmet
                title="Quiénes Somos - Red Medicron IPS"
                description="Red Medicron IPS es una institución de salud comprometida con la salud integral y humanizada en Nariño. Conoce nuestra misión, visión, valores y compromiso con la comunidad."
                keywords="red medicron ips nariño, institución salud túquerres, misión visión ips, valores institucionales salud, compromiso social nariño"
                canonical="/quienes-somos"
            />
            
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
                        Red Medicron IPS es una institución de salud comprometida con la salud integral y humanizada en el departamento de Nariño.
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
                                <FaHeart className="text-2xl text-azul-light" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Misión</h3>
                            <p className="text-azul-light leading-relaxed">
                                Somos una institución nariñense que presta servicios de salud primarios y complementarios, articulados en una red integrada de prestadores, con un modelo de atención integral con enfoque de riesgo centrado en el usuario y su familia. Contamos con un equipo humano competente y en constante aprendizaje, comprometido con la calidad, seguridad y humanización de la atención; con procesos, tecnología y sistemas de información basados en las mejores prácticas del mercado y acorde a las necesidades de sus grupos de interés. Promovemos el cuidado del medio ambiente, contribuimos al mantenimiento de la salud de nuestros usuarios y al equilibrio financiero institucional y del sistema. 
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-verdeLima to-verdeOscuro rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                                <FaEye className="text-2xl text-verde-light" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Visión</h3>
                            <p className="text-verde-light leading-relaxed">
                                Para el año 2027, Red Medicron IPS será reconocida como una red de servicios de salud líder en Nariño, destacándose por su atención integral centrada en el usuario y su familia, comprometida con la sostenibilidad ambiental y financiera, la gestión del riesgo y un servicio humanizado que transforme la experiencia de salud en la región.
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
                                <h3 className="text-2xl font-bold text-verdeOscuro mb-4">Desde 2005</h3>
                                <p className="text-grisOscuro leading-relaxed mb-6">
                                    Somos una IPS de naturaleza jurídica privada,
                                    perteneciente a la economía solidaria y sin ánimo de
                                    lucro, constituida el 15 de diciembre de 2005 y
                                    reconocida legalmente por la Superintendencia
                                    Nacional de Salud mediante la Resolución No. 00120
                                    del 7 de marzo de 2006.
                                    Nuestra entidad se encuentra registrada mediante
                                    documento privado en la Cámara de Comercio de
                                    la ciudad de Pasto.
                                    Contamos con más de veinte años de experiencia
                                    en el departamento de Nariño, destacándonos por la
                                    prestación de servicios de salud ambulatorios y
                                    hospitalarios en su componente primario y
                                    complementario, con un enfoque integral y ajustados
                                    a la complejidad requerida.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-azul">20+</div>
                                        <div className="text-sm text-grisOscuro">Años</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-verdeOscuro">8</div>
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
                        "Cuidamos vidas con calidad y humanidad!"
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
        </>
    );
};

export default QuienesSomos;
