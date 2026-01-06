import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, Users, Building, MapPin, Quote } from 'lucide-react';
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudies';

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Case study not found</h1>
          <Link to="/case-studies" className="text-pink-600 hover:underline">Back to case studies</Link>
        </div>
      </div>
    );
  }

  const relatedCaseStudies = caseStudies
    .filter(cs => cs.id !== caseStudy.id && cs.industryId === caseStudy.industryId)
    .slice(0, 2);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={caseStudy.heroImage}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <span className="text-white font-medium">{caseStudy.name}</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={caseStudy.logo} 
                alt={`${caseStudy.name} logo`}
                className="h-10 w-auto"
              />
              <h1 className="text-4xl md:text-5xl font-serif italic text-white">
                {caseStudy.name}
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              {caseStudy.tagline}
            </p>

            {/* Client info */}
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5" aria-hidden="true" />
                <span>{caseStudy.client.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>{caseStudy.client.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" aria-hidden="true" />
                <span>{caseStudy.client.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" aria-hidden="true" />
                <span>{caseStudy.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.results.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="challenge-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="challenge-heading" className="text-3xl font-serif italic text-gray-900 mb-6">
                {caseStudy.challenge.title}
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {caseStudy.challenge.description}
              </p>
              <ul className="space-y-4">
                {caseStudy.challenge.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-3xl transform rotate-3" />
              <img
                src={caseStudy.thumbnail}
                alt=""
                className="relative z-10 w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white" aria-labelledby="solution-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 id="solution-heading" className="text-3xl font-serif italic text-gray-900 mb-6">
              {caseStudy.solution.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudy.solution.description}
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {caseStudy.solution.features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors duration-300"
              >
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {caseStudy.solution.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.results.testimonial && caseStudy.results.testimonial.quote && (
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-12 h-12 text-pink-500 mx-auto mb-8" aria-hidden="true" />
            <blockquote className="text-2xl md:text-3xl text-white font-serif italic mb-8 leading-relaxed">
              "{caseStudy.results.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              {caseStudy.results.testimonial.avatar && (
                <img
                  src={caseStudy.results.testimonial.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div className="text-left">
                <div className="text-white font-medium">{caseStudy.results.testimonial.author}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Used */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Services Provided</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudy.services.map((service, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-gray-50" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-3xl font-serif italic text-gray-900 mb-12 text-center">
              Related Case Studies
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.id}
                  to={`/case-studies/${cs.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                      {cs.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{cs.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-pink-600 font-medium group-hover:gap-3 transition-all">
                      Read case study
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-6">
            Want similar results for your business?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Start your project
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Back to all case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyDetailPage;
