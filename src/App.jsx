import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/animations.css';

// Components
import IntroScreen from './components/IntroScreen';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Services from './components/Services';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Certificates from './components/Certificates';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Disable right-click and keyboard shortcuts
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
        (e.ctrlKey && e.keyCode === 85)
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      setShowBackToTop(position > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show intro screen while loading
  if (loading) {
    return <IntroScreen />;
  }

  return (
    <div className="app">
      <BackgroundEffects />
      <Navbar 
        scrolled={scrolled} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        onCertificatesClick={() => setShowCertificates(true)}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Services />
      <CTA />
      <Contact />
      <Footer onCertificatesClick={() => setShowCertificates(true)} />
      <BackToTop show={showBackToTop} onClick={scrollToTop} />
      
      {showCertificates && (
        <Certificates onClose={() => setShowCertificates(false)} />
      )}
    </div>
  );
}

export default App;