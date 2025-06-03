import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';

const LuxuryParticle = ({ delay, isMobile }) => {
  const randomPath = Array.from({ length: isMobile ? 2 : 4 }, () => ({
    x: Math.random() * 600 - 300,
    y: Math.random() * -400,
  }));

  return (
    <motion.div
      initial={{ y: '110vh', x: `${Math.random() * 100}vw`, scale: 0, opacity: 0 }}
      animate={{
        y: '-10vh',
        x: randomPath.map(p => p.x),
        scale: [0, 1, 0.8, 0],
        opacity: [0, 0.8, 0.2, 0],
      }}
      transition={{
        duration: isMobile ? 12 : 20,
        delay,
        ease: 'linear',
        times: [0, 0.2, 0.8, 1],
      }}
      className={`absolute w-${isMobile ? '1' : '2'} h-${isMobile ? '1' : '2'} rounded-full bg-amber-400/30 shadow-lg shadow-amber-400/20`}
    />
  );
};

const Sabhi = () => {
  const [showRing, setShowRing] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showExitMessage, setShowExitMessage] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);

  const correctPassword = '1254';

  // Mobile detection and scroll handling
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768 || navigator.maxTouchPoints > 0);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Prevent pull-to-refresh while allowing scrolling
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchY - touchStartY.current;

      if (window.scrollY <= 0 && deltaY > 30 && e.cancelable) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('resize', checkDevice);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Throttled mouse/touch move handler
  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current || isMobile) return;
      requestAnimationFrame(() => {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      });
    },
    [isMobile]
  );

  const handleTouchMove = useCallback((e) => {
    if (!containerRef.current) return;
    requestAnimationFrame(() => {
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      });
    });
  }, []);

  // Password handling
  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsPasswordCorrect(true);
      setShowPasswordError(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } else {
      setShowPasswordError(true);
      setPassword('');
      setTimeout(() => setShowPasswordError(false), 3000);
    }
  };

  // Phase progression
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhase < phases.length - 1) {
        setCurrentPhase((prev) => prev + 1);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentPhase]);

  // Particle display
  useEffect(() => {
    const timer = setTimeout(() => setShowParticles(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Exit message on page unload
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      setShowExitMessage(true);
      const message = "I love and miss you";
      e.returnValue = message;
      return message;
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const phases = [
    {
      text: 'From the moment our paths intertwined, my world transformed into a canvas of endless possibilities. Every heartbeat whispers your name, every dream wears your smile. You are the melody that makes my life a beautiful symphony.',
      className: 'text-rose-400',
    },
    {
      text: "Through seven magical years, we've painted our story with colors of joy, trust, and unconditional love. Each moment with you feels like a precious gem, sparkling with memories we've crafted together, dreams we've woven into reality.",
      className: 'text-purple-400',
    },
    {
      text: 'In the garden of my heart, your love blooms eternal like an enchanted rose. You are my north star, my safe harbor, my reason to believe in magic. With you, every ordinary day becomes an extraordinary adventure.',
      className: 'text-pink-400',
    },
    {
      text: 'Today, as I hold this moment in my trembling hands, I want to ask you something that will bridge our past of beautiful memories with a future of endless possibilities. My heart beats in anticipation of your answer...',
      className: 'text-amber-400',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative bg-gradient-to-br from-rose-900 via-purple-900 to-pink-900"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'none',
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      {/* Exit Message */}
      <AnimatePresence>
        {showExitMessage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-4xl md:text-6xl font-bold text-white text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              I love and miss you
              <motion.div
                className="text-rose-400 mt-4 text-xl md:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                ❤️ Forever and Always ❤️
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Gradient Animation */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(244,114,182,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(216,180,254,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(251,113,133,0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Mouse Glow Effect (Desktop Only) */}
      {!isMobile && mousePosition.x > 0 && (
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: 'spring', damping: 10, mass: 0.1 }}
        />
      )}

      {/* Particles */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(isMobile ? 5 : 20)].map((_, i) => (
            <LuxuryParticle key={i} delay={i * (isMobile ? 0.4 : 0.2)} isMobile={isMobile} />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`max-w-4xl mx-auto text-center space-y-12 bg-black/30 backdrop-blur-3xl ${
            isMobile ? 'p-4 rounded-3xl' : 'p-12 rounded-3xl'
          } shadow-2xl border border-amber-500/20`}
        >
          <AnimatePresence mode="wait">
            {phases.map(
              (phase, index) =>
                currentPhase >= index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  >
                    <motion.p
                      className={`${
                        isMobile ? 'text-lg' : 'text-2xl'
                      } leading-relaxed font-serif ${phase.className}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    >
                      {phase.text}
                    </motion.p>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Password Input */}
          {currentPhase >= 3 && !isPasswordCorrect && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="space-y-6"
            >
              <motion.h3
                className={`${
                  isMobile ? 'text-2xl' : 'text-3xl'
                } font-serif italic text-amber-400`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Enter the 4-digit Secret Code
              </motion.h3>
              <motion.div className="relative group w-72 mx-auto">
                <motion.input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value.replace(/[^0-9]/g, '').slice(0, 4))}
                  onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  placeholder="Enter the 4-digit code"
                  aria-label="Enter the 4-digit secret code"
                  className="w-full px-6 py-4 bg-black/50 text-white rounded-full border border-amber-500/30 focus:border-amber-500/80 focus:outline-none text-center text-xl backdrop-blur-md"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl transition-opacity opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.button
                onClick={handlePasswordSubmit}
                className="relative px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-amber-500/20 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Submit password"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10">Unlock</span>
              </motion.button>
              <AnimatePresence>
                {showPasswordError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-rose-400"
                  >
                    Incorrect code. Please try again.
                  </motion.p>
                )}
                {showSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-green-400"
                  >
                    Unlocking our special moment...
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Proposal Section */}
          {isPasswordCorrect && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <motion.h2
                className={`${
                  isMobile ? 'text-4xl' : 'text-6xl'
                } font-bold text-amber-400 font-serif italic`}
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 20px rgba(251,191,36,0.2)',
                    '0 0 40px rgba(251,191,36,0.4)',
                    '0 0 20px rgba(251,191,36,0.2)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Will you marry me?
              </motion.h2>
              {!showRing && (
                <motion.button
                  onClick={() => setShowRing(true)}
                  className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-amber-500/20 transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Accept proposal"
                >
                  <span className="flex items-center gap-2">
                    Yes, Forever
                    <motion.span
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      💍
                    </motion.span>
                  </span>
                </motion.button>
              )}
            </motion.div>
          )}

          {/* Proposal Modal */}
          <AnimatePresence>
            {showRing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50"
                onClick={() => isMobile && setShowRing(false)}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className={`bg-gradient-to-br from-slate-900 to-purple-900 ${
                    isMobile ? 'p-8' : 'p-16'
                  } rounded-3xl text-center max-w-3xl mx-4 shadow-lg border border-amber-500/30 relative overflow-hidden`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                      background: [
                        'radial-gradient(circle at 0% 0%, rgba(251,191,36,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 100%, rgba(251,191,36,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.3) 0%, transparent 50%)',
                      ],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <div className="relative z-10 space-y-8">
                    <motion.div
                      className="text-6xl"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      💍
                    </motion.div>
                    <motion.h3
                      className={`${
                        isMobile ? 'text-3xl' : 'text-4xl'
                      } font-bold text-amber-500 font-serif italic`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      Thank you for saying yes!
                    </motion.h3>
                    <motion.div
                      className="love-text-container"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4.5 }}
                    >
                      <motion.p
                        className="text-2xl font-bold font-serif italic text-amber-300"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        I love you! 💋
                      </motion.p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="flex justify-center gap-4"
                    >
                      {['✨', '💫', '💖', '✨'].map((emoji, i) => (
                        <motion.span
                          key={i}
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 360, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="text-3xl"
                        >
                          {emoji}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="space-y-6 text-amber-300 font-serif leading-relaxed"
                    >
                      <p className={isMobile ? 'text-xl' : 'text-2xl'}>
                        I am dying to meet you and this long distance has hit me hard.
                      </p>
                      <p className={isMobile ? 'text-xl' : 'text-2xl'}>
                        Although I may have upset you at times, I am always here for you and I am coming soon. I hope to be with you forever.
                      </p>
                      <p className={isMobile ? 'text-xl' : 'text-2xl'}>
                        Thank you for every time I was mentally broken, emotionally unstable, and you were there. Even when I wasn't giving time and effort, you still gave me your love and care.
                      </p>
                      <p className={isMobile ? 'text-xl' : 'text-2xl'}>
                        I'm full of both helplessness and hopefulness. You are my source of motivation, the only one for me.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3 }}
                      className="space-y-4"
                    >
                      <motion.div
                        className="flex justify-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                      >
                        {[...Array(7)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 360],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold"
                          >
                            {i + 1}
                          </motion.div>
                        ))}
                      </motion.div>
                      <motion.p
                        className="text-amber-300/80 italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                      >
                        Seven beautiful years and countless more to come...
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Sabhi;