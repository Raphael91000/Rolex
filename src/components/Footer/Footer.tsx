import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import du logo
import logoR from '../../assets/watches/LogoR.png';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const footerNavItems = [
    { name: 'Accueil', path: '/', anchor: '#accueil' },
    { name: 'Savoir-faire', path: '/', anchor: '#savoir-faire' },
    { name: 'Héritage', path: '/', anchor: '#savoir-faire' },
    { name: 'Revendeur', path: '/', anchor: '#revendeur' },
  ];

  const legalItems = [
    'Mentions légales',
    'Politique de confidentialité',
    '© Rolex 2025',
    'Tous droits réservés',
  ];

  const handleNavClick = (path: string, anchor: string) => {
    // Si on est sur la page d'accueil, scroll simple
    if (location.pathname === '/') {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Navigation normale pour les autres cas
    navigate(path);
    if (anchor !== '#accueil') {
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
          <footer className="mt-20 border-t border-[#7C7235]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Website Link */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#7d7d7d]/20 rounded-full px-8 py-3 flex items-center space-x-4">
            <span className="font-manrope font-semibold text-[#e0e0e0] text-xl">
              www.rolexfrance.fr
            </span>
            <img
              src={logoR}
              alt="Rolex R"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Navigation avec hover */}
        <nav className="flex justify-center space-x-12 mb-8">
          {footerNavItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.path, item.anchor)}
              className="font-manrope font-medium text-[#e6e6e6] hover:text-[#7C7235] transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Legal Information */}
        <div className="flex justify-center space-x-8 text-center">
          {legalItems.map((item, index) => (
            <span
              key={index}
              className="font-manrope font-medium text-[#e6e6e6] text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};