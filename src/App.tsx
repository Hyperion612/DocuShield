import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import AdvancedVerification from './components/AdvancedVerification';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Comparison from './components/Comparison';
import IntegrationCTA from './components/IntegrationCTA';
import Testimonials from './components/Testimonials';
import Solutions from './components/Solutions';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0c29]">
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <AdvancedVerification />
      <HowItWorks />
      <WhyUs />
      <Comparison />
      <IntegrationCTA />
      <Testimonials />
      <Solutions />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
