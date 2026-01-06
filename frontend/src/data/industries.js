// Industries Data Model - Complete implementation

export const industries = [
  {
    id: 'ecommerce',
    name: 'E-commerce',
    slug: 'ecommerce',
    tagline: 'E-commerce that sells more',
    shortDescription: 'We build 3D configurators and online platforms that boost conversion rates and cart value.',
    fullDescription: 'Transform your e-commerce business with custom solutions designed to increase sales, improve customer experience, and streamline operations. From product configurators to complete marketplace platforms, we deliver solutions that drive results.',
    heroImage: 'https://webmakers.expert/assets/images/homepage/webmakers_industries_ecommerce_1x.webp?20251128100709',
    color: '#00BCD4',
    icon: 'ShoppingCart',
    stats: [
      { value: '35%', label: 'Average conversion increase' },
      { value: '50+', label: 'E-commerce projects delivered' },
      { value: '2.5x', label: 'Average ROI' }
    ],
    solutions: [
      {
        id: 'product-configurator',
        name: 'Product Configurators',
        description: '3D product configurators that let customers visualize and customize products in real-time.',
        features: ['Real-time 3D rendering', 'Custom options management', 'Price calculation', 'Integration with ERP'],
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'
      },
      {
        id: 'marketplace',
        name: 'Marketplace Platforms',
        description: 'Multi-vendor marketplace solutions connecting buyers and sellers.',
        features: ['Vendor management', 'Payment processing', 'Order management', 'Analytics dashboard'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800'
      },
      {
        id: 'b2b-portal',
        name: 'B2B Portals',
        description: 'Custom B2B e-commerce solutions with advanced pricing and ordering.',
        features: ['Customer-specific pricing', 'Bulk ordering', 'Quote management', 'ERP integration'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
      }
    ],
    caseStudyIds: ['plonovo', 'ampol-merol', 'furniture-manufacturer'],
    technologies: ['React', 'Node.js', 'Three.js', 'PostgreSQL', 'Elasticsearch']
  },
  {
    id: 'edtech',
    name: 'EdTech',
    slug: 'edtech',
    tagline: 'EdTech that keeps students engaged',
    shortDescription: 'We design custom LMS platforms and systems for online and offline learning.',
    fullDescription: 'Create engaging educational experiences with our custom EdTech solutions. From Learning Management Systems to interactive course platforms, we help educational organizations deliver effective learning outcomes.',
    heroImage: 'https://webmakers.expert/assets/images/homepage/webmakers_industries_edtech_1x.webp?20251128100709',
    color: '#9C27B0',
    icon: 'GraduationCap',
    stats: [
      { value: '100K+', label: 'Students served' },
      { value: '40%', label: 'Engagement increase' },
      { value: '25+', label: 'EdTech platforms built' }
    ],
    solutions: [
      {
        id: 'lms-platform',
        name: 'Custom LMS Platforms',
        description: 'Tailored Learning Management Systems designed for your specific educational needs.',
        features: ['Course management', 'Progress tracking', 'Assessments', 'Certificates'],
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800'
      },
      {
        id: 'elearning',
        name: 'E-Learning Platforms',
        description: 'Interactive online learning platforms with multimedia content support.',
        features: ['Video lessons', 'Interactive quizzes', 'Discussion forums', 'Mobile learning'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
      },
      {
        id: 'virtual-classroom',
        name: 'Virtual Classrooms',
        description: 'Real-time virtual classroom solutions for live online teaching.',
        features: ['Live streaming', 'Whiteboard', 'Breakout rooms', 'Recording'],
        image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800'
      }
    ],
    caseStudyIds: ['edu-bears'],
    technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'AWS']
  },
  {
    id: 'ai',
    name: 'AI & Data',
    slug: 'ai-data-engineering',
    tagline: 'AI that saves your time',
    shortDescription: 'We automate processes, implement intelligent recommendations, and enable real-time data analysis.',
    fullDescription: 'Harness the power of Artificial Intelligence to transform your business operations. From process automation to predictive analytics, we implement AI solutions that deliver measurable results.',
    heroImage: 'https://webmakers.expert/assets/images/homepage/webmakers_industries_ai_1x.webp?20251128100709',
    color: '#FF9800',
    icon: 'Brain',
    stats: [
      { value: '60%', label: 'Time savings' },
      { value: '85%', label: 'Automation accuracy' },
      { value: '30+', label: 'AI implementations' }
    ],
    solutions: [
      {
        id: 'process-automation',
        name: 'Process Automation',
        description: 'AI-powered automation of repetitive business processes.',
        features: ['Document processing', 'Data extraction', 'Workflow automation', 'Integration APIs'],
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800'
      },
      {
        id: 'predictive-analytics',
        name: 'Predictive Analytics',
        description: 'Machine learning models for forecasting and decision support.',
        features: ['Demand forecasting', 'Customer churn prediction', 'Risk assessment', 'Recommendation engines'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
      },
      {
        id: 'nlp-solutions',
        name: 'NLP Solutions',
        description: 'Natural Language Processing for text analysis and chatbots.',
        features: ['Sentiment analysis', 'Chatbots', 'Document classification', 'Named entity recognition'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800'
      }
    ],
    caseStudyIds: [],
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'PostgreSQL']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    tagline: 'Digital health solutions',
    shortDescription: 'Secure, compliant healthcare applications that improve patient outcomes.',
    fullDescription: 'We develop healthcare solutions that prioritize security, compliance, and patient experience. From telemedicine platforms to patient management systems, we help healthcare providers deliver better care.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    color: '#4CAF50',
    icon: 'Heart',
    stats: [
      { value: 'HIPAA', label: 'Compliant solutions' },
      { value: '15+', label: 'Healthcare projects' },
      { value: '99.9%', label: 'Uptime' }
    ],
    solutions: [
      {
        id: 'telemedicine',
        name: 'Telemedicine Platforms',
        description: 'Secure video consultation platforms for remote healthcare.',
        features: ['Video consultations', 'Appointment scheduling', 'Prescription management', 'Medical records'],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'
      },
      {
        id: 'patient-portal',
        name: 'Patient Portals',
        description: 'Secure patient engagement platforms.',
        features: ['Medical records access', 'Appointment booking', 'Billing', 'Communication'],
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800'
      }
    ],
    caseStudyIds: [],
    technologies: ['React', 'Node.js', 'FHIR', 'PostgreSQL', 'AWS']
  },
  {
    id: 'fintech',
    name: 'FinTech',
    slug: 'fintech',
    tagline: 'Secure financial solutions',
    shortDescription: 'Build secure, scalable financial applications and payment solutions.',
    fullDescription: 'We create fintech solutions that combine security, compliance, and user experience. From payment platforms to financial dashboards, we help financial services companies innovate.',
    heroImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
    color: '#2196F3',
    icon: 'DollarSign',
    stats: [
      { value: 'PCI DSS', label: 'Compliant' },
      { value: '10+', label: 'FinTech projects' },
      { value: '€50M+', label: 'Transactions processed' }
    ],
    solutions: [
      {
        id: 'payment-platform',
        name: 'Payment Platforms',
        description: 'Secure payment processing solutions.',
        features: ['Multi-currency', 'Payment gateway integration', 'Fraud detection', 'Reporting'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800'
      },
      {
        id: 'financial-dashboard',
        name: 'Financial Dashboards',
        description: 'Real-time financial analytics and reporting.',
        features: ['Real-time data', 'Custom reports', 'Alerts', 'Data visualization'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
      }
    ],
    caseStudyIds: ['carfin'],
    technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL', 'Redis']
  }
];

export const getIndustryBySlug = (slug) => {
  return industries.find(ind => ind.slug === slug);
};

export const getAllIndustries = () => industries;
