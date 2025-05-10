import React, { useState, useEffect } from 'react';
import { FaDollarSign, FaClock, FaUsers, FaShield } from 'react-icons/fa'; 

export const Choose = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SoftSell</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With years of experience in the software resale market, we offer unparalleled value and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} hover:shadow-lg transition-shadow`}>
            <div className="text-blue-600 mb-4">
              <FaDollarSign size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2">Best Market Rates</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We offer the highest payouts in the industry, guaranteed up to 70% of retail value.
            </p>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-green-50'} hover:shadow-lg transition-shadow`}>
            <div className="text-green-600 mb-4">
              <FaClock size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Processing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              From valuation to payment in under 48 hours, the fastest turnaround in the business.
            </p>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-purple-50'} hover:shadow-lg transition-shadow`}>
            <div className="text-purple-600 mb-4">
              <FaUsers size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Network</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access to a vast network of verified buyers across all industries and regions.
            </p>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-orange-50'} hover:shadow-lg transition-shadow`}>
            <div className="text-orange-600 mb-4">
              <FaShield size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2">100% Secure</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Bank-level encryption and secure transfer protocols protect your sensitive data.
            </p>
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all"
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </section>
  );
};
