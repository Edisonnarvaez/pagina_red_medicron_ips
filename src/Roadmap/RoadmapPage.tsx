import React from 'react';

const Roadmap: React.FC = () => {
    return (
        <section className="min-h-screen bg-white text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Roadmap</h2>
                <p className="mb-8 text-center text-lg">Consulta el plan de desarrollo, próximos hitos y mejoras continuas del sitio web y los servicios de Red Medicron IPS.</p>
                <div className="mb-10 bg-grisClaro rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg mb-4 text-verdeOscuro">Hitos Recientes</h3>
                    <ul className="list-disc ml-6 text-base space-y-1">
                        <li><span className="font-semibold">Agosto 2025:</span> Lanzamiento del nuevo portal web institucional.</li>
                        <li><span className="font-semibold">Julio 2025:</span> Integración de accesibilidad y matriz ITA.</li>
                        <li><span className="font-semibold">Junio 2025:</span> Publicación de estados financieros y transparencia.</li>
                    </ul>
                </div>
                <div className="mb-10 bg-verdeLima/30 rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Próximos Desarrollos</h3>
                    <ul className="list-disc ml-6 text-base">
                        <li>Implementación de formularios interactivos para PQRSF y Línea Ética.</li>
                        <li>Integración de chat de atención al usuario en línea.</li>
                        <li>Actualización periódica de noticias y recursos educativos.</li>
                        <li>Optimización para dispositivos móviles y velocidad de carga.</li>
                        <li>Mejoras en la visualización de documentos y reportes.</li>
                    </ul>
                </div>
                <div className="mb-10 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">¿Tienes sugerencias?</h3>
                    <p className="mb-2">Tu opinión es clave para seguir mejorando. Si tienes ideas o sugerencias para el sitio web o los servicios, escríbenos a <a href="mailto:innovacion@redmedicron.com" className="underline text-azul">innovacion@redmedicron.com</a>.</p>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>Este roadmap se actualiza periódicamente para reflejar el compromiso de Red Medicron IPS con la mejora continua.</span>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
