import React from 'react';
import { Check } from 'lucide-react';

const ServiceProcess = ({ process, deliverables }) => {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Process Steps */}
          <div>
            <h2 id="process-heading" className="text-3xl font-serif italic text-gray-900 mb-8">
              Our Process
            </h2>
            <ol className="space-y-8" role="list">
              {process.map((step, index) => (
                <li key={step.step} className="flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <span 
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white font-bold text-lg"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                  </div>
                  {/* Step content */}
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {/* Connector line */}
                  {index < process.length - 1 && (
                    <div 
                      className="absolute left-6 top-12 w-0.5 h-full bg-pink-200" 
                      aria-hidden="true" 
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Deliverables */}
          <div>
            <h2 className="text-3xl font-serif italic text-gray-900 mb-8">
              What You Get
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4" role="list">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-600" aria-hidden="true" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
