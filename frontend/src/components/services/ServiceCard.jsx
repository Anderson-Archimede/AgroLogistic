import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, showCategory = false, category }) => {
  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {showCategory && category && (
          <span 
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: category.color }}
          >
            {category.name}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {service.shortDescription}
        </p>
        
        {/* Duration badge */}
        {service.duration && (
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              Duration: {service.duration}
            </span>
          </div>
        )}

        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-pink-600 font-medium hover:gap-3 transition-all duration-300"
          aria-label={`Learn more about ${service.name}`}
        >
          {service.cta || 'Learn more'}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
