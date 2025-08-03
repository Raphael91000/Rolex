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
}

export const WatchCarousel: React.FC<WatchCarouselProps> = ({ watches, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % watches.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + watches.length) % watches.length);
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
      zIndex: 3,
      opacity: 1,
    },
    left: {
      x: -300,
      scale: 0.8,
      zIndex: 1,
      opacity: 0.6,
    },
    right: {
      x: 300,
      scale: 0.8,
      zIndex: 1,
      opacity: 0.6,
    },
    hidden: {
      x: 0,
      scale: 0.8,
      zIndex: 0,
      opacity: 0,
    },
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-6">
      {/* Carousel Container */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
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
                    className="w-80 h-80 object-contain"
                  />
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-[rgba(46,107,78,0.25)] to-transparent rounded-full blur-3xl -z-10" />
                </div>

                {/* Watch Info - Only show for center slide */}
                {position === 'center' && (
                  <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="font-playfair text-4xl text-[#f3f3f3] mb-4">
                      {watch.name}
                    </h3>
                    <p className="font-manrope text-[#e0e0e0] text-lg max-w-2xl mb-6">
                      {watch.description}
                    </p>
                    <div className="font-manrope font-semibold text-[#7C7235] text-2xl mb-8">
                      {watch.price}
                    </div>
                    <button className="bg-[#7c7235] hover:bg-[#8d8340] text-black font-manrope font-medium px-8 py-3 rounded-full transition-colors duration-300">
                      Découvrir
                    </button>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors duration-300"
          aria-label="Previous watch"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors duration-300"
          aria-label="Next watch"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {watches.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
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