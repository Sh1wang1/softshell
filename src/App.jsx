import { useState, useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Choose } from './components/Choose/Choose';
import { Work } from './components/Work/Work';
import { Hero } from './components/Hero/Hero';
import {Navbar} from './components/Navbar/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; 
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode); 
  }, [darkMode]); 

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <Work darkMode={darkMode} />
      <Choose darkMode={darkMode} setDarkMode={setDarkMode} />
      <Testimonial darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
