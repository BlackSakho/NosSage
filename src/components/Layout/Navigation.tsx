import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, BookOpen, Image, Quote } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="font-semibold text-xl">Les Trois Sages</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 hover:text-indigo-200 ${
                location.pathname === '/' ? 'text-indigo-200' : ''
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
            {['confucius', 'lao-tse', 'bouddha'].map((sage) => (
              <Link
                key={sage}
                to={`/sage/${sage}`}
                className={`hover:text-indigo-200 ${
                  location.pathname.includes(sage) ? 'text-indigo-200' : ''
                }`}
              >
                {sage.charAt(0).toUpperCase() + sage.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};