import React from 'react';

export const Contact = () => {
    return (
        <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block mb-2 font-medium">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 ${
                        errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="Acme Inc."
                    />
                    {errors.company && (
                      <p className="mt-1 text-red-500 text-sm">{errors.company}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="licenseType" className="block mb-2 font-medium">
                      License Type
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 ${
                        errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <option value="">Select License Type</option>
                      <option value="Microsoft">Microsoft</option>
                      <option value="Adobe">Adobe</option>
                      <option value="Oracle">Oracle</option>
                      <option value="SAP">SAP</option>
                      <option value="Autodesk">Autodesk</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.licenseType && (
                      <p className="mt-1 text-red-500 text-sm">{errors.licenseType}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700"
                    placeholder="Tell us about your software licenses..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors w-full"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
};

