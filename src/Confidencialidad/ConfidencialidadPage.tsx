import React from 'react';

const Confidencialidad: React.FC = () => {
    return (
        <section className="min-h-screen bg-white text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Confidencialidad de la Información</h2>
                <p className="mb-8 text-center text-lg">Red Medicron IPS protege la privacidad y confidencialidad de la información de usuarios, empleados y aliados, cumpliendo la normatividad colombiana y los más altos estándares éticos.</p>
                <div className="mb-10 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg mb-4 text-verdeOscuro">Política de Confidencialidad</h3>
                    <ul className="list-disc ml-6 text-base">
                        <li>La información personal y clínica es tratada con estricta reserva.</li>
                        <li>Solo el personal autorizado accede a los datos necesarios para la atención.</li>
                        <li>Se implementan medidas técnicas y administrativas para proteger la información.</li>
                        <li>Se prohíbe la divulgación no autorizada de datos a terceros.</li>
                        <li>Se promueve la cultura de confidencialidad entre todos los colaboradores.</li>
                    </ul>
                </div>
                <div className="mb-10 bg-verdeLima/30 rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Compromisos Institucionales</h3>
                    <ul className="list-disc ml-6 text-base">
                        <li>Capacitación continua en protección de datos y confidencialidad.</li>
                        <li>Actualización permanente de protocolos de seguridad de la información.</li>
                        <li>Atención oportuna a incidentes o dudas sobre privacidad.</li>
                    </ul>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>¿Tienes dudas sobre privacidad? Escribe a <a href="mailto:privacidad@redmedicron.com" className="underline text-azul">privacidad@redmedicron.com</a></span>
                </div>
            </div>
        </section>
    );
};

export default Confidencialidad;
