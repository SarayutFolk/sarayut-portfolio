import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    // Honour the OS "reduce motion" setting: framer-motion drops transform/layout
    // animations and keeps simple opacity fades.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-primary text-text">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}

export default App;
