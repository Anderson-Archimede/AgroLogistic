import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css';

// Home page components
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

// Pages
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import TechnologiesPage from './pages/TechnologiesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

// Home Page Component
const HomePage = () => {
  return (
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
  );
};

// 404 Not Found Page
const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          
          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/services/category/:categorySlug" element={<ServicesPage />} />
          
          {/* Industries */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          
          {/* Case Studies */}
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          
          {/* Technologies */}
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/technologies/:slug" element={<TechnologiesPage />} />
          
          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
