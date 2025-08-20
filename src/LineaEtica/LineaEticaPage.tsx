import React from 'react';

const LineaEtica: React.FC = () => {
    return (
        <section className="min-h-screen bg-grisClaro text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Línea Ética</h2>
                <p className="mb-8 text-center text-lg">La Línea Ética de Red Medicron IPS es un canal confidencial para reportar situaciones que atenten contra la integridad, la ética y los valores institucionales. Garantizamos la protección del denunciante y el seguimiento oportuno de cada caso.</p>
                <div className="mb-10 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg mb-4 text-verdeOscuro">¿Qué puedes reportar?</h3>
                    <ul className="list-disc ml-6 text-base space-y-1">
                        <li>Actos de corrupción, fraude o soborno.</li>
                        <li>Conflictos de interés.</li>
                        <li>Maltrato, discriminación o acoso laboral.</li>
                        <li>Incumplimiento de normas, políticas o valores institucionales.</li>
                        <li>Otras situaciones que afecten la ética y transparencia.</li>
                    </ul>
                </div>
                <div className="mb-10 bg-verdeLima/30 rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Canales de Reporte</h3>
                    <ul className="list-disc ml-6 text-base">
                        <li>Formulario confidencial en línea (ver abajo).</li>
                        <li>Correo electrónico: <a href="mailto:lineaetica@redmedicron.com" className="underline text-azul">lineaetica@redmedicron.com</a></li>
                        <li>Teléfono: 01 8000 123 456 opción 4</li>
                    </ul>
                </div>
                <div className="mb-10 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Formulario de Reporte</h3>
                    <form className="flex flex-col gap-4">
                        <input type="text" className="border rounded p-2" placeholder="Nombre (opcional)" />
                        <input type="email" className="border rounded p-2" placeholder="Correo electrónico (opcional)" />
                        <textarea className="border rounded p-2" rows={4} placeholder="Describe la situación a reportar*" required></textarea>
                        <button type="submit" className="bg-azul text-white px-4 py-2 rounded hover:bg-verdeOscuro transition">Enviar reporte</button>
                    </form>
                    <p className="text-xs text-center opacity-70 mt-2">*Puedes reportar de forma anónima. Toda la información será tratada con estricta confidencialidad.</p>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>Red Medicron IPS está comprometida con la ética, la transparencia y el respeto. Todos los reportes son gestionados con seriedad y responsabilidad.</span>
                </div>
            </div>
        </section>
    );
};

export default LineaEtica;
