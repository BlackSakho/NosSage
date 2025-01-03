import React from 'react';
import { Quote } from '../../types/sage';
import { motion } from 'framer-motion';

interface QuotesListProps {
  quotes: Quote[];
}

export const QuotesList = ({ quotes }: QuotesListProps) => {
  return (
    <div className="space-y-6">
      {quotes.map((quote, index) => (
        <motion.div
          key={quote.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <blockquote className="text-xl italic text-gray-700">"{quote.text}"</blockquote>
          <cite className="block mt-4 text-sm text-gray-600">
            — {quote.source} {quote.year && `(${quote.year})`}
          </cite>
        </motion.div>
      ))}
    </div>
  );
};