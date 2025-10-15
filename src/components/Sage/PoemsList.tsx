import React, { useState } from 'react';
import { Poem } from '../../types/sage';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, BookOpen, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface PoemsListProps {
  poems: Poem[];
}

export const PoemsList = ({ poems }: PoemsListProps) => {
  const [expandedPoems, setExpandedPoems] = useState<Set<string>>(new Set());
  const [currentPages, setCurrentPages] = useState<{ [key: string]: number }>({});

  const LINES_PER_PAGE = 20;

  const togglePoem = (poemId: string) => {
    const newExpanded = new Set(expandedPoems);
    if (newExpanded.has(poemId)) {
      newExpanded.delete(poemId);
      // Réinitialiser la pagination quand on réduit
      setCurrentPages(prev => {
        const newPages = { ...prev };
        delete newPages[poemId];
        return newPages;
      });
    } else {
      newExpanded.add(poemId);
    }
    setExpandedPoems(newExpanded);
  };

  const isExpanded = (poemId: string) => expandedPoems.has(poemId);

  const getCurrentPageContent = (poem: Poem) => {
    const currentPage = currentPages[poem.id] || 1;
    const lines = poem.content.split('\n');
    const startIndex = (currentPage - 1) * LINES_PER_PAGE;
    const endIndex = startIndex + LINES_PER_PAGE;
    return lines.slice(startIndex, endIndex).join('\n');
  };

  const getTotalPages = (content: string) => {
    const lines = content.split('\n');
    return Math.ceil(lines.length / LINES_PER_PAGE);
  };

  const goToPage = (poemId: string, page: number) => {
    setCurrentPages(prev => ({
      ...prev,
      [poemId]: page
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {poems.map((poem, index) => {
        const totalPages = getTotalPages(poem.content);
        const currentPage = currentPages[poem.id] || 1;
        const showPagination = totalPages > 1 && isExpanded(poem.id);

        return (
          <motion.div
            key={poem.id}
            variants={itemVariants}
            className="overflow-hidden transition-all duration-300 border border-gray-100 shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-2xl hover:shadow-xl"
          >
            {/* En-tête du poème */}
            <div 
              className="p-6 cursor-pointer"
              onClick={() => togglePoem(poem.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{poem.title}</h3>
                      {poem.year && (
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{poem.year}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isExpanded(poem.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 ml-4 rounded-lg hover:bg-gray-100"
                >
                  {isExpanded(poem.id) ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </motion.div>
              </div>
            </div>

            {/* Contenu avec pagination */}
            <AnimatePresence>
              {isExpanded(poem.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200"
                >
                  <div className="p-6 bg-white/50">
                    {/* Pagination en haut */}
                    {showPagination && (
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                        <span className="text-sm text-gray-600">
                          Page {currentPage} sur {totalPages}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (currentPage > 1) goToPage(poem.id, currentPage - 1);
                            }}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (currentPage < totalPages) goToPage(poem.id, currentPage + 1);
                            }}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Contenu du poème */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-lg font-light leading-relaxed text-gray-800 whitespace-pre-line"
                    >
                      {getCurrentPageContent(poem)}
                    </motion.p>

                    {/* Pied de page */}
                    <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-200">
                      <div className="text-sm text-gray-500">
                        {poem.content.split('\n').length} lignes • {poem.content.length} caractères
                      </div>
                      <button
                        onClick={() => togglePoem(poem.id)}
                        className="flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        <ChevronUp className="w-4 h-4" />
                        Réduire
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
};