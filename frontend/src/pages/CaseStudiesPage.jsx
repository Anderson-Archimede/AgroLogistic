import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { caseStudies, caseStudyCategories } from '../data/caseStudies';

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <Link
      to={`/case-studies/${caseStudy.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {caseStudy.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-xs font-medium rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
            {caseStudy.name}
          </h3>
          <img 
            src={caseStudy.logo} 
            alt="" 
            className="h-6 w-auto ml-auto"
            aria-hidden="true"
          />
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {caseStudy.tagline}
        </p>
        
        {/* Results preview */}
        <div className="flex gap-4 mb-4">
          {caseStudy.results.metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-pink-600">{metric.value}</div>
              <div className="text-xs text-gray-500 line-clamp-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Services tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.services.slice(0, 2).map((service, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {service}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 text-pink-600 font-medium group-hover:gap-3 transition-all duration-300">
          View case study
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
};

const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === 'all') return caseStudies;
    return caseStudies.filter(cs => cs.category === activeCategory);
  }, [activeCategory]);

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
                <span className="text-gray-900 font-medium">Case Studies</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900 mb-6">
              Our work speaks for itself
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore how we've helped businesses across industries achieve their digital goals 
              with custom software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-gray-500 flex-shrink-0">
              <Filter className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {caseStudyCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50" aria-labelledby="casestudies-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="casestudies-heading" className="sr-only">Case Studies</h2>
          
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No case studies found for this category.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="mt-4 text-pink-600 font-medium hover:underline"
              >
                View all case studies
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map(caseStudy => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6">
            Ready to be our next success story?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss how we can help transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg"
          >
            Start your project
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
