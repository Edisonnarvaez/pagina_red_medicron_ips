import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdHealthAndSafety } from 'react-icons/md';

// Solo las pestañas principales en el menú
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

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-soft">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold text-primary-700 tracking-tight drop-shadow-sm">
            <img src="logoRMIPS.png" alt="Logo Red Medicron" className='w-38 h-14' />
          </span>
        </Link>

        {/* Desktop Navigation - Ajustado para mejor responsividad */}
        <ul className="hidden xl:flex gap-1 items-center">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-3 xl:px-4 py-2 rounded-xl font-medium text-xs xl:text-sm transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 whitespace-nowrap ${
                  location.pathname === link.to 
                    ? 'bg-gradient-to-r from-primary-600 to-medical-500 text-white shadow-medium shadow-primary-500/20' 
                    : 'text-primary-700 hover:bg-primary-50 hover:text-primary-800'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          
          {/* Botón flotante para abrir modal */}
          {onOpenModal && (
            <li>
              <button
                onClick={onOpenModal}
                className="ml-2 bg-gradient-to-r from-medical-500 to-medical-600 hover:from-medical-600 hover:to-medical-700 text-white p-2 xl:p-3 rounded-full font-bold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl animate-pulse focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-400/50"
                title="Abrir Modal de Portafolio"
              >
                <MdHealthAndSafety size={18} className="xl:w-5 xl:h-5" />
              </button>
            </li>
          )}
        </ul>

        {/* Tablet Navigation - Menú compacto para tablets */}
        <ul className="hidden lg:flex xl:hidden gap-1 items-center">
          {navLinks.slice(0, 6).map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-2 py-2 rounded-lg font-medium text-xs transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 whitespace-nowrap ${
                  location.pathname === link.to 
                    ? 'bg-gradient-to-r from-primary-600 to-medical-500 text-white shadow-medium shadow-primary-500/20' 
                    : 'text-primary-700 hover:bg-primary-50 hover:text-primary-800'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          
          {/* Menú desplegable para elementos restantes */}
          <li className="relative group">
            <button className="px-2 py-2 rounded-lg font-medium text-xs text-primary-700 hover:bg-primary-50 hover:text-primary-800 transition-all duration-300 flex items-center gap-1">
              Más
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
              <div className="py-2">
                {navLinks.slice(6).map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      location.pathname === link.to 
                        ? 'bg-primary-50 text-primary-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          
          {/* Botón modal para tablet */}
          {onOpenModal && (
            <li>
              <button
                onClick={onOpenModal}
                className="ml-1 bg-gradient-to-r from-medical-500 to-medical-600 hover:from-medical-600 hover:to-medical-700 text-white p-2 rounded-full font-bold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl animate-pulse focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-400/50"
                title="Elección FOMAG"
              >
                <MdHealthAndSafety size={16} />
              </button>
            </li>
          )}
        </ul>

        {/* Mobile menu button - Ajustado para aparecer antes */}
        <button 
          className="lg:hidden p-2 rounded-xl text-primary-700 hover:bg-primary-50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation - Mejorado */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200/60 shadow-medium max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <ul className="space-y-1">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                      location.pathname === link.to 
                        ? 'bg-gradient-to-r from-primary-600 to-medical-500 text-white shadow-sm' 
                        : 'text-primary-700 hover:bg-primary-50 active:bg-primary-100'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {/* Botón móvil para abrir modal */}
              {onOpenModal && (
                <li className="pt-3 border-t border-gray-200/60 mt-3">
                  <button
                    onClick={() => {
                      onOpenModal();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-medical-500 to-medical-600 hover:from-medical-600 hover:to-medical-700 active:from-medical-700 active:to-medical-800 text-white py-3 px-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center space-x-2 animate-pulse shadow-lg"
                  >
                    <MdHealthAndSafety size={20} />
                    <span>Ver Portafolio</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainMenu;
