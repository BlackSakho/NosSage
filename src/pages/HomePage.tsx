import React from 'react';
import { motion } from 'framer-motion';
import { SageCard } from '../components/Home/SageCard';
import { sages } from '../data/sages';

export const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-slate-50 to-blue-50 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl"
      >
        {/* Header avec animation améliorée */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 blur"
              animate={{
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h1 className="relative mb-6 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
              Les Trois Sages
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600"
          >
            Découvrez la sagesse millénaire à travers les enseignements de trois grands maîtres spirituels 
            qui ont marqué l'histoire de l'humanité.
          </motion.p>
          
          {/* Element décoratif */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-24 h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          />
        </motion.div>

        {/* Grid des cartes améliorée */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
        >
          {sages.map((sage, index) => (
            <SageCard key={sage.id} sage={sage} index={index} />
          ))}
        </motion.div>

        {/* Section d'appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="italic text-gray-500">
            "La véritable sagesse est de connaître ce que l'on ne sait pas." - Socrate
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};