import React from 'react';
import { GalleryImage } from '../../types/sage';
import { motion } from 'framer-motion';

interface GalleryProps {
  images: GalleryImage[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <img
            src={image.url}
            alt={image.caption}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
            <p className="text-sm font-medium">{image.caption}</p>
            <p className="text-xs opacity-75">{image.type}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};