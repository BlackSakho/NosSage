import React from 'react';
import { Quote } from '../../../types/sage';
import { SpeechCard } from './SpeechCard';

interface SpeechListProps {
  quotes: Quote[];
  searchTerm?: string;
  onSelectQuote: (quote: Quote) => void;
}

export const SpeechList = ({ quotes, searchTerm = '', onSelectQuote }: SpeechListProps) => {
  const filteredQuotes = quotes.filter(quote =>
    quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.source.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {filteredQuotes.map((quote, index) => (
        <SpeechCard
          key={quote.id}
          quote={quote}
          index={index}
          onSelect={onSelectQuote}
        />
      ))}
    </div>
  );
};