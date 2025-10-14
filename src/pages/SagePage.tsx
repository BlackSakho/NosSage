import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sages } from '../data/sages';
import { SpeechSection } from '../components/Sage/Speech/SpeechSection';
import { PoemsList } from '../components/Sage/PoemsList';
import { Gallery } from '../components/Sage/Gallery';
import { ShareButtons } from '../components/Shared/ShareButtons';
import { BookOpen, Image, Quote, Sparkles } from 'lucide-react';

export const SagePage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('biography');
  
  const sage = sages.find(s => s.id === id);
  
  if (!sage) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Sage non trouvé</h1>
          <p className="text-gray-600">Le sage que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  const filteredPoems = sage.poems.filter(poem =>
    poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poem.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header avec navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="relative inline-block mb-8">
            <motion.div
              className="absolute rounded-full -inset-4 bg-gradient-to-r from-amber-200 to-yellow-100 blur-xl opacity-60"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <img
              src={sage.image}
              alt={sage.name}
              className="relative object-cover w-32 h-32 mx-auto border-4 border-white rounded-full shadow-2xl md:w-40 md:h-40"
            />
          </div>

          <motion.h1 
            className="mb-4 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {sage.name}
          </motion.h1>
          
          <motion.p 
            className="mb-6 text-xl font-light text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {sage.period}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ShareButtons
              url={window.location.href}
              title={`Découvrez la sagesse de ${sage.name}`}
            />
          </motion.div>
        </motion.div>

        {/* Navigation par sections */}
        <motion.nav 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { id: 'biography', label: 'Biographie', icon: BookOpen },
            { id: 'speeches', label: 'Citation', icon: Quote },
            { id: 'poems', label: 'Discours', icon: Sparkles },
            { id: 'gallery', label: 'Galerie', icon: Image },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg'
              }`}
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.label}
            </button>
          ))}
        </motion.nav>

        <AnimatePresence mode="wait">
          {/* Section Biographie */}
          {activeSection === 'biography' && (
            <motion.section
              key="biography"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="p-8 mb-12 bg-white shadow-2xl rounded-3xl md:p-12"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="flex items-center mb-8 text-3xl font-bold text-gray-900">
                  <BookOpen className="w-8 h-8 mr-3 text-indigo-500" />
                  Biographie
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {sage.biography}
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {/* Section Discours */}
          {activeSection === 'speeches' && (
            <motion.section
              key="speeches"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-12"
            >
              <SpeechSection
                quotes={sage.quotes}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </motion.section>
          )}

          {/* Section Poèmes */}
          {activeSection === 'poems' && (
            <motion.section
              key="poems"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-12"
            >
              <div className="p-8 bg-white shadow-2xl rounded-3xl md:p-12">
                <h2 className="flex items-center mb-8 text-3xl font-bold text-gray-900">
                  <Sparkles className="w-8 h-8 mr-3 text-amber-500" />
                  Discours
                </h2>
                <PoemsList poems={filteredPoems} />
              </div>
            </motion.section>
          )}

          {/* Section Galerie */}
          {activeSection === 'gallery' && (
            <motion.section
              key="gallery"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-12"
            >
              <div className="p-8 bg-white shadow-2xl rounded-3xl md:p-12">
                <h2 className="flex items-center mb-8 text-3xl font-bold text-gray-900">
                  <Image className="w-8 h-8 mr-3 text-emerald-500" />
                  Galerie
                </h2>
                <Gallery images={sage.gallery} />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};