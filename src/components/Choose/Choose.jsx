import React from 'react';
import { FaDollarSign, FaClock, FaUsers, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaDollarSign size={28} />,
    title: 'Best Market Rates',
    description: 'We offer the highest payouts in the industry, guaranteed up to 70% of retail value.',
    gradient: 'from-blue-400 via-blue-500 to-blue-600',
    iconBg: 'bg-white text-blue-600',
  },
  {
    icon: <FaClock size={28} />,
    title: 'Quick Processing',
    description: 'From valuation to payment in under 48 hours, the fastest turnaround in the business.',
    gradient: 'from-green-400 via-green-500 to-green-600',
    iconBg: 'bg-white text-green-600',
  },
  {
    icon: <FaUsers size={28} />,
    title: 'Global Network',
    description: 'Access to a vast network of verified buyers across all industries and regions.',
    gradient: 'from-purple-400 via-purple-500 to-purple-600',
    iconBg: 'bg-white text-purple-600',
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: '100% Secure',
    description: 'Bank-level encryption and secure transfer protocols protect your sensitive data.',
    gradient: 'from-orange-400 via-orange-500 to-orange-600',
    iconBg: 'bg-white text-orange-600',
  },
];

export const Choose = ({ darkMode }) => {
  return (
    <section
      id="why-choose-us"
      className={`scroll-mt-15 py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-indigo-400 dark:from-teal-400 dark:to-indigo-500">
            Why Choose SoftSell
          </h2>
          <p className="text-xl font-semibold max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-teal-800 dark:from-indigo-300 dark:to-teal-400">
            With years of experience in the software resale market, we offer unparalleled value and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${item.gradient} text-white transform hover:scale-105 hover:shadow-2xl transition-all duration-300`}
            >
              <div className={`mb-4 w-14 h-14 flex items-center justify-center rounded-full shadow-md ${item.iconBg}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
