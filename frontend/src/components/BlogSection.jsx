import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories, getAuthorById } from '../data/blog';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  // Get first 3 blog posts for homepage
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-6">
            The latest articles on the blog
          </h2>
          <p className="text-gray-600 text-lg">
            We enjoy sharing expert knowledge about innovations, best practices, and trends
            in AI and technology, business process automation, and IT project execution.
            We also create the podcast &quot;WM Talks&quot;, where we discuss the possibilities and
            practical applications of modern technologies in business.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => {
            const author = getAuthorById(post.authorId);
            const category = blogCategories.find(c => c.id === post.categoryId);
            
            return (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-pink-600">
                      {category?.name || post.categoryId}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  {/* Author */}
                  {author && (
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="text-gray-600 text-sm">{author.name}</span>
                    </div>
                  )}

                  {/* Title */}
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Date */}
                  <p className="text-gray-500 text-sm">{post.publishedAt}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
          >
            Check out other articles
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
