import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import TechStack from './sections/TechStack';
import Industries from './sections/Industries';
import Partnership from './sections/Partnership';
import CEOMessage from './sections/CEOMessage';
import Clients from './sections/Clients';
import CTA from './sections/CTA';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <TechStack />
        <Industries />
        <Partnership />
        <CEOMessage />
        <Clients />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;