import { motion } from 'framer-motion';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    // Update document title for 404 page
    document.title = '404 - Page Not Found | Abhishek Adhikari';
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div 
        className="text-center relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-violet-500 mb-2">404</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mb-6"></div>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        </motion.div>
        
        <motion.p 
          className="text-lg mb-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved to another location.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Return to Homepage
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;