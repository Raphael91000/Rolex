import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Footer } from '../components/Footer';

// Enregistrer le plugin GSAP
gsap.registerPlugin(ScrollTrigger);

// Import des images des montres
import submarinerImg from '../assets/watches/Submariner1.png';
import datejustImg from '../assets/watches/DateJustGreen.png';
import oysterImg from '../assets/watches/OysterGreen.png';

// Import des images des revendeurs
import rolexParisImg from '../assets/watches/RolexParis.png';
import rolexDubaiImg from '../assets/watches/RolexDubai.png';
import RolexGeneveImg from '../assets/watches/RolexGeneve.png';

export const Home = () => {
  const scrollImageRef = useRef<HTMLImageElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  // Générer les chemins des images (de Frame95 à Frame1)
  const generateImagePaths = () => {
    const paths = [];
    for (let i = 95; i >= 1; i--) {
      paths.push(`/src/rolex-assembly/Frame${i}.gif`);
    }
    return paths;
  };

  const imagePaths = generateImagePaths();

  useEffect(() => {
    if (!scrollImageRef.current || !scrollSectionRef.current) return;

    // Précharger les images
    const preloadImages = () => {
      imagePaths.forEach(path => {
        const img = new Image();
        img.src = path;
      });
    };
    preloadImages();

    // Animation GSAP avec ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const frameIndex = Math.floor(progress * (imagePaths.length - 1));
          const clampedIndex = Math.max(0, Math.min(frameIndex, imagePaths.length - 1));
          
          if (scrollImageRef.current) {
            scrollImageRef.current.src = imagePaths[clampedIndex];
          }
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, []);
  const watches = [
    {
      name: 'Submariner',
      image: submarinerImg,
      path: '/submariner',
    },
    {
      name: 'Datejust',
      image: datejustImg,
      path: '/datejust',
    },
    {
      name: 'Oyster',
      image: oysterImg,
      path: '/oyster',
    },
  ];

  const retailers = [
    {
      name: 'Rolex Paris 75016',
      address: 'Avenue des champs Élysées',
      image: rolexParisImg,
    },
    {
      name: 'Rolex Dubai',
      address: 'Dubai Mall Center',
      image: rolexDubaiImg,
    },
    {
      name: 'Rolex Genève',
      address: 'Rue de la Fontaine',
      image: RolexGeneveImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#0D1F16] to-[#12382B]">
      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex flex-col justify-center px-6 pt-20">
        <motion.h1
          className="font-playfair text-4xl text-[#f3f3f3] text-left mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ paddingLeft: '1.5rem' }}
        >
          L'excellence horlogère depuis 1905
        </motion.h1>

        {/* Watches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full mx-auto">
          {watches.map((watch, index) => (
            <motion.div
              key={watch.name}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Container uniforme pour toutes les montres */}
              <div className="relative">
                <div className="relative w-80 h-80 flex items-center justify-center">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className={`object-contain ${
                      watch.name === 'Datejust' ? 'w-56 h-56' : 
                      watch.name === 'Oyster' ? 'w-[340px] h-[340px] mt-3' :
                      'w-80 h-80'
                    }`}
                  />
                  {/* Glow Effect uniforme */}
                  <div className="absolute inset-0 bg-gradient-radial from-[rgba(46,107,78,0.25)] to-transparent rounded-full blur-3xl -z-10" />
                </div>
              </div>

              <h3 className="font-manrope font-medium text-[#e0e0e0] text-2xl mt-4 mb-6">
                {watch.name}
              </h3>

              <Link
                to={watch.path}
                className="bg-[#7c7235] hover:bg-[#8d8340] text-black font-manrope font-medium px-8 py-3 rounded-full transition-colors duration-300"
              >
                Découvrir
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Savoir-faire Section avec animation scroll */}
      <section ref={scrollSectionRef} id="savoir-faire" className="relative min-h-[200vh]">
        {/* Image fixe pour l'animation scroll */}
        <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-t from-[#0D1F16] to-[#12382B]">
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-6">
            {/* Contenu texte à gauche */}
            <motion.div
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl text-[#f3f3f3] mb-8">
                Notre savoir-faire
              </h2>
              <h3 className="font-manrope font-semibold text-[#e0e0e0] text-xl mb-4">
                L'excellence à chaque étapes
              </h3>
              <p className="font-manrope text-[#e0e0e0] text-base leading-relaxed mb-6">
                Chez Rolex, chaque détail compte. De la sélection des matériaux les plus nobles à l'assemblage méticuleux des composants, nos horlogers perpétuent un savoir-faire transmis depuis plus d'un siècle. Les mouvements sont conçus, fabriqués et testés dans nos propres ateliers selon les standards les plus stricts de précision et de fiabilité. Chaque montre est soumise à une série de contrôles rigoureux pour garantir des performances exceptionnelles.
              </p>
              <div className="w-96 h-0.5 bg-gradient-to-r from-[#7C7235] to-[#8d8340]"></div>
            </motion.div>

            {/* Animation Rolex à droite */}
            <div className="flex-1 flex justify-center items-center ml-12">
              <div className="relative">
                <img
                  ref={scrollImageRef}
                  src="/src/rolex-assembly/Frame95.gif"
                  alt="Rolex Assembly Animation"
                  className="w-80 h-80 object-contain"
                />
                {/* Effet de glow */}
                <div className="absolute inset-0 bg-gradient-radial from-[rgba(124,114,53,0.15)] to-transparent rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section id="heritage" className="flex flex-col justify-center px-6 py-10">
        <div className="max-w-6xl mx-auto" style={{ marginLeft: '10px' }}>
          <motion.h2
            className="font-playfair text-4xl text-[#f3f3f3] text-left mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ paddingLeft: '1.5rem' }}
          >
            Un héritage d'exception
          </motion.h2>

          <motion.div
            className="text-left max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ paddingLeft: '1.5rem' }}
          >
            <h3 className="font-manrope font-semibold text-[#e0e0e0] text-xl mb-4">
              120 ans d'innovation horlogère
            </h3>
            <p className="font-manrope text-[#e0e0e0] text-base leading-relaxed mb-3">
              Depuis sa création en 1905, Rolex incarne l'excellence, la précision et l'innovation. Des premières montres étanches aux modèles emblématiques d'aujourd'hui, la marque a marqué chaque époque par son audace et son savoir-faire.
            </p>
            <p className="font-manrope text-[#e0e0e0] text-base leading-relaxed mb-6">
              Rolex a accompagné les plus grands explorateurs, navigateurs et sportifs dans leurs exploits, devenant un véritable symbole de prestige à travers le monde.
            </p>
            {/* Barre dorée - couleur corrigée */}
            <div className="w-96 h-0.5 bg-gradient-to-r from-[#7C7235] to-[#8d8340]"></div>
          </motion.div>
        </div>
      </section>

      {/* Retailers Section */}
      <section id="revendeur" className="min-h-screen flex flex-col justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-playfair text-4xl text-[#f3f3f3] text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nos revendeurs
          </motion.h2>

          <motion.h3
            className="font-manrope font-semibold text-[#e0e0e0] text-2xl text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Des partenaires de confiance, partout dans le monde.
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {retailers.map((retailer, index) => (
              <motion.div
                key={retailer.name}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={retailer.image}
                    alt={retailer.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h4 className="font-manrope font-semibold text-[#e0e0e0] text-xl mb-2">
                  {retailer.name}
                </h4>
                <p className="font-manrope text-[#e0e0e0] text-base">
                  {retailer.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer uniquement sur la homepage */}
      <Footer />
    </div>
  );
};