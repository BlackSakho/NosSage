import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">Les Trois Sages</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-indigo-600">Accueil</Link>
              <Link to="/sage/macktoom" className="text-gray-600 hover:text-indigo-600">Al Macktoom</Link>
              <Link to="/sage/mourchid" className="text-gray-600 hover:text-indigo-600">Al Mourchid</Link>
              <Link to="/sage/capitaine" className="text-gray-600 hover:text-indigo-600">Capitaine</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">À propos</h3>
            <p className="text-gray-600">
              Une exploration de la sagesse millénaire à travers les enseignements de trois grands maîtres spirituels.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-gray-200 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Les Trois Sages. Tous droits réservés.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 space-x-2 text-gray-500 hover:text-indigo-600 md:mt-0"
          >
            <Github className="w-5 h-5" />
            <span>Code source</span>
          </a>
        </div>
      </div>
    </footer>
  );
};