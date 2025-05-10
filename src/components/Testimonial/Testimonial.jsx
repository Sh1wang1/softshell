import React from 'react';
import { FaStar } from 'react-icons/fa';

export const Testimonial = ({ darkMode }) => {
  return (
    <section id="testimonials" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center mb-4" aria-label="Rating: 5 stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} size={20} className="text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-lg mb-6 italic">
              "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was incredibly smooth,
              and we received payment much faster than expected."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                <img src="/api/placeholder/100/100" alt="Sarah Johnson, CTO of TechCorp Inc." className="rounded-full" />
              </div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-600 dark:text-gray-300">CTO, TechCorp Inc.</p>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center mb-4" aria-label="Rating: 5 stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} size={20} className="text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-lg mb-6 italic">
              "As a growing startup, optimizing our software costs was crucial. SoftSell not only helped us sell unused
              licenses but also connected us with discounted options for our needs."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                <img src="/api/placeholder/100/100" alt="Michael Chen, Operations Director of Nexus Solutions" className="rounded-full" />
              </div>
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-gray-600 dark:text-gray-300">Operations Director, Nexus Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
