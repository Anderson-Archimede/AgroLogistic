import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-serif italic text-gray-900 mb-6">
              Your software company that accelerates delivery and drives sales
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              For over 10 years, we&apos;ve been helping e-commerce, EdTech, and AI companies
              build scalable software solutions. We combine fast implementation with high
              code quality - empowering you to grow your business and gain a competitive
              edge.
            </p>
            <button className="bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Book a meeting
            </button>
          </div>

          {/* Right content - Rocket illustration */}
          <div className="relative flex justify-center lg:justify-end min-h-[500px]">
            {/* Pink decorative elements */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              {/* Large pink blob */}
              <div className="absolute right-10 bottom-0 w-72 h-72 bg-[#E91E63] rounded-full opacity-90" style={{filter: 'blur(0px)'}}></div>
              <div className="absolute right-32 bottom-16 w-48 h-48 bg-[#E91E63] rounded-full opacity-90"></div>
              <div className="absolute right-0 bottom-20 w-40 h-40 bg-[#E91E63] rounded-full opacity-90"></div>
              
              {/* 4-pointed stars */}
              <svg className="absolute right-[-20px] top-10 w-16 h-16 text-[#E91E63]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
              </svg>
              <svg className="absolute right-[-60px] top-40 w-12 h-12 text-[#E91E63]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
              </svg>
              <svg className="absolute right-[-30px] top-72 w-8 h-8 text-[#E91E63]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
              </svg>
            </div>

            {/* Rocket Image */}
            <div className="relative z-10">
              <img
                src="https://webmakers.expert/assets/images/reusable/banner/homepage/webmakers_homepage_lg_1x.webp?20251128100709"
                alt="Space shuttle rocket launching"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
