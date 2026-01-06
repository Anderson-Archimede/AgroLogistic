import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navLinks } from '../data/mock';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <svg
              width="60"
              height="32"
              viewBox="0 0 60 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform hover:scale-105"
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
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors py-2">
                  <span>{link.label.toUpperCase()}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </button>
                {link.hasDropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-3 px-4 min-w-[200px]">
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded transition-colors">
                        Option 1
                      </a>
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded transition-colors">
                        Option 2
                      </a>
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded transition-colors">
                        Option 3
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language switcher */}
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <button className="px-3 py-1.5 text-sm font-medium bg-pink-600 text-white">
                EN
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                PL
              </button>
            </div>
            {/* CTA Button */}
            <button className="bg-transparent border-2 border-pink-600 text-pink-600 px-6 py-2.5 rounded-full font-medium text-sm hover:bg-pink-600 hover:text-white transition-all duration-300">
              Book a meeting
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="pt-4 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <div className="flex items-center justify-center border border-gray-300 rounded-full overflow-hidden w-fit mx-auto">
                  <button className="px-4 py-2 text-sm font-medium bg-pink-600 text-white">
                    EN
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-600">
                    PL
                  </button>
                </div>
                <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-full font-medium">
                  Book a meeting
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
