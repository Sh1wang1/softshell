import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`fixed w-full z-10 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 h-8 w-8 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">SS</span>
          </div>
          <h1 className="text-xl font-bold">SoftSell</h1>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#why-choose-us" className="hover:text-blue-600 transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};


