import React from 'react';
import { SEOHelmet } from '../components/SEO';

const EnlacesExternos: React.FC = () => {
    const entidadesSalud = [
        {
            nombre: "Academia Colombiana de Odontología Pediátrica",
            sigla: "ACOP",
            url: "https://www.acop.com.co/academia-colombiana-de-odontologia-pediatrica-acop/#:~:text=La%20academia%20colombiana%20de%20odontolog%C3%ADa,la%20sa%20lud%20oral%20de%20la",
            imagen: "/images/agremiacion/acop.jpg",
            categoria: "Odontología"
        },
        {
            nombre: "Asociación Colombiana de Audiología",
            sigla: "ASOAUDIO",
            url: "http://www.asoaudio.org.co",
            imagen: "/images/agremiacion/asoaudio.jpg",
            categoria: "Audiología"
        },
        {
            nombre: "Asociación Colombiana de Cirugía General",
            sigla: "ASCOLCIRUGIA",
            url: "https://www.ascolcirugia.org/",
            imagen: "/images/agremiacion/ascolcirugia.jpg",
            categoria: "Cirugía"
        },
        {
            nombre: "Asociación Colombiana de Cirugía Oral y Maxilofacial",
            sigla: "ACCOMF",
            url: "https://accomf.org/",
            imagen: "/images/agremiacion/accomf.jpg",
            categoria: "Cirugía"
        },
        {
            nombre: "Asociación Colombiana de Hepatología",
            sigla: "ACH",
            url: "http://www.higadocolombia.org",
            imagen: "/images/agremiacion/hepatologia.jpg",
            categoria: "Especialidades"
        },
        {
            nombre: "Asociación Colombiana de Hospitales y Clínicas",
            sigla: "ACHC",
            url: "https://achc.org.co/",
            imagen: "/images/agremiacion/achc.jpg",
            categoria: "Hospitalaria"
        },
        {
            nombre: "Asociación Colombiana de Infectología",
            sigla: "ACIN",
            url: "https://www.acin.org/",
            imagen: "/images/agremiacion/acin.jpg",
            categoria: "Especialidades"
        },
        {
            nombre: "Asociación Colombiana de Instituciones de Salud Domiciliaria",
            sigla: "ACISD",
            url: "https://acisd.com.co/",
            imagen: "/images/agremiacion/acisd.jpg",
            categoria: "Hospitalaria"
        },
        {
            nombre: "Asociación Colombiana de Medicina Interna",
            sigla: "ACMI",
            url: "https://acmi.org.co/",
            imagen: "/images/agremiacion/acmi.jpg",
            categoria: "Medicina"
        },
        {
            nombre: "Asociación Colombiana de Neonatología",
            sigla: "ASCON",
            url: "http://www.ascon.org.co",
            imagen: "/images/agremiacion/ascon.jpg",
            categoria: "Pediatría"
        },
        {
            nombre: "Asociación Colombiana de Neumología Pediátrica",
            sigla: "ACNP",
            url: "http://www.neumopediatriacolombia.com",
            imagen: "/images/agremiacion/neumopediatria.jpg",
            categoria: "Pediatría"
        },
        {
            nombre: "Asociación Colombiana de Neurología Infantil",
            sigla: "ASCONI",
            url: "http://www.asconi.com.co",
            imagen: "/images/agremiacion/asconi.jpg",
            categoria: "Pediatría"
        },
        {
            nombre: "Asociación Colombiana de Ortopedia",
            sigla: "SCCOT",
            url: "https://sccot.org/",
            imagen: "/images/agremiacion/sccot.jpg",
            categoria: "Especialidades"
        },
        {
            nombre: "Asociación Colombiana de Radiología",
            sigla: "ACR",
            url: "http://www.acronline.org",
            imagen: "/images/agremiacion/radiologia.jpg",
            categoria: "Diagnóstico"
        },
        {
            nombre: "Asociación de Empresas Gestoras del Aseguramiento en Salud",
            sigla: "GESTARSALUD",
            url: "https://www.gestarsalud.com/",
            imagen: "/images/agremiacion/gestarsalud.jpg",
            categoria: "Aseguramiento"
        },
        {
            nombre: "Federación Colombiana de Obstetricia y Ginecología",
            sigla: "FECOLSOG",
            url: "https://fecolsog.org/",
            imagen: "/images/agremiacion/fecolsog.jpg",
            categoria: "Especialidades"
        },
        {
            nombre: "Sociedad Colombiana de Anestesiología y Reanimación",
            sigla: "SCARE",
            url: "http://www.scare.org.co",
            imagen: "/images/agremiacion/scare.jpg",
            categoria: "Especialidades"
        },
        {
            nombre: "Sociedad Colombiana de Medicina Familiar",
            sigla: "SOCMEF",
            url: "http://socmef.co/",
            imagen: "/images/agremiacion/socmef.jpg",
            categoria: "Medicina"
        },
        {
            nombre: "Sociedad Colombiana de Pediatría",
            sigla: "SCP",
            url: "https://scp.com.co/",
            imagen: "/images/agremiacion/scp.jpg",
            categoria: "Pediatría"
        },
        {
            nombre: "Sociedad Colombiana de Urología",
            sigla: "SCU",
            url: "http://www.scu.org.co",
            imagen: "/images/agremiacion/scu.jpg",
            categoria: "Especialidades"
        },
        {
            nombre: "Sociedad Latinoamericana de Infectología Pediátrica",
            sigla: "SLIPE",
            url: "http://www.slipe.org",
            imagen: "/images/agremiacion/slipe.jpg",
            categoria: "Pediatría"
        }
    ];

    type CategoriaKey =
        | "Medicina"
        | "Pediatría"
        | "Cirugía"
        | "Especialidades"
        | "Odontología"
        | "Audiología"
        | "Hospitalaria"
        | "Diagnóstico"
        | "Aseguramiento";

    type CategoriaInfo = { color: string; icon: string };

    const categorias: Record<CategoriaKey, CategoriaInfo> = {
        Medicina: { color: "blue", icon: "🩺" },
        Pediatría: { color: "pink", icon: "👶" },
        Cirugía: { color: "red", icon: "🔬" },
        Especialidades: { color: "green", icon: "⚕️" },
        Odontología: { color: "yellow", icon: "🦷" },
        Audiología: { color: "purple", icon: "👂" },
        Hospitalaria: { color: "indigo", icon: "🏥" },
        Diagnóstico: { color: "cyan", icon: "📊" },
        Aseguramiento: { color: "orange", icon: "🛡️" }
    };

    return (
        <>
            <SEOHelmet
                title="Enlaces de Sistemas y Herramientas - Red Medicron IPS"
                description="Accede a sistemas, portales y herramientas digitales de Red Medicron IPS. Enlaces directos a plataformas de gestión, consultas médicas y servicios en línea para usuarios en Nariño."
                keywords="sistemas red medicron ips, portales médicos nariño, herramientas digitales ips, plataforma salud túquerres, acceso sistemas red medicron, asociaciones médicas colombia"
                canonical="/enlaces-externos"
            />
            
            <section className="min-h-screen bg-white text-negro p-8 flex flex-col items-center">
            <div className="w-full max-w-6xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center">Enlaces de Sistemas</h2>
                <p className="mb-8 text-center text-lg">Accede rápidamente a las aplicaciones y plataformas institucionales de Red Medicron IPS.</p>
                
                {/* Enlaces Internos */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-blue-700">🏢 Enlaces Internos</h3>
                    <p className="mb-6 text-center text-gray-600">Sistemas de acceso interno para personal autorizado</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <a 
                            href="http://192.168.59.230/SaludIPSPrueba/Home/HC" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-blue-100 hover:border-blue-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🏥</span>
                            <span className="font-bold text-lg mb-2 text-blue-800">Historia Clínica - Prueba</span>
                            <span className="text-sm text-center text-blue-600">Sistema interno de historias clínicas (Ambiente de prueba)</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-blue-200 text-blue-800 rounded-full">Red Interna</span>
                        </a>
                        
                        <a 
                            href="http://192.168.59.230/SaludIPS" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-blue-100 hover:border-blue-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">💻</span>
                            <span className="font-bold text-lg mb-2 text-blue-800">SaludIPS Interno</span>
                            <span className="text-sm text-center text-blue-600">Sistema principal de gestión de salud interno</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-blue-200 text-blue-800 rounded-full">Red Interna</span>
                        </a>
                    </div>
                </div>

                {/* Enlaces Externos */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-green-700">🌐 Enlaces Externos</h3>
                    <p className="mb-6 text-center text-gray-600">Sistemas de acceso externo y plataformas públicas</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <a 
                            href="http://186.115.218.10/VisorHC/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-green-50 border-2 border-green-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">👁️</span>
                            <span className="font-bold text-lg mb-2 text-green-800">Visor HC</span>
                            <span className="text-sm text-center text-green-600">Visualizador de historias clínicas</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-green-200 text-green-800 rounded-full">Externo</span>
                        </a>
                        
                        <a 
                            href="http://186.115.218.10/SaludIPS/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-green-50 border-2 border-green-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🏥</span>
                            <span className="font-bold text-lg mb-2 text-green-800">SaludIPS</span>
                            <span className="text-sm text-center text-green-600">Sistema principal de gestión de salud</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-green-200 text-green-800 rounded-full">Externo</span>
                        </a>
                        
                        <a 
                            href="http://186.115.218.10/SaludIPSprueba/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-green-50 border-2 border-green-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🧪</span>
                            <span className="font-bold text-lg mb-2 text-green-800">SaludIPS Prueba</span>
                            <span className="text-sm text-center text-green-600">Ambiente de pruebas del sistema</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-green-200 text-green-800 rounded-full">Externo</span>
                        </a>
                    </div>
                </div>

                {/* Enlaces Institucionales */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-purple-700">🔗 Enlaces Institucionales</h3>
                    <p className="mb-6 text-center text-gray-600">Plataformas gubernamentales y servicios institucionales</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <a 
                            href="https://www.miseguridadsocial.gov.co/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-purple-100 hover:border-purple-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🔗</span>
                            <span className="font-bold text-lg mb-2 text-purple-800">Mi Seguridad Social</span>
                            <span className="text-sm text-center text-purple-600">Consulta tu afiliación y derechos en salud</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Gubernamental</span>
                        </a>
                        
                        <a 
                            href="https://www.supersalud.gov.co/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-purple-100 hover:border-purple-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">🏛️</span>
                            <span className="font-bold text-lg mb-2 text-purple-800">Supersalud</span>
                            <span className="text-sm text-center text-purple-600">Superintendencia Nacional de Salud</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Gubernamental</span>
                        </a>
                        
                        <a 
                            href="http://www.red.redmedicronips.com.co/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-purple-100 hover:border-purple-300 transition-all duration-300"
                        >
                            <span className="text-4xl mb-3">💻</span>
                            <span className="font-bold text-lg mb-2 text-purple-800">Portal Institucional</span>
                            <span className="text-sm text-center text-purple-600">Plataforma interna para empleados</span>
                            <span className="text-xs mt-2 px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Corporativo</span>
                        </a>
                    </div>
                </div>

                {/* Nueva Sección: Entidades del Sector Salud */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-orange-700">🏥 Entidades del Sector Salud</h3>
                    <p className="mb-8 text-center text-gray-700">Asociaciones médicas, sociedades científicas y organizaciones de interés institucional</p>
                    
                    {/* Filtro por categorías */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {Object.entries(categorias).map(([categoria, { color, icon }]) => (
                            <span 
                                key={categoria}
                                className={`px-3 py-1 text-xs font-semibold rounded-full bg-${color}-100 text-${color}-800 border border-${color}-200`}
                            >
                                {icon} {categoria}
                            </span>
                        ))}
                    </div>

                    {/* Grid de entidades organizadas por categorías */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {entidadesSalud.map((entidad, index) => {
                            const categoria = categorias[entidad.categoria as CategoriaKey];
                            return (
                                <a
                                    key={index}
                                    href={entidad.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`bg-${categoria.color}-50 border-2 border-${categoria.color}-200 rounded-lg p-4 flex flex-col items-center shadow-md hover:bg-${categoria.color}-100 hover:border-${categoria.color}-300 hover:shadow-lg transition-all duration-300 group`}
                                >
                                    {/* Logo/Imagen */}
                                    <div className="w-16 h-16 mb-3 flex items-center justify-center rounded-full bg-white shadow-sm">
                                        <img 
                                            src={entidad.imagen} 
                                            alt={`Logo ${entidad.sigla}`}
                                            className="w-12 h-12 object-contain"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <span className={`text-2xl hidden text-${categoria.color}-600`}>
                                            {categoria.icon}
                                        </span>
                                    </div>
                                    
                                    {/* Sigla */}
                                    <div className={`text-xs font-bold mb-2 px-2 py-1 rounded bg-${categoria.color}-200 text-${categoria.color}-800`}>
                                        {entidad.sigla}
                                    </div>
                                    
                                    {/* Nombre */}
                                    <h4 className={`font-bold text-sm mb-2 text-center text-${categoria.color}-900 group-hover:text-${categoria.color}-700 line-clamp-2`}>
                                        {entidad.nombre}
                                    </h4>
                                    
                                    {/* Categoría */}
                                    <span className={`text-xs text-${categoria.color}-600 bg-${categoria.color}-100 px-2 py-1 rounded-full`}>
                                        {categoria.icon} {entidad.categoria}
                                    </span>
                                    
                                    {/* Indicador de enlace externo */}
                                    <div className="mt-3 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs text-gray-500">🔗 Enlace externo</span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Nota de Seguridad */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
                    <div className="flex items-start space-x-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h4 className="font-bold text-yellow-800 mb-2">Nota Importante de Seguridad</h4>
                            <p className="text-yellow-700 text-sm">
                                Los enlaces internos solo funcionan dentro de la red corporativa de Red Medicron IPS. 
                                Para acceder desde ubicaciones externas, utilice los enlaces externos correspondientes o 
                                conéctese a la VPN institucional.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Información de Contacto */}
                <div className="w-full text-center text-sm text-gray-600 mt-8 p-6 bg-gray-50 rounded-lg">
                    <p className="mb-2">¿Necesitas ayuda con algún enlace o tienes problemas de acceso?</p>
                    <p>
                        Escríbenos a{' '}
                        <a href="mailto:soporteips@redmedicronips.com.co" className="underline text-blue-600 hover:text-blue-800">
                            soporteips@redmedicronips.com.co
                        </a>
                        {' '}o contacta al área de Sistemas.
                    </p>
                </div>
            </div>
        </section>
        </>
    );
};

export default EnlacesExternos;
