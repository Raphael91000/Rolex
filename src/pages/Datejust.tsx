import React from 'react';
import { WatchCarousel } from '../components/WatchCarousel';

// Import des images
import datejustGreenImg from '../assets/watches/DateJustGreen.png';
import datejustBlackImg from '../assets/watches/DateJustBlack.png';
import datejustBleuImg from '../assets/watches/DateJustBleu.png';

export const Datejust = () => {
  const datejustWatches = [
    {
      id: 1,
      name: 'Datejust Green',
      description: 'L\'élégance classique avec un cadran vert olive distinctif. Avec son boîtier de 36mm, cette Datejust offre un équilibre parfait entre raffinement et lisibilité intemporelle.',
      price: 'À partir de 6 850 €',
      image: datejustGreenImg,
    },
    {
      id: 2,
      name: 'Datejust Black',
      description: 'L\'élégance absolue incarnée par un cadran noir profond orné de diamants. Cette pièce d\'exception combine sophistication et prestige dans un design intemporel.',
      price: 'À partir de 7 400 €',
      image: datejustBlackImg,
    },
    {
      id: 3,
      name: 'Datejust Bleu',
      description: 'La version contemporaine avec un magnifique cadran bleu qui capture la lumière avec subtilité. Son élégance raffinnée fait de cette montre un véritable symbole de distinction.',
      price: 'À partir de 8 100 €',
      image: datejustBleuImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#0D1F16] to-[#12382B]">
      <div className="h-screen flex flex-col px-6 pt-12 overflow-hidden">
        <div className="text-left mt-8 mb-12" style={{ paddingLeft: '1.5rem' }}>
          <h1 className="font-playfair text-4xl md:text-5xl text-[#f3f3f3] mb-6">
            Datejust
          </h1>
        </div>

        <div className="flex-1 flex items-center">
          <WatchCarousel 
            watches={datejustWatches} 
            category="datejust"
          />
        </div>
      </div>
    </div>
  );
};