import React from 'react';
import { Share2, Twitter, Facebook, Link } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Lien copié !');
    } catch (err) {
      console.error('Erreur lors de la copie :', err);
    }
  };

  return (
    <div className="flex space-x-4">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
      >
        <Link className="h-5 w-5" />
      </button>
    </div>
  );
};