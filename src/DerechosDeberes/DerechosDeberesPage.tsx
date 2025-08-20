import React from 'react';

const DerechosDeberes: React.FC = () => {
    return (
        <section className="min-h-screen bg-white text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Derechos y Deberes de los Usuarios</h2>
                <p className="mb-8 text-center text-lg">En Red Medicron IPS promovemos el respeto, la equidad y la participación activa de nuestros usuarios. Conoce tus derechos y deberes según la normatividad colombiana y nuestra política institucional.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-grisClaro rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold text-verdeOscuro mb-2">Tus Derechos</h3>
                        <ul className="list-disc ml-6 text-base space-y-1">
                            <li>Recibir atención segura, digna, oportuna y humanizada.</li>
                            <li>Ser informado de manera clara sobre tu estado de salud y tratamientos.</li>
                            <li>Elegir libremente al profesional de salud y la IPS.</li>
                            <li>Recibir información y orientación sobre los servicios y canales de atención.</li>
                            <li>Acceder a tu historia clínica y a la confidencialidad de la información.</li>
                            <li>Presentar peticiones, quejas, reclamos, sugerencias y felicitaciones (PQRSF).</li>
                            <li>Participar en actividades de promoción y prevención.</li>
                            <li>Ser tratado con respeto, sin discriminación de ningún tipo.</li>
                        </ul>
                    </div>
                    <div className="bg-grisClaro rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold text-verdeOscuro mb-2">Tus Deberes</h3>
                        <ul className="list-disc ml-6 text-base space-y-1">
                            <li>Brindar información veraz, completa y actualizada sobre tu salud.</li>
                            <li>Cuidar y hacer uso adecuado de las instalaciones y recursos de la IPS.</li>
                            <li>Respetar al personal de salud y a los demás usuarios.</li>
                            <li>Cumplir las normas, instrucciones y recomendaciones médicas.</li>
                            <li>Participar activamente en tu proceso de atención y autocuidado.</li>
                            <li>Reportar oportunamente cualquier inconformidad o situación de riesgo.</li>
                            <li>Contribuir al pago oportuno de los servicios cuando aplique.</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-10 bg-verdeLima/30 rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Ejemplos de Participación Activa</h3>
                    <ul className="list-disc ml-6 text-base">
                        <li>Asistir puntualmente a tus citas y notificar si no puedes asistir.</li>
                        <li>Solicitar información si tienes dudas sobre tu tratamiento.</li>
                        <li>Participar en encuestas de satisfacción y actividades educativas.</li>
                    </ul>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>¿Tienes dudas sobre tus derechos o deberes? Escribe a <a href="mailto:usuarios@redmedicron.com" className="underline text-azul">usuarios@redmedicron.com</a> o consulta la <a href="/pqrsf" className="underline text-azul">sección PQRSF</a>.</span>
                </div>
            </div>
        </section>
    );
};

export default DerechosDeberes;
