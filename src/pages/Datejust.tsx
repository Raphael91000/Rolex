import React from 'react';
import { WatchCarousel } from '../components/WatchCarousel';

export const Datejust = () => {
  const datejustWatches = [
    {
      id: 1,
      name: 'Datejust 31',
      description: 'L\'élégance féminine par excellence. Avec son boîtier de 31mm, cette Datejust offre un équilibre parfait entre raffinement et lisibilité. Son cadran nacré capture la lumière avec subtilité.',
      price: 'À partir de 6 850 €',
      image: '/datejustgreen.png',
    },
    {
      id: 2,
      name: 'Datejust 36',
      description: 'La taille classique qui a défini les codes de l\'horlogerie moderne. Le boîtier de 36mm convient parfaitement aux poignets fins comme aux plus larges, incarnant l\'intemporalité.',
      price: 'À partir de 7 400 €',
      image: '/datejustgreen.png',
    },
    {
      id: 3,
      name: 'Datejust 41',
      description: 'La version contemporaine avec une présence affirmée au poignet. Son boîtier de 41mm offre une lisibilité optimale tout en conservant l\'ADN élégant de la collection.',
      price: 'À partir de 8 100 €',
      image: '/datejustgreen.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#0D1F16] to-[#12382B]">
      <div className="min-h-screen flex flex-col justify-center items-center px-6 pt-32">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl text-[#f3f3f3] mb-6">
            Collection Datejust
          </h1>
          <p className="font-manrope text-[#e0e0e0] text-xl max-w-3xl mx-auto">
            Créée en 1945, la Datejust fut la première montre-bracelet chronomètre, 
            automatique et étanche à afficher la date dans un guichet à 3 heures.
          </p>
        </div>

        <WatchCarousel 
          watches={datejustWatches} 
          category="datejust"
        />
      </div>
    </div>
  );
};