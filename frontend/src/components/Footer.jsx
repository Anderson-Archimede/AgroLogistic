import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Youtube, Instagram, ArrowRight } from 'lucide-react';
import { servicesCategories } from '../data/services';
import { industries } from '../data/industries';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-serif italic mb-2">
                Ready to start your project?
              </h2>
              <p className="text-gray-400">
                Let's discuss how we can help your business grow.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Book a meeting
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6" aria-label="WebMakers - Home">
              <svg
                width="60"
                height="32"
                viewBox="0 0 60 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 8L12 24L20 8"
                  stroke="#E91E63"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M20 8L28 24L36 8"
                  stroke="#E91E63"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M36 24L44 8L52 24"
                  stroke="#E91E63"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              We deliver custom software and AI-driven automation to optimize your
              business. Software development company in Poland - innovative IT
              solutions tailored to your needs.
            </p>
            {/* Social links */}
            <nav aria-label="Social media links">
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  aria-label="Subscribe on YouTube"
                >
                  <Youtube className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/services/category/${category.slug}`}
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-pink-500 hover:text-pink-400 transition-colors duration-200 font-medium"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Industries */}
          <nav aria-label="Industries">
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.slice(0, 5).map((industry) => (
                <li key={industry.id}>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/industries"
                  className="text-pink-500 hover:text-pink-400 transition-colors duration-200 font-medium"
                >
                  View all industries →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} WebMakers. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#privacy" className="text-gray-500 hover:text-pink-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-500 hover:text-pink-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-gray-500 hover:text-pink-500 transition-colors">
                  Cookies
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
