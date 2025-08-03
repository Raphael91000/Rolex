import React from 'react';
import { WatchCarousel } from '../components/WatchCarousel';

// Import des images
import submarinerImg from '../assets/watches/Submariner1.png';
import subBleuTurImg from '../assets/watches/SubBleuTur.png';
import subDiamondImg from '../assets/watches/SubDiamond.png';

export const Submariner = () => {
  const submarinerWatches = [
    {
      id: 1,
      name: 'Date 126610LV',
      descriptiveTitle: 'Cadran noir profond',
      description: 'La montre de plongée emblématique avec son cadran vert distinctif et sa lunette unidirectionnelle. Étanche jusqu\'à 300 mètres, elle allie performance technique et élégance intemporelle.',
      price: 'À partir de 8 550 €',
      image: submarinerImg,
    },
    {
      id: 2,
      name: 'Custom Model',
      descriptiveTitle: 'Azura',
      description: 'Une variation exclusive avec un cadran turquoise captivant qui évoque les profondeurs océaniques. Mouvement automatique perpétuel avec réserve de marche de 70 heures.',
      price: 'À partir de 9 200 €',
      image: subBleuTurImg,
    },
    {
      id: 3,
      name: 'Custom Model',
      descriptiveTitle: 'Serti Saphir & Diamants',
      description: 'L\'excellence horlogère sublimée par des diamants sertis avec précision. Cette pièce d\'exception combine la robustesse légendaire de la Submariner avec un raffinement absolu.',
      price: 'À partir de 15 800 €',
      image: subDiamondImg,
    },
  ];

  const getGradientClass = (watchId: number) => {
    // Utilise toujours le même dégradé vert pour toutes les montres
    return 'bg-gradient-to-t from-[#0D1F16] to-[#12382B]';
  };

  const [currentWatchId, setCurrentWatchId] = React.useState(1);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${getGradientClass(currentWatchId)}`}>
      <div className="h-screen flex flex-col px-6 pt-12 overflow-hidden">
        <div className="text-left mt-16 mb-8" style={{ paddingLeft: '1.5rem' }}>
          <h1 className="font-playfair text-3xl md:text-4xl text-[#f3f3f3] mb-6">
            Submariner
          </h1>
        </div>

        <div className="flex-1 flex items-center">
          <WatchCarousel 
            watches={submarinerWatches} 
            category="submariner"
            onWatchChange={setCurrentWatchId}
          />
        </div>
      </div>
    </div>
  );
};