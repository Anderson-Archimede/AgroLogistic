import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services, servicesCategories, getServicesByCategory } from '../data/services';
import ServiceCategoryCard from '../components/services/ServiceCategoryCard';
import ServiceCard from '../components/services/ServiceCard';

const ServicesPage = () => {
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
                <span className="text-gray-900 font-medium">Services</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900 mb-6">
              Services that accelerate your digital growth
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From discovery to deployment, we provide end-to-end services to help you build, 
              launch, and scale your digital products.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get started
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="categories-heading" className="text-3xl font-serif italic text-gray-900 mb-12">
            What we do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesCategories.map(category => (
              <ServiceCategoryCard
                key={category.id}
                category={category}
                servicesCount={getServicesByCategory(category.id).length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Services by Category */}
      {servicesCategories.map(category => {
        const categoryServices = getServicesByCategory(category.id);
        if (categoryServices.length === 0) return null;

        return (
          <section 
            key={category.id} 
            className="py-20 bg-gray-50 odd:bg-white"
            aria-labelledby={`${category.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-1 h-10 rounded-full"
                  style={{ backgroundColor: category.color }}
                  aria-hidden="true"
                />
                <h2 
                  id={`${category.id}-heading`}
                  className="text-3xl font-serif italic text-gray-900"
                >
                  {category.name}
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-12 max-w-2xl">
                {category.description}
              </p>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map(service => (
                  <ServiceCard 
                    key={service.id} 
                    service={service}
                    category={category}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss your project and find the best solution together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Book a free consultation
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
