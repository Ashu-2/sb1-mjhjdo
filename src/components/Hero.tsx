import React from 'react';
import { Brain, Cloud, Code } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Brain className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            <Cloud className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <Code className="w-10 h-10 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl mb-4">
            Senior AI & Cloud Developer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            6.5+ years of experience in Software Development, Product Development and R&D. 
            Expertise in Gen AI, Serverless and Cloud Computing.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#experience" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              View Experience
            </a>
            <a href="#contact" className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-lg border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}