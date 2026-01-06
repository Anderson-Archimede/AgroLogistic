// Case Studies Data Model - Complete implementation

export const caseStudies = [
  {
    id: 'plonovo',
    slug: 'agro-marketplace-plonovo',
    name: 'Plonovo',
    tagline: 'Marketplace for the agricultural industry',
    category: 'marketplace',
    industryId: 'ecommerce',
    thumbnail: 'https://webmakers.expert/assets/images/reusable/case_studies/project_1_1x.webp?20251128100709',
    logo: 'https://webmakers.expert/assets/images/reusable/case_studies/project_1_logo.svg?20251128100709',
    heroImage: 'https://webmakers.expert/assets/images/reusable/case_studies/project_1_1x.webp?20251128100709',
    client: {
      name: 'Plonovo',
      industry: 'Agriculture',
      location: 'Poland',
      size: '50-200 employees'
    },
    challenge: {
      title: 'The Challenge',
      description: 'Plonovo needed a digital platform to connect agricultural suppliers with farmers across Poland. The existing process was manual, time-consuming, and limited in reach.',
      points: [
        'No centralized platform for agricultural products',
        'Difficulty for farmers to compare prices and suppliers',
        'Manual ordering process with high error rates',
        'Limited visibility into product availability'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We developed a comprehensive marketplace platform that connects sellers and farmers with advanced search, filtering, and ordering capabilities.',
      features: [
        'Multi-vendor marketplace with product catalog',
        'Advanced search and filtering by category, location, price',
        'Integrated ordering and payment system',
        'Vendor dashboard for inventory management',
        'Mobile-responsive design for field access',
        'Real-time notifications and order tracking'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'AWS']
    },
    results: {
      title: 'The Results',
      metrics: [
        { value: '500+', label: 'Active vendors' },
        { value: '10,000+', label: 'Registered farmers' },
        { value: '45%', label: 'Order processing time reduction' },
        { value: '3x', label: 'Transaction volume growth' }
      ],
      testimonial: {
        quote: 'The platform transformed how we connect with our customers. The digital marketplace has opened new opportunities for growth.',
        author: 'CEO, Plonovo',
        avatar: ''
      }
    },
    timeline: '6 months',
    services: ['Product Discovery', 'UI/UX Design', 'Web Development', 'API Development'],
    featured: true
  },
  {
    id: 'furniture-manufacturer',
    slug: 'furniture-configurator',
    name: 'Furniture Manufacturer',
    tagline: 'Custom product configurator for furniture',
    category: 'configurator',
    industryId: 'ecommerce',
    thumbnail: 'https://webmakers.expert/assets/images/reusable/case_studies/project_2_1x.webp?20251128100709',
    logo: 'https://webmakers.expert/assets/images/reusable/case_studies/project_2_logo.svg?20251128100709',
    heroImage: 'https://webmakers.expert/assets/images/reusable/case_studies/project_2_1x.webp?20251128100709',
    client: {
      name: 'NDA Furniture Manufacturer',
      industry: 'Furniture Manufacturing',
      location: 'Poland',
      size: '200-500 employees'
    },
    challenge: {
      title: 'The Challenge',
      description: 'A leading furniture manufacturer needed to digitize their custom product ordering process and provide customers with real-time visualization.',
      points: [
        'Complex product customization options',
        'Time-consuming manual quoting process',
        'Customers unable to visualize final products',
        'High rate of order modifications and returns'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We built an interactive 3D product configurator that allows customers to customize furniture in real-time with instant pricing.',
      features: [
        '3D product visualization with WebGL',
        'Real-time material and color customization',
        'Instant price calculation',
        'AR preview on mobile devices',
        'Integration with ERP system',
        'Automated quote generation'
      ],
      technologies: ['React', 'Three.js', 'Node.js', 'PostgreSQL', 'WebGL']
    },
    results: {
      title: 'The Results',
      metrics: [
        { value: '60%', label: 'Reduction in quote time' },
        { value: '35%', label: 'Increase in conversion' },
        { value: '25%', label: 'Higher average order value' },
        { value: '70%', label: 'Fewer order modifications' }
      ],
      testimonial: {
        quote: 'The configurator has revolutionized our sales process. Customers love being able to see exactly what they\'re ordering.',
        author: 'Sales Director',
        avatar: ''
      }
    },
    timeline: '4 months',
    services: ['Product Discovery', 'UI/UX Design', 'Web Development', '3D Development'],
    featured: true
  },
  {
    id: 'edu-bears',
    slug: 'edtech-platform-edu-bears',
    name: 'Edu Bears',
    tagline: 'Web platform for innovative educational solutions',
    category: 'edtech',
    industryId: 'edtech',
    thumbnail: 'https://webmakers.expert/assets/images/reusable/case_studies/project_3_1x.webp?20251128100709',
    logo: 'https://webmakers.expert/assets/images/reusable/case_studies/project_3_logo.svg?20251128100709',
    heroImage: 'https://webmakers.expert/assets/images/reusable/case_studies/project_3_1x.webp?20251128100709',
    client: {
      name: 'Edu Bears',
      industry: 'Education',
      location: 'Poland',
      size: '20-50 employees'
    },
    challenge: {
      title: 'The Challenge',
      description: 'Edu Bears needed a modern web platform to deliver their innovative English language courses to children across multiple schools.',
      points: [
        'Outdated legacy platform',
        'Poor mobile experience',
        'Limited analytics and tracking',
        'Difficult content management'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We developed a comprehensive e-learning platform with gamification elements designed specifically for young learners.',
      features: [
        'Gamified learning experience',
        'Progress tracking and rewards',
        'Teacher dashboard',
        'Parent portal',
        'Multimedia lesson support',
        'Mobile-first design'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Socket.io']
    },
    results: {
      title: 'The Results',
      metrics: [
        { value: '40%', label: 'Increase in engagement' },
        { value: '50,000+', label: 'Active students' },
        { value: '4.8/5', label: 'User satisfaction' },
        { value: '90%', label: 'Course completion rate' }
      ],
      testimonial: {
        quote: 'The ongoing collaboration, characterized by reliability and a professional approach, makes us recommend WebMakers without hesitation.',
        author: 'Elżbieta Berka, Deputy CEO',
        avatar: 'https://webmakers.expert/assets/images/reusable/testimonials/edu_bears_author_1x.webp?20251128100709'
      }
    },
    timeline: '5 months',
    services: ['Product Discovery', 'UI/UX Design', 'Web Development', 'Mobile Development'],
    featured: true
  },
  {
    id: 'ampol-merol',
    slug: 'online-store-ampol-merol',
    name: 'Ampol Merol',
    tagline: 'Online store for agricultural supplies',
    category: 'ecommerce',
    industryId: 'ecommerce',
    thumbnail: 'https://webmakers.expert/assets/images/reusable/case_studies/project_4_1x.webp?20251128100709',
    logo: 'https://webmakers.expert/assets/images/reusable/case_studies/project_4_logo.svg?20251128100709',
    heroImage: 'https://webmakers.expert/assets/images/reusable/case_studies/project_4_1x.webp?20251128100709',
    client: {
      name: 'Ampol Merol',
      industry: 'Agricultural Distribution',
      location: 'Poland',
      size: '100-200 employees'
    },
    challenge: {
      title: 'The Challenge',
      description: 'Ampol Merol needed to transition from traditional sales to a modern e-commerce platform while maintaining strong customer relationships.',
      points: [
        'No online sales channel',
        'Manual order processing',
        'Limited customer reach',
        'Inventory management challenges'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We built a complete B2B e-commerce platform with advanced features for agricultural supply distribution.',
      features: [
        'B2B e-commerce platform',
        'Customer-specific pricing',
        'Inventory management',
        'Order tracking',
        'ERP integration',
        'Mobile app for sales team'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'React Native']
    },
    results: {
      title: 'The Results',
      metrics: [
        { value: '200%', label: 'Online sales growth' },
        { value: '40%', label: 'Operational cost reduction' },
        { value: '5,000+', label: 'Active customers' },
        { value: '98%', label: 'Order accuracy' }
      ],
      testimonial: {
        quote: 'I highly rate our cooperation - I value good communication, quick responses, and the ability to contact through various channels.',
        author: 'Wojciech Sipak, CIO',
        avatar: 'https://webmakers.expert/assets/images/reusable/testimonials/ampol_merol_author_1x.webp?20251128100709'
      }
    },
    timeline: '7 months',
    services: ['Business Analysis', 'UI/UX Design', 'Web Development', 'Mobile Development'],
    featured: true
  },
  {
    id: 'carfin',
    slug: 'car-marketplace-carfin',
    name: 'CarFin',
    tagline: 'Sales platform for cars with financing',
    category: 'marketplace',
    industryId: 'fintech',
    thumbnail: 'https://webmakers.expert/assets/images/reusable/case_studies/project_5_1x.webp?20251128100709',
    logo: 'https://webmakers.expert/assets/images/reusable/case_studies/project_5_logo.svg?20251128100709',
    heroImage: 'https://webmakers.expert/assets/images/reusable/case_studies/project_5_1x.webp?20251128100709',
    client: {
      name: 'CarFin',
      industry: 'Automotive / Finance',
      location: 'Poland',
      size: '20-50 employees'
    },
    challenge: {
      title: 'The Challenge',
      description: 'CarFin wanted to create a platform that simplifies car buying by integrating vehicle selection with financing options.',
      points: [
        'Complex car buying process',
        'Separate financing applications',
        'Poor customer experience',
        'High sales team costs'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We developed an integrated marketplace where customers can browse vehicles and get instant financing options.',
      features: [
        'Vehicle marketplace with filters',
        'Instant financing calculator',
        'Credit application integration',
        'Dealer management system',
        'Document management',
        'Customer portal'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS']
    },
    results: {
      title: 'The Results',
      metrics: [
        { value: '60%', label: 'Cost reduction in sales' },
        { value: '3x', label: 'Lead conversion increase' },
        { value: '15 min', label: 'Average time to approval' },
        { value: '€10M+', label: 'Financed volume' }
      ],
      testimonial: {
        quote: 'The project implementation has allowed us to increase revenues and reduce costs by 60% for using external sales services.',
        author: 'Mateusz Respondek, CMO',
        avatar: 'https://webmakers.expert/assets/images/reusable/testimonials/carfin_author_1x.webp?20251128100709'
      }
    },
    timeline: '8 months',
    services: ['Product Discovery', 'UI/UX Design', 'Web Development', 'API Development'],
    featured: true
  },
  {
    id: 'momli',
    slug: 'mobile-app-momli',
    name: 'Momli',
    tagline: 'Mobile app upgrade with modern technology',
    category: 'mobile',
    industryId: 'healthcare',
    thumbnail: 'https://webmakers.expert/assets/images/reusable/case_studies/project_6_1x.webp?20251128100709',
    logo: 'https://webmakers.expert/assets/images/reusable/case_studies/project_6_logo.svg?20251128100709',
    heroImage: 'https://webmakers.expert/assets/images/reusable/case_studies/project_6_1x.webp?20251128100709',
    client: {
      name: 'Momli',
      industry: 'Health & Wellness',
      location: 'Poland',
      size: '10-20 employees'
    },
    challenge: {
      title: 'The Challenge',
      description: 'Momli needed to modernize their pregnancy tracking app with new features while maintaining existing user data.',
      points: [
        'Outdated technology stack',
        'Poor app performance',
        'Limited features',
        'Complex data migration needs'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We rebuilt the mobile application with a modern tech stack and added new features while ensuring smooth data migration.',
      features: [
        'Complete app rebuild',
        'New tracking features',
        'Community features',
        'Push notifications',
        'Data migration',
        'Analytics integration'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'AWS']
    },
    results: {
      title: 'The Results',
      metrics: [
        { value: '4.8', label: 'App Store rating' },
        { value: '50%', label: 'Performance improvement' },
        { value: '100%', label: 'Data migrated' },
        { value: '2x', label: 'User engagement' }
      ],
      testimonial: {
        quote: 'The project achieved its goals as planned. Throughout the design process, we were in constant contact with the project team.',
        author: 'Product Manager, Momli',
        avatar: ''
      }
    },
    timeline: '4 months',
    services: ['Business Analysis', 'UI/UX Design', 'Mobile Development'],
    featured: false
  }
];

export const caseStudyCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'marketplace', name: 'Marketplace' },
  { id: 'configurator', name: 'Configurator' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'edtech', name: 'EdTech' },
  { id: 'mobile', name: 'Mobile App' }
];

export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find(cs => cs.slug === slug);
};

export const getCaseStudiesByIndustry = (industryId) => {
  return caseStudies.filter(cs => cs.industryId === industryId);
};

export const getCaseStudiesByCategory = (category) => {
  if (category === 'all') return caseStudies;
  return caseStudies.filter(cs => cs.category === category);
};

export const getFeaturedCaseStudies = () => {
  return caseStudies.filter(cs => cs.featured);
};
