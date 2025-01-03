import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from '../../../types/sage';
import { ArrowLeft } from 'lucide-react';

interface SpeechDetailProps {
  quote: Quote;
  onClose: () => void;
}

export const SpeechDetail = ({ quote, onClose }: SpeechDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>

        <div className="mt-8">
          <blockquote className="text-2xl italic text-gray-800 mb-6">
            "{quote.text}"
          </blockquote>
          
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold text-gray-900">Source</h3>
            <p className="text-gray-600">{quote.source}</p>
            {quote.year && (
              <>
                <h3 className="font-semibold text-gray-900 mt-4">Année</h3>
                <p className="text-gray-600">{quote.year}</p>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};