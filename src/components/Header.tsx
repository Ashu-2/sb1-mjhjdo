import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="group">
            <Logo />
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Experience</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a href="https://github.com" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}