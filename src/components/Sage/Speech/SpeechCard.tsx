import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from '../../../types/sage';
import { ExternalLink } from 'lucide-react';

interface SpeechCardProps {
  quote: Quote;
  index: number;
  onSelect: (quote: Quote) => void;
}

export const SpeechCard = ({ quote, index, onSelect }: SpeechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={() => onSelect(quote)}
    >
      <blockquote className="text-xl italic text-gray-700 mb-4 line-clamp-3">
        "{quote.text}"
      </blockquote>
      <footer className="flex items-center justify-between text-gray-600">
        <cite className="not-italic font-medium">
          {quote.source}
        </cite>
        <div className="flex items-center space-x-2">
          {quote.year && (
            <span className="text-sm">{quote.year}</span>
          )}
          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </footer>
    </motion.div>
  );
};