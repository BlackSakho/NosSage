import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, BookOpen, Image, Quote } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="text-white bg-indigo-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6" />
            <span className="text-xl font-semibold">Les Trois Sages</span>
          </Link>
          
          <div className="hidden space-x-8 md:flex">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 hover:text-indigo-200 ${
                location.pathname === '/' ? 'text-indigo-200' : ''
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </Link>
            {['macktoom', 'mourchid', 'capitaine'].map((sage) => (
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