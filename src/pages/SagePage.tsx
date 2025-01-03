import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sages } from '../data/sages';
import { SpeechSection } from '../components/Sage/Speech/SpeechSection';
import { PoemsList } from '../components/Sage/PoemsList';
import { Gallery } from '../components/Sage/Gallery';
import { ShareButtons } from '../components/Shared/ShareButtons';

export const SagePage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  
  const sage = sages.find(s => s.id === id);
  
  if (!sage) {
    return <div>Sage non trouvé</div>;
  }

  const filteredPoems = sage.poems.filter(poem =>
    poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poem.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <img
          src={sage.image}
          alt={sage.name}
          className="w-48 h-48 mx-auto rounded-full object-cover shadow-xl"
        />
        <h1 className="mt-6 text-4xl font-bold text-gray-900">{sage.name}</h1>
        <p className="mt-2 text-xl text-gray-600">{sage.period}</p>
        <div className="mt-4">
          <ShareButtons
            url={window.location.href}
            title={`Découvrez la sagesse de ${sage.name}`}
          />
        </div>
      </motion.div>

      <div className="prose prose-lg mx-auto">
        <p>{sage.biography}</p>
      </div>

      <SpeechSection
        quotes={sage.quotes}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Poèmes</h2>
        <PoemsList poems={filteredPoems} />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Galerie</h2>
        <Gallery images={sage.gallery} />
      </section>
    </div>
  );
};