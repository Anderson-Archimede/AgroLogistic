import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight, Check } from 'lucide-react';
import { services, servicesCategories, getServiceBySlug } from '../../data/services';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceCard from '../../components/services/ServiceCard';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Service not found</h1>
          <Link to="/services" className="text-pink-600 hover:underline">Back to services</Link>
        </div>
      </div>
    );
  }

  const category = servicesCategories.find(c => c.id === service.categoryId);
  const relatedServices = services
    .filter(s => s.categoryId === service.categoryId && s.id !== service.id)
    .slice(0, 3);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-pink-600 transition-colors">Home</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/services" className="text-gray-500 hover:text-pink-600 transition-colors">Services</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span className="text-gray-900 font-medium">{service.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {category && (
                <span 
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium text-white mb-6"
                  style={{ backgroundColor: category.color }}
                >
                  {category.name}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">
                {service.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              
              {/* Meta info */}
              <div className="flex flex-wrap gap-4 mb-8">
                {service.duration && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                    <span>Duration: {service.duration}</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {service.cta}
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
                >
                  Ask a question
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl transform rotate-3" />
              <img
                src={service.image}
                alt={service.name}
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="benefits-heading" className="text-3xl font-serif italic text-gray-900 mb-12 text-center">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors duration-300"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
                </span>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ServiceProcess process={service.process} deliverables={service.deliverables} />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss how {service.name} can help your business grow.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg"
          >
            Book a meeting
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-gray-50" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 id="related-heading" className="text-3xl font-serif italic text-gray-900">
                Related Services
              </h2>
              <Link
                to="/services"
                className="hidden md:flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all"
              >
                View all services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map(relatedService => (
                <ServiceCard 
                  key={relatedService.id} 
                  service={relatedService}
                  category={category}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ServiceDetailPage;
