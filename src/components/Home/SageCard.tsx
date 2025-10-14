import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import type { Sage } from '../../types/sage';

interface SageCardProps {
  sage: Sage;
  index: number;
}

export const SageCard = ({ sage, index }: SageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer group"
    >
      <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-2xl rounded-2xl hover:shadow-3xl">
        {/* Image avec overlay au hover */}
        <div className="relative overflow-hidden">
          <motion.img
            variants={imageVariants}
            src={sage.image}
            alt={sage.name}
            className="object-cover w-full h-64"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100" />
          
          {/* Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-sm font-medium text-gray-900 rounded-full shadow-lg bg-white/90 backdrop-blur-sm">
              {sage.period}
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="relative p-8">
          {/* Element décoratif */}
          <div className="absolute -top-6 left-8">
            <div className="flex items-center justify-center w-12 h-12 shadow-lg bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
              {sage.name}
            </h2>
            
            <p className="mb-4 text-sm font-medium text-gray-500">
              {sage.period}
            </p>
            
            <p className="mb-6 leading-relaxed text-gray-700 line-clamp-3">
              {sage.biography}
            </p>

            {/* Bouton avec animation améliorée */}
            <motion.div
              animate={{ 
                x: isHovered ? 5 : 0 
              }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={`/sage/${sage.id}`}
                className="inline-flex items-center justify-between w-full px-6 py-3 font-semibold text-indigo-700 transition-all duration-300 border border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl group/btn"
              >
                <span>Explorer la sagesse</span>
                <motion.div
                  animate={{ 
                    rotate: isHovered ? 45 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-5 h-5 group-hover/btn:text-indigo-600" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};