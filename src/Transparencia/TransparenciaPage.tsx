import React from 'react';

const Transparencia: React.FC = () => {
    return (

        <section className="relative min-h-screen bg-gradient-to-br from-azul-light via-white to-verdeLima/20 text-negro flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
            {/* Fondo decorativo institucional */}
            <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-azul-light rounded-full blur-2xl opacity-30 -z-10" />
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-verdeLima/30 rounded-full blur-2xl opacity-20 -z-10" />

            <div className="w-full max-w-6xl flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight drop-shadow-sm">
                    Transparencia y <span className="text-verdeOscuro">Acceso a la Información</span>
                </h2>
                <p className="mb-10 text-center text-lg max-w-2xl">Red Medicron IPS cumple con la matriz ITA y los estándares de transparencia exigidos por la normatividad colombiana. Consulta aquí los documentos, reportes y enlaces clave para el acceso a la información pública.</p>

                {/* Matriz ITA y enlaces */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full animate-fade-in">
                    <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-verdeLima/10 flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-verdeOscuro mb-2">Matriz ITA</h3>
                        <ul className="list-decimal ml-6 text-base space-y-2">
                            <li><a href="#" className="text-azul underline">Normatividad y Estructura Orgánica</a></li>
                            <li><a href="#" className="text-azul underline">Funciones y Deberes</a></li>
                            <li><a href="#" className="text-azul underline">Directorio de Funcionarios</a></li>
                            <li><a href="#" className="text-azul underline">Manual de Contratación</a></li>
                            <li><a href="#" className="text-azul underline">Presupuesto e Informes Financieros</a></li>
                            <li><a href="#" className="text-azul underline">Procesos y Procedimientos</a></li>
                            <li><a href="#" className="text-azul underline">Informes de Gestión</a></li>
                            <li><a href="#" className="text-azul underline">Planes y Programas</a></li>
                            <li><a href="#" className="text-azul underline">Contratación y Proveedores</a></li>
                            <li><a href="#" className="text-azul underline">PQRSF y Participación Ciudadana</a></li>
                        </ul>
                    </div>
                    <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-verdeLima/10 flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-verdeOscuro mb-2">Documentos y Reportes</h3>
                        <ul className="list-disc ml-6 text-base space-y-2">
                            <li><a href="#" className="text-azul underline">Estados Financieros</a></li>
                            <li><a href="#" className="text-azul underline">Informes de Auditoría</a></li>
                            <li><a href="#" className="text-azul underline">Política de Datos Personales</a></li>
                            <li><a href="#" className="text-azul underline">Política de Confidencialidad</a></li>
                            <li><a href="#" className="text-azul underline">Manual de Calidad</a></li>
                            <li><a href="#" className="text-azul underline">Actas y Resoluciones</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bloques destacados */}
                <div className="w-full flex flex-col md:flex-row gap-6 mb-10 animate-fade-in">
                    <div className="flex-1 bg-verdeLima/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <h4 className="font-bold text-lg mb-2 text-verdeOscuro">Enlaces de Interés</h4>
                        <ul className="list-disc ml-6 text-base text-left">
                            <li><a href="https://www.funcionpublica.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Función Pública</a></li>
                            <li><a href="https://www.supersalud.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Superintendencia Nacional de Salud</a></li>
                            <li><a href="https://www.minsalud.gov.co/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Ministerio de Salud</a></li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-verdeLima/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                        <h4 className="font-bold text-lg mb-2 text-verdeOscuro">Participación y PQRSF</h4>
                        <p className="mb-2">Ejercita tu derecho a la información y participa activamente en la gestión institucional.</p>
                        <a href="/pqrsf" className="inline-block bg-acento hover:bg-warning text-negro font-bold px-6 py-2 rounded-full shadow transition-all duration-200 mt-2">Ir a PQRSF</a>
                    </div>
                </div>

                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>Para ejercer tu derecho a la información, consulta los enlaces o <a href="mailto:notificaciones@redmedicronips.com.co" className="underline text-azul">contáctanos</a>.</span>
                </div>
            </div>
        </section>
    );
};

export default Transparencia;
