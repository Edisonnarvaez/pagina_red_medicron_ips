import React from 'react';

const Organigrama: React.FC = () => {
    return (
        <section className="min-h-screen bg-white text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Organigrama</h2>
                <p className="mb-8 text-center text-lg">Conoce la estructura organizacional de Red Medicron IPS, diseñada para garantizar una gestión eficiente, transparente y orientada al usuario.</p>
                <div className="w-full flex flex-col items-center mb-8">
                    <div className="w-full max-w-xl aspect-video bg-grisClaro rounded-lg flex items-center justify-center shadow">
                        {/* Reemplaza la imagen de ejemplo por el organigrama real */}
                        <span className="text-verdeOscuro text-lg">[Imagen del organigrama institucional aquí]</span>
                    </div>
                </div>
                <div className="bg-verdeLima/30 rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Estructura General</h3>
                    <ul className="list-disc ml-6 text-base">
                        <li>Dirección General</li>
                        <li>Subdirección Científica</li>
                        <li>Subdirección Administrativa y Financiera</li>
                        <li>Coordinación de Sedes</li>
                        <li>Talento Humano</li>
                        <li>Comités Institucionales</li>
                        <li>Áreas de Apoyo y Servicios</li>
                    </ul>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>Para más información sobre la estructura organizacional, consulta la sección de transparencia o contáctanos.</span>
                </div>
            </div>
        </section>
    );
};

export default Organigrama;
