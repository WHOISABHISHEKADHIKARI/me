import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, SparklesIcon, RocketLaunchIcon, PaintBrushIcon, PencilIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline';
import { TypeAnimation } from 'react-type-animation';
import Breadcrumbs from '../components/Breadcrumbs';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
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
    <div className="min-h-screen pt-20">
      <Breadcrumbs />
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-blue-900 via-background to-green-900" aria-label="Introduction">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-sm" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1000px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 70%),
              radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--secondary-rgb), 0.12), transparent 50%),
              radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--accent-rgb), 0.08), transparent 40%),
              linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), rgba(var(--secondary-rgb), 0.05))
            `
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10"
          >
          <motion.div variants={itemVariants} className="mb-14 space-y-6">
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

          {/* Hidden SEO title */}
          <h1 className="sr-only">Abhishek Adhikari - UI/UX Designer & Agri-Tech Specialist</h1>
          
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex flex-col items-center gap-3 mb-10 mt-8"
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 mb-1">Namaste, I'm</span>
            <span className="relative block text-7xl sm:text-8xl md:text-9xl font-extrabold bg-gradient-to-br from-blue-500 via-green-300 via-emerald-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_8px_32px_rgba(16,185,129,0.7)] mb-2 animate-glow">
              <span className="absolute -inset-3 rounded-3xl blur-3xl opacity-70 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-300 z-0 animate-pulse"></span>
              <span className="relative z-10">Abhishek Adhikari</span>
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-1">UI/UX Expert & Agri-Tech Innovator</span>
            <span className="block text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto">Crafting intuitive digital experiences that bridge technology and agriculture.</span>
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-teal-400 text-white text-xs font-semibold tracking-widest shadow-lg mt-4 animate-pulse">Transforming Ideas into Reality</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="overflow-hidden relative"
              >
                <motion.span 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 bg-gradient-to-br from-blue-400 to-indigo-600 bg-clip-text text-transparent"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  Namaste,
                </motion.span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 to-indigo-600/10 rounded-lg blur-sm z-0"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="overflow-hidden ml-3 relative"
              >
                <motion.span 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  I'm
                </motion.span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-lg blur-sm z-0"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="overflow-hidden relative mt-1"
            >
              <motion.div className="relative">
                <motion.div
                  className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl blur-md z-0"
                  animate={{
                    opacity: [0.6, 0.9, 0.6],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div className="relative inline-block">
                  <motion.div 
                    className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg blur-md z-0"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [0.98, 1.02, 0.98],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient relative z-10 inline-block"
                    style={{ backgroundSize: '200% auto' }}
                    whileHover={{
                      scale: 1.03,
                      textShadow: [
                        "0 0 8px rgba(var(--primary-rgb), 0.6)",
                        "0 0 16px rgba(var(--secondary-rgb), 0.6)",
                        "0 0 8px rgba(var(--accent-rgb), 0.6)",
                      ],
                      transition: { duration: 1, repeat: Infinity },
                    }}
                  >
                    <motion.span 
                      className="inline-block"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      A
                    </motion.span>
                    <motion.span className="inline-block">bhishek </motion.span>
                    <motion.span 
                      className="inline-block"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      A
                    </motion.span>
                    <motion.span className="inline-block">dhikari</motion.span>
                  </motion.span>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
              <motion.div 
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                ✨
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 max-w-3xl mx-auto leading-relaxed overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="relative inline-block"
            >
              <motion.span 
                className="bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90 bg-clip-text text-transparent"
                whileHover={{
                  backgroundImage: ["linear-gradient(to right, var(--primary), var(--secondary), var(--accent))", "linear-gradient(to left, var(--primary), var(--secondary), var(--accent))"],
                }}
                transition={{ duration: 1 }}
              >
                UI/UX Expert & Agri-Tech Innovator
              </motion.span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.6 }}
              />
            </motion.div>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-muted-foreground/90 relative inline-block"
            >
              crafting intuitive digital experiences that bridge technology and agriculture
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 2 }}
              />
            </motion.span>
          </motion.h3>

          <motion.div variants={itemVariants} className="mb-10">
            <div className="text-xl md:text-2xl lg:text-3xl font-medium h-16 flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
                className="relative px-8 py-3"
              >
                <motion.div
                  className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-30"
                  style={{ backdropFilter: "blur(4px)" }}
                />
                <motion.div
                  className="absolute -right-3 -top-3 w-6 h-6 text-lg"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute -left-3 -bottom-3 w-6 h-6 text-lg"
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  🌱
                </motion.div>
                <TypeAnimation
                  sequence={[
                    'Bridging Digital Design & Agriculture ✨',
                    2000,
                    'Creating Sustainable Tech Solutions 🌱',
                    2000,
                    'Transforming Ideas into Reality 💫',
                    2000,
                    'Pioneering Agri-Tech Innovation 🚀',
                    2000,
                    'Crafting Intuitive User Experiences 🎨',
                    2000,
                    'Building Digital Farm Solutions 🌿',
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient"
                  style={{ backgroundSize: '200% auto' }}
                />
                <motion.div
                  className="absolute inset-0 border border-primary/10 rounded-xl"
                  animate={{
                    borderColor: ['rgba(var(--primary-rgb), 0.1)', 'rgba(var(--secondary-rgb), 0.1)', 'rgba(var(--accent-rgb), 0.1)'],
                    boxShadow: [
                      '0 0 0px rgba(var(--primary-rgb), 0)',
                      '0 0 8px rgba(var(--secondary-rgb), 0.2)',
                      '0 0 0px rgba(var(--accent-rgb), 0)'
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group"
            >
              <motion.div 
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-70 blur-sm group-hover:opacity-100 transition duration-200"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <Link
                to="/projects"
                className="btn bg-background hover:bg-background/90 border-none relative rounded-md px-6 py-3 font-medium text-foreground flex items-center gap-2 z-10"
              >
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 0.5 }}
                >
                  View My Work
                </motion.span>
                <motion.span 
                  className="text-lg"
                  initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ delay: 2.8, duration: 0.5, type: "spring" }}
                >
                  👨‍💻
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-md border border-primary/20 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.6, duration: 0.5 }}
                />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group"
            >
              <motion.div 
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent/40 via-secondary/40 to-primary/40 opacity-50 blur-sm group-hover:opacity-80 transition duration-200"
                animate={{
                  backgroundPosition: ["100% 100%", "0% 0%"],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <Link
                to="/contact"
                className="btn bg-background hover:bg-background/90 border-none relative rounded-md px-6 py-3 font-medium text-foreground flex items-center gap-2 z-10"
              >
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8, duration: 0.5 }}
                >
                  Get In Touch
                </motion.span>
                <motion.span 
                  className="text-lg"
                  initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ delay: 3.0, duration: 0.5, type: "spring" }}
                >
                  ✉️
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-md border border-accent/20 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8, duration: 0.5 }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground/70 text-sm"
          >
            <motion.span 
              className="mb-2 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.8 }}
            >
              <motion.span
                className="relative z-10"
                animate={{ 
                  color: ["rgba(var(--muted-foreground-rgb), 0.7)", "rgba(var(--primary-rgb), 0.8)", "rgba(var(--muted-foreground-rgb), 0.7)"] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Scroll to explore
              </motion.span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                transition={{ 
                  scaleX: { duration: 1.5, delay: 3.4 },
                  opacity: { duration: 2, repeat: Infinity, repeatDelay: 1 }
                }}
              />
            </motion.span>
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.8 }}
            >
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="relative z-10"
              >
                <ArrowDownIcon className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
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
