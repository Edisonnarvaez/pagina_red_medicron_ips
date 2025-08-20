import React from 'react';

const Noticias: React.FC = () => {
    return (
        <section className="min-h-screen bg-grisClaro text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-5xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Noticias</h2>
                <p className="mb-8 text-center text-lg">Mantente informado con las últimas noticias, eventos y novedades de Red Medicron IPS.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
                        <span className="text-xs text-verdeOscuro font-semibold">12/08/2025</span>
                        <h3 className="font-bold text-lg">Nueva sede en Samaniego</h3>
                        <p className="text-sm">Red Medicron IPS inaugura una nueva sede en Samaniego para ampliar la cobertura y mejorar la atención en la región.</p>
                        <a href="#" className="text-azul underline text-xs mt-2">Leer más</a>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
                        <span className="text-xs text-verdeOscuro font-semibold">01/08/2025</span>
                        <h3 className="font-bold text-lg">Jornada de salud renal</h3>
                        <p className="text-sm">Se realizó con éxito la jornada de prevención y diagnóstico de enfermedades renales en la sede Pasto.</p>
                        <a href="#" className="text-azul underline text-xs mt-2">Leer más</a>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
                        <span className="text-xs text-verdeOscuro font-semibold">20/07/2025</span>
                        <h3 className="font-bold text-lg">Reconocimiento a la excelencia</h3>
                        <p className="text-sm">Red Medicron IPS recibió el reconocimiento regional por calidad y humanización en la atención en salud.</p>
                        <a href="#" className="text-azul underline text-xs mt-2">Leer más</a>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
                        <span className="text-xs text-verdeOscuro font-semibold">10/07/2025</span>
                        <h3 className="font-bold text-lg">Capacitación en bioseguridad</h3>
                        <p className="text-sm">Personal de todas las sedes participó en la actualización de protocolos de bioseguridad.</p>
                        <a href="#" className="text-azul underline text-xs mt-2">Leer más</a>
                    </div>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>¿Tienes una noticia para compartir? Escríbenos a <a href="mailto:comunicaciones@redmedicron.com" className="underline text-azul">comunicaciones@redmedicron.com</a></span>
                </div>
            </div>
        </section>
    );
};

export default Noticias;
