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
              For over 10 years, we've been helping e-commerce, EdTech, and AI companies
              build scalable software solutions. We combine fast implementation with high
              code quality - empowering you to grow your business and gain a competitive
              edge.
            </p>
            <button className="bg-[#d4e157] hover:bg-[#c6d246] text-gray-900 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Book a meeting
            </button>
          </div>

          {/* Right content - Rocket illustration */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Pink cloud shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 500 600"
                className="w-full h-full max-w-lg"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main pink cloud */}
                <ellipse cx="250" cy="400" rx="180" ry="150" fill="#E91E63" opacity="0.9" />
                <ellipse cx="320" cy="350" rx="100" ry="80" fill="#E91E63" opacity="0.9" />
                <ellipse cx="180" cy="380" rx="90" ry="70" fill="#E91E63" opacity="0.9" />
                
                {/* Stars */}
                <polygon
                  points="420,150 430,175 455,175 435,192 443,217 420,200 397,217 405,192 385,175 410,175"
                  fill="#E91E63"
                />
                <polygon
                  points="450,280 457,297 475,297 461,308 466,325 450,315 434,325 439,308 425,297 443,297"
                  fill="#E91E63"
                  transform="scale(0.7) translate(200, 100)"
                />
                <polygon
                  points="480,350 485,362 498,362 488,370 491,383 480,375 469,383 472,370 462,362 475,362"
                  fill="#E91E63"
                  transform="scale(0.5) translate(300, 200)"
                />
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
