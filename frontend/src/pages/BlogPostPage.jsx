import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { blogPosts, getBlogPostBySlug, getAuthorById, getRelatedPosts, blogCategories } from '../data/blog';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Article not found</h1>
          <Link to="/blog" className="text-pink-600 hover:underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  const author = getAuthorById(post.authorId);
  const relatedPosts = getRelatedPosts(post);
  const category = blogCategories.find(c => c.id === post.categoryId);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <span className="text-white font-medium line-clamp-1">{post.title}</span>
              </li>
            </ol>
          </nav>

          {/* Category */}
          {category && (
            <Link 
              to={`/blog?category=${category.id}`}
              className="inline-block bg-pink-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 hover:bg-pink-700 transition-colors"
            >
              {category.name}
            </Link>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            {author && (
              <div className="flex items-center gap-3">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-white">{author.name}</div>
                  <div className="text-sm text-gray-400">{author.role}</div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar - Share */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 flex flex-row lg:flex-col gap-4">
                <span className="text-gray-500 text-sm hidden lg:block">Share</span>
                <button 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors"
                  aria-label="Copy link"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-11">
              {/* Featured Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-2xl mb-8"
              />

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                {post.excerpt}
              </p>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-pink-100 hover:text-pink-600 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              {author && (
                <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
                  <div className="flex items-start gap-6">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{author.name}</h3>
                      <p className="text-pink-600 text-sm mb-3">{author.role}</p>
                      <p className="text-gray-600 mb-4">{author.bio}</p>
                      {author.linkedin && (
                        <a 
                          href={author.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span>Connect on LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-3xl font-serif italic text-gray-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => {
                const relatedAuthor = getAuthorById(relatedPost.authorId);
                return (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{relatedPost.publishedAt}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;
