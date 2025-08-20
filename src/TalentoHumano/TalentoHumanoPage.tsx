
const TalentoHumano: React.FC = () => {
    return (
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

                {/* Perfiles destacados */}
                <div className="mb-10 w-full animate-fade-in">
                    <h3 className="font-bold text-lg mb-4 text-verdeOscuro text-center">Perfiles Destacados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-verdeLima/10">
                            <div className="w-20 h-20 rounded-full bg-verdeLima/30 flex items-center justify-center mb-3">
                                <span className="text-3xl font-bold text-verdeOscuro">JD</span>
                            </div>
                            <span className="font-bold text-verdeOscuro">Dra. Juliana Díaz</span>
                            <span className="text-sm text-grisOscuro mb-2">Directora Científica</span>
                            <p className="text-xs">Lidera la estrategia clínica y la innovación en la atención de pacientes crónicos.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-verdeLima/10">
                            <div className="w-20 h-20 rounded-full bg-verdeLima/30 flex items-center justify-center mb-3">
                                <span className="text-3xl font-bold text-verdeOscuro">MC</span>
                            </div>
                            <span className="font-bold text-verdeOscuro">MSc. Mario Castillo</span>
                            <span className="text-sm text-grisOscuro mb-2">Coordinador de Sedes</span>
                            <p className="text-xs">Gestiona la operación y calidad en las sedes de la red, promoviendo la excelencia.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-verdeLima/10">
                            <div className="w-20 h-20 rounded-full bg-verdeLima/30 flex items-center justify-center mb-3">
                                <span className="text-3xl font-bold text-verdeOscuro">AP</span>
                            </div>
                            <span className="font-bold text-verdeOscuro">Ana Pérez</span>
                            <span className="text-sm text-grisOscuro mb-2">Enfermera Jefe</span>
                            <p className="text-xs">Referente en humanización y acompañamiento a pacientes y familias.</p>
                        </div>
                    </div>
                </div>

                {/* Bloque de convocatoria */}
                <div className="w-full flex flex-col md:flex-row gap-6 mb-10 animate-fade-in">
                    <div className="flex-1 bg-verdeLima/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <h4 className="font-bold text-lg mb-2 text-verdeOscuro">Convocatorias y Vinculación</h4>
                        <p className="mb-2">¿Quieres hacer parte de nuestro equipo? Consulta las convocatorias abiertas o envía tu hoja de vida.</p>
                        <a href="mailto:talento@redmedicron.com" className="inline-block bg-acento hover:bg-warning text-negro font-bold px-6 py-2 rounded-full shadow transition-all duration-200 mt-2">Enviar hoja de vida</a>
                    </div>
                    <div className="flex-1 bg-verdeLima/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <h4 className="font-bold text-lg mb-2 text-verdeOscuro">Bienestar y Formación</h4>
                        <p>Ofrecemos programas de bienestar, capacitación y desarrollo profesional para todos nuestros colaboradores.</p>
                    </div>
                </div>

                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>¿Tienes dudas sobre talento humano? Escribe a <a href="mailto:talento@redmedicron.com" className="underline text-azul">talento@redmedicron.com</a></span>
                </div>
            </div>
        </section>
    );
};

export default TalentoHumano;
