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
            From bootstrapped startups to established enterprises — we've helped
            teams in every industry ship products that move the needle.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative overflow-hidden rounded-[2rem] flex flex-col lg:flex-row"
          style={{ minHeight: '480px', border: '1px solid rgba(0,120,191,0.1)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >

          {/* ── Left panel ── */}
          <div
            className="w-full lg:w-[40%] relative flex items-center justify-center overflow-hidden px-8 lg:px-12"
            style={{ background: 'var(--brand-primary)', minHeight: '320px' }}
          >
            {/* Top + bottom fade */}
            <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, var(--brand-primary), transparent)' }} />
            <div className="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to top, var(--brand-primary), transparent)' }} />

            <div className="relative w-full flex items-center justify-start z-20" style={{ height: `${ITEM_HEIGHT * 5}px` }}>
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
                      opacity: 1 - Math.abs(wrappedDistance) * 0.22,
                    }}
                    transition={{ type: 'spring', stiffness: 90, damping: 22, mass: 1 }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className="relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 text-left"
                      style={{
                        background: isActive ? '#fff' : 'rgba(255,255,255,0.1)',
                        color: isActive ? 'var(--brand-primary)' : 'rgba(255,255,255,0.65)',
                        border: isActive ? '1px solid #fff' : '1px solid rgba(255,255,255,0.2)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      <span className="text-[18px] flex-shrink-0">
                        <Icon />
                      </span>
                      <span className="text-[13px] font-semibold tracking-[0.06em] uppercase whitespace-nowrap">
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
            className="flex-1 relative flex items-center justify-center p-10 lg:p-16"
            style={{ background: '#fff', borderLeft: '1px solid rgba(0,120,191,0.08)' }}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const status = getCardStatus(index);
              const isActive = status === 'active';
              const isPrev = status === 'prev';
              const isNext = status === 'next';

              return (
                <motion.div
                  key={industry.name}
                  className="absolute flex flex-col justify-between p-8 rounded-[1.5rem]"
                  style={{
                    width: '80%',
                    maxWidth: '380px',
                    minHeight: '300px',
                    background: '#fff',
                    border: '1px solid rgba(0,120,191,0.1)',
                    boxShadow: isActive ? 'var(--shadow-lg)' : 'none',
                  }}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.75,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 25, mass: 0.8 }}
                >
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={industry.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="flex flex-col h-full gap-6"
                      >
                        {/* Icon */}
                        <div
                          className="w-[60px] h-[60px] rounded-[var(--radius-md)] flex items-center justify-center text-[26px]"
                          style={{ background: 'rgba(0,120,191,0.08)', color: 'var(--brand-primary)' }}
                        >
                          <Icon />
                        </div>

                        {/* Counter badge */}
                        <div
                          className="self-start px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase"
                          style={{ background: 'rgba(0,120,191,0.06)', color: 'var(--brand-primary)', border: '1px solid rgba(0,120,191,0.12)' }}
                        >
                          {String(currentIndex + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
                        </div>

                        <div>
                          <h3
                            className="font-bold text-[1.4rem] mb-3"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--brand-dark)' }}
                          >
                            {industry.name}
                          </h3>
                          <p className="text-[14.5px] text-slate-500 leading-relaxed">
                            {industry.desc}
                          </p>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-auto">
                          <div className="h-[2px] w-full rounded-full" style={{ background: 'rgba(0,120,191,0.1)' }}>
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: 'var(--gradient-primary)' }}
                              initial={{ width: '0%' }}
                              animate={{ width: '100%' }}
                              transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: 'linear' }}
                              key={currentIndex}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Industries;