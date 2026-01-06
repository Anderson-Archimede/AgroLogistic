import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/mock';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-12 text-center">
          What our clients say about us
        </h2>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className={`bg-white rounded-3xl p-8 md:p-12 shadow-lg transition-all duration-500 ${
              isAnimating ? 'opacity-50 scale-98' : 'opacity-100 scale-100'
            }`}
          >
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-pink-200 mb-6" />

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
              {currentTestimonial.text}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-gray-900 font-semibold text-lg">
                  {currentTestimonial.name},
                </h4>
                <p className="text-gray-500">{currentTestimonial.role}</p>
              </div>
              <img
                src={currentTestimonial.logo}
                alt={currentTestimonial.company}
                className="h-10 w-auto ml-auto"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-50 hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-pink-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-50 hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-pink-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-pink-600 w-8'
                  : 'bg-gray-300 hover:bg-pink-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
