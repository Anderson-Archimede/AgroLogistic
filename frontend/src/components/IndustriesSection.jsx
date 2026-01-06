import React from 'react';
import { industries } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {industries.map((industry, index) => (
          <div
            key={industry.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-24 last:mb-0`}
          >
            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="relative z-10 w-full max-w-lg mx-auto h-auto rounded-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-6">
                {industry.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {industry.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {industry.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      linkIndex === 0
                        ? 'bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 hover:shadow-lg hover:-translate-y-0.5'
                        : 'border-2 border-gray-200 text-gray-700 hover:border-pink-500 hover:text-pink-600'
                    }`}
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
