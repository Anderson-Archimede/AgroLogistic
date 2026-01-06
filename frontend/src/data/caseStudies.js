// Case Studies Data Model - Complete implementation with extended fields

export const caseStudies = [
  // AMPOL-MEROL / CENTRUM NAWOZÓW - FEATURED CASE STUDY
  {
    id: 'ampol-merol-centrum-nawozow',
    slug: 'online-store-for-agricultural-production-supplies-distributor',
    name: 'Ampol-Merol',
    projectName: 'Centrum Nawozów',
    tagline: 'Online store for agricultural production supplies distributor',
    subtitle: 'We assisted a leading distributor in the agro industry with digital transformation and the launch of a new sales channel through an effective online store, fully integrated with the internal ERP system.',
    category: 'ecommerce',
    industryId: 'ecommerce',
    thumbnail: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/hero-image.webp',
    logo: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/header-logo.svg',
    heroImage: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/hero-image.webp',
    externalWebsite: 'https://centrumnawozow.pl/',
    serviceTypes: [
      { name: 'WWW', icon: 'https://webmakers.expert/assets/images/case-study/_common/www.svg' },
      { name: 'Backend', icon: 'https://webmakers.expert/assets/images/case-study/_common/backend.svg' },
      { name: 'Frontend', icon: 'https://webmakers.expert/assets/images/case-study/_common/frontend.svg' }
    ],
    client: {
      name: 'Ampol-Merol',
      projectName: 'Centrum Nawozów',
      industry: 'Agricultural Distribution',
      location: 'Poland',
      size: '100-200 employees',
      description: 'Centrum Nawozów is a project for Ampol-Merol, an authorized and reputable distributor of agricultural production supplies. This family-owned company, a leader in its industry, has been supporting farmers as a trusted partner of farms throughout Poland since 1992. With a broad product range, Ampol-Merol offers comprehensive agricultural supplies including seeds, mineral fertilizers, organic fertilizers, and plant protection products.'
    },
    projectGoal: {
      title: 'Project Goal',
      description: 'The project\'s goal was to diversify distribution channels, including the launch of a new sales channel that would contribute to sales growth and further strengthen the company\'s leading position in the industry. Ampol-Merol also wanted to streamline the purchasing process, enabling online product purchases without direct contact with a seller.',
      points: [
        'Diversify distribution channels with a new online sales channel',
        'Streamline purchasing process for customers',
        'Enable 24/7 access to products without seller contact',
        'Create positive customer experience with personalization',
        'Provide order tracking and purchase history access'
      ]
    },
    challenge: {
      title: 'Challenge',
      description: 'Before starting the project, we identified several key challenges related to the industry\'s specifics, internal processes, and the company\'s operations. Each required an appropriate approach and adaptation of technology.',
      points: [
        'Wholesale sales and adapting store interface to its specifics',
        'Handling multiple product units of measurement',
        'Calculating delivery and transportation costs for retail and wholesale',
        'Integration with fiscal cash registers and rounding issues',
        'Full integration with the internal ERP system',
        'Advanced data and customer behavior analytics'
      ]
    },
    solution: {
      title: 'Solution',
      description: 'We built a dedicated e-commerce platform with modern design tailored to the agricultural industry. Using the Sylius e-commerce framework allowed us to perfectly adapt the solution to Ampol-Merol\'s specific needs.',
      features: [
        'Dedicated e-commerce platform with modern design',
        'Retail and wholesale sales support',
        'Clear product catalog with precise filtering',
        'Multiple units of measurement (kg, tons, liters, quantities)',
        'Advanced transport cost calculation algorithms',
        'Full ERP system integration with two-way synchronization',
        'Google Analytics and Microsoft Clarity integration',
        'Real-time stock and order management'
      ],
      technologies: ['PHP', 'Symfony', 'Sylius', 'ElasticSearch', 'RabbitMQ', 'Redis']
    },
    platformFunctionalities: [
      'Extensive yet intuitive categorization, filtering, and presentation of products',
      'Unit and wholesale/tonnage sales with easy full transport ordering',
      'Support for multiple units of measurement (kilograms, tons, liters, quantities, dimensions)',
      'Full automation and ERP integration with two-way synchronization',
      'Customer behavior analytics during purchasing process'
    ],
    branding: {
      title: 'Branding & Design',
      description: 'The design of the CentrumNawozow.pl online store focuses on providing users with a clear and intuitive shopping experience. Dominant green and earthy tones, matching the company\'s visual identity, reflect closeness to nature and agriculture, building trust in the brand.'
    },
    projectTeam: {
      size: 9,
      members: [
        '3 Back-end developers',
        '2 Front-end developers',
        '1 Tester',
        '1 Tech leader',
        '1 UX/UI designer',
        '1 Project manager'
      ]
    },
    outcomes: {
      before: [
        'Limited distribution diversification to traditional sales channels',
        'Reduced product availability limited by sales branch locations',
        'Time-consuming purchasing process requiring seller contact',
        'Lack of analytical tools limiting sales effectiveness',
        'Lack of process automation and ERP integration'
      ],
      after: [
        'Increased distribution through new sales channel',
        'Expanded range and availability regardless of location',
        'Increased customer satisfaction with 24/7 access',
        'Enhanced sales effectiveness through behavior analysis',
        'Process automation with full ERP integration'
      ]
    },
    results: {
      title: 'What the company gained',
      description: 'The launch of a modern e-commerce platform fits into Ampol-Merol\'s digital transformation strategy. The company gained a new, dynamic sales channel which proved exceptionally effective, securing first orders immediately after launch.',
      metrics: [
        { value: '24/7', label: 'Platform availability' },
        { value: '100%', label: 'ERP integration' },
        { value: 'Day 1', label: 'First orders received' },
        { value: '9', label: 'Team members' }
      ],
      testimonial: {
        quote: 'We have been cooperating with WebMakers for a long time, and the choice of them as the contractor for our project was decided by the recommendation of another client. I evaluate the whole cooperation very well - we appreciate the professionalism, partnership approach and very good communication and responsiveness.',
        author: 'Wojciech Sipak',
        role: 'CIO',
        company: 'Ampol-Merol Sp. z o.o.',
        avatar: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/ampol_merol_author_1x.webp',
        companyLogo: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/ampol_merol_logo.svg'
      }
    },
    youtubeVideo: 'FndrXjtAHFQ',
    gallery: [
      'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/online-store-for-agricultural-production-supplies-distributor-01.webp',
      'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/online-store-for-agricultural-production-supplies-distributor-02.webp',
      'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/online-store-for-agricultural-production-supplies-distributor-03.webp',
      'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/online-store-for-agricultural-production-supplies-distributor-04.webp',
      'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/online-store-for-agricultural-production-supplies-distributor-05.webp',
      'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/online-store-for-agricultural-production-supplies-distributor-06.webp',
      'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/online-store-for-agricultural-production-supplies-distributor-07.webp',
      'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/online-store-for-agricultural-production-supplies-distributor-08.webp'
    ],
    technologyLogos: [
      { name: 'PHP', logo: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/php.svg' },
      { name: 'Symfony', logo: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/symfony.svg' },
      { name: 'Sylius', logo: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/sylius.svg' },
      { name: 'ElasticSearch', logo: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/elastic-search.svg' },
      { name: 'RabbitMQ', logo: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/rabbitmq.svg' },
      { name: 'Redis', logo: 'https://webmakers.expert/images/case-study/en/online-store-for-agricultural-production-supplies-distributor/redis.svg' }
    ],
    timeline: '8 months',
    services: ['Business Analysis', 'UI/UX Design', 'Web Development', 'Backend Development', 'ERP Integration'],
    featured: true,
    isExtended: true
  },
  // OTHER CASE STUDIES
  {
    id: 'plonovo',
    slug: 'agro-marketplace-plonovo',
    name: 'Plonovo',
    tagline: 'Marketplace for the agricultural industry',
    subtitle: 'A platform connecting sellers and farmers',
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
      description: 'Plonovo needed a digital platform to connect agricultural suppliers with farmers across Poland.',
      points: [
        'No centralized platform for agricultural products',
        'Difficulty for farmers to compare prices and suppliers',
        'Manual ordering process with high error rates',
        'Limited visibility into product availability'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We developed a comprehensive marketplace platform that connects sellers and farmers.',
      features: [
        'Multi-vendor marketplace with product catalog',
        'Advanced search and filtering',
        'Integrated ordering and payment system',
        'Vendor dashboard for inventory management',
        'Mobile-responsive design',
        'Real-time notifications'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'AWS']
    },
    results: {
      title: 'The Results',
      metrics: [
        { value: '500+', label: 'Active vendors' },
        { value: '10,000+', label: 'Registered farmers' },
        { value: '45%', label: 'Processing time reduction' },
        { value: '3x', label: 'Transaction growth' }
      ],
      testimonial: {
        quote: 'The platform transformed how we connect with our customers.',
        author: 'CEO',
        company: 'Plonovo',
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
    subtitle: 'Interactive 3D configurator for custom furniture',
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
      description: 'A leading furniture manufacturer needed to digitize their custom product ordering process.',
      points: [
        'Complex product customization options',
        'Time-consuming manual quoting process',
        'Customers unable to visualize final products',
        'High rate of order modifications and returns'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We built an interactive 3D product configurator with real-time pricing.',
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
        { value: '60%', label: 'Quote time reduction' },
        { value: '35%', label: 'Conversion increase' },
        { value: '25%', label: 'Higher order value' },
        { value: '70%', label: 'Fewer modifications' }
      ],
      testimonial: {
        quote: 'The configurator has revolutionized our sales process.',
        author: 'Sales Director',
        company: 'Furniture Manufacturer',
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
    subtitle: 'E-learning platform for English language courses',
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
      description: 'Edu Bears needed a modern web platform to deliver innovative English language courses.',
      points: [
        'Outdated legacy platform',
        'Poor mobile experience',
        'Limited analytics and tracking',
        'Difficult content management'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We developed a comprehensive e-learning platform with gamification elements.',
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
        { value: '40%', label: 'Engagement increase' },
        { value: '50,000+', label: 'Active students' },
        { value: '4.8/5', label: 'User satisfaction' },
        { value: '90%', label: 'Completion rate' }
      ],
      testimonial: {
        quote: 'The ongoing collaboration makes us recommend WebMakers without hesitation.',
        author: 'Elżbieta Berka',
        role: 'Deputy CEO',
        company: 'Edu Bears',
        avatar: 'https://webmakers.expert/assets/images/reusable/testimonials/edu_bears_author_1x.webp?20251128100709'
      }
    },
    timeline: '5 months',
    services: ['Product Discovery', 'UI/UX Design', 'Web Development', 'Mobile Development'],
    featured: true
  },
  {
    id: 'carfin',
    slug: 'car-marketplace-carfin',
    name: 'CarFin',
    tagline: 'Sales platform for cars with financing',
    subtitle: 'Marketplace for new and used cars with integrated financing',
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
      description: 'CarFin wanted to simplify car buying by integrating vehicle selection with financing.',
      points: [
        'Complex car buying process',
        'Separate financing applications',
        'Poor customer experience',
        'High sales team costs'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We developed an integrated marketplace with instant financing options.',
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
        { value: '60%', label: 'Sales cost reduction' },
        { value: '3x', label: 'Lead conversion' },
        { value: '15 min', label: 'Time to approval' },
        { value: '€10M+', label: 'Financed volume' }
      ],
      testimonial: {
        quote: 'The project allowed us to increase revenues and reduce costs by 60%.',
        author: 'Mateusz Respondek',
        role: 'CMO',
        company: 'CarFin',
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
    subtitle: 'Pregnancy tracking app with new features',
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
      description: 'Momli needed to modernize their pregnancy tracking app with new features.',
      points: [
        'Outdated technology stack',
        'Poor app performance',
        'Limited features',
        'Complex data migration needs'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We rebuilt the mobile application with a modern tech stack.',
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
        { value: '50%', label: 'Performance boost' },
        { value: '100%', label: 'Data migrated' },
        { value: '2x', label: 'User engagement' }
      ],
      testimonial: {
        quote: 'The project achieved its goals as planned.',
        author: 'Product Manager',
        company: 'Momli',
        avatar: ''
      }
    },
    timeline: '4 months',
    services: ['Business Analysis', 'UI/UX Design', 'Mobile Development'],
    featured: false
  },
  {
    id: 'hvac-store',
    slug: 'online-store-for-the-hvac-industry',
    name: 'HVAC Online Store',
    tagline: 'Online store for the HVAC industry',
    subtitle: 'Dedicated online shop based on Sylius platform',
    category: 'ecommerce',
    industryId: 'ecommerce',
    thumbnail: 'https://webmakers.expert/images/case-study/en/online-store-for-the-hvac-industry/mockup_lg_1x.webp',
    logo: 'https://webmakers.expert/images/case-study/en/online-store-for-the-hvac-industry/logo.svg',
    heroImage: 'https://webmakers.expert/images/case-study/en/online-store-for-the-hvac-industry/mockup_lg_1x.webp',
    client: {
      name: 'HVAC Distributor',
      industry: 'HVAC / Construction',
      location: 'Poland',
      size: '50-100 employees'
    },
    challenge: {
      title: 'The Challenge',
      description: 'Creating a specialized e-commerce platform for HVAC products.',
      points: [
        'Complex product specifications',
        'Technical product filtering',
        'B2B pricing requirements',
        'Integration needs'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We created a dedicated online shop based on the Sylius platform.',
      features: [
        'Specialized HVAC product catalog',
        'Technical filtering system',
        'B2B pricing tiers',
        'Quick order functionality',
        'Technical documentation access',
        'Installer portal'
      ],
      technologies: ['PHP', 'Symfony', 'Sylius', 'Elasticsearch', 'Redis']
    },
    results: {
      title: 'The Results',
      metrics: [
        { value: '150%', label: 'Online sales growth' },
        { value: '35%', label: 'Order time reduction' },
        { value: '2,000+', label: 'Active B2B accounts' },
        { value: '99%', label: 'Order accuracy' }
      ],
      testimonial: {
        quote: 'The platform perfectly serves our B2B customers.',
        author: 'Managing Director',
        company: 'HVAC Store',
        avatar: ''
      }
    },
    timeline: '6 months',
    services: ['Business Analysis', 'UI/UX Design', 'Web Development', 'ERP Integration'],
    featured: false
  },
  {
    id: 'rotate-it',
    slug: 'rotate-it-case-study',
    name: 'Rotate IT',
    tagline: 'Online store for automotive industry',
    subtitle: 'Dedicated online store with product configurator for tires and rims',
    category: 'ecommerce',
    industryId: 'ecommerce',
    thumbnail: 'https://webmakers.expert/images/case-study/en/rotate-it-case-study/mockup_lg_1x.webp',
    logo: 'https://webmakers.expert/images/case-study/en/rotate-it-case-study/logo.svg',
    heroImage: 'https://webmakers.expert/images/case-study/en/rotate-it-case-study/mockup_lg_1x.webp',
    client: {
      name: 'Rotate IT',
      industry: 'Automotive',
      location: 'Poland',
      size: '20-50 employees'
    },
    challenge: {
      title: 'The Challenge',
      description: 'Creating an online store with advanced vehicle-based product search.',
      points: [
        'Complex vehicle compatibility matching',
        'Large product catalog',
        'Need for visual configurator',
        'Integration with suppliers'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We created a dedicated online store with an advanced product configurator.',
      features: [
        'Vehicle-based product search',
        'Visual tire/rim configurator',
        'Compatibility checker',
        'Real-time inventory',
        'Supplier integration',
        'Order tracking'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'AWS']
    },
    results: {
      title: 'The Results',
      metrics: [
        { value: '200%', label: 'Online revenue growth' },
        { value: '45%', label: 'Cart conversion' },
        { value: '10,000+', label: 'Products listed' },
        { value: '4.7/5', label: 'Customer rating' }
      ],
      testimonial: {
        quote: 'The configurator transformed our online business.',
        author: 'Owner',
        company: 'Rotate IT',
        avatar: ''
      }
    },
    timeline: '5 months',
    services: ['Product Discovery', 'UI/UX Design', 'Web Development', 'API Integration'],
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

export const getRelatedCaseStudies = (currentId, limit = 3) => {
  const current = caseStudies.find(cs => cs.id === currentId);
  if (!current) return [];
  
  return caseStudies
    .filter(cs => cs.id !== currentId && (cs.category === current.category || cs.industryId === current.industryId))
    .slice(0, limit);
};
