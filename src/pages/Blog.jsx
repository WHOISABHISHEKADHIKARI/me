import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  CalendarIcon, 
  ClockIcon, 
  TagIcon,
  ArrowTopRightOnSquareIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const Blog = () => {
  const [filter, setFilter] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of UI/UX Design: Trends to Watch in 2024',
      excerpt: 'Exploring emerging design trends, AI integration, and the evolution of user experience in the digital landscape.',
      content: 'As we navigate through 2024, the UI/UX design landscape continues to evolve at an unprecedented pace...',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=400&fit=crop',
      category: 'design',
      author: 'Abhishek Adhikari',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['UI/UX', 'Design Trends', 'Future Tech'],
      featured: true
    },
    {
      id: 2,
      title: 'Building Sustainable Agricultural Technology in Nepal',
      excerpt: 'How technology can bridge the gap between traditional farming practices and modern agricultural solutions.',
      content: 'Nepal\'s agricultural sector represents the backbone of our economy, employing over 60% of the population...',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop',
      category: 'agriculture',
      author: 'Abhishek Adhikari',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['Agriculture', 'Technology', 'Nepal', 'Sustainability'],
      featured: true
    },
    {
      id: 3,
      title: 'React Performance Optimization: Best Practices',
      excerpt: 'Essential techniques for building fast, efficient React applications that scale.',
      content: 'Performance optimization in React applications is crucial for delivering exceptional user experiences...',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      category: 'development',
      author: 'Abhishek Adhikari',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['React', 'Performance', 'JavaScript', 'Web Development']
    },
    {
      id: 4,
      title: 'Content Strategy for Digital Products',
      excerpt: 'Creating compelling content that drives engagement and converts users into customers.',
      content: 'In today\'s digital landscape, content strategy plays a pivotal role in product success...',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      category: 'content',
      author: 'Abhishek Adhikari',
      date: '2023-12-28',
      readTime: '6 min read',
      tags: ['Content Strategy', 'Digital Marketing', 'User Engagement']
    },
    {
      id: 5,
      title: 'User Research Methods for Better Design Decisions',
      excerpt: 'A comprehensive guide to conducting effective user research that informs design decisions.',
      content: 'User research forms the foundation of great design. Understanding your users\' needs, behaviors, and pain points...',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      category: 'design',
      author: 'Abhishek Adhikari',
      date: '2023-12-20',
      readTime: '9 min read',
      tags: ['User Research', 'UX Design', 'Design Process']
    },
    {
      id: 6,
      title: 'The Rise of No-Code Solutions in Modern Development',
      excerpt: 'Exploring how no-code platforms are democratizing software development and empowering creators.',
      content: 'The no-code movement has gained significant momentum, enabling non-technical users to build sophisticated applications...',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      category: 'development',
      author: 'Abhishek Adhikari',
      date: '2023-12-15',
      readTime: '7 min read',
      tags: ['No-Code', 'Development', 'Innovation', 'Productivity']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'design', name: 'Design' },
    { id: 'development', name: 'Development' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'content', name: 'Content Strategy' }
  ];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Helmet>
        <title>Blog | Abhishek Adhikari - Insights on Design, Development & Innovation</title>
        <meta name="description" content="Read insights on UI/UX design, web development, agricultural technology, and digital innovation by Abhishek Adhikari." />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-24 md:pt-28">
        {/* Header Section */}
        <section className="mb-12 md:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpenIcon className="w-16 h-16 md:w-20 md:h-20 mx-auto text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">Blog</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, thoughts, and experiences on design, development, and innovation.
              Join me on this journey of continuous learning and discovery.
            </p>
          </motion.div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-10 md:mb-12"
            >
              Featured Articles
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 ease-out"
                >
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span>{formatDate(post.date)}</span>
                      <ClockIcon className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group"
                    >
                      Read More 
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-10 md:mb-12"
            >
              All Articles
            </motion.h2>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Blog Posts Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 ease-out"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      <span>{formatDate(post.date)}</span>
                      <ClockIcon className="w-3 h-3 ml-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group mt-auto"
                    >
                      Read Article 
                      <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-card border border-border rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about new articles on design, development, and innovation.
              No spam, just quality content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Blog;