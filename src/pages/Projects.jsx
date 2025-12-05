import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { Helmet } from 'react-helmet-async';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'Aayo Rides Platform',
      description: 'Revolutionary ride-sharing platform transforming transportation in Nepal with real-time tracking and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Maps API'],
      category: 'web',
      link: 'https://www.aayorides.com/',
      featured: true
    },
    {
      title: 'Kisan Care UX Design',
      description: 'Comprehensive UX research and design for agricultural technology platform, focusing on accessibility and user-centered design.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
      technologies: ['Figma', 'User Research', 'Prototyping', 'Accessibility'],
      category: 'design',
      link: 'https://www.facebook.com/kisancarenepal',
      featured: true
    },
    {
      title: 'Dev Community Platform',
      description: 'Community management platform for developer bootcamps with event planning, resource sharing, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Community Tools'],
      category: 'web',
      link: 'https://devcommunitynepal.org/'
    },
    {
      title: 'Sajilo Patro UX Research',
      description: 'User experience research and optimization for Nepal\'s popular calendar application, improving usability by 45%.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['UX Research', 'Analytics', 'User Testing', 'Mobile Design'],
      category: 'design',
      link: 'https://play.google.com/store/search?q=sajilo+patro&c=apps&hl=en_US&gl=US'
    },
    {
      title: 'Content Strategy Framework',
      description: 'AI-powered content creation and strategy framework that increased engagement by 70% across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      technologies: ['AI/ML', 'Content Strategy', 'Analytics', 'SEO'],
      category: 'content',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing creative work with advanced animations and user interactions.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
      category: 'web',
      link: '#',
      featured: true
    },
    {
      title: '100 SEO Tools',
      description: 'Working on comprehensive SEO tool suite for analytics and optimization.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'SEO', 'Analytics'],
      category: 'web',
      link: 'https://www.100seotools.com/'
    },
    {
      title: 'Krishi Himalaya',
      description: 'Working on agritech platform enhancements and accessible UX improvements.',
      image: 'https://images.unsplash.com/photo-1500937726139-f28b21a4b9e8?w=600&h=400&fit=crop',
      technologies: ['UX Research', 'Analytics', 'Web', 'Accessibility'],
      category: 'web',
      link: 'https://krishihimalaya.com/'
    },
    {
      title: 'Hashtag Web Solution',
      description: 'Working on agency web solutions focusing on performance and SEO.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Performance', 'SEO'],
      category: 'web',
      link: 'https://hashtagweb.com.np/'
    }
    ,
    {
      title: 'Delta Engineering',
      description: 'Working on automation and project execution website enhancements.',
      image: 'https://images.unsplash.com/photo-1581091012184-5cbf39ab3c91?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Performance', 'SEO'],
      category: 'web',
      link: 'https://www.deltaengineeringsolution.com/'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'UX/UI Design' },
    { id: 'content', name: 'Content Strategy' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      <Helmet>
        <title>My Projects | Abhishek Adhikari - Design & Development Portfolio</title>
        <meta name="description" content="Explore a collection of UI/UX design, web development, and content strategy projects by Abhishek Adhikari." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-24 md:pt-28">
      {/* Header Section */}
      <section className="mb-12 md:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CodeBracketIcon className="w-16 h-16 md:w-20 md:h-20 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">My Projects</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my journey in design, development, and innovation.
            Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-10 md:mb-12"
          >
            Featured Work
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 ease-out flex flex-col"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 md:p-6">
                     <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto pt-3 border-t border-border/50">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center text-sm px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 flex-1"
                    >
                      <EyeIcon className="h-4 w-4 mr-2" />
                      View Project
                    </motion.a>
                    {/* Assuming a GitHub link might be available for some projects */}
                    {project.githubLink && (
                       <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center text-sm px-4 py-2 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-200 flex-1"
                      >
                        <CodeBracketIcon className="h-4 w-4 mr-2" />
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-10 md:mb-12"
          >
            Explore All Projects
          </motion.h2>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  filter === category.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 ease-out flex flex-col group"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <div className="absolute bottom-0 left-0 p-4">
                     <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 leading-relaxed flex-grow h-16 sm:h-20 overflow-hidden text-ellipsis">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full border border-primary/20">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground">+ {project.technologies.length - 3} more</span>
                    )}
                  </div>
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 1 }} 
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group mt-auto pt-2 border-t border-border/50 w-full justify-between"
                  >
                    View Details <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Removed the blurred background div for a cleaner look */}
            <div className="relative bg-card border border-border rounded-xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Have a project in mind?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how I can help bring your vision to life with user-focused design and development.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(var(--color-primary-rgb), 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md"
              >
                Start a Conversation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Projects;
