import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import { industries, getIndustryBySlug } from '../data/industries';
import { caseStudies, getCaseStudiesByIndustry } from '../data/caseStudies';

const IndustryDetailPage = () => {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Industry not found</h1>
          <Link to="/industries" className="text-pink-600 hover:underline">Back to industries</Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[industry.icon] || Icons.Building;
  const industryCaseStudies = getCaseStudiesByIndustry(industry.id);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundColor: industry.color }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-pink-600 transition-colors">Home</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/industries" className="text-gray-500 hover:text-pink-600 transition-colors">Industries</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span className="text-gray-900 font-medium">{industry.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-white mb-6"
                style={{ backgroundColor: industry.color }}
              >
                <IconComponent className="w-4 h-4" aria-hidden="true" />
                {industry.name}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">
                {industry.tagline}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {industry.fullDescription}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8">
                {industry.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold" style={{ color: industry.color }}>
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Discuss your project
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl transform rotate-3 opacity-20"
                style={{ backgroundColor: industry.color }}
              />
              <img
                src={industry.heroImage}
                alt={industry.name}
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white" aria-labelledby="solutions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="solutions-heading" className="text-3xl font-serif italic text-gray-900 mb-4">
            Our {industry.name} Solutions
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Specialized solutions designed to address the unique challenges of the {industry.name.toLowerCase()} industry.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.solutions.map((solution) => (
              <div 
                key={solution.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50" aria-labelledby="tech-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="tech-heading" className="text-3xl font-serif italic text-gray-900 mb-8 text-center">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industry.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {industryCaseStudies.length > 0 && (
        <section className="py-20 bg-white" aria-labelledby="casestudies-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 id="casestudies-heading" className="text-3xl font-serif italic text-gray-900">
                {industry.name} Case Studies
              </h2>
              <Link
                to="/case-studies"
                className="hidden md:flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all"
              >
                View all case studies
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryCaseStudies.slice(0, 3).map((cs) => (
                <Link
                  key={cs.id}
                  to={`/case-studies/${cs.slug}`}
                  className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={cs.thumbnail}
                      alt={cs.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                        {cs.name}
                      </h3>
                      <img src={cs.logo} alt="" className="h-6 w-auto ml-auto" />
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{cs.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-pink-600 font-medium group-hover:gap-3 transition-all">
                      View case study
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6">
            Ready to transform your {industry.name.toLowerCase()} business?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss how our expertise can help you achieve your goals.
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

export default IndustryDetailPage;
