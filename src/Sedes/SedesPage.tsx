import React from 'react';
import { FaHospital, FaMapMarkerAlt, FaPhone, FaClock, FaUserMd } from 'react-icons/fa';
import { MdLocalHospital, MdHealthAndSafety, MdMedicalServices } from 'react-icons/md';
import { SEOHelmet } from '../components/SEO';

const Sedes: React.FC = () => {
    const sedes = [
        {
            nombre: "Hospital Tuquerres",
            tipo: "Hospital - Centro de atencion",
            direccion: "Calle 27 # 14-58, Tuquerres, Nariño",
            telefono: "(321) 666-0990 ",
            horario: "24 horas",
            servicios: ["Urgencias 24h", "Hospitalización", "UCI", "Medicina interna", "Quirófano", "Nefroprotección"],
            esHospital: true,
            icon: FaHospital,
            imagen: "/sedes/hospital_san_jose_de_tuquerres.jpeg"
        },
        {
            nombre: "Sede Obrero",
            tipo: "Sede principal",
            direccion: "Carrera 26 # 9-22, Pasto, Nariño -  Frente a la entrada principal de La Normal",
            telefono: ["(602) 738-2377"," - ","(318) 338-0107"],
            horario: "7:00 AM - 3:30 PM",
            servicios: ["Consulta externa", "Nefroprotección", "Especialistas"],
            esHospital: false,
            icon: MdLocalHospital,
            imagen: "/sedes/Obrero.jpeg"
        },
        {
            nombre: "Sede Terapias Fatima",
            tipo: "Centro de Atención",
            direccion: "Calle 20 N° 11-40, Pasto, Nariño",
            telefono: "Whatsapp 316 090 6607",
            horario: "7:00 AM - 4:30 PM",
            servicios: ["Terapias", "Servicios complementarios"],
            esHospital: false,
            icon: MdLocalHospital,
            imagen: "/sedes/Fatima.jpeg"
        },
        {
            nombre: "Sede Aurora",
            tipo: "Centro de Atención",
            direccion: "Carrera 29 N° 10-29, Pasto, Nariño",
            telefono: ["(602) 738-2377"," - ","(318) 338-0107"],
            horario: "7:00 AM a 12:00 PM - 1:30 PM a 5:00 PM",
            servicios: ["Odontologia"],
            esHospital: false,
            icon: MdLocalHospital,
            imagen: "/sedes/aurora.jpeg"
        },
        {
            nombre: "Sede Ipiales",
            tipo: "Centro de Atención",
            direccion: "Carrera 4a No 14-52, Ipiales, Nariño",
            telefono: ["(602) 738-2377 "," - ","(318) 338-0107"],
            horario: "7:00 AM - 5:00 PM",
            servicios: ["Consulta externa", "Nefroprotección"],
            esHospital: false,
            icon: MdLocalHospital,
            imagen: "/sedes/ipiales.jpg"
        },
        {
            nombre: "Sede Tumaco",
            tipo: "Centro de Atención",
            direccion: "Carrera 7 15A - 14, Tumaco, Nariño",
            telefono: ["(602) 738-2377"," - ","(318) 338-0107"],
            horario: "7:00 AM - 5:00 PM",
            servicios: ["Consulta externa", "Nefroprotección"],
            esHospital: false,
            icon: MdLocalHospital,
            imagen: "/sedes/Tumaco.jpg"
        },
        
        {
            nombre: "Sede Buesaco",
            tipo: "Centro de Atención",
            direccion: "Carrera  3 No 15-57, Buesaco, Nariño",
            telefono: "(318) 338-0107",
            horario: "7:00 AM - 5:00 PM",
            servicios: ["Consulta externa", "Nefroprotección"],
            esHospital: false,
            icon: MdLocalHospital,
            imagen: "/sedes/Buesaco.png"
        },
        {
            nombre: "Sede La Cruz",
            tipo: "Centro de Atención",
            direccion: "Carrera 8 No 10-77, La Cruz, Nariño",
            telefono: "(318) 338-0107",
            horario: "7:00 AM - 5:00 PM",
            servicios: ["Consulta externa", "Nefroprotección"],
            esHospital: false,
            icon: MdLocalHospital,
            imagen: "/sedes/la_cruz.png"
        }
    ];

    return (
        <>
            {/* SEO Meta Tags */}
            <SEOHelmet
                title="Sedes y Ubicaciones - Red Medicron IPS"
                description="Encuentra todas las sedes de Red Medicron IPS en Nariño: Túquerres, Pasto, Ipiales, Tumaco, Buesaco, La Cruz. Horarios, direcciones y servicios disponibles."
                keywords="sedes red medicron ips, ubicaciones ips nariño, hospital túquerres, clinica pasto, ips ipiales, servicios salud tumaco"
                canonical="/sedes"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-verdeLima/20 via-white to-azul-light/30">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-verdeLima/20 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-azul-light/20 rounded-full blur-2xl -z-10" />
                
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-verdeOscuro">
                        Nuestras <span className="text-azul">Sedes</span>
                    </h1>
                    <p className="text-lg md:text-xl text-grisOscuro max-w-3xl mx-auto mb-12 leading-relaxed">
                        Red Medicron IPS cuenta con 7 sedes estratégicamente ubicadas en el sur de Colombia, 
                        brindando atención integral y especializada a toda la región de Nariño.
                    </p>
                    
                    {/* Estadísticas */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
                            <div className="text-2xl font-bold text-verdeOscuro">8</div>
                            <div className="text-sm text-grisOscuro">Sedes</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
                            <div className="text-2xl font-bold text-azul">1</div>
                            <div className="text-sm text-grisOscuro">Hospital 24h</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
                            <div className="text-2xl font-bold text-verdeOscuro">7</div>
                            <div className="text-sm text-grisOscuro">Centros</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg">
                            <div className="text-2xl font-bold text-azul">100%</div>
                            <div className="text-sm text-grisOscuro">Cobertura</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hospital Principal Destacado */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-azul to-azul-dark rounded-3xl overflow-hidden shadow-2xl mb-16">
                        <div className="grid md:grid-cols-2 gap-0 items-center">
                            <div className="p-8 md:p-12 text-white">
                                <div className="flex items-center mb-4">
                                    <FaHospital className="text-4xl mr-4 text-acento" />
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold">Hospital San Jose de Tuquerres</h2>
                                        <p className="text-azul-light">Atención 24/7</p>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="mr-3 text-acento" />
                                        <span>Calle 27 # 14-58, Tuquerres, Nariño</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaPhone className="mr-3 text-acento" />
                                        <span>(321) 666-0990</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaClock className="mr-3 text-acento" />
                                        <span>Atención 24 horas</span>
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4 text-acento">Servicios Especializados</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {["Urgencias 24h", "Hospitalización", "UCI", "Medicina interna", "Quirófano", "Nefroprotección"].map((servicio) => (
                                            <div key={servicio} className="flex items-center bg-white/10 rounded-lg p-2">
                                                <MdMedicalServices className="mr-2 text-acento text-sm" />
                                                <span className="text-xs">{servicio}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-64 md:h-full">
                                <img 
                                    src="/sedes/hospital_san_jose_de_tuquerres.jpeg" 
                                    alt="Hospital San José de Tuquerres"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-azul/20 to-transparent"></div>
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-full px-4 py-2">
                                    <span className="text-azul font-bold text-sm">🏥 Hospital</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Centros de Atención */}
            <section className="py-16 px-4 bg-gradient-to-r from-verdeLima/10 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-verdeOscuro mb-4">
                            Centros de <span className="text-azul">Atención</span>
                        </h2>
                        <p className="text-grisOscuro text-lg max-w-2xl mx-auto">
                            Consulta externa especializada y programas de nefroprotección en ubicaciones estratégicas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sedes.filter(sede => !sede.esHospital).map((sede, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                {/* Imagen de la sede */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={sede.imagen} 
                                        alt={sede.nombre}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2">
                                        <sede.icon className="text-verdeLima text-xl" />
                                    </div>
                                </div>

                                {/* Contenido de la tarjeta */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-lg font-bold text-verdeOscuro">{sede.nombre}</h3>
                                        <p className="text-sm text-grisOscuro">{sede.tipo}</p>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-start">
                                            <FaMapMarkerAlt className="mr-3 mt-1 text-verdeLima flex-shrink-0" />
                                            <span className="text-sm text-grisOscuro">{sede.direccion}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaPhone className="mr-3 text-verdeLima" />
                                            <span className="text-sm text-grisOscuro">{sede.telefono}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaClock className="mr-3 text-verdeLima" />
                                            <span className="text-sm text-grisOscuro">{sede.horario}</span>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <h4 className="text-sm font-semibold text-verdeOscuro mb-2">Servicios:</h4>
                                        <div className="space-y-1">
                                            {sede.servicios.map((servicio) => (
                                                <div key={servicio} className="flex items-center">
                                                    <MdHealthAndSafety className="mr-2 text-verdeLima text-sm" />
                                                    <span className="text-xs text-grisOscuro">{servicio}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mapa y Call to Action 
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-azul-light via-white to-verdeLima/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-azul mb-4">¿Necesitas ubicar una sede?</h3>
                                <p className="text-grisOscuro mb-6 leading-relaxed">
                                    Encuentra la sede más cercana a tu ubicación y conoce los servicios específicos 
                                    que ofrecemos en cada centro de atención.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="/pqrsf"
                                        className="inline-flex items-center justify-center bg-azul hover:bg-azul-dark text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        <FaUserMd className="mr-2" />
                                        Solicitar Cita
                                    </a>
                                    <a
                                        href="/servicios"
                                        className="inline-flex items-center justify-center bg-verdeLima hover:bg-verdeOscuro text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        Ver Servicios
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg">
                                <div className="w-16 h-16 bg-gradient-to-br from-azul to-verdeLima rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaMapMarkerAlt className="text-white text-2xl" />
                                </div>
                                <h4 className="text-xl font-bold text-azul mb-2">Mapa Interactivo</h4>
                                <p className="text-grisOscuro text-sm mb-4">
                                    Próximamente disponible para ubicar fácilmente todas nuestras sedes
                                </p>
                                <div className="bg-gradient-to-br from-azul/10 to-verdeLima/10 rounded-xl p-8 border-2 border-dashed border-azul/30">
                                    <span className="text-azul font-medium">🗺️ Mapa en desarrollo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
        </div>
        </>
    );
};

export default Sedes;
