import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { technologies, technologyCategories, getTechnologiesByCategory } from '../data/technologies';

const TechnologiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const activeTechnologies = getTechnologiesByCategory(activeCategory);
  const activeCategoryInfo = technologyCategories.find(c => c.id === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <span className="text-white font-medium">Technologies</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-6">
              Built with the best technologies
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We use cutting-edge technologies and best practices to build robust, 
              scalable solutions that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600">200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600">50+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600">25+</div>
              <div className="text-gray-600">Expert Developers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="tech-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="tech-heading" className="text-3xl font-serif italic text-gray-900 mb-12 text-center">
            Our Technology Stack
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologyCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Description */}
          {activeCategoryInfo && (
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              {activeCategoryInfo.description}
            </p>
          )}

          {/* Technologies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTechnologies.map(tech => (
              <div
                key={tech.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                {/* Logo and Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{tech.name}</h3>
                    <span className={`text-sm font-medium ${
                      tech.expertise === 'Expert' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {tech.expertise}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Experience:</span>
                    <span className="font-medium text-gray-900 ml-1">{tech.yearsUsed} years</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Projects:</span>
                    <span className="font-medium text-gray-900 ml-1">{tech.projects}+</span>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="flex flex-wrap gap-2">
                  {tech.useCases.map((useCase, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-20 bg-white" aria-labelledby="webdev-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="webdev-heading" className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-6">
                Web Development
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We build scalable and secure web applications that support your business 
                goals and ensure seamless performance for your company.
              </p>
              <ul className="space-y-4 mb-8">
                {['Custom web applications', 'Progressive Web Apps (PWA)', 'E-commerce platforms', 'Enterprise solutions', 'API development'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-pink-600 rounded-full" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services/web-development"
                className="inline-flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all"
              >
                Learn more about web development
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl transform rotate-3" />
              <img
                src="https://webmakers.expert/assets/images/homepage/webmakers_technologies_web_development_1x.webp?20251128100709"
                alt="Web Development"
                className="relative z-10 w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Development Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="mobile-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl transform -rotate-3" />
              <img
                src="https://webmakers.expert/assets/images/homepage/webmakers_technologies_mobile_development_1x.webp?20251128100709"
                alt="Mobile Development"
                className="relative z-10 w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 id="mobile-heading" className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-6">
                Mobile Development
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We create iOS and Android apps that are intuitive, secure, and 
                tailored to your users' needs.
              </p>
              <ul className="space-y-4 mb-8">
                {['Native iOS & Android', 'Cross-platform solutions', 'React Native', 'Flutter', 'App Store optimization'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-pink-600 rounded-full" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services/mobile-development"
                className="inline-flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all"
              >
                Learn more about mobile development
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6">
            Ready to build with the best?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss how our technology expertise can help your project succeed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg"
          >
            Start a conversation
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TechnologiesPage;
