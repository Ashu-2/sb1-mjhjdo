import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6"></div>
        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center transform -rotate-3 transition-transform group-hover:-rotate-6">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text">AS</span>
        </div>
      </div>
      <span className="text-xl font-bold text-gray-900 dark:text-white">Ashutosh</span>
    </div>
  );
}