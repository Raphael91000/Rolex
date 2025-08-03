import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Watch {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface WatchCarouselProps {
  watches: Watch[];
  category: string;
  onWatchChange?: (watchId: number) => void;
}

export const WatchCarousel: React.FC<WatchCarouselProps> = ({ watches, category, onWatchChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % watches.length;
    setCurrentIndex(newIndex);
    if (onWatchChange) {
      onWatchChange(watches[newIndex].id);
    }
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + watches.length) % watches.length;
    setCurrentIndex(newIndex);
    if (onWatchChange) {
      onWatchChange(watches[newIndex].id);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (onWatchChange) {
      onWatchChange(watches[index].id);
    }
  };

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(watches.length - 1)) return 'right';
    if (diff === -1 || diff === watches.length - 1) return 'left';
    return 'hidden';
  };

  const slideVariants = {
    center: {
      x: 0,
      scale: 1,
      zIndex: 5,
      opacity: 1,
    },
    left: {
      x: -180,
      scale: 0.8,
      zIndex: 2,
      opacity: 0.7,
    },
    right: {
      x: 180,
      scale: 0.8,
      zIndex: 2,
      opacity: 0.7,
    },
    hidden: {
      x: 0,
      scale: 0.6,
      zIndex: 1,
      opacity: 0,
    },
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Container principal avec flexbox */}
      <div className="flex items-center justify-between min-h-[500px]">
        {/* Colonne centrale - Carousel des montres */}
        <div className="flex-1 relative">
          <div className="relative h-[400px] flex items-center justify-center">
            <AnimatePresence mode="sync">
              {watches.map((watch, index) => {
                const position = getSlidePosition(index);
                if (position === 'hidden') return null;

                return (
                  <motion.div
                    key={watch.id}
                    className="absolute flex flex-col items-center"
                    variants={slideVariants}
                    animate={position}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {/* Watch Image */}
                    <div className="relative">
                      <img
                        src={watch.image}
                        alt={watch.name}
                        className={`object-contain ${
                          // Ajustements spécifiques par montre pour uniformiser les tailles visuelles
                          category === 'submariner' && watch.id === 1 ? 'w-96 h-96' : // Submariner verte
                          category === 'submariner' && watch.id === 3 ? 'w-80 h-80' : // Submariner diamond grossie
                          category === 'oyster' && (watch.id === 1 || watch.id === 3) ? 'w-96 h-96' : // Oyster verte et rouge
                          category === 'datejust' && watch.id === 2 ? 'w-[400px] h-[400px]' : // Datejust noire plus grande
                          category === 'datejust' && (watch.id === 1 || watch.id === 3) ? 'w-72 h-72' : // Datejust verte et bleue plus petites
                          'w-80 h-80' // Taille standard
                        } ${
                          category === 'submariner' && watch.id === 3 ? 'ml-6 -mt-7' : // Diamond décalée à droite et remontée encore plus
                          category === 'oyster' && watch.id === 1 ? 'mt-3' : // Oyster verte descendue
                          ''
                        }`}
                      />
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-radial from-[rgba(46,107,78,0.25)] to-transparent rounded-full blur-3xl -z-10" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation et nom de la montre */}
          <div className="flex items-center justify-center -mt-16 space-x-8 relative z-10">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors duration-300 relative z-20"
              aria-label="Previous watch"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <motion.div
              key={`${currentIndex}-name`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center relative z-20"
            >
              <h3 className="font-manrope text-base text-[#f3f3f3]">
                {watches[currentIndex].name}
              </h3>
            </motion.div>

            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors duration-300 relative z-20"
              aria-label="Next watch"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Colonne droite - Texte descriptif */}
        <div className="w-96 pl-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-left"
          >
            <h4 className="font-manrope font-semibold text-[#f3f3f3] text-base mb-4">
              {watches[currentIndex].descriptiveTitle || `Cadran ${watches[currentIndex].name.split(' ').pop()?.toLowerCase()}`}
            </h4>
            <p className="font-manrope text-[#e0e0e0] text-base mb-6 leading-relaxed">
              {watches[currentIndex].description}
            </p>
            <div className="font-manrope font-bold text-[#f3f3f3] text-lg">
              {watches[currentIndex].price}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dots Indicator - centré sous le carousel */}
      <div className="flex justify-center space-x-2 mt-8">
        {watches.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-[#7C7235]' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};