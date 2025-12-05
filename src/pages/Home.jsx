import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, SparklesIcon, RocketLaunchIcon, PaintBrushIcon, PencilIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Throttle the mousemove event to improve performance
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    {
      title: 'UI/UX Innovation',
      description: '22+ years of creating intuitive digital experiences with expertise in Figma, Framer, and modern design systems.',
      icon: PaintBrushIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Agri-Tech Solutions',
      description: 'Bridging technology and traditional farming through innovative digital solutions and sustainable systems.',
      icon: SparklesIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Product Strategy',
      description: 'Transforming complex challenges into user-centered solutions with measurable business impact.',
      icon: RocketLaunchIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Organic Systems Design',
      description: 'Designing sustainable agricultural systems that blend traditional wisdom with modern technology.',
      icon: PencilIcon,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Human-Centered Design',
      description: 'Creating inclusive, accessible, and impactful digital experiences that solve real human needs.',
      icon: UsersIcon,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 overflow-y-auto overflow-x-hidden">
   
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" aria-label="Introduction">
        {/* Dynamic background effects - optimized for performance */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-90" />
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            background: `
              radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.08), transparent 60%),
              radial-gradient(1000px at 50% 0%, rgba(var(--accent-rgb), 0.1), transparent 70%)
            `,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-10 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-card/50 border border-border/50 shadow-sm backdrop-blur-sm hover:bg-card/70 hover:border-border transition-all duration-300 group cursor-default"
            >
              <StarIcon className="h-5 w-5 text-secondary mr-2.5 animate-pulse-slow" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Pioneering Digital & Agricultural Innovation Since 2001
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                <PaintBrushIcon className="h-4 w-4 text-secondary" /> Figma Expert
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <SparklesIcon className="h-4 w-4 text-primary" /> UI/UX Design
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <RocketLaunchIcon className="h-4 w-4 text-accent" /> Agri-Tech
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="relative text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent pb-1"
          >
            Namaste, I'm{" "}
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-300 via-emerald-400 to-yellow-300 drop-shadow-[0_8px_32px_rgba(16,185,129,0.7)]">
              Abhishek Adhikari
              <div className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/70 via-secondary/70 to-accent/70 rounded-full" />
              <div className="absolute -inset-1 blur-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-70 rounded-full -z-10" />
            </span>
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-foreground/95">UI/UX Expert & Agri-Tech Innovator</span>{" "}
            <span className="text-muted-foreground/75">crafting intuitive digital experiences that bridge technology and agriculture</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="mb-10">
            <div className="text-xl md:text-2xl lg:text-3xl font-medium h-16 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                className="text-gradient-primary animate-gradient"
              >
                <TypeAnimation
                  sequence={[
                    'Bridging Digital Design & Agriculture',
                    2000,
                    'Creating Sustainable Tech Solutions',
                    2000,
                    'Transforming Ideas into Reality',
                    2000,
                    'Pioneering Agri-Tech Innovation',
                    2000,
                    'Crafting Intuitive User Experiences',
                    2000,
                    'Building Digital Farm Solutions',
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient"
                  style={{ backgroundSize: '200% auto' }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link 
                to="/projects"
                className="btn bg-primary text-primary-foreground hover:bg-primary/90 text-base shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                View My Work 
                <RocketLaunchIcon className="inline-block h-4 w-4 ml-2 opacity-80 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link 
                to="/contact"
                className="btn bg-card text-card-foreground hover:bg-muted/80 border border-border text-base shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                Get In Touch
                <PencilIcon className="inline-block h-4 w-4 ml-2 opacity-80 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator - improved for better performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="fixed bottom-8 inset-x-0 mx-auto w-max flex flex-col items-center gap-2 cursor-pointer group z-20"
            onClick={() => {
              // Use native scrolling for better performance
              const skillsSection = document.querySelector('section.py-20.md\\:py-28');
              if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
            title="Scroll down"
          >
            <span className="text-sm text-muted-foreground/70">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-1.5">
              <motion.div
                className="w-1.5 h-2.5 rounded-full bg-muted-foreground/50 will-change-transform"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section - optimized animations */}
      <motion.section 
        className="py-20 md:py-28 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(var(--primary-rgb),0.1),transparent_80%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={itemVariants}
              className="text-center mb-16 relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
              >
                <SparklesIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Expert Skills</span>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80">
                Mastering Digital Design &
                <br className="hidden sm:block" />
                Agricultural Innovation
              </h2>
              
              <p className="text-lg text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
                With over two decades of experience, I blend cutting-edge UI/UX design principles
                <br className="hidden sm:block" />
                with sustainable agricultural technology solutions to create impactful digital experiences.
              </p>

              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-20 pointer-events-none" />
            </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-8 hover:border-primary/20 hover:bg-card/70 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/25 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/40 group-hover:scale-110">
                    <skill.icon className="h-7 w-7 transform transition-transform duration-300 group-hover:rotate-3" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    

      {/* CTA Section */}
      <motion.section 
        className="py-20 md:py-28 bg-card border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">Ready to Start a Project?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's collaborate to bring your vision to life. I'm excited to learn about your ideas and discuss how we can create something truly remarkable together.
            </p>
            <motion.div 
              whileHover={{ scale: 1.03, y: -2 }} 
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block"
            >
              <Link 
                to="/contact"
                className="btn bg-primary text-primary-foreground hover:bg-primary/90 text-base shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                Let's Connect 
                <SparklesIcon className="inline-block h-4 w-4 ml-2 opacity-80 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section (Placeholder - to be developed based on CV) */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-foreground tracking-tight">Kind Words</h2>
          <div className="text-center text-muted-foreground">
            <p>Testimonials will be showcased here soon, reflecting the positive impact of my work and collaborations.</p>
            {/* Placeholder for future testimonial components */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;