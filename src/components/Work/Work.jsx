import React from 'react';
import { FileText, DollarSign, CheckCircle } from 'lucide-react';

export const Work = ({ darkMode }) => {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 py-20 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-teal-700 dark:text-white tracking-tight animate__animated animate__fadeIn">
          How It Works
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-transparent hover:border-teal-400 dark:hover:border-teal-400 transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-teal-100 dark:bg-teal-800 text-teal-600 dark:text-teal-300 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
              <FileText size={26} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-all duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-300">
              1. Submit Details
            </h3>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-all duration-300">
              Provide your license information through our secure form. It only takes a minute!
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-transparent hover:border-teal-400 dark:hover:border-teal-400 transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-teal-100 dark:bg-teal-800 text-teal-600 dark:text-teal-300 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
              <DollarSign size={26} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-all duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-300">
              2. Get a Quote
            </h3>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-all duration-300">
              We'll evaluate it and send you a high-value quote within 24 hours.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-transparent hover:border-teal-400 dark:hover:border-teal-400 transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-teal-100 dark:bg-teal-800 text-teal-600 dark:text-teal-300 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
              <CheckCircle size={26} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-all duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-300">
              3. Get Paid
            </h3>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-all duration-300">
              Accept our offer and get paid securely within 48 hours. Simple and fast!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
