import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from '../../../types/sage';
import { ArrowLeft, Calendar, BookOpen, Share2 } from 'lucide-react';

interface SpeechDetailProps {
  quote: Quote;
  onClose: () => void;
}

export const SpeechDetail = ({ quote, onClose }: SpeechDetailProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Citation de ${quote.source}`,
          text: quote.text,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Erreur de partage:', err);
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative w-full max-w-2xl mx-auto overflow-hidden bg-white shadow-2xl rounded-3xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 bg-gradient-to-r from-indigo-500 to-purple-500">
            <button
              onClick={onClose}
              className="absolute p-2 transition-colors rounded-full top-6 left-6 bg-white/20 hover:bg-white/30"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="mt-4 text-center text-white">
              <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h3 className="text-xl font-semibold">Citation</h3>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-8">
            <blockquote className="mb-8 text-2xl italic leading-relaxed text-center text-gray-800 md:text-3xl">
              "{quote.text}"
            </blockquote>
            
            <div className="pt-6 space-y-6 border-t border-gray-200">
              <div>
                <h3 className="flex items-center mb-2 font-semibold text-gray-900">
                  <BookOpen className="w-5 h-5 mr-2 text-indigo-500" />
                  Source
                </h3>
                <p className="text-lg text-gray-700">{quote.source}</p>
              </div>
              
              {quote.year && (
                <div>
                  <h3 className="flex items-center mb-2 font-semibold text-gray-900">
                    <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                    Année
                  </h3>
                  <p className="text-lg text-gray-700">{quote.year}</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end pt-6 mt-8 space-x-4 border-t border-gray-200">
              <button
                onClick={handleShare}
                className="flex items-center px-4 py-2 text-gray-600 transition-colors hover:text-gray-800"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Partager
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};