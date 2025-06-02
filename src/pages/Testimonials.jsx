import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, UserCircleIcon, StarIcon } from '@heroicons/react/24/solid'; // Using solid for filled stars
import { Helmet } from 'react-helmet-async';

// Placeholder testimonials - replace with actual data
const testimonials = [
  {
    id: 1,
    name: "Rajiv Raman Neupane",
    title: "Founder & CEO of Kisan Care Pvt. Ltd.",
    quote: "I am thrilled to recommend Abhishek Adhikari for his exceptional UX design abilities. I was truly amazed by his work ethic and commitment to delivering top-notch designs within tight deadlines. Abhishek's dedication to giving 100% to every aspect of product designing and collaboration is evident in the quality of his work. His clear communication and organized approach make him a pleasure to collaborate with. In short, Abhishek's talent, work ethic, and collaborative spirit make him a valuable asset to any project or team.",
    rating: 5,
    project: "UX Design Projects"
  },
  {
    id: 2,
    name: "SUMAN POUDEL",
    title: "Civil Engineer | Researcher | Author",
    quote: "From the get-go, you instinctively knew how to write good content and capture the audience's attention. You were driven, enthusiastic and always ready to learn new things from writing. Your diligence and work ethic motivated other members of the team to give their best effort as well. I can't stress enough how much your contribution has helped during the growth phase of our Menzz family. You are a talented writer but it's your motivation towards improving your skill at every moment that has given you the qualities of an awesome content writer.",
    rating: 5,
    project: "Content Team Leadership at Menzz"
  },
  {
    id: 3,
    name: "Bigyan khanal",
    title: "Aspiring Full-Stack Developer | Tech Enthusiast",
    quote: "I have had the pleasure of knowing Abhishek Adhikari for 3 years, both personally and professionally and I am impressed by his dedication, skill, and work ethic.",
    rating: 5,
    project: "Team Collaboration"
  },
  {
    id: 4,
    name: "Ishwor Sapkota",
    title: "Chief Executive Officer @ DigiPrabhat",
    avatar: "",
    rating: 5,
    project: "Cross-team Collaboration"
  }
];

const fadeInStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | Abhishek Adhikari - Client Feedback</title>
        <meta name="description" content="Read what clients are saying about Abhishek Adhikari's UI/UX design and development work." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-24 md:pt-28">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInStagger}
        >
          <motion.header variants={itemFadeInUp} className="mb-12 md:mb-16 text-center">
            <ChatBubbleLeftRightIcon className="w-16 h-16 md:w-20 md:h-20 mx-auto text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">Client Testimonials</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from those who've experienced the impact of my work firsthand.
            </p>
          </motion.header>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={fadeInStagger}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                variants={itemFadeInUp}
                className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-primary/10 transition-all duration-300 ease-out flex flex-col"
              >
                <div className="flex items-center mb-4">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary/50" />
                  ) : (
                    <UserCircleIcon className="w-12 h-12 text-muted-foreground mr-4" />
                  )}
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic text-base mb-4 flex-grow">
                  <span className="text-2xl text-primary/80 font-serif leading-none mr-1">“</span>
                  {testimonial.quote}
                  <span className="text-2xl text-primary/80 font-serif leading-none ml-1">”</span>
                </blockquote>
                {testimonial.project && (
                  <p className="text-xs text-accent font-medium mb-3">Project: {testimonial.project}</p>
                )}
                <div className="flex items-center mt-auto pt-4 border-t border-border/50">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-muted-foreground/30'}`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {testimonials.length === 0 && (
            <motion.p variants={itemFadeInUp} className="text-center text-muted-foreground text-lg mt-12">
              Testimonials are coming soon. Stay tuned for feedback from my valued clients!
            </motion.p>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Testimonials;