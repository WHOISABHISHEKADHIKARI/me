import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const LuxuryParticle = ({ delay }) => {
  const randomPath = Array.from({ length: 5 }, () => ({
    x: Math.random() * 600 - 300,
    y: Math.random() * -400
  }));

  return (
    <motion.div
      initial={{ y: '110vh', x: `${Math.random() * 100}vw`, scale: 0, opacity: 0 }}
      animate={{
        y: '-10vh',
        x: randomPath.map(p => p.x),
        scale: [0, 1, 0.8, 1, 0],
        opacity: [0, 1, 1, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        delay: delay + Math.random() * 2,
      }}
      className="absolute text-4xl pointer-events-none mix-blend-screen"
    >
      {['✨', '💫', '🌟', '⭐️', '🔮', '💎'][Math.floor(Math.random() * 6)]}
    </motion.div>
  );
};

const GlowingText = ({ children, color = "amber" }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0.8, 1, 0.8],
      textShadow: [
        '0 0 15px rgba(251,191,36,0.2)',
        '0 0 30px rgba(251,191,36,0.4)',
        '0 0 45px rgba(251,191,36,0.2)'
      ],
    });
  }, []);

  return (
    <motion.span
      animate={controls}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={`text-${color}-600 font-serif italic`}
    >
      {children}
    </motion.span>
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
  const containerRef = useRef(null);

  const correctPassword = '1254'; // You can change this to any password you want

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsPasswordCorrect(true);
      setShowPasswordError(false);
    } else {
      setShowPasswordError(true);
      setPassword('');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhase(prev => (prev < 3 ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showRing) {
      setShowParticles(true);
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2/2.wav');
      audio.play();
    }
  }, [showRing]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const phases = [
    {
      text: "In life's grand tapestry, I've wandered through valleys of uncertainty and climbed mountains of challenges. Each step echoed with determination, though sometimes my heart wavered under the weight of dreams that seemed distant stars.",
      className: "text-amber-700"
    },
    {
      text: "But then you came, like dawn breaking through the longest night. Seven precious years of shared laughter, silent understanding, and unwavering support. You've been my shelter in storms, my light in darkness.",
      className: "text-amber-600"
    },
    {
      text: "Your love transforms my doubts into dreams, your presence turns my fears into courage. In your eyes, I see not just who I am, but who I could become - the best version of myself.",
      className: "text-amber-800"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(251,191,36,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(251,191,36,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute w-[40rem] h-[40rem] rounded-full blur-[200px]"
        animate={{
          x: mousePosition.x - 320,
          y: mousePosition.y - 320,
          background: [
            'rgba(251,191,36,0.05)',
            'rgba(217,119,6,0.05)',
            'rgba(245,158,11,0.05)'
          ]
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 150 }}
      />
      
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <LuxuryParticle key={i} delay={i * 0.1} />
          ))}
        </div>
      )}

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center space-y-12 bg-black/30 backdrop-blur-3xl p-16 rounded-[3rem] shadow-2xl border border-amber-500/20"
        >
          <AnimatePresence mode="wait">
            {phases.map((phase, index) => (
              currentPhase >= index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="space-y-8"
                >
                  <motion.p 
                    className={`text-2xl leading-relaxed font-serif ${phase.className}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  >
                    {phase.text.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20, rotateX: 90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                        className="inline-block mx-1"
                      >
                        <GlowingText>{word}</GlowingText>
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {currentPhase >= 3 && !isPasswordCorrect && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 80, delay: 1 }}
              className="space-y-8 relative"
            >
              <motion.h3
                className="text-3xl text-amber-500 font-serif italic mb-8"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(251,191,36,0.2)',
                    '0 0 40px rgba(251,191,36,0.4)',
                    '0 0 20px rgba(251,191,36,0.2)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Enter the password to unlock my heart
              </motion.h3>
              
              <div className="flex flex-col items-center gap-4">
                <motion.input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  placeholder="Enter the magic word"
                  className="bg-black/20 text-amber-500 border-2 border-amber-500/30 rounded-full px-8 py-4 w-72 text-center text-xl focus:outline-none focus:border-amber-500 placeholder-amber-500/50 backdrop-blur-sm"
                  whileFocus={{ scale: 1.05 }}
                />
                
                <motion.button
                  onClick={handlePasswordSubmit}
                  className="group relative px-8 py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black rounded-full font-serif text-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">Unlock</span>
                </motion.button>

                {showPasswordError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-500 text-lg"
                  >
                    Incorrect password. Try again! 💝
                  </motion.p>
                )}
              </div>
            </motion.div>
          )}

          {currentPhase >= 3 && isPasswordCorrect && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="space-y-16 relative"
            >
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.h2
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: [
                      'drop-shadow(0 0 30px rgba(251,191,36,0.2))',
                      'drop-shadow(0 0 60px rgba(251,191,36,0.4))',
                      'drop-shadow(0 0 30px rgba(251,191,36,0.2))'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl md:text-7xl font-bold text-amber-500 my-16 font-serif italic"
                >
                  Will you marry me?
                </motion.h2>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center"
              >
                <button
                  onClick={() => setShowRing(true)}
                  className="group relative px-20 py-8 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black rounded-full font-serif text-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(251,191,36,0.5)]"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10 flex items-center gap-4 group-hover:scale-110 transition-transform duration-500">
                    Yes, Forever
                    <motion.span
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      💍
                    </motion.span>
                  </span>
                </button>
              </motion.div>
            </motion.div>
          )}

          {showRing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 12 }}
                className="bg-gradient-to-br from-slate-900 to-purple-900 p-16 rounded-[2rem] text-center max-w-3xl mx-4 shadow-[0_0_100px_rgba(251,191,36,0.3)] border border-amber-500/30 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(251,191,36,0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(251,191,36,0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.3) 0%, transparent 50%)'
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                <div className="relative z-10 space-y-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="flex justify-center"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-6xl"
                    >
                      💝
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-4xl font-bold text-amber-500 font-serif italic"
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          '0 0 20px rgba(251,191,36,0.2)',
                          '0 0 40px rgba(251,191,36,0.4)',
                          '0 0 20px rgba(251,191,36,0.2)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Thank you for saying yes!
                    </motion.span>
                  </motion.h3>

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
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className="text-3xl"
                      >
                        {emoji}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="space-y-6"
                  >
                    <p className="text-2xl text-amber-300 font-serif leading-relaxed">
                      Our beautiful journey of seven years has led to this magical moment.
                      Every laugh, every tear, every shared dream has brought us here.
                    </p>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 }}
                      className="flex flex-col items-center gap-4 mt-8"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-xl text-amber-200 font-serif italic"
                      >
                        Together forever, writing our love story...
                      </motion.div>

                      <motion.div 
                        className="flex gap-2 items-center justify-center flex-wrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                      >
                        {Array.from({ length: 7 }).map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 360],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: i * 0.3
                            }}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold"
                          >
                            {i + 1}
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                        className="text-amber-300/80 italic mt-2"
                      >
                        Seven beautiful years and countless more to come...
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Sabhi;