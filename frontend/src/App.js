import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientLogos from './components/ClientLogos';
import IndustriesSection from './components/IndustriesSection';
import PortfolioSection from './components/PortfolioSection';
import TechnologiesSection from './components/TechnologiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AISolutionsSection from './components/AISolutionsSection';
import StatsSection from './components/StatsSection';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <ClientLogos />
        <IndustriesSection />
        <PortfolioSection />
        <TechnologiesSection />
        <TestimonialsSection />
        <AISolutionsSection />
        <StatsSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
