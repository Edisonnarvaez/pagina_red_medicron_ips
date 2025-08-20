import React from 'react';

const Capacitaciones: React.FC = () => {
    return (
        <section className="min-h-screen bg-grisClaro text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Capacitaciones</h2>
                <p className="mb-8 text-center text-lg">Consulta el calendario de capacitaciones, talleres y recursos de formación para el personal de Red Medicron IPS.</p>
                <div className="mb-10 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg mb-4 text-verdeOscuro">Próximas Capacitaciones</h3>
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="bg-verdeLima text-negro">
                                <th className="py-2 px-4 text-left">Fecha</th>
                                <th className="py-2 px-4 text-left">Tema</th>
                                <th className="py-2 px-4 text-left">Modalidad</th>
                                <th className="py-2 px-4 text-left">Inscripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">20/08/2025</td>
                                <td className="py-2 px-4">Atención humanizada en salud</td>
                                <td className="py-2 px-4">Presencial</td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Inscribirse</a></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">05/09/2025</td>
                                <td className="py-2 px-4">Actualización en normatividad</td>
                                <td className="py-2 px-4">Virtual</td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Inscribirse</a></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">15/09/2025</td>
                                <td className="py-2 px-4">Seguridad del paciente</td>
                                <td className="py-2 px-4">Presencial</td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Inscribirse</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mb-10 bg-verdeLima/30 rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Recursos y Materiales</h3>
                    <ul className="list-disc ml-6 text-base">
                        <li><a href="#" className="text-azul underline">Manual de inducción y reinducción</a></li>
                        <li><a href="#" className="text-azul underline">Guía de bioseguridad</a></li>
                        <li><a href="#" className="text-azul underline">Videos de capacitación</a></li>
                        <li><a href="#" className="text-azul underline">Normatividad vigente</a></li>
                    </ul>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>¿Tienes dudas sobre las capacitaciones? Escribe a <a href="mailto:capacitaciones@redmedicron.com" className="underline text-azul">capacitaciones@redmedicron.com</a></span>
                </div>
            </div>
        </section>
    );
};

export default Capacitaciones;
