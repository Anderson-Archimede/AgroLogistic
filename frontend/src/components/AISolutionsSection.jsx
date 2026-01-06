import React from 'react';
import { aiSolutions } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const AISolutionsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-6">
            AI solutions
          </h2>
          <p className="text-gray-600 text-lg">
            At WebMakers, we create intelligent AI-driven solutions that help you make
            smarter decisions, optimize costs, and gain a lasting competitive edge.
          </p>
        </div>

        {/* AI Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {aiSolutions.map((solution) => (
            <div
              key={solution.id}
              className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6">
                <img
                  src={solution.icon}
                  alt={solution.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {solution.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#d4e157] font-medium hover:gap-3 transition-all duration-300"
              >
                {solution.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
