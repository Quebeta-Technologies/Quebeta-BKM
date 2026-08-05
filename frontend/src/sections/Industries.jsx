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
    let d = diff;
    if (diff > len / 2) d -= len;
    if (diff < -len / 2) d += len;
    if (d === 0) return 'active';
    if (d === -1) return 'prev';
    if (d === 1) return 'next';
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
            From bootstrapped startups to established enterprises — we've helped
            teams in every industry ship products that move the needle.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] flex flex-col lg:flex-row"
          style={{ minHeight: '540px', boxShadow: 'var(--shadow-xl)', perspective: 'none' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* ── Left panel ── */}
          <div
            className="w-full lg:w-[42%] relative flex flex-col items-start justify-center overflow-hidden px-10 lg:px-14"
            style={{ background: 'var(--brand-primary)', minHeight: '360px', perspective: 'none' }}
          >
            <div className="absolute inset-x-0 top-0 h-24 z-40 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, var(--brand-primary) 30%, transparent)' }} />
            <div className="absolute inset-x-0 bottom-0 h-24 z-40 pointer-events-none"
              style={{ background: 'linear-gradient(to top, var(--brand-primary) 30%, transparent)' }} />
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

            {/* Flat 2D scroll container — no perspective, no 3D */}
            <div
              className="relative w-full flex items-center justify-start z-20"
              style={{ height: `${ITEM_HEIGHT * 5}px`, transform: 'none' }}
            >
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(-(industries.length / 2), industries.length / 2, distance);
                const absD = Math.abs(wrappedDistance);

                // Dial illusion: scale shrinks horizontally as items move away
                const scaleX = isActive ? 1 : Math.max(0.75, 1 - absD * 0.08);
                const opacity = absD === 0 ? 1 : absD === 1 ? 0.65 : absD === 2 ? 0.35 : 0.12;

                return (
                  <motion.div
                    key={industry.name}
                    className="absolute flex items-center justify-start"
                    style={{ height: ITEM_HEIGHT, width: 'fit-content', transformOrigin: 'left center' }}
                    animate={{
                      y: wrappedDistance * ITEM_HEIGHT,
                      scaleX,
                      opacity,
                      rotateX: 0,
                      rotateY: 0,
                      rotateZ: 0,
                    }}
                    transition={{ type: 'spring', stiffness: 90, damping: 22, mass: 1 }}
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className="relative flex items-center gap-3 px-5 py-3 rounded-full transition-colors duration-300 text-left w-fit"
                      style={{
                        background: isActive ? '#fff' : 'rgba(255,255,255,0.1)',
                        color: isActive ? 'var(--brand-primary)' : '#fff',
                        border: isActive ? '1.5px solid #fff' : '1.5px solid rgba(255,255,255,0.2)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      <span className="text-[16px] flex-shrink-0"
                        style={{ color: isActive ? 'var(--brand-primary)' : 'rgba(255,255,255,0.85)' }}>
                        <Icon />
                      </span>
                      <span className="text-[12px] font-semibold tracking-[0.07em] uppercase whitespace-nowrap">
                        {industry.name}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Right panel ── */}
          <div
            className="flex-1 relative flex items-center justify-center overflow-hidden py-14 px-8 lg:px-12"
            style={{ background: '#F8FAFC' }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(0,120,191,0.07) 0%, transparent 70%)' }} />

            <div className="relative w-full max-w-[360px]" style={{ aspectRatio: '3/4' }}>
              {industries.map((industry, index) => {
                const status = getCardStatus(index);
                const isActive = status === 'active';
                const isPrev = status === 'prev';
                const isNext = status === 'next';

                return (
                  <motion.div
                    key={industry.name}
                    className="absolute inset-0 rounded-[1.75rem] overflow-hidden origin-center"
                    style={{ border: '6px solid #fff', boxShadow: isActive ? '0 32px 80px rgba(0,0,0,0.18)' : 'none' }}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -90 : isNext ? 90 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.86 : 0.72,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                      rotate: isPrev ? -4 : isNext ? 4 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 25, mass: 0.8 }}
                  >
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-all duration-700"
                      style={{ filter: isActive ? 'none' : 'grayscale(1) blur(2px) brightness(0.7)' }}
                    />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-x-0 bottom-0 p-8 pt-28 flex flex-col justify-end pointer-events-none"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 55%, transparent 100%)' }}
                        >
                          <div className="px-3.5 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] w-fit mb-3"
                            style={{ background: '#fff', color: 'var(--brand-primary)' }}>
                            {String(index + 1).padStart(2, '0')} · {industry.name}
                          </div>
                          <p className="text-white font-normal text-xl leading-snug tracking-tight"
                            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                            {industry.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className={`absolute top-6 left-6 flex items-center gap-2 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="w-[7px] h-[7px] rounded-full bg-white animate-pulse"
                        style={{ boxShadow: '0 0 8px white' }} />
                      <span className="text-white/75 text-[9px] font-medium uppercase tracking-[0.3em]"
                        style={{ fontFamily: 'monospace' }}>
                        Live Session
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Industries;