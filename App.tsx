import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutCombo from './components/AboutCombo';
import Benefits from './components/Benefits';
import Reports from './components/Reports';
import TargetAudience from './components/TargetAudience';
import Mentor from './components/Mentor';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <AboutCombo />
        <Benefits />
        <Reports />
        <TargetAudience />
        <Mentor />
        <HowItWorks />
        <Testimonials />
        <Offer />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default App;