import React, { useState } from 'react';
import { Quote } from '../../../types/sage';
import { SpeechList } from './SpeechList';
import { SpeechDetail } from './SpeechDetail';
import { SearchBar } from '../../Shared/SearchBar';

interface SpeechSectionProps {
  quotes: Quote[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SpeechSection = ({ quotes, searchTerm, onSearchChange }: SpeechSectionProps) => {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  return (
    <section className="space-y-6">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Discours</h2>
        <div className="w-full max-w-md">
          <SearchBar
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Rechercher dans les discours..."
          />
        </div>
      </div>
      
      <SpeechList
        quotes={quotes}
        searchTerm={searchTerm}
        onSelectQuote={setSelectedQuote}
      />

      {selectedQuote && (
        <SpeechDetail
          quote={selectedQuote}
          onClose={() => setSelectedQuote(null)}
        />
      )}
    </section>
  );
};