// Blog Data Model - Complete implementation

export const blogCategories = [
  { id: 'all', name: 'All Articles', slug: 'all' },
  { id: 'ai', name: 'AI', slug: 'ai' },
  { id: 'knowledge', name: 'Knowledge', slug: 'knowledge' },
  { id: 'development', name: 'Development', slug: 'development' },
  { id: 'design', name: 'Design', slug: 'design' },
  { id: 'business', name: 'Business', slug: 'business' }
];

export const blogAuthors = [
  {
    id: 'slawomir-duda',
    name: 'Sławomir Duda',
    role: 'CEO & Co-founder',
    avatar: 'https://webmakers.expert/assets/images/blog/_common/authors/slawomir_duda_sm_1x.webp',
    bio: 'Founder and CEO of WebMakers with over 15 years of experience in software development.',
    linkedin: 'https://linkedin.com/in/slawomir-duda'
  },
  {
    id: 'damian-maslanka',
    name: 'Damian Maślanka',
    role: 'CTO',
    avatar: 'https://webmakers.expert/assets/images/blog/_common/authors/damian_maslanka_sm_1x.webp',
    bio: 'Chief Technology Officer leading our technical strategy and AI initiatives.',
    linkedin: 'https://linkedin.com/in/damian-maslanka'
  },
  {
    id: 'lukasz-wozniakiewicz',
    name: 'Łukasz Woźniakiewicz',
    role: 'Head of Marketing',
    avatar: 'https://webmakers.expert/assets/images/blog/_common/authors/lukasz_wozniakiewicz_sm_1x.webp',
    bio: 'Digital marketing expert specializing in SEO and content strategy.',
    linkedin: 'https://linkedin.com/in/lukasz-wozniakiewicz'
  }
];

export const blogPosts = [
  {
    id: 1,
    slug: 'why-your-ecommerce-needs-a-configurator',
    title: 'Why your e-commerce needs a configurator?',
    excerpt: 'Product configurators are becoming essential for e-commerce businesses. Learn how they can boost your conversion rates and customer satisfaction.',
    content: `
      <h2>The Rise of Product Configurators</h2>
      <p>In today's competitive e-commerce landscape, businesses are constantly looking for ways to stand out and provide unique value to their customers. Product configurators have emerged as a powerful tool to achieve both goals.</p>
      
      <h2>What is a Product Configurator?</h2>
      <p>A product configurator is an interactive tool that allows customers to customize products according to their preferences. From choosing colors and materials to adjusting dimensions and features, configurators put the power of design in the customer's hands.</p>
      
      <h2>Key Benefits</h2>
      <h3>1. Increased Conversion Rates</h3>
      <p>Studies show that businesses with product configurators see an average increase of 30-40% in conversion rates. When customers can visualize their customizations in real-time, they're more confident in their purchase decisions.</p>
      
      <h3>2. Higher Average Order Value</h3>
      <p>Configurators often lead to higher-value orders as customers add premium options and customizations they might not have considered otherwise.</p>
      
      <h3>3. Reduced Returns</h3>
      <p>When customers can see exactly what they're ordering, there are fewer surprises upon delivery, leading to significantly lower return rates.</p>
      
      <h2>Implementation Considerations</h2>
      <p>When implementing a product configurator, consider factors such as 3D rendering capabilities, integration with your existing e-commerce platform, and mobile responsiveness.</p>
    `,
    categoryId: 'knowledge',
    authorId: 'slawomir-duda',
    image: 'https://webmakers.expert/images/blog/en/why-your-e-commerce-needs-a-configurator/why-your-e-commerce-needs-a-configurator_sm.webp',
    publishedAt: '2025-10-21',
    readTime: 8,
    tags: ['e-commerce', 'configurator', 'conversion', 'UX'],
    featured: true
  },
  {
    id: 2,
    slug: 'ai-micro-automations-big-results',
    title: 'AI Micro-automations - how simple automations can deliver big results',
    excerpt: 'Discover how small, targeted AI automations can transform your business operations without massive investments.',
    content: `
      <h2>The Power of Small Changes</h2>
      <p>When businesses think about AI implementation, they often envision large-scale transformations requiring significant investment. However, some of the most impactful AI applications are small, targeted automations that solve specific problems.</p>
      
      <h2>What are AI Micro-automations?</h2>
      <p>AI micro-automations are small, focused applications of artificial intelligence that automate specific tasks or processes. Unlike enterprise-wide AI initiatives, these solutions can be implemented quickly and deliver immediate value.</p>
      
      <h2>Examples of Effective Micro-automations</h2>
      <ul>
        <li>Email response categorization and routing</li>
        <li>Invoice data extraction</li>
        <li>Meeting summary generation</li>
        <li>Social media content scheduling</li>
        <li>Customer inquiry classification</li>
      </ul>
      
      <h2>Implementation Approach</h2>
      <p>Start by identifying repetitive tasks that consume significant time but follow predictable patterns. These are ideal candidates for micro-automation.</p>
    `,
    categoryId: 'ai',
    authorId: 'damian-maslanka',
    image: 'https://webmakers.expert/images/blog/en/how-simple-automations-can-deliver-big-results/how-simple-automations-can-deliver-big-results_sm.webp',
    publishedAt: '2025-10-14',
    readTime: 6,
    tags: ['AI', 'automation', 'productivity', 'business'],
    featured: true
  },
  {
    id: 3,
    slug: 'impact-of-product-configurators-on-conversion',
    title: 'The impact of product configurators on conversion rates in online shops',
    excerpt: 'Data-driven analysis of how product configurators affect e-commerce conversion rates across different industries.',
    content: `
      <h2>Research Findings</h2>
      <p>Our analysis of over 50 e-commerce implementations reveals significant patterns in how product configurators impact business metrics.</p>
      
      <h2>Key Statistics</h2>
      <p>Across industries, we observed:</p>
      <ul>
        <li>Average conversion rate increase: 35%</li>
        <li>Average order value increase: 28%</li>
        <li>Return rate reduction: 45%</li>
        <li>Time on site increase: 62%</li>
      </ul>
      
      <h2>Industry Breakdown</h2>
      <h3>Furniture</h3>
      <p>Furniture retailers see the highest impact, with some businesses reporting conversion increases of up to 60%.</p>
      
      <h3>Fashion</h3>
      <p>Fashion retailers benefit significantly from virtual try-on and customization features.</p>
    `,
    categoryId: 'knowledge',
    authorId: 'slawomir-duda',
    image: 'https://webmakers.expert/images/blog/en/impact-of-product-configurators-on-conversion-rates-in-online-shops/impact-of-product-configurators-on-conversion-rates-in-online-shops_sm.webp',
    publishedAt: '2025-08-28',
    readTime: 10,
    tags: ['e-commerce', 'conversion', 'analytics', 'configurator'],
    featured: false
  },
  {
    id: 4,
    slug: 'importance-of-seo-and-geo-in-age-of-ai',
    title: 'The importance of SEO and GEO in the age of AI',
    excerpt: 'How AI is changing the SEO landscape and why GEO (Generative Engine Optimization) is becoming crucial.',
    content: `
      <h2>The Evolving Search Landscape</h2>
      <p>With the rise of AI-powered search engines and assistants, the way people find information online is fundamentally changing. This shift requires a new approach to digital visibility.</p>
      
      <h2>Understanding GEO</h2>
      <p>Generative Engine Optimization (GEO) is the practice of optimizing content for AI systems that generate responses rather than simply returning links.</p>
      
      <h2>Key Strategies</h2>
      <ul>
        <li>Structured data implementation</li>
        <li>Comprehensive content coverage</li>
        <li>Authority building</li>
        <li>Technical optimization</li>
      </ul>
    `,
    categoryId: 'knowledge',
    authorId: 'lukasz-wozniakiewicz',
    image: 'https://webmakers.expert/images/blog/en/importance-of-seo-and-geo-in-the-age-of-ai/importance-of-seo-and-geo-in-the-age-of-ai_sm.webp',
    publishedAt: '2025-08-05',
    readTime: 7,
    tags: ['SEO', 'GEO', 'AI', 'marketing'],
    featured: true
  },
  {
    id: 5,
    slug: 'product-configurator-jewelry-industry',
    title: 'Product configurator for the jewelry industry',
    excerpt: 'How jewelry businesses can leverage 3D configurators to offer personalized pieces and boost sales.',
    content: `
      <h2>The Jewelry Customization Trend</h2>
      <p>The jewelry industry is experiencing a significant shift toward personalization. Customers increasingly want unique pieces that reflect their individual style.</p>
      
      <h2>Configurator Features for Jewelry</h2>
      <ul>
        <li>Metal selection (gold, silver, platinum)</li>
        <li>Gemstone customization</li>
        <li>Engraving options</li>
        <li>Ring size selection</li>
        <li>360° product view</li>
      </ul>
    `,
    categoryId: 'knowledge',
    authorId: 'slawomir-duda',
    image: 'https://webmakers.expert/images/blog/en/product-configurator-for-the-jewelry-industry/product-configurator-for-the-jewelry-industry_sm.webp',
    publishedAt: '2025-07-22',
    readTime: 6,
    tags: ['jewelry', 'configurator', 'e-commerce', '3D'],
    featured: false
  },
  {
    id: 6,
    slug: 'building-scalable-react-applications',
    title: 'Building scalable React applications: Best practices for 2025',
    excerpt: 'Learn the latest patterns and practices for building React applications that scale with your business.',
    content: `
      <h2>Modern React Architecture</h2>
      <p>As React continues to evolve, so do the best practices for building scalable applications. Here are the key patterns for 2025.</p>
      
      <h2>Key Practices</h2>
      <ul>
        <li>Server Components and RSC patterns</li>
        <li>Proper state management</li>
        <li>Code splitting strategies</li>
        <li>Testing approaches</li>
      </ul>
    `,
    categoryId: 'development',
    authorId: 'damian-maslanka',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    publishedAt: '2025-07-15',
    readTime: 12,
    tags: ['React', 'development', 'architecture', 'best practices'],
    featured: false
  }
];

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (categoryId) => {
  if (categoryId === 'all') return blogPosts;
  return blogPosts.filter(post => post.categoryId === categoryId);
};

export const getAuthorById = (authorId) => {
  return blogAuthors.find(author => author.id === authorId);
};

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getRelatedPosts = (currentPost, limit = 3) => {
  return blogPosts
    .filter(post => post.id !== currentPost.id && post.categoryId === currentPost.categoryId)
    .slice(0, limit);
};
