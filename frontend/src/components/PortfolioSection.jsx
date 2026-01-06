import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies, getFeaturedCaseStudies } from '../data/caseStudies';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  // Get featured case studies for homepage
  const featuredStudies = getFeaturedCaseStudies().slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-gray-600 text-lg">
              See how we've helped our clients grow and scale.
            </p>
          </div>
          
          {/* CTA Card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 w-full lg:w-80 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="white" />
              </svg>
            </div>
            <img 
              src="https://webmakers.expert/assets/images/reusable/case_studies/space_station.svg?20251128100709"
              alt="Space station"
              className="w-24 h-24 mb-4"
            />
            <p className="text-white text-lg mb-4">Let's talk about your project</p>
            <Link 
              to="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Book a meeting
            </Link>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.thumbnail}
                  alt={study.name}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {study.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {study.name}
                  </h3>
                  <img
                    src={study.logo}
                    alt={`${study.name} logo`}
                    className="h-6 w-auto ml-auto"
                  />
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {study.tagline}
                </p>
                <span className="inline-flex items-center gap-2 text-pink-600 font-medium group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Link 
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
          >
            Check more case studies
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
