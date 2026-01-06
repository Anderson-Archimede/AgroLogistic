import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pink-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <div id="main-content" className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
