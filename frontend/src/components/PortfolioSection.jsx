import React from 'react';
import { caseStudies } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
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
            <button className="bg-transparent border-2 border-white text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white hover:text-gray-900 transition-all duration-300">
              Book a meeting
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.name}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={study.logo}
                    alt={`${study.name} logo`}
                    className="h-8 w-auto"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {study.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {study.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-pink-500 hover:text-pink-600 transition-all duration-300">
            Check more case studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
