import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Import du logo
import logoRolex from '../../assets/watches/LogoRolex.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Savoir-faire', path: '/savoir-faire' },
    { name: 'Héritage', path: '/heritage' },
    { name: 'Revendeur', path: '/revendeur' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto py-2 flex items-center justify-between" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" style={{ paddingLeft: '1.5rem' }}>
          <img
            src={logoRolex}
            alt="Rolex Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-manrope font-medium text-base transition-colors duration-300 ${
                isActive(item.path)
                  ? 'text-[#7C7235]'
                  : 'text-[#e6e6e6] hover:text-[#7C7235]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <nav className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-manrope font-medium text-base transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-[#7C7235]'
                    : 'text-[#e6e6e6] hover:text-[#7C7235]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};