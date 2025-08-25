import React, { useState } from 'react';

const Accesibilidad: React.FC = () => {
    const [contraste, setContraste] = useState(false);
    const [fontSize, setFontSize] = useState(1);

    return (
        <section className={`min-h-screen p-8 ${contraste ? 'bg-black text-white' : 'bg-grisClaro text-negro'}`} style={{ fontSize: `${fontSize}em` }}>
            <div className="w-full max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Accesibilidad</h2>
                <div className="mb-6 flex gap-4 justify-center">
                    <button
                        className={`px-4 py-2 rounded transition ${contraste ? 'bg-white text-black border border-azul' : 'bg-azul text-white'}`}
                        onClick={() => setContraste(!contraste)}
                        aria-label="Activar/desactivar alto contraste"
                    >
                        {contraste ? 'Modo Normal' : 'Alto Contraste'}
                    </button>
                    <button className="px-4 py-2 bg-verdeLima text-negro rounded" onClick={() => setFontSize(f => Math.max(1, f - 0.1))}>A-</button>
                    <button className="px-4 py-2 bg-verdeLima text-negro rounded" onClick={() => setFontSize(f => Math.min(2, f + 0.1))}>A+</button>
                </div>
                <p className="mb-8 text-center text-lg">Red Medicron IPS está comprometida con la accesibilidad digital y la inclusión. Cumplimos con la normativa colombiana, la matriz ITA y los estándares internacionales para garantizar que todas las personas puedan navegar y acceder a la información y servicios.</p>
                <div className="mb-10 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg mb-4 text-verdeOscuro">¿Qué ayudas encuentras aquí?</h3>
                    <ul className="list-disc ml-6 text-base space-y-1">
                        <li>Botón de alto contraste para mejorar la visibilidad.</li>
                        <li>Botones para aumentar o reducir el tamaño de la fuente.</li>
                        <li>Compatibilidad con lectores de pantalla y navegación por teclado.</li>
                        <li>Enlaces descriptivos y textos alternativos en imágenes.</li>
                        <li>Diseño responsivo para dispositivos móviles y de escritorio.</li>
                        <li>Contenido claro, estructurado y fácil de entender.</li>
                    </ul>
                </div>
                <div className="mb-10 bg-verdeLima/30 rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Política de Accesibilidad</h3>
                    <p className="mb-2">Red Medicron IPS adopta las mejores prácticas de accesibilidad web, siguiendo la Ley 1618 de 2013, el Decreto 201 de 2012 y la Resolución 1519 de 2020, así como las pautas internacionales WCAG 2.1.</p>
                    <ul className="list-disc ml-6 text-base">
                        <li>Revisión y mejora continua de la accesibilidad del sitio.</li>
                        <li>Capacitación al personal en inclusión digital.</li>
                        <li>Atención prioritaria a solicitudes de accesibilidad.</li>
                        <li>Compromiso con la igualdad de acceso para todos los usuarios.</li>
                    </ul>
                </div>
                <div className="mb-10 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">¿Necesitas ayuda?</h3>
                    <p className="mb-2">Si tienes dificultades para navegar el sitio o requieres información en un formato accesible, contáctanos:</p>
                    <ul className="list-disc ml-6 text-base">
                        <li>Correo: <a href="mailto:accesibilidad@redmedicronips.com.co" className="underline text-azul">accesibilidad@redmedicronips.com.co</a></li>
                        <li>Teléfono: <a href="tel:+573001234567" className="underline text-azul">+57 300 123 4567</a></li>
                    </ul>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>Red Medicron IPS - Accesibilidad e inclusión para todos. Última actualización: Agosto 2025.</span>
                </div>
            </div>
        </section>
    );
};

export default Accesibilidad;
