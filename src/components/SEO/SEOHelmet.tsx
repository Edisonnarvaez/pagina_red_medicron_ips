import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
    noindex?: boolean;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
    title,
    description,
    keywords = "ips, salud, medicina, nariño, túquerres, pasto, ipiales, tumaco, colombia, eps, salud integral, atención médica",
    ogImage = "/logoRMIPS.png",
    canonical,
    noindex = false
}) => {
    const fullTitle = title.includes('Red Medicron IPS') ? title : `${title} | Red Medicron IPS`;
    const siteUrl = "https://redmedicronips.com.co";
    const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet>
            {/* Título y meta básicos */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />
            
            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            
            {/* Open Graph para redes sociales */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Red Medicron IPS" />
            <meta property="og:locale" content="es_CO" />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
            
            {/* Datos estructurados JSON-LD para Google */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HealthcareOrganization",
                    "name": "Red Medicron IPS",
                    "alternateName": "RMIPS",
                    "url": siteUrl,
                    "logo": `${siteUrl}/logoRMIPS.png`,
                    "description": "Red Medicron IPS - Institución Prestadora de Servicios de Salud en Nariño, Colombia. Atención médica integral con sedes en Pasto, Túquerres, Ipiales, Tumaco y más.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Túquerres",
                        "addressRegion": "Nariño",
                        "addressCountry": "CO"
                    },
                    "telephone": "+57-318-338-0107",
                    "serviceArea": {
                        "@type": "State",
                        "name": "Nariño"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Servicios de Salud",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "MedicalService",
                                    "name": "Atención Médica General"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "MedicalService",
                                    "name": "Odontología"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "MedicalService",
                                    "name": "Promoción y Prevención"
                                }
                            }
                        ]
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEOHelmet;
