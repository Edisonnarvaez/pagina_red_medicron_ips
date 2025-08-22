import React from 'react';

const Asamblea: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-verdeLima/20 via-white to-azul-light/30 text-negro flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
            {/* Fondo decorativo institucional */}
            <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-verdeLima/30 rounded-full blur-2xl opacity-30 -z-10" />
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-azul-light rounded-full blur-2xl opacity-20 -z-10" />

            <div className="w-full max-w-7xl flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight drop-shadow-sm">
                    <span className="text-verdeOscuro">Asamblea General</span> Ordinaria
                </h2>
                <p className="mb-10 text-center text-lg max-w-3xl">
                    La Asamblea General es el máximo órgano de gobierno de Red Medicron IPS. Aquí encontrarás las actas, 
                    convocatorias, decisiones y documentos relacionados con las asambleas ordinarias y extraordinarias.
                </p>

                {/* Asamblea General 2024 */}
                <div className="mb-12 w-full animate-fade-in">
                    <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-verdeLima/10">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-verdeOscuro mb-2">Asamblea General Ordinaria 2024</h3>
                            <p className="text-sm text-gray-600">Documentación completa de la asamblea del año 2024</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {/* Convocatoria */}
                            <div className="bg-azul-light/10 rounded-xl p-6 text-center">
                                <div className="w-16 h-16 bg-azul rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">📋</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-azul">Convocatoria</h4>
                                <p className="text-sm text-gray-600 mb-4">Documentos de convocatoria oficial y agenda de la asamblea</p>
                                <div className="text-xs text-gray-500">Incluido en registros web 2024</div>
                            </div>

                            {/* Actas y Decisiones */}
                            <div className="bg-verdeOscuro/10 rounded-xl p-6 text-center">
                                <div className="w-16 h-16 bg-verdeOscuro rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">📝</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-verdeOscuro">Actas y Decisiones</h4>
                                <p className="text-sm text-gray-600 mb-4">Registro oficial de las decisiones tomadas en la asamblea</p>
                                <div className="text-xs text-gray-500">Incluido en registros web 2024</div>
                            </div>

                            {/* Participación */}
                            <div className="bg-verdeLima/20 rounded-xl p-6 text-center">
                                <div className="w-16 h-16 bg-verdeLima rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">👥</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-verdeLima">Participación</h4>
                                <p className="text-sm text-gray-600 mb-4">Registro de asistencia y participación de asociados</p>
                                <div className="text-xs text-gray-500">Incluido en registros web 2024</div>
                            </div>
                        </div>

                        {/* Acceso a documentos */}
                        <div className="bg-gradient-to-r from-verdeOscuro/10 to-azul-light/10 rounded-xl p-6">
                            <h4 className="font-bold text-lg mb-4 text-center text-verdeOscuro">📁 Acceso a Documentos Completos</h4>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <a 
                                    href="https://drive.google.com/file/d/1KssY29Mv035opypPtfzgqp4UaL1hq956/view?usp=drive_link" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-4 bg-verdeOscuro text-white rounded-lg hover:bg-verdeOscuro/80 transition-colors font-medium"
                                >
                                    <span className="mr-2">📄</span>
                                    Registros Web 2024 (Incluye Asamblea)
                                </a>
                                <a 
                                    href="/contabilidad" 
                                    className="flex items-center justify-center p-4 bg-azul text-white rounded-lg hover:bg-azul/80 transition-colors font-medium"
                                >
                                    <span className="mr-2">📊</span>
                                    Ver Estados Financieros 2024
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Información sobre Asambleas Anteriores */}
                <div className="mb-12 w-full animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6 text-verdeOscuro text-center">Asambleas Anteriores</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Asamblea 2023 */}
                        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-verdeLima/10">
                            <div className="text-center mb-4">
                                <h4 className="text-xl font-bold text-verdeOscuro">Asamblea 2023</h4>
                                <p className="text-sm text-gray-600">Documentación histórica</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-verdeLima/10 rounded-lg">
                                    <span className="text-sm font-medium">Documentos completos</span>
                                    <span className="text-xs text-gray-600">En registros web</span>
                                </div>
                                <a 
                                    href="https://drive.google.com/file/d/18Bnq6SxUL9HfsH39hSXsIYdeayElo5r9/view?usp=drive_link" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center p-3 bg-azul text-white rounded-lg hover:bg-azul/80 transition-colors text-sm"
                                >
                                    Acceder a Registros Web 2023
                                </a>
                            </div>
                        </div>

                        {/* Próximas Asambleas */}
                        <div className="bg-gradient-to-br from-verdeLima/20 to-azul-light/20 rounded-2xl shadow-lg p-6 border border-verdeLima/10">
                            <div className="text-center mb-4">
                                <h4 className="text-xl font-bold text-verdeOscuro">Próximas Asambleas</h4>
                                <p className="text-sm text-gray-600">Mantente informado</p>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center p-3 bg-white/50 rounded-lg">
                                    <span className="mr-3">📅</span>
                                    <div>
                                        <div className="font-medium">Asamblea Ordinaria 2025</div>
                                        <div className="text-xs text-gray-600">Fecha por definir</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-white/50 rounded-lg">
                                    <span className="mr-3">📧</span>
                                    <div>
                                        <div className="font-medium">Convocatorias oficiales</div>
                                        <div className="text-xs text-gray-600">Se envían a asociados registrados</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marco Legal y Procedimientos */}
                <div className="w-full flex flex-col md:flex-row gap-6 mb-10 animate-fade-in">
                    <div className="flex-1 bg-azul-light/20 rounded-2xl p-6 shadow-lg">
                        <h4 className="font-bold text-lg mb-4 text-verdeOscuro">⚖️ Marco Legal</h4>
                        <div className="text-sm space-y-2">
                            <p><strong>Estatutos de Red Medicron IPS:</strong> Regulan la organización y funcionamiento</p>
                            <p><strong>Ley 79 de 1988:</strong> Actualiza la legislación cooperativa</p>
                            <p><strong>Decreto 1482 de 1989:</strong> Reglamenta aspectos de organización</p>
                            <p><strong>Código de Comercio:</strong> Normas sobre asambleas y decisiones</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 bg-verdeLima/20 rounded-2xl p-6 shadow-lg">
                        <h4 className="font-bold text-lg mb-4 text-verdeOscuro">📋 Procedimientos</h4>
                        <div className="text-sm space-y-2">
                            <p><strong>Convocatoria:</strong> Con 15 días de anticipación mínimo</p>
                            <p><strong>Quórum:</strong> Según estatutos institucionales</p>
                            <p><strong>Decisiones:</strong> Por mayoría de votos de asistentes</p>
                            <p><strong>Actas:</strong> Registro oficial de todas las decisiones</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 bg-verdeOscuro/10 rounded-2xl p-6 shadow-lg">
                        <h4 className="font-bold text-lg mb-4 text-verdeOscuro">📞 Contacto</h4>
                        <div className="space-y-3 text-sm">
                            <p>¿Necesitas información sobre asambleas o documentos relacionados?</p>
                            <a 
                                href="mailto:asamblea@redmedicronips.com" 
                                className="inline-block bg-verdeOscuro text-white px-4 py-2 rounded-lg hover:bg-verdeOscuro/80 transition-colors"
                            >
                                Contactar Secretaría
                            </a>
                            <p className="text-xs text-gray-600">Respuesta en 24 horas hábiles</p>
                        </div>
                    </div>
                </div>

                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>La transparencia en la gestión democrática es fundamental para el fortalecimiento institucional de Red Medicron IPS.</span>
                </div>
            </div>
        </section>
    );
};

export default Asamblea;
