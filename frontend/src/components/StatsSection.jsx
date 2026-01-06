import React from 'react';
import { stats } from '../data/mock';

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
