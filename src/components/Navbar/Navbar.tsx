import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import du logo
import logoRolex from '../../assets/watches/LogoRolex.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [curtainStage, setCurtainStage] = useState<'idle' | 'entering' | 'exiting'>('idle');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/', anchor: '#accueil' },
    { name: 'Savoir-faire', path: '/', anchor: '#savoir-faire' },
    { name: 'Héritage', path: '/', anchor: '#savoir-faire' },
    { name: 'Revendeur', path: '/', anchor: '#revendeur' },
  ];

  const isActive = (path: string, name: string) => {
    // Seul "Accueil" est actif sur la page d'accueil
    if (location.pathname === '/') {
      return name === 'Accueil';
    }
    return location.pathname === path;
  };
  
  // Pages de montres qui nécessitent l'animation
  const isWatchPage = ['/submariner', '/datejust', '/oyster'].includes(location.pathname);

  const handleNavClick = (path: string, anchor: string) => {
    // Si on est sur la page d'accueil, scroll simple
    if (location.pathname === '/') {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Si on est sur une page de montre, animation rideau
    if (isWatchPage) {
      setCurtainStage('entering');
      
      // Navigation au milieu de l'animation (quand l'écran est couvert)
      setTimeout(() => {
        navigate(path);
        // Scroll immédiatement pendant que l'écran est encore couvert
        if (anchor !== '#accueil') {
          setTimeout(() => {
            const element = document.querySelector(anchor);
            if (element) {
              element.scrollIntoView({ behavior: 'instant' }); // Scroll instantané
            }
          }, 100);
        }
        // Faire sortir le rideau après le scroll
        setTimeout(() => {
          setCurtainStage('exiting');
          setTimeout(() => {
            setCurtainStage('idle');
          }, 600);
        }, 200);
      }, 600); // Navigation au milieu de l'animation d'entrée
    } else {
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
    }
  };

  return (
    <>
      {/* Animation du rideau */}
      <AnimatePresence>
        {curtainStage === 'entering' && (
          <motion.div
            className="fixed inset-0 z-[60] bg-gradient-to-t from-[#0D1F16] to-[#12382B] flex items-center justify-center"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Logo Rolex en grand - AGRANDI */}
            <motion.img
              src={logoRolex}
              alt="Rolex"
              className="w-60 h-auto object-contain opacity-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ 
                delay: 0.2,
                duration: 0.4,
                ease: "easeOut"
              }}
            />
          </motion.div>
        )}
        {curtainStage === 'exiting' && (
          <motion.div
            className="fixed inset-0 z-[60] bg-gradient-to-t from-[#0D1F16] to-[#12382B] flex items-center justify-center"
            initial={{ x: '0%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Logo Rolex en grand - AGRANDI */}
            <motion.img
              src={logoRolex}
              alt="Rolex"
              className="w-60 h-auto object-contain opacity-80"
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.3,
                ease: "easeIn"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto py-8" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div className="flex items-center justify-between">
            {/* BY R. dans le coin gauche - disparaît au scroll */}
            <div className={`flex-shrink-0 -ml-16 transition-opacity duration-300 ${
              isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <span className="font-manrope font-medium text-white text-lg">BY </span>
              <span className="font-manrope font-medium text-[#D4AF37] text-lg">R.</span>
            </div>

            {/* Logo centré - disparaît au scroll */}
            <Link 
              to="/" 
              className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
                isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <img
                src={logoRolex}
                alt="Rolex Logo"
                className="h-24 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path, item.anchor)}
                  className="font-manrope font-medium text-base transition-colors duration-300 text-white hover:text-[#7C7235]"
                >
                  {item.name}
                </button>
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90">
            <nav className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.path, item.anchor);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left font-manrope font-medium text-base transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-[#D4AF37]'
                      : 'text-white hover:text-[#D4AF37]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};