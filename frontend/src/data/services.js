// Services Data Model - Complete implementation

export const servicesCategories = [
  {
    id: 'research-business',
    name: 'Research & Business',
    slug: 'research-and-business',
    description: 'Strategic consulting and business analysis to align technology with your goals.',
    icon: 'Search',
    color: '#E91E63'
  },
  {
    id: 'design-ux',
    name: 'Design & UX',
    slug: 'design-and-ux',
    description: 'User-centered design that creates intuitive and engaging digital experiences.',
    icon: 'Palette',
    color: '#9C27B0'
  },
  {
    id: 'development',
    name: 'Development',
    slug: 'development',
    description: 'Full-stack development with modern technologies and best practices.',
    icon: 'Code',
    color: '#2196F3'
  },
  {
    id: 'growth-scale',
    name: 'Growth & Scale',
    slug: 'growth-and-scale',
    description: 'Solutions to help your business grow and scale efficiently.',
    icon: 'TrendingUp',
    color: '#4CAF50'
  }
];

export const services = [
  // Research & Business
  {
    id: 'product-discovery',
    categoryId: 'research-business',
    name: 'Product Discovery Workshops',
    slug: 'product-discovery-workshops',
    shortDescription: 'Transform your idea into a clear, actionable product roadmap.',
    fullDescription: 'Our Product Discovery Workshops help you validate your ideas, understand user needs, and create a solid foundation for your digital product. Through collaborative sessions, we define scope, prioritize features, and reduce project risks.',
    image: 'https://webmakers.expert/assets/images/homepage/webmakers_technologies_workshops_1x.webp?20251128100709',
    benefits: [
      'Clear product vision and roadmap',
      'Validated user requirements',
      'Reduced development risks',
      'Optimized budget allocation',
      'Faster time-to-market'
    ],
    process: [
      { step: 1, title: 'Discovery Call', description: 'Initial meeting to understand your business goals and challenges.' },
      { step: 2, title: 'Research Phase', description: 'Market analysis, competitor research, and user persona development.' },
      { step: 3, title: 'Workshop Sessions', description: 'Collaborative sessions to define features and priorities.' },
      { step: 4, title: 'Documentation', description: 'Comprehensive documentation including wireframes and specifications.' }
    ],
    deliverables: ['Product Roadmap', 'User Personas', 'Feature Prioritization', 'Technical Specifications', 'Budget Estimation'],
    duration: '2-4 weeks',
    cta: 'Book a Workshop'
  },
  {
    id: 'business-analysis',
    categoryId: 'research-business',
    name: 'Business Analysis',
    slug: 'business-analysis',
    shortDescription: 'In-depth analysis to identify opportunities and optimize processes.',
    fullDescription: 'Our business analysis services help you understand your current processes, identify bottlenecks, and discover opportunities for digital transformation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    benefits: ['Process optimization', 'Cost reduction', 'Improved efficiency', 'Data-driven decisions'],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate current business processes and systems.' },
      { step: 2, title: 'Analysis', description: 'Identify gaps and improvement opportunities.' },
      { step: 3, title: 'Recommendations', description: 'Provide actionable recommendations.' },
      { step: 4, title: 'Implementation Plan', description: 'Create a roadmap for changes.' }
    ],
    deliverables: ['Process Maps', 'Gap Analysis Report', 'Recommendations Document', 'Implementation Roadmap'],
    duration: '3-6 weeks',
    cta: 'Get Analysis'
  },
  // Design & UX
  {
    id: 'ui-ux-design',
    categoryId: 'design-ux',
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDescription: 'Create intuitive, beautiful interfaces that users love.',
    fullDescription: 'Our design team creates user interfaces that are not only visually stunning but also intuitive and accessible. We follow user-centered design principles to ensure your product delivers an exceptional experience.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    benefits: ['Increased user engagement', 'Higher conversion rates', 'Reduced support costs', 'Brand consistency'],
    process: [
      { step: 1, title: 'Research', description: 'User research and competitive analysis.' },
      { step: 2, title: 'Wireframing', description: 'Low-fidelity wireframes and user flows.' },
      { step: 3, title: 'Visual Design', description: 'High-fidelity mockups and design system.' },
      { step: 4, title: 'Prototyping', description: 'Interactive prototypes for testing.' }
    ],
    deliverables: ['Design System', 'UI Components', 'Interactive Prototypes', 'Design Documentation'],
    duration: '4-8 weeks',
    cta: 'Start Design'
  },
  {
    id: 'product-design',
    categoryId: 'design-ux',
    name: 'Product Design',
    slug: 'product-design',
    shortDescription: 'End-to-end product design from concept to launch.',
    fullDescription: 'We handle the complete product design lifecycle, from initial concept through to launch-ready designs, ensuring consistency and quality at every stage.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800',
    benefits: ['Cohesive product experience', 'Scalable design system', 'Faster development', 'User satisfaction'],
    process: [
      { step: 1, title: 'Strategy', description: 'Define product strategy and goals.' },
      { step: 2, title: 'Design', description: 'Create comprehensive design solutions.' },
      { step: 3, title: 'Test', description: 'User testing and iteration.' },
      { step: 4, title: 'Handoff', description: 'Developer-ready specifications.' }
    ],
    deliverables: ['Product Strategy', 'Complete UI Kit', 'Prototype', 'Dev Specifications'],
    duration: '6-12 weeks',
    cta: 'Design My Product'
  },
  // Development
  {
    id: 'web-development',
    categoryId: 'development',
    name: 'Web Development',
    slug: 'web-development',
    shortDescription: 'Build scalable, secure web applications with modern technologies.',
    fullDescription: 'We develop custom web applications using the latest technologies and best practices. From simple websites to complex enterprise solutions, we deliver high-quality, maintainable code.',
    image: 'https://webmakers.expert/assets/images/homepage/webmakers_technologies_web_development_1x.webp?20251128100709',
    benefits: ['Scalable architecture', 'High performance', 'Security best practices', 'SEO optimization'],
    process: [
      { step: 1, title: 'Planning', description: 'Technical architecture and sprint planning.' },
      { step: 2, title: 'Development', description: 'Agile development with regular updates.' },
      { step: 3, title: 'Testing', description: 'Comprehensive QA and testing.' },
      { step: 4, title: 'Deployment', description: 'Secure deployment and monitoring.' }
    ],
    deliverables: ['Web Application', 'Documentation', 'Source Code', 'Deployment'],
    duration: '8-16 weeks',
    cta: 'Start Development'
  },
  {
    id: 'mobile-development',
    categoryId: 'development',
    name: 'Mobile Development',
    slug: 'mobile-development',
    shortDescription: 'Native and cross-platform mobile apps for iOS and Android.',
    fullDescription: 'We create mobile applications that provide seamless experiences on both iOS and Android platforms. Whether native or cross-platform, we ensure top performance and user satisfaction.',
    image: 'https://webmakers.expert/assets/images/homepage/webmakers_technologies_mobile_development_1x.webp?20251128100709',
    benefits: ['Native performance', 'Cross-platform efficiency', 'Offline capabilities', 'Push notifications'],
    process: [
      { step: 1, title: 'Strategy', description: 'Platform selection and architecture.' },
      { step: 2, title: 'Design', description: 'Mobile-first UI/UX design.' },
      { step: 3, title: 'Development', description: 'Native or cross-platform development.' },
      { step: 4, title: 'Launch', description: 'App store submission and launch.' }
    ],
    deliverables: ['Mobile App', 'App Store Assets', 'Documentation', 'Analytics Setup'],
    duration: '12-20 weeks',
    cta: 'Build My App'
  },
  {
    id: 'api-development',
    categoryId: 'development',
    name: 'API Development',
    slug: 'api-development',
    shortDescription: 'Robust APIs to power your applications and integrations.',
    fullDescription: 'We design and develop RESTful and GraphQL APIs that are secure, scalable, and well-documented. Our APIs enable seamless integration between your systems and third-party services.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    benefits: ['Secure endpoints', 'Comprehensive documentation', 'High availability', 'Easy integration'],
    process: [
      { step: 1, title: 'Design', description: 'API architecture and endpoint design.' },
      { step: 2, title: 'Development', description: 'Implementation with security best practices.' },
      { step: 3, title: 'Documentation', description: 'OpenAPI/Swagger documentation.' },
      { step: 4, title: 'Testing', description: 'Load testing and security audits.' }
    ],
    deliverables: ['API Endpoints', 'Documentation', 'SDK', 'Monitoring'],
    duration: '4-12 weeks',
    cta: 'Build API'
  },
  // Growth & Scale
  {
    id: 'ai-solutions',
    categoryId: 'growth-scale',
    name: 'AI Solutions',
    slug: 'ai-solutions',
    shortDescription: 'Leverage artificial intelligence to automate and optimize.',
    fullDescription: 'We implement AI-powered solutions that help automate processes, analyze data, and make smarter decisions. From chatbots to predictive analytics, we bring AI capabilities to your business.',
    image: 'https://webmakers.expert/assets/images/homepage/webmakers_industries_ai_1x.webp?20251128100709',
    benefits: ['Process automation', 'Intelligent insights', 'Cost reduction', 'Competitive advantage'],
    process: [
      { step: 1, title: 'Assessment', description: 'Identify AI opportunities in your business.' },
      { step: 2, title: 'Data Preparation', description: 'Clean and prepare data for AI models.' },
      { step: 3, title: 'Implementation', description: 'Develop and train AI solutions.' },
      { step: 4, title: 'Integration', description: 'Integrate AI into your workflows.' }
    ],
    deliverables: ['AI Solution', 'Integration', 'Training', 'Documentation'],
    duration: '8-16 weeks',
    cta: 'Explore AI'
  },
  {
    id: 'ai-microworkshops',
    categoryId: 'growth-scale',
    name: 'AI Micro-workshops',
    slug: 'ai-microworkshops',
    shortDescription: 'Intensive sessions to implement AI in your daily work.',
    fullDescription: 'Our AI Micro-workshops are designed for teams who want to practically implement and use AI in their daily work. Learn how to leverage AI tools effectively.',
    image: 'https://webmakers.expert/assets/images/homepage/ai_microworkshops.svg?20251128100709',
    benefits: ['Hands-on learning', 'Immediate application', 'Team upskilling', 'Productivity boost'],
    process: [
      { step: 1, title: 'Assessment', description: 'Understand team needs and use cases.' },
      { step: 2, title: 'Workshop', description: 'Interactive training sessions.' },
      { step: 3, title: 'Practice', description: 'Hands-on exercises with real scenarios.' },
      { step: 4, title: 'Follow-up', description: 'Support and Q&A sessions.' }
    ],
    deliverables: ['Training Materials', 'Best Practices Guide', 'Tool Recommendations', 'Follow-up Support'],
    duration: '1-2 days',
    cta: 'Book Workshop'
  },
  {
    id: 'maintenance-support',
    categoryId: 'growth-scale',
    name: 'Maintenance & Support',
    slug: 'maintenance-and-support',
    shortDescription: 'Ongoing support to keep your systems running smoothly.',
    fullDescription: 'We provide comprehensive maintenance and support services to ensure your applications remain secure, up-to-date, and performing optimally.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800',
    benefits: ['24/7 monitoring', 'Security updates', 'Performance optimization', 'Dedicated support'],
    process: [
      { step: 1, title: 'Onboarding', description: 'System assessment and documentation.' },
      { step: 2, title: 'Monitoring', description: 'Set up continuous monitoring.' },
      { step: 3, title: 'Maintenance', description: 'Regular updates and patches.' },
      { step: 4, title: 'Support', description: 'Responsive issue resolution.' }
    ],
    deliverables: ['SLA Agreement', 'Monitoring Dashboard', 'Regular Reports', 'Priority Support'],
    duration: 'Ongoing',
    cta: 'Get Support'
  }
];

export const getServicesByCategory = (categoryId) => {
  return services.filter(service => service.categoryId === categoryId);
};

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

export const getCategoryBySlug = (slug) => {
  return servicesCategories.find(cat => cat.slug === slug);
};
