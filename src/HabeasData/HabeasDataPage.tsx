import React from 'react';
import { SEOHelmet } from '../components/SEO';

const HabeasData: React.FC = () => {
    return (
        <>
            <SEOHelmet
                title="Habeas Data - Protección de Datos Personales | Red Medicron IPS"
                description="Conoce tus derechos sobre el tratamiento de datos personales en Red Medicron IPS. Política de protección de datos según la Ley 1581 de 2012 y normatividad colombiana."
                keywords="habeas data red medicron ips, protección datos personales nariño, ley 1581 2012 red medicron, derechos datos ips túquerres, privacidad información médica"
                canonical="/habeas-data"
            />
            
            <section className="min-h-screen bg-grisClaro text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-3xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Habeas Data</h2>
                <p className="mb-8 text-center text-lg">Conoce tus derechos sobre el tratamiento de datos personales en Red Medicron IPS y cómo ejercerlos según la Ley 1581 de 2012 y demás normatividad colombiana.</p>
                <div className="mb-10 bg-white rounded-lg shadow p-6">
                    <h3 className="font-bold text-lg mb-4 text-verdeOscuro">Derechos de los Titulares</h3>
                    <ul className="list-disc ml-6 text-base">
                        <li>Conocer, actualizar y rectificar tus datos personales.</li>
                        <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
                        <li>Ser informado sobre el uso que se ha dado a tus datos.</li>
                        <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
                        <li>Revocar la autorización y/o solicitar la supresión del dato.</li>
                        <li>Acceder en forma gratuita a tus datos personales.</li>
                    </ul>
                </div>
                <div className="mb-10 bg-verdeLima/30 rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-verdeOscuro">Política de Tratamiento de Datos</h3>
                    <p className="mb-2">Red Medicron IPS garantiza la confidencialidad, seguridad y uso adecuado de los datos personales de usuarios, empleados y proveedores.</p>
                    <a href="#" className="text-azul underline">Descargar política de tratamiento de datos (PDF)</a>
                </div>
                <div className="w-full text-center text-xs opacity-70 mt-8">
                    <span>Para ejercer tus derechos o realizar solicitudes, escribe a <a href="mailto:tics@redmedicronips.com.co" className="underline text-azul">tics@redmedicronips.com.co</a></span>
                </div>
            </div>
        </section>
        </>
    );
};

export default HabeasData;
