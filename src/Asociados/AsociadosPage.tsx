import React from 'react';
import { SEOHelmet } from '../components/SEO';

const Asociados: React.FC = () => {
    return (
        <>
            <SEOHelmet
                title="Asociados a la Cooperativa - Red Medicron IPS"
                description="Información para asociados de Red Medicron IPS en Nariño. Beneficios, requisitos, documentos y normatividad colombiana para participar en la cooperativa de salud."
                keywords="asociados red medicron ips, cooperativa salud nariño, beneficios asociados ips túquerres, requisitos cooperativa red medicron"
                canonical="/asociados"
                noindex={true}
            />
            
            <section className="min-h-screen bg-grisClaro text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Asociados a la Cooperativa</h2>
                <p className="mb-8 text-center text-lg">Conoce los beneficios, requisitos y documentos para los asociados de Red Medicron IPS, en cumplimiento de la normatividad colombiana.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold text-verdeOscuro mb-2">Beneficios para Asociados</h3>
                        <ul className="list-disc ml-6 text-base space-y-1">
                            <li>Participación en la toma de decisiones de la cooperativa.</li>
                            <li>Acceso a información financiera y de gestión.</li>
                            <li>Capacitación y formación continua.</li>
                            <li>Derecho a voz y voto en asambleas.</li>
                            <li>Acceso a programas de bienestar y reconocimientos.</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold text-verdeOscuro mb-2">Requisitos y Documentos</h3>
                        <ul className="list-disc ml-6 text-base space-y-1">
                            <li>Ser trabajador activo de Red Medicron IPS.</li>
                            <li>Presentar solicitud de ingreso y documentos de identidad.</li>
                            <li>Cumplir con los estatutos y reglamentos internos.</li>
                            <li>Participar en las actividades y asambleas convocadas.</li>
                            <li>Actualizar datos personales y de contacto periódicamente.</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-10 bg-verdeLima/30 rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Documentos de Interés</h3>
                    <ul className="list-disc ml-6 text-base">
                        <li><a href="#" className="text-azul underline">Estatutos de la cooperativa (PDF)</a></li>
                        <li><a href="#" className="text-azul underline">Reglamento interno de asociados</a></li>
                        <li><a href="#" className="text-azul underline">Actas de asambleas</a></li>
                        <li><a href="#" className="text-azul underline">Estados financieros</a></li>
                    </ul>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>¿Eres asociado y tienes dudas? Escribe a <a href="mailto:comunicacionesasociados@redmedicronips.com.co" className="underline text-azul">comunicacionesasociados@redmedicronips.com.co</a> o consulta la documentación disponible.</span>
                </div>
            </div>
        </section>
        </>
    );
};

export default Asociados;
