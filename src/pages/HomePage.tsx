import React from 'react';
import { motion } from 'framer-motion';
import { SageCard } from '../components/Home/SageCard';
import { sages } from '../data/sages';

export const HomePage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Les Trois Sages
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez la sagesse millénaire à travers les enseignements de trois grands maîtres spirituels
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sages.map((sage, index) => (
          <SageCard key={sage.id} sage={sage} index={index} />
        ))}
      </div>
    </div>
  );
};