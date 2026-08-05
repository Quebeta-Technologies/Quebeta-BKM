import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '../data/industries';

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Industries = () => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % industries.length) + industries.length) % industries.length;

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);

  const handleChipClick = (index) => {
    const diff = (index - currentIndex + industries.length) % industries.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index) => {
    const diff = index - currentIndex;
    const len = industries.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return 'active';
    if (normalizedDiff === -1) return 'prev';
    if (normalizedDiff === 1) return 'next';
    return 'hidden';
  };

  return (
    <section id="industries" className="section bg-white">
      <div className="section-container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-eyebrow">Industries We Serve</div>
          <h2 className="section-title">
            Deep expertise across <span className="gradient-text">every vertical</span>
          </h2>
          <p className="section-subtitle">
            From bootstrapped startups to established enterprises we've helped
            teams in every industry ship products that move the needle.
          </p>
        </motion.div>

        {/* Carousel — matches 21st.dev layout exactly */}
        <div className="relative overflow-hidden rounded-[2.5rem] flex flex-col lg:flex-row"
          style={{ minHeight: '520px', border: '1px solid rgba(0,120,191,0.12)' }}>

          {/* ── Left panel ── */}
          <div
            className="w-full lg:w-[40%] relative flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16"
            style={{ background: 'var(--brand-primary)', minHeight: '350px' }}
          >
            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 h-16 z-40 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, var(--brand-primary) 0%, transparent 100%)' }} />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-16 z-40 pointer-events-none"
              style={{ background: 'linear-gradient(to top, var(--brand-primary) 0%, transparent 100%)' }} />

            <div className="relative w-full h-full flex items-center justify-start z-20"
              style={{ minHeight: `${ITEM_HEIGHT * 5}px` }}>
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(-(industries.length / 2), industries.length / 2, distance);

                return (
                  <motion.div
                    key={industry.name}
                    style={{ height: ITEM_HEIGHT, width: 'fit-content' }}
                    animate={{
                      y: wrappedDistance * ITEM_HEIGHT,
                      opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                    }}
                    transition={{ type: 'spring', stiffness: 90, damping: 22, mass: 1 }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className="relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left"
                      style={{
                        background: isActive ? '#fff' : 'transparent',
                        color: isActive ? 'var(--brand-primary)' : 'rgba(255,255,255,0.6)',
                        border: isActive ? '1px solid #fff' : '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <span className={`text-[18px] flex-shrink-0 transition-colors duration-500 ${isActive ? 'text-[var(--brand-primary)]' : 'text-white/40'}`}>
                        <Icon />
                      </span>
                      <span className="font-normal text-sm md:text-[15px] tracking-tight whitespace-nowrap uppercase"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {industry.name}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Right panel — image cards exactly like 21st.dev ── */}
          <div className="flex-1 relative flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden"
            style={{ background: '#fff', borderTop: '1px solid rgba(0,120,191,0.08)' }}>

            <div className="relative w-full max-w-[420px]" style={{ aspectRatio: '4/5' }}>
              {industries.map((industry, index) => {
                const status = getCardStatus(index);
                const isActive = status === 'active';
                const isPrev = status === 'prev';
                const isNext = status === 'next';

                return (
                  <motion.div
                    key={industry.name}
                    className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 bg-white origin-center"
                    style={{ borderColor: '#fff' }}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                      rotate: isPrev ? -3 : isNext ? 3 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 25, mass: 0.8 }}
                  >
                    {/* Image — replace src with your own per industry */}
                    <img
                      src={industry.image || `https://images.unsplash.com/photo-${1500000000000 + index * 10000000}?w=600&q=80`}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-all duration-700"
                      style={{
                        filter: isActive ? 'none' : 'grayscale(1) blur(2px) brightness(0.75)',
                      }}
                    />

                    {/* Bottom overlay — same as 21st.dev */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-x-0 bottom-0 p-10 pt-32 flex flex-col justify-end pointer-events-none"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)' }}
                        >
                          <div className="px-4 py-1.5 rounded-full text-[11px] font-normal uppercase tracking-[0.2em] w-fit mb-3"
                            style={{ background: '#fff', color: 'var(--brand-primary)', border: '1px solid rgba(0,120,191,0.2)' }}>
                            {index + 1} • {industry.name}
                          </div>
                          <p className="text-white font-normal text-xl md:text-2xl leading-tight tracking-tight"
                            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                            {industry.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Top-left live dot — same as 21st.dev */}
                    <div className={`absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="w-2 h-2 rounded-full bg-white"
                        style={{ boxShadow: '0 0 10px white' }} />
                      <span className="text-white/80 text-[10px] font-normal uppercase tracking-[0.3em]"
                        style={{ fontFamily: 'monospace' }}>
                        Live Session
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;