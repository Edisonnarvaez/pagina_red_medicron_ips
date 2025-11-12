import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdHealthAndSafety } from 'react-icons/md';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes Somos' },
  { to: '/sedes', label: 'Sedes' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/talento-humano', label: 'Talento Humano' },
  { to: '/pqrsf', label: 'PQRSF' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/enlaces-externos', label: 'Enlaces Externos' }
];

const MainMenu: React.FC<{ onOpenModal?: () => void }> = ({ onOpenModal }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === href;
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-soft transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="logoRMIPS.png" alt="Logo Red Medicron" className="w-38 h-14" />
        </Link>

        {/* Desktop & Tablet Navigation */}
        <ul className="hidden lg:flex gap-1 items-center">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative px-3 xl:px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300
                  ${isActiveRoute(link.to)
                    ? 'text-primary-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary-600'
                    : 'text-primary-700 hover:text-primary-800 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-600 after:transition-all after:duration-300'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Botón modal opcional */}
          {onOpenModal && (
            <li>
              <button
                onClick={onOpenModal}
                className="ml-2 bg-gradient-to-r from-medical-500 to-medical-600 hover:from-medical-600 hover:to-medical-700 text-white p-2 xl:p-3 rounded-full font-bold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-400/50"
                title="Abrir Modal de Portafolio"
              >
                <MdHealthAndSafety size={18} className="xl:w-5 xl:h-5" />
              </button>
            </li>
          )}
        </ul>

        {/* Botón “Más” solo en pantallas pequeñas */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-4 py-2 rounded-lg font-medium text-sm text-primary-700 hover:text-primary-800 transition-all duration-300 flex items-center gap-1 border border-primary-200 shadow-sm hover:shadow-md bg-white"
          >
            Más
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Menú desplegable */}
          {mobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-fadeIn">
              <ul className="py-2">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 text-sm transition-all duration-200 ${
                        isActiveRoute(link.to)
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {onOpenModal && (
                  <li className="pt-2 border-t border-gray-200 mt-2">
                    <button
                      onClick={() => {
                        onOpenModal();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-medical-500 to-medical-600 hover:from-medical-600 hover:to-medical-700 text-white py-3 px-4 rounded-lg font-bold transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                    >
                      <MdHealthAndSafety size={20} />
                      <span>Ver Portafolio</span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MainMenu;
