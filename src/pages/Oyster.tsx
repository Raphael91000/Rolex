import React from 'react';
import { WatchCarousel } from '../components/WatchCarousel';

// Import des images
import oysterGreenImg from '../assets/watches/OysterGreen.png';
import oysterYellowImg from '../assets/watches/OysterYellow.png';
import oysterRedImg from '../assets/watches/OysterRed.png';

export const Oyster = () => {
  const oysterWatches = [
    {
      id: 1,
      name: 'Oyster Perpetual Green',
      description: 'L\'essence pure de Rolex dans sa forme la plus épurée. Ce modèle vert emblématique célèbre l\'héritage de la marque avec un cadran d\'une intensité remarquable.',
      price: 'À partir de 5 900 €',
      image: oysterGreenImg,
    },
    {
      id: 2,
      name: 'Oyster Perpetual Yellow',
      description: 'Une explosion de couleur qui capture l\'optimisme et la joie de vivre. Ce cadran jaune vibrant transforme chaque instant en moment de bonheur pur.',
      price: 'À partir de 5 900 €',
      image: oysterYellowImg,
    },
    {
      id: 3,
      name: 'Oyster Perpetual Red',
      description: 'La passion incarnée dans un garde-temps d\'exception. Ce rouge profond évoque la détermination et l\'audace, valeurs fondamentales de la maison Rolex.',
      price: 'À partir de 5 900 €',
      image: oysterRedImg,
    },
  ];

  const getGradientClass = (watchId: number) => {
    switch (watchId) {
      case 1:
        return 'bg-gradient-to-t from-[#0D1F16] to-[#12382B]';
      case 2:
        return 'bg-gradient-to-t from-[#B88400] to-[#D4A000]';
      case 3:
        return 'bg-gradient-to-t from-[#B3321A] to-[#E64520]';
      default:
        return 'bg-gradient-to-t from-[#0D1F16] to-[#12382B]';
    }
  };

  const [currentWatchId, setCurrentWatchId] = React.useState(1);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${getGradientClass(currentWatchId)}`}>
      <div className="h-screen flex flex-col px-6 pt-12 overflow-hidden">
        <div className="text-left mt-8 mb-12" style={{ paddingLeft: '1.5rem' }}>
          <h1 className="font-playfair text-4xl md:text-5xl text-[#f3f3f3] mb-6">
            Oyster
          </h1>
        </div>

        <div className="flex-1 flex items-center">
          <WatchCarousel 
            watches={oysterWatches} 
            category="oyster"
            onWatchChange={setCurrentWatchId}
          />
        </div>
      </div>
    </div>
  );
};