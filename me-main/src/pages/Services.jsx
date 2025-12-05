import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PaintBrushIcon, CodeBracketIcon, LightBulbIcon, ChatBubbleLeftRightIcon, MagnifyingGlassIcon, UsersIcon } from '@heroicons/react/24/outline';

const servicesData = [
  {
    icon: PaintBrushIcon,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing user interfaces that enhance user experience and drive engagement. Specializing in user-centered design principles to create seamless digital products.',
    details: [
      'User Interface (UI) Design',
      'User Experience (UX) Design',
      'Wireframing & Prototyping',
      'Usability Testing',
      'Responsive Web Design',
      'Mobile App Design'
    ]
  },
  {
    icon: CodeBracketIcon,
    title: 'Frontend Development',
    description: 'Building responsive, high-performance websites and applications using modern frontend technologies. Focused on clean code, scalability, and optimal user interaction.',
    details: [
      'HTML5, CSS3, JavaScript (ES6+)',
      'React.js Development',
      'Tailwind CSS Implementation',
      'Responsive & Mobile-First Development',
      'Performance Optimization',
      'Cross-Browser Compatibility'
    ]
  },
  {
    icon: LightBulbIcon,
    title: 'Product Strategy',
    description: 'Helping you define and refine your digital product vision. From ideation to market research, I provide insights to ensure your product meets user needs and business goals.',
    details: [
      'Market & User Research',
      'Feature Prioritization',
      'Roadmap Planning',
      'Competitive Analysis',
      'MVP Definition'
    ]
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'UX Research & Analysis',
    description: 'Deep diving into user behaviors, needs, and motivations to inform design decisions. Utilizing various research methodologies to gather actionable insights.',
    details: [
      'User Interviews & Surveys',
      'Persona Development',
      'Journey Mapping',
      'Heuristic Evaluation',
      'A/B Testing Analysis'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Design Workshops',
    description: 'Facilitating collaborative workshops to align teams, brainstorm ideas, and solve complex design challenges. Engaging sessions tailored to your specific project needs.',
    details: [
      'Design Thinking Workshops',
      'Ideation Sessions',
      'Co-creation Workshops',
      'Stakeholder Alignment Meetings'
    ]
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Consultation & Support',
    description: 'Providing expert advice and ongoing support for your UI/UX and frontend development projects. Helping you navigate challenges and achieve your digital objectives.',
    details: [
      'Design System Audits',
      'Accessibility Reviews',
      'Technical Feasibility Assessments',
      'Ongoing Design Support'
    ]
  }
];

const fadeInStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | UI/UX Design & Frontend Development</title>
        <meta name="description" content="Explore the range of UI/UX design, frontend development, and product strategy services offered to bring your digital vision to life." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-24 md:pt-28">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInStagger}
        >
          <motion.header variants={itemFadeInUp} className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">My Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Offering a blend of creativity, technical expertise, and strategic thinking to help you build exceptional digital products.
            </p>
          </motion.header>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={fadeInStagger}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={itemFadeInUp}
                className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex-shrink-0 mb-4">
                  <service.icon className="w-10 h-10 text-primary mb-3" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{service.title}</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2">Key areas include:</h3>
                  <ul className="space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-3 h-3 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-xs text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.section 
            variants={itemFadeInUp} 
            className="mt-16 md:mt-24 text-center bg-card p-8 md:p-12 rounded-xl border border-border shadow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Elevate Your Project?</h2>
            <p className="text-muted-foreground md:text-lg mb-8 max-w-xl mx-auto">
              Whether you're starting a new venture or looking to improve an existing product, I'm here to help you achieve your goals with tailored design and development solutions.
            </p>
            <motion.a
              href="/contact" // Link to contact page
              className="btn bg-primary text-primary-foreground hover:bg-primary/90 text-base shadow-md hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Let's Discuss Your Project
              <ChatBubbleLeftRightIcon className="inline-block h-4 w-4 ml-2 opacity-80 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.section>

        </motion.div>
      </div>
    </>
  );
};

export default Services;