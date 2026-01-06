import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { industries } from '../data/industries';

const IndustryCard = ({ industry }) => {
  const IconComponent = Icons[industry.icon] || Icons.Building;

  return (
    <Link
      to={`/industries/${industry.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={industry.heroImage}
          alt={industry.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: industry.color }}
          >
            <IconComponent className="w-4 h-4" aria-hidden="true" />
            {industry.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif italic text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
          {industry.tagline}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {industry.shortDescription}
        </p>

        {/* Stats preview */}
        <div className="flex gap-4 mb-4">
          {industry.stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-pink-600">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 text-pink-600 font-medium group-hover:gap-3 transition-all duration-300">
          Explore solutions
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
};

const IndustriesPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-pink-600 transition-colors">Home</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span className="text-gray-900 font-medium">Industries</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900 mb-6">
              Industry expertise that delivers results
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We combine deep industry knowledge with technical excellence to deliver solutions 
              that solve real business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="industries-heading" className="sr-only">Our Industries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map(industry => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6">
            Don't see your industry?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We work with businesses across many sectors. Let's discuss how we can help you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg"
          >
            Contact us
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default IndustriesPage;
