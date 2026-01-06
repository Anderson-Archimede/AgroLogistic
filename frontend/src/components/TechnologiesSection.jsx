import React from 'react';
import { technologies } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const TechnologiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-6">
            We build technologies that power your digital transformation and growth
          </h2>
          <p className="text-gray-600 text-lg">
            At WebMakers, we create intelligent AI-driven solutions that help you make
            smarter decisions, optimize costs, and gain a lasting competitive edge.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden border border-gray-100 hover:border-pink-200 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 -mt-8 relative z-10">
                <h3 className="text-2xl font-serif italic text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all duration-300"
                >
                  {tech.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
