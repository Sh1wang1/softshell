import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`fixed w-full z-10 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 h-8 w-8 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">SS</span>
          </div>
          <h1 className="text-xl font-bold">SoftSell</h1>
        </div>

        <div className="flex items-center space-x-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="hidden md:flex space-x-6">
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#why-choose-us" className="hover:text-blue-600 transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function SoftSell() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark:bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-24 max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1">Company</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>

          <div>
            <label className="block mb-1">License Type</label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select a license</option>
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
          </div>

          <div>
            <label className="block mb-1">Message (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              rows={4}
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
