import React from 'react';
import { Poem } from '../../types/sage';
import { motion } from 'framer-motion';

interface PoemsListProps {
  poems: Poem[];
}

export const PoemsList = ({ poems }: PoemsListProps) => {
  return (
    <div className="space-y-8">
      {poems.map((poem, index) => (
        <motion.div
          key={poem.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{poem.title}</h3>
          <p className="text-gray-700 whitespace-pre-line">{poem.content}</p>
          {poem.year && (
            <p className="mt-4 text-sm text-gray-600">{poem.year}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
};