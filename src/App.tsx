import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  useEffect(() => {
    // Keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Press 'T' to toggle theme
      if (e.key === 't' || e.key === 'T') {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
          themeToggle.click();
        }
      }

      // Press ESC to close mobile menu
      if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          if (hamburger) {
            hamburger.classList.remove('active');
          }
        }
      }
    };

    // Konami Code
    let konamiCode: string[] = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    const handleKonami = (e: KeyboardEvent) => {
      konamiCode.push(e.key);
      konamiCode = konamiCode.slice(-10);

      if (konamiCode.join('') === konamiPattern.join('')) {
        document.body.style.animation = 'rainbow 2s ease infinite';
        setTimeout(() => {
          document.body.style.animation = '';
        }, 5000);
        console.log('🎉 Easter egg activated!');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleKonami);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleKonami);
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
