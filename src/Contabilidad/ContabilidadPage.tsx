
import React from 'react';
import { SEOHelmet } from '../components/SEO';

const Contabilidad: React.FC = () => {
    return (
        <>
            <SEOHelmet
                title="Información Contable y Financiera - Red Medicron IPS"
                description="Información contable, estados financieros y gestión fiscal de Red Medicron IPS en Nariño. Transparencia financiera e informes de gestión según normatividad colombiana."
                keywords="contabilidad red medicron ips, estados financieros nariño, información fiscal ips túquerres, gestión financiera red medicron"
                canonical="/contabilidad"
                noindex={true}
            />
            
            <section className="relative min-h-screen bg-gradient-to-br from-azul-light via-white to-verdeLima/20 text-negro flex flex-col items-center px-4 pt-32 pb-20 overflow-hidden">
            {/* Fondo decorativo institucional */}
            <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-azul-light rounded-full blur-2xl opacity-30 -z-10" />
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-verdeLima/30 rounded-full blur-2xl opacity-20 -z-10" />

            <div className="w-full max-w-7xl flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight drop-shadow-sm">
                    Contabilidad y <span className="text-verdeOscuro">Estados Financieros</span>
                </h2>
                <p className="mb-10 text-center text-lg max-w-3xl">Consulta los estados financieros, informes de gestión y documentos contables de Red Medicron IPS, cumpliendo con la transparencia exigida por la Superintendencia Nacional de Salud y la normatividad colombiana.</p>

                {/* Estados Financieros por Año */}
                <div className="mb-12 w-full animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6 text-verdeOscuro text-center">Estados Financieros por Año</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Estados Financieros 2025 */}
                        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-verdeLima/10">
                            <div className="text-center mb-4">
                                <h4 className="text-xl font-bold text-verdeOscuro">2025</h4>
                                <p className="text-sm text-gray-600">Estados Financieros Auditados</p>
                            </div>
                            <div className="space-y-3">
                                <a 
                                    href="https://drive.google.com/file/d/1rB74PHDmtJiMcn8JJ7VDSSuLBIvM3fKX/view?usp=drive_link" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 bg-verdeLima/10 rounded-lg hover:bg-verdeLima/20 transition-colors"
                                >
                                    <span className="text-sm font-medium">Estados Financieros</span>
                                    <span className="text-azul text-xs">Ver PDF</span>
                                </a>
                            </div>
                        </div>
                        {/* Estados Financieros 2024 */}
                        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-verdeLima/10">
                            <div className="text-center mb-4">
                                <h4 className="text-xl font-bold text-verdeOscuro">2024</h4>
                                <p className="text-sm text-gray-600">Estados Financieros Auditados</p>
                            </div>
                            <div className="space-y-3">
                                <a 
                                    href="https://drive.google.com/file/d/191kJQQcoyeIgKW4jqCgi5VicohWcj3me/view?usp=drive_link" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 bg-verdeLima/10 rounded-lg hover:bg-verdeLima/20 transition-colors"
                                >
                                    <span className="text-sm font-medium">Estados Financieros</span>
                                    <span className="text-azul text-xs">Ver PDF</span>
                                </a>
                            </div>
                        </div>

                        {/* Estados Financieros 2023 */}
                        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-verdeLima/10">
                            <div className="text-center mb-4">
                                <h4 className="text-xl font-bold text-verdeOscuro">2023</h4>
                                <p className="text-sm text-gray-600">Estados Financieros Auditados</p>
                            </div>
                            <div className="space-y-3">
                                <a 
                                    href="https://drive.google.com/file/d/1a5qY-xVxtSgmtgohgvOgTXBPHDitRgJW/view?usp=drive_link" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 bg-verdeLima/10 rounded-lg hover:bg-verdeLima/20 transition-colors"
                                >
                                    <span className="text-sm font-medium">Estados Financieros</span>
                                    <span className="text-azul text-xs">Ver PDF</span>
                                </a>
                            </div>
                        </div>

                        {/* Estados Financieros 2022 */}
                        {/* <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-verdeLima/10">
                            <div className="text-center mb-4">
                                <h4 className="text-xl font-bold text-verdeOscuro">2022</h4>
                                <p className="text-sm text-gray-600">Estados Financieros Auditados</p>
                            </div>
                            <div className="space-y-3">
                                <a 
                                    href="https://drive.google.com/file/d/1U8fnkbdS20s7SluESiE9kz-Ve1a8ZYlA/view?usp=drive_link" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 bg-verdeLima/10 rounded-lg hover:bg-verdeLima/20 transition-colors"
                                >
                                    <span className="text-sm font-medium">Estados Financieros</span>
                                    <span className="text-azul text-xs">Ver PDF</span>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Registros Web Completos */}
                <div className="mb-12 w-full animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6 text-verdeOscuro text-center">Registros Web y Documentación Institucional</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        
                        {/* Registros Web 2024 */}
                        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-verdeLima/10">
                            <div className="text-center mb-6">
                                <h4 className="text-xl font-bold text-verdeOscuro mb-2">Registros Web 2024</h4>
                                <p className="text-sm text-gray-600">Documentación institucional completa</p>
                            </div>
                            
                            <div className="space-y-3 mb-6">
                                <div className="text-sm font-medium text-gray-700 mb-3">Documentos incluidos:</div>
                                <ul className="text-xs space-y-1 text-gray-600 mb-4">
                                    <li>• Asamblea General Ordinaria 2024</li>
                                    <li>• Certificación de Cumplimiento</li>
                                    <li>• Certificado Antecedentes Judiciales</li>
                                    <li>• Certificación Cargos Directivos</li>
                                    <li>• Memoria Económica 2024</li>
                                    <li>• Cámara de Comercio Diciembre 2024</li>
                                    <li>• Estados Financieros 2024</li>
                                    <li>• Informe de Gestión 2024</li>
                                    <li>• Proyecto Distribución U 2024</li>
                                    <li>• Estatutos Red Medicron IPS</li>
                                </ul>
                            </div>
                            
                            <a 
                                href="https://drive.google.com/file/d/1KssY29Mv035opypPtfzgqp4UaL1hq956/view?usp=drive_link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center p-4 bg-verdeOscuro text-white rounded-lg hover:bg-verdeOscuro/80 transition-colors font-medium"
                            >
                                <span>Descargar Registros Web 2024</span>
                            </a>
                        </div>

                        {/* Registros Web 2023 */}
                        <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-verdeLima/10">
                            <div className="text-center mb-6">
                                <h4 className="text-xl font-bold text-verdeOscuro mb-2">Registros Web 2023</h4>
                                <p className="text-sm text-gray-600">Documentación institucional histórica</p>
                            </div>
                            
                            <div className="space-y-3 mb-6">
                                <div className="text-sm font-medium text-gray-700 mb-3">Incluye documentación completa de:</div>
                                <ul className="text-xs space-y-1 text-gray-600 mb-4">
                                    <li>• Estados financieros auditados</li>
                                    <li>• Informes de gestión</li>
                                    <li>• Certificaciones institucionales</li>
                                    <li>• Documentos legales y normativos</li>
                                    <li>• Registros de cumplimiento</li>
                                    <li>• Actas y resoluciones</li>
                                </ul>
                            </div>
                            
                            <a 
                                href="https://drive.google.com/file/d/18Bnq6SxUL9HfsH39hSXsIYdeayElo5r9/view?usp=drive_link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center p-4 bg-azul text-white rounded-lg hover:bg-azul/80 transition-colors font-medium"
                            >
                                <span>Descargar Registros Web 2023</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Información Legal y Contacto */}
                <div className="w-full flex flex-col md:flex-row gap-6 mb-10 animate-fade-in">
                    <div className="flex-1 bg-verdeLima/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <h4 className="font-bold text-lg mb-4 text-verdeOscuro">Marco Legal y Normativo</h4>
                        <div className="text-sm text-left space-y-2">
                            <p><strong>Superintendencia Nacional de Salud:</strong> Cumplimiento de reportes financieros</p>
                            <p><strong>Ley 100 de 1993:</strong> Sistema General de Seguridad Social en Salud</p>
                            <p><strong>Resolución 5158 de 2015:</strong> Manual de acreditación en salud</p>
                            <p><strong>NIIF:</strong> Normas Internacionales de Información Financiera</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 bg-azul-light/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <h4 className="font-bold text-lg mb-4 text-verdeOscuro">Transparencia y Acceso</h4>
                        <div className="text-sm space-y-3">
                            <p>Red Medicron IPS garantiza el acceso público a la información financiera conforme a la Ley 1712 de 2014 de Transparencia y Acceso a la Información Pública.</p>
                            <p className="font-medium text-azul">Todos los documentos están disponibles para consulta ciudadana.</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 bg-verdeLima/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <h4 className="font-bold text-lg mb-4 text-verdeOscuro">Contacto Contable</h4>
                        <div className="space-y-3">
                            <p className="text-sm">¿Necesitas información adicional sobre nuestros estados financieros? <br />escribenos a contabilidad@redmedicronips.com.co</p>
                            <a 
                                href="mailto:contabilidad@redmedicronips.com.co" 
                                className="inline-block bg-acento hover:bg-warning text-negro font-bold px-6 py-2 rounded-full shadow transition-all duration-200"
                            >
                                Contactar Contabilidad 
                            </a>
                        </div>
                    </div>
                </div>

                {/* Nota sobre Asamblea */}
                <div className="w-full bg-gradient-to-r from-azul-light/20 to-verdeLima/20 rounded-2xl p-6 mb-10 text-center animate-fade-in">
                    <h4 className="font-bold text-lg mb-3 text-verdeOscuro">📋 Información de Asamblea General</h4>
                    <p className="text-sm text-gray-700 mb-4">
                        Los documentos relacionados con la Asamblea General Ordinaria, incluyendo actas, convocatorias y decisiones, 
                        se encuentran disponibles en una sección dedicada para garantizar mejor organización y acceso.
                    </p>
                    <div className="text-xs text-gray-600">
                        <em>Los documentos de asamblea forman parte de los registros web pero merecen una sección específica para mayor transparencia.</em>
                    </div>
                </div>

                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>La transparencia financiera es nuestro compromiso institucional con todos nuestros usuarios y la comunidad.</span>
                </div>
            </div>
        </section>
        </>
    );
};

export default Contabilidad;
