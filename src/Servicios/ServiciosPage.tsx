import React from 'react';
import { FaHospital, FaUserMd, FaHeartbeat, FaAmbulance, FaStethoscope, FaMicroscope, FaTooth, FaShieldAlt, FaLungs, FaDumbbell, FaBaby, FaSyringe, FaPills, FaXRay, FaBirthdayCake, FaWeight } from 'react-icons/fa';
import { MdMedicalServices, MdPregnantWoman, MdBloodtype, MdHealing } from 'react-icons/md';
import { GiKidneys } from 'react-icons/gi';
import { RiMentalHealthLine } from 'react-icons/ri';

const Servicios: React.FC = () => {
    // Servicios de Primer Nivel (Sedes Regionales)
    const serviciosPrimerNivel = [
        { icon: FaUserMd, titulo: "Morbilidad General", descripcion: "Atención médica oportuna para cuidar de ti y tu familia con calidad y calidez." },
        { icon: FaTooth, titulo: "Odontología", descripcion: "Tu sonrisa es nuestra prioridad. Servicios dentales integrales para todas las edades." },
        { icon: FaShieldAlt, titulo: "Promoción y Mantenimiento de la Salud", descripcion: "Te acompañamos a prevenir enfermedades y construir hábitos de vida saludables." },
        { icon: GiKidneys, titulo: "Programa de Nefroprotección", descripcion: "Cuidamos tu salud renal con seguimiento personalizado y prevención efectiva." },
        { icon: FaLungs, titulo: "Programa EPOC", descripcion: "Respira mejor. Tratamiento integral para mejorar tu calidad de vida con EPOC." },
        { icon: MdHealing, titulo: "Terapias Integrales", descripcion: "Recupera tu bienestar físico y emocional con nuestras terapias personalizadas." },
    ];

    // Servicios de Mediana y Alta Complejidad (Hospital)
    const serviciosHospital = [
        { icon: FaAmbulance, titulo: "Urgencias", descripcion: "Atención médica 24/7 con disponibilidad permanente de especialidades básicas." },
        { icon: MdMedicalServices, titulo: "Procedimientos Quirúrgicos", descripcion: "Cirugías generales, ginecológicas y ortopédicas en quirófanos totalmente equipados." },
        { icon: FaBaby, titulo: "Atención de Partos y Recién Nacidos", descripcion: "Atención integral y segura al binomio madre-hijo con enfoque humanizado." },
        { icon: FaAmbulance, titulo: "Transporte Asistencial", descripcion: "Traslado básico y medicalizado con ambulancias certificadas y personal entrenado." },
        { icon: FaHospital, titulo: "Hospitalización", descripcion: "Espacios confortables y seguros para una recuperación integral y acompañada." },
        { icon: FaHeartbeat, titulo: "UCI", descripcion: "Cuidados intensivos e intermedios con tecnología biomédica de punta y monitoreo continuo." },
        { icon: FaDumbbell, titulo: "Terapias", descripcion: "Rehabilitación física, ocupacional, respiratoria y fonoaudiología centrada en la funcionalidad." },
        { icon: FaPills, titulo: "Servicio Farmacéutico", descripcion: "Dispensación segura y seguimiento del tratamiento farmacológico." },
        { icon: FaMicroscope, titulo: "Laboratorio Clínico", descripcion: "Procesamiento de muestras con resultados confiables, oportunos y de alta calidad." },
        { icon: MdBloodtype, titulo: "Servicio Transfusional", descripcion: "Disponibilidad de hemoderivados seguros y procedimientos transfusionales hospitalarios." },
        { icon: FaXRay, titulo: "Imagenología", descripcion: "Diagnóstico por imágenes con equipos de última generación: rayos X, ecografía y tomografía." },
    ];

    // Consulta Externa Hospitalaria
    const consultaExternaHospital = [
        { icon: FaUserMd, titulo: "Traumatología y Ortopedia", descripcion: "Atención especializada en lesiones del sistema musculoesquelético" },
        { icon: FaStethoscope, titulo: "Medicina Interna", descripcion: "Diagnóstico y tratamiento de enfermedades del adulto" },
        { icon: MdPregnantWoman, titulo: "Ginecología", descripcion: "Salud integral de la mujer en todas las etapas de la vida" },
        { icon: FaBirthdayCake, titulo: "Pediatría", descripcion: "Atención médica especializada para niños y adolescentes" },
        { icon: MdPregnantWoman, titulo: "Ginecobstetricia", descripcion: "Cuidado integral durante el embarazo, parto y posparto" },
        { icon: RiMentalHealthLine, titulo: "Psicología", descripcion: "Apoyo en salud mental y bienestar emocional" },
        { icon: MdMedicalServices, titulo: "Cirugía General", descripcion: "Procedimientos quirúrgicos generales con tecnología avanzada" },
        { icon: FaWeight, titulo: "Nutrición", descripcion: "Planes alimentarios personalizados para mejorar tu salud" },
        { icon: FaUserMd, titulo: "Medicina General", descripcion: "Atención médica integral para toda la familia" },
        { icon: FaSyringe, titulo: "Anestesiología", descripcion: "Servicios anestésicos seguros para procedimientos quirúrgicos" },
        { icon: FaUserMd, titulo: "Dermatología", descripcion: "Cuidado especializado de la piel y sus enfermedades" },
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

            {/* Servicios de Primer Nivel */}
            <section className="py-16 px-4 bg-gradient-to-r from-verdeLima/10 to-azul-light/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-verdeOscuro mb-4">
                            Servicios de <span className="text-azul">Primer Nivel</span>
                        </h2>
                        <p className="text-grisOscuro text-lg max-w-3xl mx-auto">
                            Atención integral en nuestras 6 sedes regionales: Pasto, Buesaco, Ipiales, La Cruz, Tumaco y Tuquerres
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {serviciosPrimerNivel.map((servicio, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-verdeLima to-verdeOscuro rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <servicio.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-verdeOscuro mb-3">{servicio.titulo}</h3>
                                <p className="text-grisOscuro leading-relaxed">{servicio.descripcion}</p>
                            </div>
                        ))}
                    </div>

                    {/* Lista de sedes */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {['Pasto', 'Buesaco', 'Ipiales', 'La Cruz', 'Tumaco', 'Tuquerres'].map((sede) => (
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

            {/* Hospital Tuquerres - Mediana y Alta Complejidad */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-azul mb-4">
                            Hospital Tuquerres - <span className="text-verdeOscuro">Mediana y Alta Complejidad</span>
                        </h2>
                        <p className="text-grisOscuro text-lg max-w-3xl mx-auto">
                            Servicios hospitalarios avanzados con atención médica integral las 24 horas del día
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

            {/* Consulta Externa Hospitalaria */}
            <section className="py-16 px-4 bg-gradient-to-r from-grisClaro/50 to-azul-light/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-azul mb-4">
                            Consulta Externa <span className="text-verdeOscuro">Hospitalaria</span>
                        </h2>
                        <p className="text-grisOscuro text-lg max-w-3xl mx-auto">
                            Especialidades médicas disponibles en nuestro hospital para una atención integral
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {consultaExternaHospital.map((servicio, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-azul-light to-azul rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <servicio.icon className="text-white text-lg" />
                                </div>
                                <h3 className="text-lg font-bold text-azul mb-1">{servicio.titulo}</h3>
                                <p className="text-grisOscuro text-sm leading-relaxed">{servicio.descripcion}</p>
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
