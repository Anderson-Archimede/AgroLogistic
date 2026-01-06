import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const ServiceCategoryCard = ({ category, servicesCount }) => {
  // Dynamically get the icon component
  const IconComponent = Icons[category.icon] || Icons.Briefcase;

  return (
    <Link
      to={`/services/category/${category.slug}`}
      className="group block bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Icon */}
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${category.color}15` }}
      >
        <IconComponent 
          className="w-8 h-8" 
          style={{ color: category.color }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
        {category.name}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {category.description}
      </p>

      {/* Services count */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {servicesCount} services
        </span>
        <span 
          className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:translate-x-1"
          style={{ backgroundColor: `${category.color}15` }}
        >
          <Icons.ArrowRight 
            className="w-5 h-5" 
            style={{ color: category.color }}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCategoryCard;
