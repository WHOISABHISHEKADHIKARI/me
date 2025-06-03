import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const NotFound = () => {
  // Handle 404 error tracking
  useEffect(() => {
    // Log 404 error for analytics
    console.error('404 Error: Page not found -', window.location.pathname);
  }, []);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Abhishek Adhikari</title>
        <meta name="description" content="The page you're looking for cannot be found. Return to Abhishek Adhikari's portfolio homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white p-4">
        {/* Background animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-dots-pattern opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: `20px 20px`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center bg-card/10 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-border/50 shadow-2xl max-w-lg mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold text-primary mb-4 drop-shadow-lg"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold text-foreground/90 mb-4"
          >
            Page Not Found
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base md:text-lg text-muted-foreground mb-8"
          >
            Oops! The page <strong>{window.location.pathname}</strong> you're looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-4"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Go Back Home
            </Link>
            <div className="text-sm text-muted-foreground mt-4">
              <span>Need help? </span>
              <Link to="/contact" className="text-primary hover:text-primary/90 underline">
                Contact Support
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;