import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesList = ({ services, categories, title, description }) => {
  // Group services by category
  const groupedServices = categories.map(cat => ({
    category: cat,
    services: services.filter(s => s.categoryId === cat.id)
  })).filter(group => group.services.length > 0);

  return (
    <section className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {title && (
          <div className="max-w-3xl mb-16">
            <h2 id="services-heading" className="text-4xl font-serif italic text-gray-900 mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-gray-600 text-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Services by category */}
        <div className="space-y-20">
          {groupedServices.map(({ category, services }) => (
            <div key={category.id}>
              {/* Category header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-1 h-8 rounded-full"
                    style={{ backgroundColor: category.color }}
                    aria-hidden="true"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                </div>
                <Link
                  to={`/services/category/${category.slug}`}
                  className="hidden md:flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all"
                >
                  View all
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Services grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(service => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    category={category}
                  />
                ))}
              </div>

              {/* Mobile view all link */}
              <div className="mt-6 md:hidden text-center">
                <Link
                  to={`/services/category/${category.slug}`}
                  className="inline-flex items-center gap-2 text-pink-600 font-medium"
                >
                  View all {category.name} services
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
