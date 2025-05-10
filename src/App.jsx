import { useState } from 'react'
import './App.css';
import {Footer} from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';
import {Testimonial} from './components/Testimonial/Testimonial';
import {Choose} from './components/Choose/Choose';
import {Work} from './components/Work/Work';
import {Hero} from './components/Hero/Hero';
import SoftSell from './components/Navbar/Softshell';

function App() {
  return (
    <>
      <SoftSell />
      <Hero />
      <Work />
      <Choose />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}


export default App
