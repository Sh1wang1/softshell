import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; 

export const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 h-8 w-8 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">SS</span>
              </div>
              <h3 className="text-xl font-bold">SoftSell</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming unused software licenses into instant revenue for businesses worldwide.
            </p>
            
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-gray-300">info@softsell.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} />
                <span className="text-gray-300">123 Tech Street, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
