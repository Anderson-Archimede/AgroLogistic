// Technologies Data Model - Complete implementation

export const technologyCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Modern frameworks and libraries for building user interfaces'
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Server-side technologies for robust application logic'
  },
  {
    id: 'mobile',
    name: 'Mobile',
    description: 'Native and cross-platform mobile development'
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Data storage and management solutions'
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Infrastructure and deployment technologies'
  },
  {
    id: 'ai',
    name: 'AI & ML',
    description: 'Artificial Intelligence and Machine Learning tools'
  }
];

export const technologies = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    categoryId: 'frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'A JavaScript library for building user interfaces with component-based architecture.',
    expertise: 'Expert',
    yearsUsed: 8,
    projects: 150,
    useCases: ['Web Applications', 'Single Page Apps', 'Enterprise Dashboards']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    categoryId: 'frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    description: 'React framework for production-grade applications with SSR and SSG.',
    expertise: 'Expert',
    yearsUsed: 5,
    projects: 45,
    useCases: ['Marketing Sites', 'E-commerce', 'Content Platforms']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    categoryId: 'frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Typed superset of JavaScript that compiles to plain JavaScript.',
    expertise: 'Expert',
    yearsUsed: 6,
    projects: 120,
    useCases: ['Large Scale Apps', 'Team Projects', 'API Development']
  },
  {
    id: 'vuejs',
    name: 'Vue.js',
    categoryId: 'frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    description: 'Progressive JavaScript framework for building user interfaces.',
    expertise: 'Advanced',
    yearsUsed: 5,
    projects: 30,
    useCases: ['Interactive UIs', 'Dashboards', 'Progressive Apps']
  },
  {
    id: 'threejs',
    name: 'Three.js',
    categoryId: 'frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    description: '3D graphics library for creating immersive web experiences.',
    expertise: 'Advanced',
    yearsUsed: 4,
    projects: 20,
    useCases: ['3D Configurators', 'Visualizations', 'Interactive Experiences']
  },
  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    categoryId: 'backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'JavaScript runtime for building scalable server-side applications.',
    expertise: 'Expert',
    yearsUsed: 10,
    projects: 180,
    useCases: ['APIs', 'Microservices', 'Real-time Apps']
  },
  {
    id: 'python',
    name: 'Python',
    categoryId: 'backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Versatile language for backend, data science, and AI applications.',
    expertise: 'Expert',
    yearsUsed: 8,
    projects: 60,
    useCases: ['AI/ML', 'Data Processing', 'Automation']
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    categoryId: 'backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    description: 'Progressive Node.js framework for enterprise applications.',
    expertise: 'Advanced',
    yearsUsed: 4,
    projects: 35,
    useCases: ['Enterprise APIs', 'Microservices', 'GraphQL']
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    categoryId: 'backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    description: 'Modern Python framework for building APIs with automatic documentation.',
    expertise: 'Advanced',
    yearsUsed: 3,
    projects: 25,
    useCases: ['REST APIs', 'ML APIs', 'High-performance APIs']
  },
  // Mobile
  {
    id: 'react-native',
    name: 'React Native',
    categoryId: 'mobile',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Cross-platform mobile development with React.',
    expertise: 'Expert',
    yearsUsed: 6,
    projects: 40,
    useCases: ['iOS Apps', 'Android Apps', 'Cross-platform']
  },
  {
    id: 'flutter',
    name: 'Flutter',
    categoryId: 'mobile',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    description: 'Google\'s UI toolkit for cross-platform development.',
    expertise: 'Advanced',
    yearsUsed: 3,
    projects: 15,
    useCases: ['Mobile Apps', 'Desktop Apps', 'Web Apps']
  },
  {
    id: 'swift',
    name: 'Swift',
    categoryId: 'mobile',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    description: 'Apple\'s programming language for iOS development.',
    expertise: 'Advanced',
    yearsUsed: 5,
    projects: 20,
    useCases: ['Native iOS', 'macOS Apps', 'watchOS']
  },
  // Database
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    categoryId: 'database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    description: 'Advanced open-source relational database.',
    expertise: 'Expert',
    yearsUsed: 12,
    projects: 150,
    useCases: ['Transactional Data', 'Analytics', 'Geospatial']
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    categoryId: 'database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    description: 'Document-oriented NoSQL database for flexible data models.',
    expertise: 'Expert',
    yearsUsed: 8,
    projects: 80,
    useCases: ['Content Management', 'Real-time Data', 'IoT']
  },
  {
    id: 'redis',
    name: 'Redis',
    categoryId: 'database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    description: 'In-memory data store for caching and real-time features.',
    expertise: 'Advanced',
    yearsUsed: 7,
    projects: 60,
    useCases: ['Caching', 'Sessions', 'Real-time Features']
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    categoryId: 'database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
    description: 'Distributed search and analytics engine.',
    expertise: 'Advanced',
    yearsUsed: 6,
    projects: 35,
    useCases: ['Search', 'Log Analytics', 'Data Discovery']
  },
  // Cloud & DevOps
  {
    id: 'aws',
    name: 'AWS',
    categoryId: 'cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    description: 'Amazon Web Services cloud platform.',
    expertise: 'Expert',
    yearsUsed: 10,
    projects: 120,
    useCases: ['Cloud Hosting', 'Serverless', 'ML Infrastructure']
  },
  {
    id: 'docker',
    name: 'Docker',
    categoryId: 'cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: 'Container platform for application deployment.',
    expertise: 'Expert',
    yearsUsed: 8,
    projects: 140,
    useCases: ['Containerization', 'Development', 'CI/CD']
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    categoryId: 'cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',
    description: 'Container orchestration for scalable deployments.',
    expertise: 'Advanced',
    yearsUsed: 5,
    projects: 40,
    useCases: ['Orchestration', 'Scaling', 'Microservices']
  },
  // AI & ML
  {
    id: 'openai',
    name: 'OpenAI',
    categoryId: 'ai',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    description: 'Leading AI platform for natural language processing.',
    expertise: 'Advanced',
    yearsUsed: 3,
    projects: 25,
    useCases: ['Chatbots', 'Content Generation', 'Analysis']
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    categoryId: 'ai',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    description: 'Open-source machine learning framework.',
    expertise: 'Advanced',
    yearsUsed: 5,
    projects: 20,
    useCases: ['Deep Learning', 'Image Recognition', 'NLP']
  },
  {
    id: 'langchain',
    name: 'LangChain',
    categoryId: 'ai',
    logo: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4',
    description: 'Framework for developing LLM-powered applications.',
    expertise: 'Advanced',
    yearsUsed: 2,
    projects: 15,
    useCases: ['AI Agents', 'RAG Systems', 'Chatbots']
  }
];

export const getTechnologiesByCategory = (categoryId) => {
  return technologies.filter(tech => tech.categoryId === categoryId);
};

export const getTechnologyById = (id) => {
  return technologies.find(tech => tech.id === id);
};
