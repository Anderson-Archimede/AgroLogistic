import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { servicesCategories, getServicesByCategory } from '../data/services';
import { industries } from '../data/industries';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    const closeMenus = () => {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };
    closeMenus();
  }, [location.pathname]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownType: 'services'
    },
    {
      label: 'Industries',
      href: '/industries',
      hasDropdown: true,
      dropdownType: 'industries'
    },
    {
      label: 'Case Studies',
      href: '/case-studies',
      hasDropdown: false
    },
    {
      label: 'Technologies',
      href: '/technologies',
      hasDropdown: false
    },
    {
      label: 'Blog',
      href: '/blog',
      hasDropdown: false
    },
    {
      label: 'Contact',
      href: '/contact',
      hasDropdown: false
    }
  ];

  const renderDropdown = (type) => {
    if (type === 'services') {
      return (
        <div className="absolute top-full left-0 pt-4 w-screen max-w-4xl -ml-48">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 gap-8">
            {/* Categories */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Service Categories
              </h4>
              <div className="space-y-2">
                {servicesCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/services/category/${category.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
                        {category.name}
                      </div>
                      <div className="text-sm text-gray-500 line-clamp-1">
                        {getServicesByCategory(category.id).length} services
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Featured Services */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Featured Services
              </h4>
              <div className="space-y-4">
                <Link
                  to="/services/product-discovery-workshops"
                  className="block p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors group"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
                    Product Discovery Workshops
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Transform ideas into actionable plans
                  </p>
                </Link>
                <Link
                  to="/services/ai-solutions"
                  className="block p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors group"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
                    AI Solutions
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Automate and optimize with AI
                  </p>
                </Link>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-pink-600 font-medium mt-6 hover:gap-3 transition-all"
                onClick={() => setActiveDropdown(null)}
              >
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'industries') {
      return (
        <div className="absolute top-full left-0 pt-4 w-screen max-w-2xl -ml-32">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  to={`/industries/${industry.slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${industry.color}15` }}
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: industry.color }}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
                      {industry.name}
                    </div>
                    <div className="text-xs text-gray-500 line-clamp-1">
                      {industry.shortDescription.substring(0, 30)}...
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all"
                onClick={() => setActiveDropdown(null)}
              >
                View all industries
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="WebMakers - Home">
            <svg
              width="60"
              height="32"
              viewBox="0 0 60 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform hover:scale-105"
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button 
                    className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium text-sm tracking-wide transition-colors ${
                      activeDropdown === item.label || location.pathname.startsWith(item.href)
                        ? 'text-pink-600 bg-pink-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    <span>{item.label.toUpperCase()}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm tracking-wide transition-colors ${
                      location.pathname === item.href
                        ? 'text-pink-600 bg-pink-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                )}
                
                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  renderDropdown(item.dropdownType)
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language switcher */}
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden" role="group" aria-label="Language selection">
              <button 
                className="px-3 py-1.5 text-sm font-medium bg-pink-600 text-white"
                aria-pressed="true"
              >
                EN
              </button>
              <button 
                className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                aria-pressed="false"
              >
                PL
              </button>
            </div>
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-transparent border-2 border-pink-600 text-pink-600 px-6 py-2.5 rounded-full font-medium text-sm hover:bg-pink-600 hover:text-white transition-all duration-300"
            >
              Book a meeting
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="pt-4 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                    location.pathname === item.href || location.pathname.startsWith(item.href)
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
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
                <Link
                  to="/contact"
                  className="w-full bg-pink-600 text-white px-6 py-3 rounded-full font-medium text-center"
                >
                  Book a meeting
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
