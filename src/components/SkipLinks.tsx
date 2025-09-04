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
      {/* Skip Links - Responsivos y accesibles */}
      <nav 
        className={`skip-links-container ${isVisible ? 'skip-links-visible' : ''}`}
        role="navigation"
        aria-label="Enlaces de navegación rápida"
        style={{
          position: 'fixed',
          top: isVisible ? '6px' : '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          transition: 'top 0.3s ease',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          padding: '6px',
          maxWidth: '95vw',
          background: 'rgba(0, 0, 0, 0.9)',
          borderRadius: '8px',
          border: '2px solid #fff'
        }}
      >
        {links.map((link) => (
          <button
            key={link.href}
            className="skip-link"
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
              background: '#000',
              color: '#fff',
              padding: '8px 12px',
              textDecoration: 'none',
              borderRadius: '4px',
              border: '1px solid #fff',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              minWidth: 'fit-content',
              transition: 'all 0.2s ease'
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSkipLinkClick(link.href);
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#333';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#000';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Indicador de ayuda de teclado - Responsivo */}
      <div 
        className="keyboard-help"
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '12px',
          zIndex: 999,
          display: isVisible ? 'block' : 'none',
          maxWidth: '200px',
          wordWrap: 'break-word'
        }}
        role="tooltip"
        aria-label="Ayuda de navegación por teclado"
      >
        <div className="text-center">
          <p className="mb-1 font-semibold">Navegación:</p>
          <p className="text-xs">• Tab: Siguiente</p>
          <p className="text-xs">• Shift+Tab: Anterior</p>
          <p className="text-xs">• Enter/Espacio: Activar</p>
          <p className="text-xs">• Escape: Cerrar</p>
          <p className="text-xs">• Alt+S: Enlaces rápidos</p>
        </div>
      </div>
    </>
  );
};

export default SkipLinks;
