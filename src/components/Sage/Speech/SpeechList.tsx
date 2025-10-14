import React from 'react';
import { Quote } from '../../../types/sage';
import { SpeechCard } from './SpeechCard';
import { motion } from 'framer-motion';

interface SpeechListProps {
  quotes: Quote[];
  searchTerm?: string;
  onSelectQuote: (quote: Quote) => void;
}

export const SpeechList = ({ quotes, searchTerm = '', onSelectQuote }: SpeechListProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  if (quotes.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-16 text-center bg-white shadow-xl rounded-2xl"
      >
        <div className="text-lg text-gray-400">
          Aucune citation trouvée
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {quotes.map((quote, index) => (
        <SpeechCard
          key={quote.id}
          quote={quote}
          index={index}
          onSelect={onSelectQuote}
        />
      ))}
    </motion.div>
  );
};