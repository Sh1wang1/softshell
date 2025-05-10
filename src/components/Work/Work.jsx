import React from 'react';

export const Work = ({ darkMode }) => {
  return (
    <section id="work" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">1. Submit Details</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Provide license info through our secure form. It only takes a minute!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">2. Get a Quote</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We'll evaluate and send you a top-dollar offer within 24 hours.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">3. Get Paid</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Accept the offer and receive secure payment within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
