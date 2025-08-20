import React from 'react';
import { FaHospital, FaUserMd, FaHeartbeat, FaAmbulance, FaStethoscope, FaMicroscope } from 'react-icons/fa';
import { MdLocalHospital, MdHealthAndSafety, MdMedicalServices } from 'react-icons/md';

const Servicios: React.FC = () => {
    const serviciosHospital = [
        { icon: FaAmbulance, titulo: "Urgencias 24/7", descripcion: "Atención médica de emergencia las 24 horas del día" },
        { icon: FaHospital, titulo: "Hospitalización", descripcion: "Servicios de hospitalización para adultos y pediatría" },
        { icon: FaHeartbeat, titulo: "UCI & UCIN", descripcion: "Unidades de cuidados intensivos y neonatales" },
        { icon: FaStethoscope, titulo: "Medicina Interna", descripcion: "Atención especializada en medicina interna" },
        { icon: MdMedicalServices, titulo: "Cirugía", descripcion: "Servicios quirúrgicos con tecnología avanzada" },
        { icon: FaMicroscope, titulo: "Laboratorio", descripcion: "Laboratorio clínico e imágenes diagnósticas" },
    ];

    const serviciosSedes = [
        { icon: FaUserMd, titulo: "Consulta Externa", descripcion: "Atención médica general y especializada" },
        { icon: MdHealthAndSafety, titulo: "Nefroprotección", descripcion: "Programa especializado en cuidado renal" },
        { icon: MdLocalHospital, titulo: "Promoción y Prevención", descripcion: "Programas de salud preventiva" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-azul-light/30 via-white to-verdeLima/10">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-azul-light/20 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-verdeLima/20 rounded-full blur-2xl -z-10" />
                
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-azul">
                        Nuestros <span className="text-verdeOscuro">Servicios</span>
                    </h1>
                    <p className="text-lg md:text-xl text-grisOscuro max-w-3xl mx-auto mb-12 leading-relaxed">
                        Red Medicron IPS ofrece una amplia gama de servicios de salud de primer y segundo nivel, 
                        con énfasis en nefroprotección y atención hospitalaria avanzada en 7 sedes estratégicas.
                    </p>
                </div>
            </section>

            {/* Hospital Tuquerres */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-azul mb-4">
                            Hospital <span className="text-verdeOscuro">Tuquerres</span>
                        </h2>
                        <p className="text-grisOscuro text-lg max-w-2xl mx-auto">
                            Nuestro hospital principal ofrece atención médica integral las 24 horas del día
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {serviciosHospital.map((servicio, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-azul to-azul-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <servicio.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-azul mb-2">{servicio.titulo}</h3>
                                <p className="text-grisOscuro">{servicio.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sedes Regionales */}
            <section className="py-16 px-4 bg-gradient-to-r from-verdeLima/10 to-azul-light/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-verdeOscuro mb-4">
                            Sedes <span className="text-azul">Regionales</span>
                        </h2>
                        <p className="text-grisOscuro text-lg max-w-3xl mx-auto">
                            Pasto, Ipiales, Tumaco, La Unión, Sandoná y Samaniego - Atención especializada cerca de ti
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {serviciosSedes.map((servicio, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-verdeLima to-verdeOscuro rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <servicio.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-verdeOscuro mb-3">{servicio.titulo}</h3>
                                <p className="text-grisOscuro leading-relaxed">{servicio.descripcion}</p>
                            </div>
                        ))}
                    </div>

                    {/* Lista de sedes */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {['Pasto', 'Ipiales', 'Tumaco', 'La Unión', 'Sandoná', 'Samaniego'].map((sede) => (
                            <div key={sede} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-gradient-to-br from-verdeLima to-verdeOscuro rounded-full flex items-center justify-center mx-auto mb-2">
                                    <FaHospital className="text-white" />
                                </div>
                                <span className="font-semibold text-verdeOscuro text-sm">{sede}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 bg-gradient-to-r from-azul to-verdeOscuro">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿Necesitas atención médica?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Contáctanos para agendar tu cita o conocer más sobre nuestros servicios especializados
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/pqrsf"
                            className="inline-flex items-center justify-center bg-acento hover:bg-warning text-negro font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Solicitar Información
                        </a>
                        <a
                            href="/sedes"
                            className="inline-flex items-center justify-center bg-white/20 backdrop-blur hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Ver Ubicaciones
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Servicios;
