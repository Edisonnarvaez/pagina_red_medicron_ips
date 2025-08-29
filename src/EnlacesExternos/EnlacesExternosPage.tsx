import React from 'react';

const EnlacesExternos: React.FC = () => {
    return (
        <section className="min-h-screen bg-white text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-6xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Enlaces de Sistemas</h2>
                <p className="mb-8 text-center text-lg">Accede rápidamente a las aplicaciones y plataformas institucionales de Red Medicron IPS.</p>
                
                {/* Enlaces Internos */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-blue-700">🏢 Enlaces Internos</h3>
                    <p className="mb-6 text-center text-gray-600">Sistemas de acceso interno para personal autorizado</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <a 
                            href="http://192.168.59.230/SaludIPSPrueba/Home/HC" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-blue-100 hover:border-blue-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🏥</span>
                            <span className="font-bold text-lg mb-2 text-blue-800">Historia Clínica - Prueba</span>
                            <span className="text-sm text-center text-blue-600">Sistema interno de historias clínicas (Ambiente de prueba)</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-blue-200 text-blue-800 rounded-full">Red Interna</span>
                        </a>
                        
                        <a 
                            href="http://192.168.59.230/SaludIPS" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-blue-100 hover:border-blue-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">💻</span>
                            <span className="font-bold text-lg mb-2 text-blue-800">SaludIPS Interno</span>
                            <span className="text-sm text-center text-blue-600">Sistema principal de gestión de salud interno</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-blue-200 text-blue-800 rounded-full">Red Interna</span>
                        </a>
                    </div>
                </div>

                {/* Enlaces Externos */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-green-700">🌐 Enlaces Externos</h3>
                    <p className="mb-6 text-center text-gray-600">Sistemas de acceso externo y plataformas públicas</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <a 
                            href="http://186.115.218.10/VisorHC/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-green-50 border-2 border-green-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">👁️</span>
                            <span className="font-bold text-lg mb-2 text-green-800">Visor HC</span>
                            <span className="text-sm text-center text-green-600">Visualizador de historias clínicas</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-green-200 text-green-800 rounded-full">Externo</span>
                        </a>
                        
                        <a 
                            href="http://186.115.218.10/SaludIPS/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-green-50 border-2 border-green-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🏥</span>
                            <span className="font-bold text-lg mb-2 text-green-800">SaludIPS</span>
                            <span className="text-sm text-center text-green-600">Sistema principal de gestión de salud</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-green-200 text-green-800 rounded-full">Externo</span>
                        </a>
                        
                        <a 
                            href="http://186.115.218.10/SaludIPSprueba/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-green-50 border-2 border-green-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🧪</span>
                            <span className="font-bold text-lg mb-2 text-green-800">SaludIPS Prueba</span>
                            <span className="text-sm text-center text-green-600">Ambiente de pruebas del sistema</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-green-200 text-green-800 rounded-full">Externo</span>
                        </a>
                    </div>
                </div>

                {/* Enlaces Institucionales */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-purple-700">🔗 Enlaces Institucionales</h3>
                    <p className="mb-6 text-center text-gray-600">Plataformas gubernamentales y servicios institucionales</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <a 
                            href="https://www.miseguridadsocial.gov.co/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-purple-100 hover:border-purple-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🔗</span>
                            <span className="font-bold text-lg mb-2 text-purple-800">Mi Seguridad Social</span>
                            <span className="text-sm text-center text-purple-600">Consulta tu afiliación y derechos en salud</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Gubernamental</span>
                        </a>
                        
                        <a 
                            href="https://www.supersalud.gov.co/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-purple-100 hover:border-purple-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🏛️</span>
                            <span className="font-bold text-lg mb-2 text-purple-800">Supersalud</span>
                            <span className="text-sm text-center text-purple-600">Superintendencia Nacional de Salud</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Gubernamental</span>
                        </a>
                        
                        
                        
                        <a 
                            href="http://www.red.redmedicronips.com.co/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-purple-100 hover:border-purple-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">💻</span>
                            <span className="font-bold text-lg mb-2 text-purple-800">Portal Institucional</span>
                            <span className="text-sm text-center text-purple-600">Plataforma interna para empleados</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Corporativo</span>
                        </a>
                        
                        
                        
                        
                    </div>
                </div>

                {/* Nota de Seguridad */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
                    <div className="flex items-start space-x-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h4 className="font-bold text-yellow-800 mb-2">Nota Importante de Seguridad</h4>
                            <p className="text-yellow-700 text-sm">
                                Los enlaces internos solo funcionan dentro de la red corporativa de Red Medicron IPS. 
                                Para acceder desde ubicaciones externas, utilice los enlaces externos correspondientes o 
                                conéctese a la VPN institucional.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Información de Contacto */}
                <div className="w-full text-center text-sm text-gray-600 mt-8 p-6 bg-gray-50 rounded-lg">
                    <p className="mb-2">¿Necesitas ayuda con algún enlace o tienes problemas de acceso?</p>
                    <p>
                        Escríbenos a{' '}
                        <a href="mailto:soporteips@redmedicronips.com.co" className="underline text-blue-600 hover:text-blue-800">
                            soporteips@redmedicronips.com.co
                        </a>
                        {' '}o contacta al área de Sistemas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EnlacesExternos;
