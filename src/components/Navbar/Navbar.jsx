import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 shadow-md ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-10 w-10 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white text-lg font-bold">SS</span>
          </div>
          <span className="text-xl font-bold tracking-wide">SoftSell</span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-10 text-sm md:text-base font-semibold tracking-wide">
            {[
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Why Choose Us', href: '#why-choose-us' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative group transition-colors duration-200 text-gray-700 dark:text-gray-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 dark:bg-teal-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-sm hover:scale-110 transform transition-transform duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={22} className="text-yellow-400" />
            ) : (
              <Moon size={22} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
