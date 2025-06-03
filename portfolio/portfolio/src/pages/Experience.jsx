import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarDaysIcon, MapPinIcon, BuildingOffice2Icon, AcademicCapIcon, LinkIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet-async';

const experiences = [
  {
    role: "Branch Development Officer",
    company: "Aayo Rides Nepal Pvt. Ltd.",
    duration: "Feb 2024 - Present",
    location: "Nepal",
    responsibilities: [
      "Conducted comprehensive market research and identified new business opportunities for branch expansion",
      "Managed end-to-end branch creation process including location selection and team setup",
      "Developed and executed targeted marketing strategies to increase brand awareness",
      "Established operational procedures and KPIs for branch performance monitoring",
      "Built and maintained relationships with key stakeholders and local partners"
    ]
  },
  {
    role: "UX Designer",
    company: "Kisan Care",
    duration: "Jul 2022 - Jan 2023",
    location: "Nepal",
    responsibilities: [
      "Implemented Design Sprints methodology to accelerate product development cycles",
      "Focused on developing assistive technology solutions for agricultural applications",
      "Conducted user research and usability testing to reduce cognitive biases in UX",
      "Created wireframes, prototypes, and high-fidelity designs for mobile applications",
      "Collaborated with development team to ensure design implementation accuracy"
    ]
  },
  {
    role: "Bootcamp Facilitator",
    company: "Dev Community Nepal",
    duration: "Jan 2023 - Jun 2023",
    location: "Nepal",
    responsibilities: [
      "Planned and executed comprehensive community bootcamp programs",
      "Developed curriculum and learning materials for technical workshops",
      "Mentored participants through hands-on coding exercises and projects",
      "Coordinated with industry experts for guest speaking sessions",
      "Managed marketing campaigns to promote bootcamp enrollment"
    ]
  },
  {
    role: "Deputy Community Builder",
    company: "Coding Olympics Nepal",
    duration: "Jan 2023 - Feb 2024",
    location: "Nepal",
    responsibilities: [
      "Led community building initiatives and managed project timelines",
      "Maintained comprehensive documentation of processes and procedures",
      "Coordinated between multiple teams to ensure smooth project execution",
      "Organized community events and coding competitions",
      "Implemented feedback systems for continuous improvement"
    ]
  },
  {
    role: "UX Designer",
    company: "Sajilo Patro",
    duration: "Apr 2022 - Nov 2022",
    location: "Nepal",
    responsibilities: [
      "Conducted in-depth UX research to identify user needs and pain points",
      "Managed design resources and maintained design system consistency",
      "Facilitated communication between stakeholders and development team",
      "Created user personas and journey maps to guide design decisions",
      "Implemented accessibility best practices in design solutions"
    ]
  },
  {
    role: "Content Writing Intern",
    company: "Menzz",
    duration: "Jan 2022 - Jul 2022",
    location: "Nepal",
    responsibilities: [
      "Developed comprehensive content strategies and editorial calendars",
      "Wrote engaging blog posts on technology and industry trends",
      "Created AI-focused articles and technical documentation",
      "Optimized content for SEO and social media engagement",
      "Collaborated with design team for content visualization"
    ]
  },
  {
    role: "Documentation Manager",
    company: "IT Club of HSMSS",
    duration: "Apr 2021 - Nov 2022",
    location: "Nepal",
    responsibilities: [
      "Managed and standardized organizational documentation processes",
      "Coordinated technical documentation for club projects and events",
      "Implemented version control systems for document management",
      "Created templates and guidelines for consistent documentation",
      "Trained team members on documentation best practices"
    ]
  }
];

const fadeInStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemFadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.5 
    } 
  },
};

const iconAnimation = {
  hover: { 
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: { 
      rotate: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
      },
      scale: { type: "spring", stiffness: 400, damping: 10 }
    }
  }
};

const cardAnimation = {
  hover: { 
    y: -8,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>My Experience | Abhishek Adhikari - Professional Journey</title>
        <meta name="description" content="Explore Abhishek Adhikari's professional experience, detailing roles in UI/UX design, research, and agricultural science." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-24 md:pt-28 overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInStagger}
        >
          <motion.header 
            variants={itemFadeInUp} 
            className="mb-12 md:mb-16 text-center relative"
          >
            <motion.div
              className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              whileHover="hover"
              variants={iconAnimation}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <BriefcaseIcon className="w-16 h-16 md:w-20 md:h-20 mx-auto text-primary mb-4 relative z-10" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2"
              whileHover={{
                scale: 1.05,
                color: "var(--primary)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              Professional Journey
            </motion.h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tracing my path from agricultural research to crafting user-centered digital experiences.
            </p>
          </motion.header>

          <motion.div className="relative space-y-0">
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute top-0 -left-1 right-1 h-20 bg-gradient-to-b from-primary/50 to-transparent blur-sm"
                animate={{ y: [0, 800, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            {experiences.map((exp, index) => (
              <motion.section 
                key={index} 
                variants={itemFadeInUp}
                className="relative pl-16 pb-12 last:pb-0"
                whileHover="hover"
              >
                <motion.div 
                  className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.3 }}
                >
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-primary ring-4 ring-background relative"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/50"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-lg overflow-hidden relative group"
                  variants={cardAnimation}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"
                    initial={{ y: "100%", opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-x-6">
                      <motion.div
                        whileHover="hover"
                        variants={iconAnimation}
                        className="relative"
                      >
                        <motion.div
                          className="absolute inset-0 bg-primary/20 rounded-lg blur-lg"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                        {!exp.logo && (exp.role.toLowerCase().includes('research') || exp.role.toLowerCase().includes('m.sc')) ? 
                          <AcademicCapIcon className="w-12 h-12 text-primary mb-4 sm:mb-0 flex-shrink-0 relative z-10" /> :
                          <BuildingOffice2Icon className="w-12 h-12 text-primary mb-4 sm:mb-0 flex-shrink-0 relative z-10" />
                        }
                      </motion.div>
                      <div className="flex-grow">
                        <motion.h2 
                          className="text-2xl font-semibold text-foreground mb-1"
                          whileHover={{ x: 10, color: "var(--primary)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          {exp.role}
                        </motion.h2>
                        <motion.a 
                          href={exp.companyLink || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-lg font-medium text-primary hover:underline ${!exp.companyLink && 'pointer-events-none'}`}
                          whileHover={{ x: 5, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          {exp.company} {exp.companyLink && 
                            <motion.span
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="inline-block"
                            >
                              <LinkIcon className='inline w-4 h-4 ml-1' />
                            </motion.span>
                          }
                        </motion.a>
                        <div className="flex flex-wrap items-center text-sm text-muted-foreground mt-1 mb-3 gap-x-4 gap-y-1">
                          <motion.span 
                            className="flex items-center"
                            whileHover={{ scale: 1.05, x: 3 }}
                          >
                            <CalendarDaysIcon className="w-4 h-4 mr-1.5 text-accent" /> {exp.duration}
                          </motion.span>
                          <motion.span 
                            className="flex items-center"
                            whileHover={{ scale: 1.05, x: 3 }}
                          >
                            <MapPinIcon className="w-4 h-4 mr-1.5 text-accent" /> {exp.location}
                          </motion.span>
                        </div>

                        <h3 className="text-md font-semibold text-foreground mt-4 mb-2">Key Responsibilities:</h3>
                        <ul className="list-none space-y-2 text-sm md:text-base">
                          {exp.responsibilities.map((resp, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start group/item"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ x: 8 }}
                            >
                              <motion.span 
                                className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0"
                                whileHover={{ scale: 2, backgroundColor: "var(--primary)" }}
                              />
                              <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                                {resp}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {exp.skills && exp.skills.length > 0 && (
                          <motion.div 
                            className="mt-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                          >
                            <h3 className="text-md font-semibold text-foreground mb-2">Skills Utilized:</h3>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, i) => (
                                <motion.span 
                                  key={i} 
                                  className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full border border-primary/20 relative overflow-hidden group/skill"
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                  <motion.div
                                    className="absolute inset-0 bg-primary/20"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.5 }}
                                  />
                                  <span className="relative z-10">{skill}</span>
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.section>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Experience;