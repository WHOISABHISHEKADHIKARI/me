import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const LuxuryParticle = ({ delay }) => {
  const randomPath = Array.from({ length: 7 }, () => ({
    x: Math.random() * 800 - 400,
    y: Math.random() * -600
  }));

  const particles = ['🌹', '💝', '✨', '💫', '🌟', '⭐️', '💎', '🦋', '🕊️'];
  const randomParticle = particles[Math.floor(Math.random() * particles.length)];

  return (
    <motion.div
      initial={{ y: '110vh', x: `${Math.random() * 100}vw`, scale: 0, opacity: 0 }}
      animate={{
        y: '-10vh',
        x: randomPath.map(p => p.x),
        scale: [0, 1.2, 0.8, 1.1, 0],
        opacity: [0, 1, 0.8, 1, 0],
        rotate: [0, 180, 270, 360],
      }}
      transition={{
        duration: 10 + Math.random() * 5,
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
        delay: delay + Math.random() * 3,
        ease: 'easeInOut'
      }}
      className="absolute text-4xl md:text-5xl pointer-events-none mix-blend-screen filter drop-shadow-lg"
    >
      {randomParticle}
    </motion.div>
  );
};

const GlowingText = ({ children, color = "amber" }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    controls.start({
      opacity: [0.8, 1, 0.8],
      scale: isHovered ? [1, 1.1, 1] : 1,
      textShadow: [
        '0 0 20px rgba(251,191,36,0.3)',
        '0 0 40px rgba(251,191,36,0.5)',
        '0 0 60px rgba(251,191,36,0.3)'
      ],
    });
  }, [isHovered]);

  return (
    <motion.span
      animate={controls}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ 
        duration: isHovered ? 1.5 : 3,
        repeat: Infinity, 
        ease: isHovered ? "easeOutElastic" : "easeInOut"
      }}
      className={`text-${color}-600 font-serif italic cursor-pointer select-none hover:text-${color}-400 transition-colors duration-300`}
      whileHover={{
        y: -2,
        filter: 'brightness(1.2)'
      }}
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
      text: "From the moment our paths intertwined, my world transformed into a canvas of endless possibilities. Every heartbeat whispers your name, every dream wears your smile. You are the melody that makes my life a beautiful symphony.",
      className: "text-rose-400"
    },
    {
      text: "Through seven magical years, we've painted our story with colors of joy, trust, and unconditional love. Each moment with you feels like a precious gem, sparkling with memories we've crafted together, dreams we've woven into reality.",
      className: "text-purple-400"
    },
    {
      text: "In the garden of my heart, your love blooms eternal like an enchanted rose. You are my north star, my safe harbor, my reason to believe in magic. With you, every ordinary day becomes an extraordinary adventure.",
      className: "text-pink-400"
    },
    {
      text: "Today, as I hold this moment in my trembling hands, I want to ask you something that will bridge our past of beautiful memories with a future of endless possibilities. My heart beats in anticipation of your answer...",
      className: "text-amber-400"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-900 via-purple-900 to-pink-900 animate-gradient-shift"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(244,114,182,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(216,180,254,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(251,113,133,0.2) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMTMxMzEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20">
      </div>

      <motion.div
        className="absolute w-[50rem] h-[50rem] rounded-full blur-[180px] mix-blend-soft-light"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
          background: [
            'rgba(244,114,182,0.08)',
            'rgba(216,180,254,0.08)',
            'rgba(251,113,133,0.08)'
          ],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          type: 'spring', 
          damping: 20, 
          stiffness: 120,
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
        transition={{ type: 'spring', damping: 15, stiffness: 150 }}
      >
        <motion.div
          className="w-5 h-5 text-pink-400"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 20, -20, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💝
        </motion.div>
      </motion.div>
      
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
              <motion.div className="space-y-4 mb-8">
                <motion.h3
                  className="text-3xl bg-gradient-to-r from-rose-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-serif italic"
                  animate={{
                    textShadow: [
                      '0 0 25px rgba(244,114,182,0.3)',
                      '0 0 50px rgba(216,180,254,0.5)',
                      '0 0 25px rgba(251,113,133,0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Whisper the Secret Words
                </motion.h3>
                <motion.p
                  className="text-lg text-pink-300/80 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  To unlock the treasure of my heart's deepest desire...
                </motion.p>
              </motion.div>
              
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  className="relative group w-72"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                    placeholder="✨ Enter the magic words ✨"
                    className="w-full px-8 py-4 text-center text-xl bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-pink-500/10 text-pink-300 border-2 border-pink-500/30 rounded-full focus:outline-none focus:border-purple-400 placeholder-pink-300/50 backdrop-blur-md shadow-[0_0_15px_rgba(244,114,182,0.1)]"
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 25px rgba(244,114,182,0.2)' }}
                  />
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl transition-opacity opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.button
                  onClick={handlePasswordSubmit}
                  className="relative px-10 py-4 bg-gradient-to-r from-rose-400 via-purple-400 to-pink-400 text-white rounded-full font-serif text-xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(244,114,182,0.5)] backdrop-blur-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(244,114,182,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Open My Heart</span>
                    <span className="text-lg">💝</span>
                  </span>
                </motion.button>

                {showPasswordError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 rounded-full px-6 py-3 shadow-lg"
                  >
                    <motion.p
                      animate={{
                        color: ['rgb(244,114,182)', 'rgb(236,72,153)', 'rgb(244,114,182)'],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-lg font-light flex items-center gap-2"
                    >
                      <span>Not quite the magic words... Try again with love</span>
                      <motion.span
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        💖
                      </motion.span>
                    </motion.p>
                  </motion.div>
                )}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                    className="bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border border-pink-400/30 rounded-full px-8 py-4 shadow-[0_0_20px_rgba(244,114,182,0.3)]"
                  >
                    <motion.div className="flex flex-col items-center gap-2">
                      <motion.p
                        animate={{
                          color: ['rgb(244,114,182)', 'rgb(236,72,153)', 'rgb(244,114,182)'],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xl font-light text-center"
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          ✨ Magic words accepted! ✨
                        </motion.span>
                      </motion.p>
                      <motion.div
                        className="flex gap-2 text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        {['💝', '✨', '💖', '✨', '💝'].map((emoji, index) => (
                          <motion.span
                            key={index}
                            animate={{
                              y: [0, -10, 0],
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2
                            }}
                          >
                            {emoji}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
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