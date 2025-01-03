import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold text-xl text-gray-900">Les Trois Sages</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-indigo-600">Accueil</Link>
              <Link to="/sage/confucius" className="text-gray-600 hover:text-indigo-600">Confucius</Link>
              <Link to="/sage/lao-tse" className="text-gray-600 hover:text-indigo-600">Lao Tseu</Link>
              <Link to="/sage/bouddha" className="text-gray-600 hover:text-indigo-600">Bouddha</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">À propos</h3>
            <p className="text-gray-600">
              Une exploration de la sagesse millénaire à travers les enseignements de trois grands maîtres spirituels.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Les Trois Sages. Tous droits réservés.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 mt-4 md:mt-0"
          >
            <Github className="h-5 w-5" />
            <span>Code source</span>
          </a>
        </div>
      </div>
    </footer>
  );
};