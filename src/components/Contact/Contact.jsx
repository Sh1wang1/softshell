import React, { useState } from 'react';

export const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();


  setErrors({
    name: '',
    email: '',
    company: '',
    licenseType: '',
  });

  let formIsValid = true;

  if (!formData.name) {
    setErrors((prev) => ({ ...prev, name: 'Name is required' }));
    formIsValid = false;
  }


  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    setErrors((prev) => ({
      ...prev,
      email: 'Please enter a valid email address',
    }));
    formIsValid = false;
  }


  if (!formData.company) {
    setErrors((prev) => ({ ...prev, company: 'Company is required' }));
    formIsValid = false;
  }


  if (!formData.licenseType) {
    setErrors((prev) => ({ ...prev, licenseType: 'Please select a license type' }));
    formIsValid = false;
  }


  if (formIsValid) {
    console.log('Form Submitted', formData);

    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: '',
    });
  }
};


  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
<h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
  Ready to Get Started?
</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className={`p-8 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-300 
            ${darkMode 
              ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white' 
              : 'bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Full Name"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  darkMode={darkMode}
                />
                <InputField
                  label="Email Address"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  darkMode={darkMode}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Company Name"
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  error={errors.company}
                  darkMode={darkMode}
                />
                <div>
                  <label htmlFor="licenseType" className="block mb-2 font-medium">
                    License Type
                  </label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md transition 
                      ${darkMode 
                        ? 'bg-gray-800 text-white border-gray-600 placeholder-gray-400' 
                        : 'bg-white text-gray-900 border-gray-300'} 
                      focus:ring-2 focus:ring-blue-500 focus:outline-none`}
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

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-md transition 
                    ${darkMode 
                      ? 'bg-gray-800 text-white border-gray-600 placeholder-gray-400' 
                      : 'bg-white text-gray-900 border-gray-300'} 
                    focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                  placeholder="Tell us about your software licenses..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-lg font-semibold rounded-lg transition-all 
                  bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, id, type, value, onChange, error, darkMode }) => (
  <div>
    <label htmlFor={id} className="block mb-2 font-medium">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border rounded-md transition 
        ${darkMode 
          ? 'bg-gray-800 text-white border-gray-600 placeholder-gray-400' 
          : 'bg-white text-gray-900 border-gray-300'} 
        focus:ring-2 focus:ring-blue-500 focus:outline-none`}
      placeholder={label}
    />
    {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
  </div>
);
