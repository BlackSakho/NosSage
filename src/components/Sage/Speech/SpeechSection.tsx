import React, { useState } from 'react';
import { Quote } from '../../../types/sage';
import { SpeechList } from './SpeechList';
import { SpeechDetail } from './SpeechDetail';
import { SearchBar } from '../../Shared/SearchBar';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

interface SpeechSectionProps {
  quotes: Quote[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SpeechSection = ({ quotes, searchTerm, onSearchChange }: SpeechSectionProps) => {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [filterYear, setFilterYear] = useState<string>('');

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = !filterYear || quote.year === filterYear;
    return matchesSearch && matchesYear;
  });

  const years = Array.from(new Set(quotes.map(q => q.year).filter(Boolean)));

  return (
    <section className="space-y-8">
      {/* Header avec recherche et filtres */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-white shadow-xl rounded-2xl"
      >
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
            Discours & Citations
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les paroles marquantes de ce sage
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="w-full lg:w-96">
            <SearchBar
              value={searchTerm}
              onChange={onSearchChange}
              placeholder="Rechercher dans les discours..."
            />
          </div>
          
          {years.length > 0 && (
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Toutes les années</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <motion.p 
          className="mt-4 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filteredQuotes.length} citation{filteredQuotes.length > 1 ? 's' : ''} trouvée{filteredQuotes.length > 1 ? 's' : ''}
        </motion.p>
      </motion.div>

      {/* Liste des citations */}
      <SpeechList
        quotes={filteredQuotes}
        searchTerm={searchTerm}
        onSelectQuote={setSelectedQuote}
      />

      {/* Modal de détail */}
      {selectedQuote && (
        <SpeechDetail
          quote={selectedQuote}
          onClose={() => setSelectedQuote(null)}
        />
      )}
    </section>
  );
};