import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
      <p className="text-gray-600 mb-8">La page que vous recherchez n'existe pas.</p>
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        <Home className="h-5 w-5 mr-2" />
        Retour à l'accueil
      </Link>
    </div>
  );
};