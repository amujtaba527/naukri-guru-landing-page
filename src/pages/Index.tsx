
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-naukri-beige font-inter">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
