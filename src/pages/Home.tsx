import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  const watches = [
    {
      name: 'Submariner',
      image: '/submariner1-.png',
      path: '/submariner',
    },
    {
      name: 'Datejust',
      image: '/datejustgreen.png',
      path: '/datejust',
    },
    {
      name: 'Oyster',
      image: '/rolex-1.png',
      path: '/oyster',
    },
  ];

  const retailers = [
    {
      name: 'Rolex Paris 75016',
      address: 'Avenue des champs Élysées',
      image: '/rolexoaris.png',
    },
    {
      name: 'Rolex Dubai',
      address: 'Dubai Mall Center',
      image: '/rolex-dubai.png',
    },
    {
      name: 'Rolex Genève',
      address: 'Rue de la Fontaine',
      image: '/rolexgeneve.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#0D1F16] to-[#12382B]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-32">
        <motion.h1
          className="font-playfair text-5xl md:text-6xl text-[#f3f3f3] text-center mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          L'excellence horlogère depuis 1905
        </motion.h1>

        {/* Watches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
          {watches.map((watch, index) => (
            <motion.div
              key={watch.name}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Glow Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-[rgba(46,107,78,0.25)] to-transparent rounded-full blur-3xl scale-150" />
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="relative w-64 h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-manrope font-medium text-[#e0e0e0] text-2xl mt-8 mb-6">
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

      {/* Savoir-faire Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-playfair text-5xl text-[#f3f3f3] text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Notre savoir-faire
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-manrope font-semibold text-[#e0e0e0] text-2xl mb-6">
                L'excellence à chaque étape
              </h3>
              <p className="font-manrope text-[#e0e0e0] text-base leading-relaxed">
                Chez Rolex, chaque détail compte. De la sélection des matériaux les
                plus nobles à l'assemblage méticuleux des composants, nos
                horlogers perpétuent un savoir-faire transmis depuis plus d'un
                siècle. Les mouvements sont conçus, fabriqués et testés dans nos
                propres ateliers selon les standards les plus stricts de précision
                et de fiabilité. Chaque montre est soumise à une série de contrôles
                rigoureux pour garantir des performances exceptionnelles.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-radial from-[rgba(46,107,78,0.15)] to-transparent rounded-full blur-2xl" />
              <img
                src="/submariner1-.png"
                alt="Rolex Craftsmanship"
                className="relative w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-playfair text-5xl text-[#f3f3f3] text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Un héritage d'exception
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-radial from-[rgba(46,107,78,0.15)] to-transparent rounded-full blur-2xl" />
              <img
                src="/datejustgreen.png"
                alt="Rolex Heritage"
                className="relative w-full max-w-md mx-auto"
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-manrope font-semibold text-[#e0e0e0] text-2xl mb-6">
                120 ans d'innovation horlogère
              </h3>
              <p className="font-manrope text-[#e0e0e0] text-base leading-relaxed">
                Depuis sa création en 1905, Rolex incarne l'excellence, la
                précision et l'innovation. Des premières montres étanches aux
                modèles emblématiques d'aujourd'hui, la marque a marqué
                chaque époque par son audace et son savoir-faire.
                <br /><br />
                Rolex a accompagné les plus grands explorateurs, navigateurs et
                sportifs dans leurs exploits, devenant un véritable symbole de
                prestige à travers le monde.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Retailers Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-playfair text-5xl text-[#f3f3f3] text-center mb-8"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};