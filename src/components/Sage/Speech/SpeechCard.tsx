import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from '../../../types/sage';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

interface SpeechCardProps {
  quote: Quote;
  index: number;
  onSelect: (quote: Quote) => void;
}

export const SpeechCard = ({ quote, index, onSelect }: SpeechCardProps) => {
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
        delay: index * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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
      onClick={() => onSelect(quote)}
    >
      <div className="h-full p-6 transition-all duration-300 border border-gray-100 shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-2xl hover:shadow-2xl">
        {/* Citation */}
        <blockquote className="mb-4 text-lg italic leading-relaxed text-gray-700 transition-colors line-clamp-4 group-hover:text-gray-900">
          "{quote.text}"
        </blockquote>

        {/* Métadonnées */}
        <footer className="flex items-center justify-between pt-4 mt-6 text-gray-600 border-t border-gray-200">
          <div className="flex-1">
            <div className="flex items-center mb-2 space-x-2">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <cite className="text-sm not-italic font-medium">
                {quote.source}
              </cite>
            </div>
            
            {quote.year && (
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700">
                  {quote.year}
                </span>
              </div>
            )}
          </div>

          <motion.div
            animate={{ 
              x: isHovered ? 3 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="w-5 h-5 text-gray-400 transition-colors group-hover:text-indigo-500" />
          </motion.div>
        </footer>
      </div>
    </motion.div>
  );
};