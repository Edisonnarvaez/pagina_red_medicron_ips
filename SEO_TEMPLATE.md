<!-- SEO Meta Tags Template -->
<!-- Añadir react-helmet-async para meta tags dinámicos -->

<!-- Instalar dependencia: npm install react-helmet-async -->

<!-- En main.tsx -->
import { HelmetProvider } from 'react-helmet-async';
<HelmetProvider>
  <App />
</HelmetProvider>

<!-- En cada página -->
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Red Medicron IPS - [Título específico]</title>
  <meta name="description" content="[Descripción única de 150-160 caracteres]" />
  <meta name="keywords" content="ips, salud, medicina, nariño, túquerres, pasto" />
  
  <!-- Open Graph para redes sociales -->
  <meta property="og:title" content="Red Medicron IPS - [Título]" />
  <meta property="og:description" content="[Descripción]" />
  <meta property="og:image" content="/logoRMIPS.png" />
  <meta property="og:url" content="https://redmedicrionips.com/[ruta]" />
  <meta property="og:type" content="website" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Red Medicron IPS - [Título]" />
  <meta name="twitter:description" content="[Descripción]" />
  <meta name="twitter:image" content="/logoRMIPS.png" />
  
  <!-- Schema.org para SEO médico -->
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Red Medicron IPS",
      "url": "https://redmedicrionips.com",
      "logo": "https://redmedicrionips.com/logoRMIPS.png",
      "description": "Red Medicron IPS - Institución Prestadora de Servicios de Salud en Nariño",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Dirección]",
        "addressLocality": "Túquerres",
        "addressRegion": "Nariño",
        "addressCountry": "CO"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+57-321-666-0990",
        "contactType": "customer service"
      }
    })}
  </script>
</Helmet>
