import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const footerNavItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Savoir-faire', path: '/savoir-faire' },
    { name: 'Héritage', path: '/heritage' },
    { name: 'Revendeur', path: '/revendeur' },
  ];

  const legalItems = [
    'Mentions légales',
    'Politique de confidentialité',
    '© Rolex 2025',
    'Tous droits réservés',
  ];

  return (
    <footer className="mt-20 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Website Link */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#7d7d7d]/20 rounded-full px-8 py-3 flex items-center space-x-4">
            <span className="font-manrope font-semibold text-[#e0e0e0] text-xl">
              www.rolexfrance.fr
            </span>
            <img
              src="/r-avec-arrie-re-plan-supprime--1.png"
              alt="Rolex R"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center space-x-12 mb-8">
          {footerNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-manrope font-medium text-[#e6e6e6] hover:text-[#7C7235] transition-colors duration-300"
            >
              {item.name}
            </Link>
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