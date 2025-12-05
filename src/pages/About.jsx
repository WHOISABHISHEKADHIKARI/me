import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircleIcon, 
  TrophyIcon, 
  StarIcon, 
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  HeartIcon,
  SparklesIcon,
  ArrowDownIcon,
  DocumentTextIcon,
  EyeIcon,
  CalendarIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline';
import { 
  CheckCircleIcon as CheckCircleIconSolid,
  StarIcon as StarIconSolid 
} from '@heroicons/react/24/solid';

const About = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Professional Statistics
  const stats = [
    { label: 'Projects Completed', value: '50+', icon: RocketLaunchIcon, color: 'from-blue-500 to-cyan-500' },
    { label: 'Community Members', value: '10K+', icon: UserGroupIcon, color: 'from-green-500 to-emerald-500' },
    { label: 'Years Experience', value: '3+', icon: CalendarIcon, color: 'from-purple-500 to-pink-500' },
    { label: 'Client Satisfaction', value: '98%', icon: HeartIcon, color: 'from-orange-500 to-red-500' }
  ];

  // Core Competencies with proficiency levels
  const coreSkills = [
    { name: 'UI/UX Design', level: 95, icon: PaintBrushIcon, color: 'from-blue-500 to-cyan-500' },
    { name: 'Content Writing', level: 90, icon: DocumentTextIcon, color: 'from-green-500 to-emerald-500' },
    { name: 'Web Development', level: 85, icon: CodeBracketIcon, color: 'from-purple-500 to-pink-500' },
    { name: 'Digital Marketing', level: 88, icon: ChartBarIcon, color: 'from-orange-500 to-red-500' },
    { name: 'Community Building', level: 92, icon: UserGroupIcon, color: 'from-teal-500 to-green-500' },
    { name: 'Project Management', level: 87, icon: BriefcaseIcon, color: 'from-indigo-500 to-purple-500' }
  ];

  // Portfolio Highlights
  const portfolioHighlights = [
    {
      title: 'Aayo Rides',
      description: 'Revolutionary ride-sharing platform with advanced booking system',
      impact: '10K+ Downloads',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Kisan Care Nepal',
      description: 'Agricultural support platform connecting farmers with resources',
      impact: '5K+ Farmers Helped',
      tech: ['React', 'Firebase', 'AI/ML'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Dev Community Nepal',
      description: 'Largest developer community platform in Nepal',
      impact: '15K+ Members',
      tech: ['Next.js', 'PostgreSQL', 'AWS'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Coding Olympics Nepal',
      description: 'National coding competition platform',
      impact: '2K+ Participants',
      tech: ['Vue.js', 'Express', 'Docker'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Client Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      content: 'Abhishek delivered exceptional UI/UX design that increased our user engagement by 40%. His attention to detail and creative approach is outstanding.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Rajesh Sharma',
      role: 'CEO at StartupXYZ',
      content: 'Working with Abhishek was a game-changer for our startup. His technical expertise and community building skills helped us grow exponentially.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Chen',
      role: 'Marketing Director',
      content: 'The content strategy and digital marketing campaigns Abhishek created resulted in 300% increase in our online presence.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  // Achievements & Awards
  const achievements = [
    {
      title: 'Google UX Design Professional Certificate',
      organization: 'Google via Coursera',
      year: '2023',
      description: 'Completed comprehensive UX design program covering user research, wireframing, prototyping, and usability testing.',
      icon: AcademicCapIcon,
      color: 'from-blue-500 to-cyan-500',
      verified: true
    },
    {
      title: 'Community Builder of the Year',
      organization: 'Nepal Tech Awards',
      year: '2023',
      description: 'Recognized for outstanding contribution to Nepal\'s tech community development.',
      icon: TrophyIcon,
      color: 'from-yellow-500 to-orange-500',
      verified: true
    },
    {
      title: 'Best UI/UX Design',
      organization: 'Hackathon Nepal 2022',
      year: '2022',
      description: 'Won first place for innovative mobile app design in national hackathon.',
      icon: StarIcon,
      color: 'from-purple-500 to-pink-500',
      verified: true
    },
    {
      title: 'Top Content Creator',
      organization: 'Medium Partnership Program',
      year: '2022',
      description: 'Achieved top writer status with 100K+ article views and 5K+ followers.',
      icon: DocumentTextIcon,
      color: 'from-green-500 to-emerald-500',
      verified: true
    }
  ];

  const experiences = [
    {
      company: 'Aayo Rides Nepal',
      role: 'Branch Development Officer',
      period: '2024/02 - Present',
      description: 'Conduct market research and identify new opportunities. Manage branches creation and daily operations. Develop and execute marketing strategies.',
      website: 'https://www.aayorides.com/',
      milestones: [
        'Established 5+ new branch locations across Nepal',
        'Increased market penetration by 40% in target regions',
        'Developed comprehensive marketing strategies resulting in 60% user growth'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      company: 'Kisan Care',
      role: 'UX Designer',
      period: '2022/07 - 2023/01',
      description: 'Design Sprint Implementation. Assistive Technology. Research on biases in UX.',
      website: 'https://www.facebook.com/kisancarenepal',
      milestones: [
        'Implemented design sprints reducing development time by 30%',
        'Researched and addressed UX biases improving user satisfaction',
        'Designed accessible interfaces for agricultural technology'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      company: 'Dev Community Nepal',
      role: 'Bootcamp Facilitator',
      period: '2023/01 - 2023/06',
      description: 'Event Planning, Marketing and Execution for developer bootcamps.',
      website: 'https://devcommunitynepal.org/',
      milestones: [
        'Successfully facilitated 10+ developer bootcamps',
        'Trained 200+ aspiring developers in modern technologies',
        'Achieved 95% completion rate across all bootcamp programs'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      company: 'Coding Olympics Nepal',
      role: 'Dep. Community Builder',
      period: '2023/01 - 2024/02',
      description: 'Community Building, Project Management, and Documentation.',
      website: 'https://www.facebook.com/CodingOlympicsNepal',
      milestones: [
        'Built active community of 1000+ developers',
        'Organized 15+ coding competitions and hackathons',
        'Created comprehensive documentation system improving efficiency by 50%'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      company: 'Sajilo Patro',
      role: 'UX Designer',
      period: '2022/04 - 2022/11',
      description: 'Marketing & Communication, UX Research, Resources Management.',
      website: 'https://play.google.com/store/search?q=sajilo+patro&c=apps&hl=en_US&gl=US',
      milestones: [
        'Conducted UX research improving app usability by 45%',
        'Managed marketing campaigns reaching 100K+ users',
        'Optimized resource allocation reducing operational costs by 25%'
      ],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      company: 'Menzz',
      role: 'Content Writing Intern',
      period: '2022/01 - 2022/07',
      description: 'Content Planning, Blog Writing, AI-Based Content Creation.',
      website: 'https://www.facebook.com/menzzco',
      milestones: [
        'Created 50+ high-quality blog posts and articles',
        'Implemented AI-based content strategies increasing engagement by 70%',
        'Developed content planning framework adopted company-wide'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      company: 'IT Club of HSMS',
      role: 'Documentation Manager',
      period: '2021/04 - 2022/11',
      description: 'Organizational Skills, Attention to Detail, Technological Proficiency.',
      website: 'https://www.facebook.com/profile.php?id=100070297141841',
      milestones: [
        'Established comprehensive documentation system for 500+ members',
        'Improved information accessibility by 80% through digital transformation',
        'Led technological initiatives enhancing club operations'
      ],
      color: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 180, 360],
            filter: ["blur(30px)", "blur(50px)", "blur(30px)"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{ 
            scale: [1.2, 1, 1.2], 
            rotate: [360, 180, 0],
            filter: ["blur(40px)", "blur(60px)", "blur(40px)"]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.3, 0.5, 0.3],
            filter: ["blur(50px)", "blur(70px)", "blur(50px)"]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        {/* Added Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * (windowSize.width || 1),
              y: Math.random() * (windowSize.height || 1)
            }}
            animate={{ 
              y: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 rounded-full glass-premium mb-8 group relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mr-3"
                >
                  <SparklesIcon className="h-5 w-5 text-blue-400" />
                </motion.div>
                <span className="text-white font-medium">Professional Portfolio & CV</span>
                <motion.div 
                  className="ml-3 w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <motion.span 
                  className="block text-gradient"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Abhishek
                </motion.span>
                <motion.span 
                  className="block text-white/90 text-4xl lg:text-5xl font-light mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Digital Innovation Specialist
                </motion.span>
              </motion.h1>

              {/* Professional Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="max-w-4xl mx-auto mb-12"
              >
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light mb-8">
                  Passionate <span className="text-gradient font-medium">UI/UX Designer</span> and 
                  <span className="text-gradient font-medium"> Community Builder</span> with 3+ years of experience 
                  creating digital solutions that impact thousands of users across Nepal and beyond.
                </p>
                
                {/* Contact Info */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-6 text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <motion.div 
                    className="flex items-center hover:text-blue-400 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    <span>Hetauda, Nepal</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center hover:text-green-400 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <EnvelopeIcon className="h-5 w-5 mr-2" />
                    <span>abhishek@example.com</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center hover:text-purple-400 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    <span>+977-XXXXXXXXX</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <span className="text-gray-400 text-sm mb-4">Scroll to explore my journey</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 rounded-full border border-gray-600 hover:border-blue-400 transition-colors cursor-pointer"
                >
                  <ArrowDownIcon className="h-5 w-5 text-gray-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Professional Statistics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                    }}
                    className="relative group"
                  >
                    {/* Glow Effect */}
                    <motion.div 
                      className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
                      animate={{ 
                        background: [
                          `linear-gradient(45deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`,
                          `linear-gradient(45deg, ${stat.color.split(' ')[3]}, ${stat.color.split(' ')[1]})`,
                          `linear-gradient(45deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="relative glass-premium rounded-2xl p-8 text-center overflow-hidden">
                      {/* Background Pattern */}
                      <motion.div 
                        className="absolute inset-0 opacity-5"
                        style={{
                          background: `linear-gradient(45deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`,
                          backgroundSize: '400% 400%'
                        }}
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                      />
                      
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 relative z-10`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-4xl font-bold text-white mb-2 relative z-10"
                        whileHover={{ scale: 1.1 }}
                      >
                        {String(stat.value).includes('%') ? '' : stat.value}
                      </motion.h3>
                      <p className="text-gray-400 font-medium relative z-10">{stat.label}</p>
                      
                      {/* Floating Elements */}
                      <motion.div 
                        className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"
                        animate={{ y: [-5, 5, -5], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold text-white mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Core <span className="text-gradient">Competencies</span>
              </motion.h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Expertise across multiple domains with proven track record of delivering exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)"
                    }}
                    className="relative group"
                  >
                    {/* Enhanced Glow */}
                    <motion.div 
                      className={`absolute -inset-2 bg-gradient-to-r ${skill.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 1, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <div className="relative glass-premium rounded-3xl p-8 overflow-hidden">
                      {/* Animated Background */}
                      <motion.div 
                        className="absolute inset-0 opacity-5"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})`,
                          backgroundSize: '200% 200%'
                        }}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                      />
                      
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} mb-6 relative z-10 shadow-2xl`}
                      >
                        <IconComponent className="h-10 w-10 text-white" />
                      </motion.div>
                      
                      {/* Skill Info */}
                      <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{skill.name}</h3>
                      
                      {/* Skill Level Bar */}
                      <div className="relative z-10 mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-sm">Proficiency</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                          >
                            <motion.div 
                              className="absolute inset-0 bg-white/20"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <motion.div 
                        className="absolute top-6 right-6 w-3 h-3 bg-white/20 rounded-full"
                        animate={{ 
                          y: [-10, 10, -10], 
                          opacity: [0.2, 1, 0.2],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <motion.div 
                        className="absolute bottom-6 left-6 w-2 h-2 bg-white/30 rounded-full"
                        animate={{ 
                          y: [10, -10, 10], 
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: index * 0.4 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio Highlights */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold text-white mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Portfolio <span className="text-gradient">Highlights</span>
              </motion.h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Showcasing impactful projects that have transformed businesses and communities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioHighlights.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.02,
                    boxShadow: "0 40px 80px rgba(0, 0, 0, 0.5)"
                  }}
                  className="relative group"
                >
                  {/* Dynamic Glow */}
                  <motion.div 
                    className={`absolute -inset-3 bg-gradient-to-r ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  
                  <div className="relative glass-premium rounded-3xl p-8 lg:p-10 overflow-hidden">
                    {/* Animated Background Pattern */}
                    <motion.div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})`,
                        backgroundSize: '300% 300%'
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                      }}
                      transition={{ duration: 12, repeat: Infinity }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.h3 
                        className="text-3xl font-bold text-white mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Impact Badge */}
                      <motion.div 
                        className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white font-semibold mb-6 shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <TrophyIcon className="h-5 w-5 mr-2" />
                        {project.impact}
                      </motion.div>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 + techIndex * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <motion.div 
                      className="absolute top-8 right-8 w-4 h-4 bg-white/20 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1], 
                        opacity: [0.2, 0.8, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <motion.div 
                      className="absolute bottom-8 left-8 w-3 h-3 bg-white/30 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1], 
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold text-white mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Professional <span className="text-gradient">Journey</span>
              </motion.h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A timeline of growth, innovation, and impactful contributions to the tech ecosystem
              </p>
            </motion.div>
            <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                </div>
                
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.website ? (
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center mt-4 lg:mt-0">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium shadow-lg`}>
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Milestones */}
                  <div className="space-y-3">
                    <div className="flex items-center mb-4">
                      <TrophyIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-800">Key Achievements</h4>
                    </div>
                    {exp.milestones.map((milestone, mIndex) => (
                      <motion.div
                        key={mIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (mIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 group/milestone"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircleIcon className={`h-5 w-5 text-green-500 mt-0.5 group-hover/milestone:text-green-600 transition-colors`} />
                        </motion.div>
                        <p className="text-gray-700 group-hover/milestone:text-gray-900 transition-colors">
                          {milestone}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 shadow-2xl rounded-2xl p-8 mb-16 relative overflow-hidden"
            >
              
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-400 via-teal-300 to-lime-400 bg-clip-text text-transparent relative z-10">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {[
                  { title: 'User Experience', desc: 'UI/UX design principles, user research, wireframing, prototyping', color: 'from-blue-500 to-cyan-500' },
                  { title: 'Content Writing', desc: 'Blog writing, technical documentation, AI-based content creation', color: 'from-green-500 to-emerald-500' },
                  { title: 'Graphics Designing', desc: 'Visual design, branding, typography, layout design', color: 'from-purple-500 to-pink-500' },
                  { title: 'Programming', desc: 'PHP, C, Java, Python, web development fundamentals', color: 'from-orange-500 to-red-500' },
                  { title: 'Prompt Engineering', desc: 'AI prompt design, optimization, and implementation', color: 'from-indigo-500 to-purple-500' },
                  { title: 'Community Building', desc: 'Event planning, community management, networking, and facilitation', color: 'from-teal-500 to-green-500' }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg`}></div>
                    <div className="relative bg-slate-700/40 group-hover:bg-slate-600/60 border border-slate-600/50 p-6 rounded-xl transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <StarIcon className={`h-7 w-7 bg-gradient-to-r ${skill.color} text-transparent mr-3`} style={{WebkitBackgroundClip: 'text'}} />
                        <h3 className="text-xl font-semibold text-slate-100">{skill.title}</h3>
                      </div>
                      <p className="text-slate-300 group-hover:text-slate-200 text-sm leading-relaxed flex-grow">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements & Awards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold text-white mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Achievements & <span className="text-gradient">Awards</span>
              </motion.h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Recognition for excellence, innovation, and outstanding contributions to the industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -15,
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)"
                    }}
                    className="relative group"
                  >
                    {/* Dynamic Glow */}
                    <motion.div 
                      className={`absolute -inset-2 bg-gradient-to-r ${achievement.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <div className="relative glass-premium rounded-2xl p-6 text-center overflow-hidden">
                      {/* Background Pattern */}
                      <motion.div 
                        className="absolute inset-0 opacity-5"
                        style={{
                          background: `linear-gradient(135deg, ${achievement.color.split(' ')[1]}, ${achievement.color.split(' ')[3]})`,
                          backgroundSize: '200% 200%'
                        }}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                      />
                      
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${achievement.color} mb-4 relative z-10 shadow-xl`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </motion.div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-2 relative z-10">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 relative z-10">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-500 text-xs relative z-10">
                        {achievement.year}
                      </p>
                      
                      {/* Decorative Elements */}
                      <motion.div 
                        className="absolute top-3 right-3 w-2 h-2 bg-white/30 rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1], 
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <motion.div 
                        className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-white/20 rounded-full"
                        animate={{ 
                          scale: [1, 1.3, 1], 
                          opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full -translate-y-20 -translate-x-20 opacity-30"></div>
          
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent relative z-10">
            Education & Certifications
          </h2>
          <div className="space-y-8 relative z-10">
            {[
              {
                title: 'Bachelor of Computer Application (BCA)',
                institution: 'Hetauda School of Management - 2021/06 - Present',
                detail: '6th Semester on Tribhuvan University',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                title: 'Google UX Design Professional Certificate',
                institution: 'Google via Coursera - 2023',
                link: 'https://www.coursera.org/account/accomplishments/professional-cert/PTDVQ2Y782T8',
                color: 'from-green-500 to-teal-600'
              },
              {
                title: 'Fundamentals of Graphic Design',
                institution: 'California Institute of the Arts via Coursera - 2022',
                link: 'https://www.coursera.org/account/accomplishments/verify/WDD88ZADNSNZ',
                color: 'from-purple-500 to-pink-600'
              },
              {
                title: 'Special Python and IoT Program',
                institution: 'Specail - 2022',
                color: 'from-orange-500 to-red-600'
              }
            ].map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="relative group"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${edu.color} rounded-full group-hover:w-2 transition-all duration-300`}></div>
                <div className="pl-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.link ? (
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
                      >
                        {edu.title}
                      </a>
                    ) : (
                      edu.title
                    )}
                  </h3>
                  <p className="text-gray-600 mb-1">{edu.institution}</p>
                  {edu.detail && <p className="text-gray-500 text-sm">{edu.detail}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Glow */}
              <motion.div 
                className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative glass-premium rounded-3xl p-12 lg:p-16">
                <motion.h2 
                  className="text-4xl lg:text-5xl font-bold text-white mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  Ready to Create Something <span className="text-gradient">Extraordinary</span>?
                </motion.h2>
                
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
                </p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden group"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center">
                      <EnvelopeIcon className="h-5 w-5 mr-2" />
                      Get In Touch
                    </span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => window.open('./Abhishek-Adhikari-FlowCV-Resume-20250531.pdf', '_blank')}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl overflow-hidden group hover:border-white/40 transition-colors duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                      Download CV
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
