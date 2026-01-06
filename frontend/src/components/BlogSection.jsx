import React from 'react';
import { blogPosts } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
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
            We also create the podcast "WM Talks", where we discuss the possibilities and
            practical applications of modern technologies in business.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-pink-600">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-gray-600 text-sm">{post.author}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Date */}
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
          >
            Check out other articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
