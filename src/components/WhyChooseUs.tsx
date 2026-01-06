import React from 'react';
import SectionWrapper from './SectionWrapper';

const features = [
  {
    title: 'Built for Scale',
    description: 'Applications that grow with your business',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Performance First',
    description: 'Optimized for speed and reliability',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Startup-Friendly',
    description: 'Fast delivery with clear communication',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Secure & Maintainable',
    description: 'Clean architecture and best practices',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper id="why-choose-us" className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We deliver more than just code. We deliver business value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-gray-200 dark:hover:border-slate-700"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
