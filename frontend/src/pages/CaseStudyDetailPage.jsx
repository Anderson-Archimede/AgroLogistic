import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowRight, ArrowLeft, Clock, Users, Building, MapPin, Quote, 
  ExternalLink, Play, ChevronLeft, ChevronRight, Check, X
} from 'lucide-react';
import { caseStudies, getCaseStudyBySlug, getRelatedCaseStudies } from '../data/caseStudies';

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

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

  const relatedCaseStudies = getRelatedCaseStudies(caseStudy.id, 3);
  const isExtended = caseStudy.isExtended;

  const nextImage = () => {
    if (caseStudy.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % caseStudy.gallery.length);
    }
  };

  const prevImage = () => {
    if (caseStudy.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + caseStudy.gallery.length) % caseStudy.gallery.length);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-pink-600 transition-colors">Home</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/case-studies" className="text-gray-500 hover:text-pink-600 transition-colors">Case Studies</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span className="text-gray-900 font-medium">{caseStudy.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {/* Logo */}
              <img 
                src={caseStudy.logo} 
                alt={`${caseStudy.name} logo`}
                className="h-12 w-auto mb-6"
              />
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900 mb-6">
                {caseStudy.tagline}
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {caseStudy.subtitle || caseStudy.tagline}
              </p>

              {/* Service Types */}
              {caseStudy.serviceTypes && (
                <div className="flex flex-wrap gap-4 mb-8">
                  {caseStudy.serviceTypes.map((service, index) => (
                    <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                      <img src={service.icon} alt="" className="w-5 h-5" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">{service.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* External Website Link */}
              {caseStudy.externalWebsite && (
                <a
                  href={caseStudy.externalWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                >
                  Visit Website
                  <ExternalLink className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.name}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - First Image */}
      {caseStudy.gallery && caseStudy.gallery.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={caseStudy.gallery[0]}
              alt="Website design"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Client Description */}
      {caseStudy.client.description && (
        <section className="py-16 bg-white" aria-labelledby="client-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 id="client-heading" className="text-3xl font-serif italic text-gray-900 mb-6">
                  Client description
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {caseStudy.client.description}
                </p>
              </div>
              
              {/* Technologies */}
              {caseStudy.technologyLogos && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    The technologies we used
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {caseStudy.technologyLogos.map((tech, index) => (
                      <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <img src={tech.logo} alt={tech.name} className="h-12 w-auto mb-2" />
                        <span className="text-sm text-gray-600">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Image 2 */}
      {caseStudy.gallery && caseStudy.gallery[1] && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={caseStudy.gallery[1]}
              alt="Website design"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Project Goal */}
      {caseStudy.projectGoal && (
        <section className="py-16 bg-white" aria-labelledby="goal-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="goal-heading" className="text-3xl font-serif italic text-gray-900 mb-6">
              {caseStudy.projectGoal.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-4xl">
              {caseStudy.projectGoal.description}
            </p>
            {caseStudy.projectGoal.points && (
              <ul className="grid md:grid-cols-2 gap-4">
                {caseStudy.projectGoal.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Gallery Image 3 */}
      {caseStudy.gallery && caseStudy.gallery[2] && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={caseStudy.gallery[2]}
              alt="Website design"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Challenge Section */}
      <section className="py-16 bg-white" aria-labelledby="challenge-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="challenge-heading" className="text-3xl font-serif italic text-gray-900 mb-6">
            {caseStudy.challenge.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-4xl">
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
      </section>

      {/* Gallery Image 4 */}
      {caseStudy.gallery && caseStudy.gallery[3] && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={caseStudy.gallery[3]}
              alt="Website design"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Solution Section */}
      <section className="py-16 bg-white" aria-labelledby="solution-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="solution-heading" className="text-3xl font-serif italic text-gray-900 mb-6">
            {caseStudy.solution.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-4xl">
            {caseStudy.solution.description}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudy.solution.features.map((feature, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors">
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Functionalities */}
      {caseStudy.platformFunctionalities && (
        <section className="py-16 bg-gray-50" aria-labelledby="functionalities-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="functionalities-heading" className="text-3xl font-serif italic text-gray-900 mb-8">
              Platform functionalities
            </h2>
            <p className="text-gray-600 text-lg mb-6">The main possibilities include:</p>
            <ul className="space-y-4">
              {caseStudy.platformFunctionalities.map((func, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{func}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Gallery Images 5-6 */}
      {caseStudy.gallery && caseStudy.gallery[4] && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src={caseStudy.gallery[4]}
                alt="Website design"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              {caseStudy.gallery[5] && (
                <img
                  src={caseStudy.gallery[5]}
                  alt="Website design"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Branding Section */}
      {caseStudy.branding && (
        <section className="py-16 bg-gray-50" aria-labelledby="branding-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="branding-heading" className="text-3xl font-serif italic text-gray-900 mb-6">
              {caseStudy.branding.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              {caseStudy.branding.description}
              {caseStudy.externalWebsite && (
                <>
                  {' '}The{' '}
                  <a 
                    href={caseStudy.externalWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline"
                  >
                    {new URL(caseStudy.externalWebsite).hostname}
                  </a>
                  {' '}website showcases this approach.
                </>
              )}
            </p>
          </div>
        </section>
      )}

      {/* Gallery Image 7-8 */}
      {caseStudy.gallery && caseStudy.gallery[6] && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={caseStudy.gallery[6]}
              alt="Website design"
              className="w-full h-auto rounded-2xl shadow-lg mb-8"
            />
            {caseStudy.gallery[7] && (
              <img
                src={caseStudy.gallery[7]}
                alt="Website design"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif italic text-white mb-4">
            Let's talk
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Create your project with us.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            Book a meeting
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Project Team */}
      {caseStudy.projectTeam && (
        <section className="py-16 bg-white" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="team-heading" className="text-3xl font-serif italic text-gray-900 mb-6">
                  Project team
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  The project team consisted of {caseStudy.projectTeam.size} people:
                </p>
                <ul className="space-y-2">
                  {caseStudy.projectTeam.members.map((member, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-pink-600 rounded-full" aria-hidden="true" />
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-9xl font-bold text-pink-100">{caseStudy.projectTeam.size}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Before/After Outcomes */}
      {caseStudy.outcomes && (
        <section className="py-16 bg-gray-50" aria-labelledby="outcomes-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="outcomes-heading" className="text-3xl font-serif italic text-gray-900 mb-12 text-center">
              Project outcomes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center gap-2">
                  <X className="w-6 h-6" aria-hidden="true" />
                  BEFORE
                </h3>
                <ul className="space-y-4">
                  {caseStudy.outcomes.before.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-2" aria-hidden="true" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* After */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6" aria-hidden="true" />
                  AFTER
                </h3>
                <ul className="space-y-4">
                  {caseStudy.outcomes.after.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2" aria-hidden="true" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What the company gained */}
      {caseStudy.results.description && (
        <section className="py-16 bg-white" aria-labelledby="gains-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="gains-heading" className="text-3xl font-serif italic text-gray-900 mb-6">
              {caseStudy.results.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              {caseStudy.results.description}
            </p>
          </div>
        </section>
      )}

      {/* Results Metrics */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
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

      {/* Testimonial */}
      {caseStudy.results.testimonial && caseStudy.results.testimonial.quote && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif italic text-gray-900 mb-8 text-center">
              Client testimonial
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <Quote className="w-12 h-12 text-pink-200 mb-6" aria-hidden="true" />
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{caseStudy.results.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                {caseStudy.results.testimonial.avatar && (
                  <img
                    src={caseStudy.results.testimonial.avatar}
                    alt={caseStudy.results.testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold text-gray-900">
                    {caseStudy.results.testimonial.author}
                    {caseStudy.results.testimonial.role && `, ${caseStudy.results.testimonial.role}`}
                  </div>
                  {caseStudy.results.testimonial.companyLogo ? (
                    <img 
                      src={caseStudy.results.testimonial.companyLogo} 
                      alt={caseStudy.results.testimonial.company}
                      className="h-6 mt-2"
                    />
                  ) : (
                    <div className="text-gray-500">{caseStudy.results.testimonial.company}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* YouTube Video */}
      {caseStudy.youtubeVideo && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              {showVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${caseStudy.youtubeVideo}?autoplay=1`}
                  title="Case study video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setShowVideo(true)}
                  className="relative w-full h-full group"
                  aria-label="Play video"
                >
                  <img
                    src={`https://img.youtube.com/vi/${caseStudy.youtubeVideo}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" aria-hidden="true" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Used (simple) */}
      {!caseStudy.technologyLogos && caseStudy.solution.technologies && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
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
        </section>
      )}

      {/* Services Provided */}
      <section className="py-12 bg-white border-t border-gray-100">
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
            <h2 id="related-heading" className="text-3xl font-serif italic text-gray-900 mb-4">
              See also
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.id}
                  to={`/case-studies/${cs.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-6 border-b border-gray-100">
                    <img src={cs.logo} alt="" className="h-8 w-auto mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                      {cs.tagline}
                    </h3>
                    <p className="text-gray-600 mt-2 line-clamp-2">{cs.subtitle || cs.tagline}</p>
                  </div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cs.thumbnail}
                      alt={cs.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex items-center gap-2 text-pink-600 font-medium group-hover:gap-3 transition-all">
                      More
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif italic text-gray-900 mb-6">
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
