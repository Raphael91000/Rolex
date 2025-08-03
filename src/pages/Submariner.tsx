import React from 'react';
import { WatchCarousel } from '../components/WatchCarousel';

export const Submariner = () => {
  const submarinerWatches = [
    {
      id: 1,
      name: 'Submariner Verte',
      description: 'La montre de plongée emblématique avec son cadran vert distinctif et sa lunette unidirectionnelle. Étanche jusqu\'à 300 mètres, elle allie performance technique et élégance intemporelle.',
      price: 'À partir de 8 550 €',
      image: '/assets/watches/SubBleuTur.png',
    },
    {
      id: 2,
      name: 'Submariner Turquoise',
      description: 'Une variation exclusive avec un cadran turquoise captivant qui évoque les profondeurs océaniques. Mouvement automatique perpétuel avec réserve de marche de 70 heures.',
      price: 'À partir de 9 200 €',
      image: '/assets/watches/SubBleuTur.png',
    },
    {
      id: 3,
      name: 'Submariner Diamond',
      description: 'L\'excellence horlogère sublimée par des diamants sertis avec précision. Cette pièce d\'exception combine la robustesse légendaire de la Submariner avec un raffinement absolu.',
      price: 'À partir de 15 800 €',
      image: '/assets/watches/SubDiamond.png',
    },
  ];

  const getGradientClass = (watchId: number) => {
    switch (watchId) {
      case 1:
        return 'bg-gradient-to-t from-[#0D1F16] to-[#12382B]';
      case 2:
        return 'bg-gradient-to-t from-[#045B5E] to-[#00A59B]';
      case 3:
        return 'bg-gradient-to-t from-[#0F1C2E] to-[#3057A6]';
      default:
        return 'bg-gradient-to-t from-[#0D1F16] to-[#12382B]';
    }
  };

  const [currentWatchId, setCurrentWatchId] = React.useState(1);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${getGradientClass(currentWatchId)}`}>
      <div className="min-h-screen flex flex-col justify-center items-center px-6 pt-32">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl text-[#f3f3f3] mb-6">
            Collection Submariner
          </h1>
          <p className="font-manrope text-[#e0e0e0] text-xl max-w-3xl mx-auto">
            Née de la passion pour l'exploration sous-marine, la Submariner incarne depuis 1953 
            l'alliance parfaite entre robustesse technique et élégance sportive.
          </p>
        </div>

        <WatchCarousel 
          watches={submarinerWatches} 
          category="submariner"
        />
      </div>
    </div>
  );
};