import React, { useEffect, useState } from 'react';

interface SkipLinksProps {
  links?: Array<{
    href: string;
    label: string;
  }>;
}

const SkipLinks: React.FC<SkipLinksProps> = ({ 
  links = [
    { href: '#main-content', label: 'Saltar al contenido principal' },
    { href: '#main-navigation', label: 'Saltar a la navegación principal' },
    { href: '#search', label: 'Saltar al buscador' },
    { href: '#footer', label: 'Saltar al pie de página' }
  ]
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Manejar la navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + S para mostrar skip links
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        setIsVisible(true);
        
        // Enfocar el primer skip link
        const firstSkipLink = document.querySelector('.skip-link') as HTMLElement;
        if (firstSkipLink) {
          firstSkipLink.focus();
        }
      }
      
      // Escape para ocultar skip links
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSkipLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Enfocar el elemento objetivo si es focuseable
      if (target instanceof HTMLElement) {
        target.setAttribute('tabindex', '-1');
        target.focus();
        
        // Remover tabindex después de un tiempo
        setTimeout(() => {
          target.removeAttribute('tabindex');
        }, 1000);
      }
    }
    setIsVisible(false);
  };

  return (
    <>
      {/* Skip Links - Visibles solo al hacer foco o con Alt+S */}
      <nav 
        className="skip-links"
        role="navigation"
        aria-label="Enlaces de navegación rápida"
      >
        {links.map((link, index) => (
          <button
            key={link.href}
            className={`skip-link ${isVisible ? 'skip-link-visible' : ''}`}
            onClick={() => handleSkipLinkClick(link.href)}
            onFocus={() => setIsVisible(true)}
            onBlur={(e) => {
              // Mantener visible si el foco está en otro skip link
              const relatedTarget = e.relatedTarget as HTMLElement;
              if (!relatedTarget || !relatedTarget.classList.contains('skip-link')) {
                setIsVisible(false);
              }
            }}
            style={{
              position: 'absolute',
              top: isVisible ? '6px' : '-40px',
              left: `${6 + (index * 200)}px`,
              background: '#000',
              color: '#fff',
              padding: '8px 12px',
              textDecoration: 'none',
              zIndex: 1000,
              borderRadius: '4px',
              border: '2px solid #fff',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'top 0.3s ease',
              cursor: 'pointer'
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSkipLinkClick(link.href);
              }
            }}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Indicador de ayuda de teclado */}
      <div 
        className="keyboard-help"
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '12px',
          zIndex: 999,
          display: isVisible ? 'block' : 'none'
        }}
        role="tooltip"
        aria-label="Ayuda de navegación por teclado"
      >
        <div className="text-center">
          <p className="mb-1"><strong>Navegación por teclado:</strong></p>
          <p>• Tab: Siguiente elemento</p>
          <p>• Shift+Tab: Elemento anterior</p>
          <p>• Enter/Espacio: Activar</p>
          <p>• Escape: Cerrar</p>
          <p>• Alt+S: Mostrar enlaces rápidos</p>
        </div>
      </div>
    </>
  );
};

export default SkipLinks;
