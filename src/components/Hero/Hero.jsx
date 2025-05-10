import React from "react";
import { ArrowRight, DollarSign } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight transition-transform duration-300 transform hover:scale-105">
              <span className="text-teal-500 dark:text-teal">
                Transform Unused Software into{" "}
              </span>
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
                Instant Revenue
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              Sell your unused software licenses with just a few clicks. Get the
              best value for your idle assets.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-md text-lg font-semibold transition-all flex items-center justify-center transform hover:scale-105">
                Sell My Licenses <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md text-lg font-semibold transition-all transform hover:scale-105 dark:text-white">
                Get a Quote
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 rounded-lg w-72 h-72 md:w-96 md:h-96 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="oftshell.png"
                    alt="SoftSell company logo"
                    loading="lazy"
                    className="object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out w-64 h-64"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <DollarSign className="text-green-500" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Quick Payouts
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Within 48 hours
                    </p>
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
