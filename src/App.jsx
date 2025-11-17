import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
