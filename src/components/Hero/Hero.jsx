import React from 'react';
import { ArrowRight, DollarSign } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Transform Unused Software into <span className="text-blue-600">Instant Revenue</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                Sell your unused software licenses with just a few clicks. Get the best value for your idle assets.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors flex items-center justify-center">
                  Sell My Licenses <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-md text-lg font-medium transition-colors">
                  Get a Quote
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="relative">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-lg w-72 h-72 md:w-96 md:h-96 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/api/placeholder/500/500" alt="Software license management" className="object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-green-500" size={24} />
                    <div>
                      <p className="font-bold">Quick Payouts</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

