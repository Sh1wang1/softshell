import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';

export const Testimonial = ({ darkMode }) => {
  const testimonials = [
    {
      quote: `"SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was incredibly smooth, and we received payment much faster than expected."`,
      name: 'Sarah Johnson',
      title: 'CTO, TechCorp Inc.',
    },
    {
      quote: `"As a growing startup, optimizing our software costs was crucial. SoftSell not only helped us sell unused licenses but also connected us with discounted options for our needs."`,
      name: 'Michael Chen',
      title: 'Operations Director, Nexus Solutions',
    },
  ];

  return (
    <section
      id="testimonials"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-800">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it—see how SoftSell has made an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map(({ quote, name, title }, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-2xl p-8 shadow-xl transition-all duration-300 border ${
                darkMode
                  ? 'bg-gray-800 border-gray-700 hover:border-teal-400 hover:shadow-teal-500/30'
                  : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-blue-500/30'
              } hover:shadow-2xl transform hover:scale-[1.02]`}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">{quote}</p>
              <div className="flex items-center">
                <FaUserCircle
                  size={48}
                  className={`mr-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-500'
                  } group-hover:text-blue-500 dark:group-hover:text-teal-400 transition-colors`}
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
