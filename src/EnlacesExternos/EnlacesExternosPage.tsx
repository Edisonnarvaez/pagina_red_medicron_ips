import React from 'react';

const EnlacesExternos: React.FC = () => {
    return (
        <section className="min-h-screen bg-white text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Enlaces Externos</h2>
                <p className="mb-8 text-center text-lg">Accede rápidamente a las aplicaciones y plataformas institucionales de Red Medicron IPS.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <a href="https://www.miseguridadsocial.gov.co/" target="_blank" rel="noopener noreferrer" className="bg-grisClaro rounded-lg p-6 flex flex-col items-center shadow hover:bg-verdeLima/30 transition">
                        <span className="text-4xl mb-2">🔗</span>
                        <span className="font-bold text-lg mb-1">Mi Seguridad Social</span>
                        <span className="text-xs text-center">Consulta tu afiliación y derechos en salud</span>
                    </a>
                    <a href="https://www.supersalud.gov.co/" target="_blank" rel="noopener noreferrer" className="bg-grisClaro rounded-lg p-6 flex flex-col items-center shadow hover:bg-verdeLima/30 transition">
                        <span className="text-4xl mb-2">🏛️</span>
                        <span className="font-bold text-lg mb-1">Supersalud</span>
                        <span className="text-xs text-center">Superintendencia Nacional de Salud</span>
                    </a>
                    <a href="https://www.redmedicron.com/correo" target="_blank" rel="noopener noreferrer" className="bg-grisClaro rounded-lg p-6 flex flex-col items-center shadow hover:bg-verdeLima/30 transition">
                        <span className="text-4xl mb-2">📧</span>
                        <span className="font-bold text-lg mb-1">Correo Institucional</span>
                        <span className="text-xs text-center">Acceso al correo corporativo</span>
                    </a>
                    <a href="https://www.redmedicron.com/intranet" target="_blank" rel="noopener noreferrer" className="bg-grisClaro rounded-lg p-6 flex flex-col items-center shadow hover:bg-verdeLima/30 transition">
                        <span className="text-4xl mb-2">💻</span>
                        <span className="font-bold text-lg mb-1">Intranet</span>
                        <span className="text-xs text-center">Plataforma interna para empleados</span>
                    </a>
                    <a href="https://www.redmedicron.com/pqrsf" target="_blank" rel="noopener noreferrer" className="bg-grisClaro rounded-lg p-6 flex flex-col items-center shadow hover:bg-verdeLima/30 transition">
                        <span className="text-4xl mb-2">📝</span>
                        <span className="font-bold text-lg mb-1">PQRSF</span>
                        <span className="text-xs text-center">Peticiones, quejas y sugerencias</span>
                    </a>
                    <a href="https://www.redmedicron.com/portal-usuarios" target="_blank" rel="noopener noreferrer" className="bg-grisClaro rounded-lg p-6 flex flex-col items-center shadow hover:bg-verdeLima/30 transition">
                        <span className="text-4xl mb-2">👤</span>
                        <span className="font-bold text-lg mb-1">Portal de Usuarios</span>
                        <span className="text-xs text-center">Consulta de servicios y resultados</span>
                    </a>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>¿Necesitas otro enlace? Escríbenos a <a href="mailto:soporte@redmedicron.com" className="underline text-azul">soporte@redmedicron.com</a></span>
                </div>
            </div>
        </section>
    );
};

export default EnlacesExternos;
