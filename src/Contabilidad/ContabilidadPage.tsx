
const Contabilidad: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-azul-light via-white to-verdeLima/20 text-negro flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
            {/* Fondo decorativo institucional */}
            <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-azul-light rounded-full blur-2xl opacity-30 -z-10" />
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-verdeLima/30 rounded-full blur-2xl opacity-20 -z-10" />

            <div className="w-full max-w-5xl flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight drop-shadow-sm">
                    Contabilidad y <span className="text-verdeOscuro">Estados Financieros</span>
                </h2>
                <p className="mb-10 text-center text-lg max-w-2xl">Consulta los estados financieros, informes y documentos contables requeridos por la Superintendencia Nacional de Salud y la normatividad colombiana.</p>

                {/* Tabla de estados financieros */}
                <div className="overflow-x-auto mb-12 w-full animate-fade-in">
                    <table className="min-w-full bg-white/90 rounded-2xl shadow-lg text-sm border border-verdeLima/10">
                        <thead>
                            <tr className="bg-verdeLima/30 text-negro">
                                <th className="py-2 px-4 text-left">Año</th>
                                <th className="py-2 px-4 text-left">Estado de Resultados</th>
                                <th className="py-2 px-4 text-left">Balance General</th>
                                <th className="py-2 px-4 text-left">Notas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">2024</td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Descargar PDF</a></td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Descargar PDF</a></td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Ver notas</a></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">2023</td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Descargar PDF</a></td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Descargar PDF</a></td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Ver notas</a></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">2022</td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Descargar PDF</a></td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Descargar PDF</a></td>
                                <td className="py-2 px-4"><a href="#" className="text-azul underline">Ver notas</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Documentos adicionales y contacto */}
                <div className="w-full flex flex-col md:flex-row gap-6 mb-10 animate-fade-in">
                    <div className="flex-1 bg-verdeLima/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <h4 className="font-bold text-lg mb-2 text-verdeOscuro">Documentos Contables Adicionales</h4>
                        <ul className="list-disc ml-6 text-base text-left">
                            <li><a href="#" className="text-azul underline">Certificados de ingresos y retenciones</a></li>
                            <li><a href="#" className="text-azul underline">Declaraciones tributarias</a></li>
                            <li><a href="#" className="text-azul underline">Informes de auditoría</a></li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-verdeLima/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <h4 className="font-bold text-lg mb-2 text-verdeOscuro">Contacto Contable</h4>
                        <p className="mb-2">¿Tienes dudas contables? Escribe a nuestro equipo de contabilidad.</p>
                        <a href="mailto:contabilidad@redmedicron.com" className="inline-block bg-acento hover:bg-warning text-negro font-bold px-6 py-2 rounded-full shadow transition-all duration-200 mt-2">contabilidad@redmedicron.com</a>
                    </div>
                </div>

                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>La transparencia financiera es nuestro compromiso institucional.</span>
                </div>
            </div>
        </section>
    );
};

export default Contabilidad;
