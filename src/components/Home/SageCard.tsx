import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Sage } from '../../types/sage';

interface SageCardProps {
  sage: Sage;
  index: number;
}

export const SageCard = ({ sage, index }: SageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <img
        src={sage.image}
        alt={sage.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{sage.name}</h2>
        <p className="text-gray-600 mt-2">{sage.period}</p>
        <p className="mt-4 text-gray-700 line-clamp-3">{sage.biography}</p>
        <Link
          to={`/sage/${sage.id}`}
          className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};