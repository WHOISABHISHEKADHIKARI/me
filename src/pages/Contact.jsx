import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon, UserIcon, ChatBubbleLeftEllipsisIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkrvjlg");

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'abhishekadhikari1254@gmail.com',
      href: 'mailto:abhishekadhikari1254@gmail.com',
      color: 'text-primary'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+977 9861234567',
      href: 'tel:+9779861234567',
      color: 'text-primary' // Updated color class
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: 'https://maps.app.goo.gl/z4Q8vJHPd357Wk2f8', // Example link, replace if needed
      color: 'text-primary' // Updated color class
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhishek-adhikari-b2a832200/',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      color: 'hover:text-primary transition-colors duration-200'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/AbhishekAdhikari11',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:text-primary transition-colors duration-200'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/abhishek.adhikari.5811',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:text-primary transition-colors duration-200'
    },
    {
      name: 'Dribbble',
      href: '#', // Replace with your Dribbble link if available
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.661 16.117c-.33.134-.669.201-1.01.201-1.199 0-2.036-.648-2.313-1.627-.035-.12-.06-.233-.077-.341-.307-1.298.1-2.737.988-4.012.23-.328.47-.648.71-.96-.397-.04-.795-.06-1.192-.06-2.399 0-4.353 1.104-5.404 3.004-.268.49-.448.98-.545 1.462-.117.56-.126 1.128-.03 1.688.288 1.668 1.503 3.005 3.29 3.46.24.06.48.09.72.09.99 0 1.95-.33 2.73-.93.78-.6 1.26-1.47 1.32-2.46.008-.13.016-.26.016-.39-.01-.21-.03-.42-.06-.63zm-3.66-5.01c.03.06.04.12.04.18 0 .78-.33 1.47-.87 1.95-.54.48-1.26.75-2.04.75-.93 0-1.74-.39-2.25-.99-.51-.6-.75-1.41-.75-2.34 0-.96.3-1.8.81-2.49.51-.69 1.23-1.14 2.07-1.14.96 0 1.77.42 2.28 1.05.51.63.75 1.41.75 2.28 0 .09-.01.18-.03.27z" clipRule="evenodd" />
        </svg>
      ),
      color: 'hover:text-primary transition-colors duration-200'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Me | Abhishek Adhikari - Design & Development</title>
        <meta name="description" content="Get in touch with Abhishek Adhikari for UI/UX design, web development projects, or collaborations. Let's build something amazing together." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-24 md:pt-28">
      {/* Header Section */}
      <section className="mb-12 md:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <EnvelopeIcon className="w-16 h-16 md:w-20 md:h-20 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">Let's Connect</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects, creative collaborations, or just to chat about technology and design.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="mb-16 md:mb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Contact Form */}            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Send Me a Message
              </h2>
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center shadow-lg"
                >
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 dark:text-green-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                      placeholder="Your Name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                      placeholder="Your Email"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div className="relative">
                    <ChatBubbleLeftEllipsisIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                      placeholder="Subject"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full pl-3 pr-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 resize-none"
                      placeholder="Your Message..."
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  {state.errors && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4"
                    >
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-red-700 dark:text-red-300 text-sm">
                          {state.errors.map(error => error.message).join('. ')}
                        </p>
                      </div>
                    </motion.div>
                  )}
                  </div>
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.03, boxShadow: "0px 4px 12px rgba(var(--color-primary-rgb), 0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <PaperAirplaneIcon className="h-5 w-5 mr-2 -rotate-12" />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info & Socials */}            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 md:space-y-10"
            >
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Contact Details
                </h2>
                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center group"
                    >
                      <div className={`p-3 rounded-lg bg-primary/10 ${item.color} mr-4 shadow-sm`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-md font-medium text-foreground">{item.label}</h3>
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? "_blank" : undefined}
                          rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 break-all"
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Connect Online</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center p-3 bg-muted hover:bg-accent border border-border rounded-lg ${link.color} transition-all duration-200 group`}
                      title={link.name}
                    >
                      {link.icon}
                      <span className="ml-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 hidden sm:inline">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status - Simplified and aligned with new theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }} // Adjusted delay
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full mr-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-primary font-semibold">Available for new projects</p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      Currently accepting new opportunities.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Optional, can be removed if not desired for minimal look */}
      {/* Simplified or removed FAQ for minimalism, or restyle if kept */}
      {/* Example of a more minimal FAQ item if kept:
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">What's your typical response time?</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          I usually respond to emails within 24 hours during weekdays. For urgent matters, please mention it in the subject.
        </p>
      </div>
      */}
    </div>
    </>
  );
};

export default Contact;