import { useRef, useEffect, useCallback, useState, useId } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { services } from '../data/services';

/* ─── Reduced-motion hook ─── */
function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/* ─── Spring physics ─── */
class Spring {
  constructor(value, k, d) { this.x = value; this.v = 0; this.target = value; this.k = k; this.d = d; }
  step(dt) {
    const a = this.k * (this.target - this.x) - this.d * this.v;
    this.v += a * dt; this.x += this.v * dt; return this.x;
  }
}

/* ─── Animated border card ─── */
function BeamCard({ children, className = '' }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const cls = `mk-beam-${uid}`;
  const rootRef = useRef(null);
  const reduced = useReducedMotion();
  const speedRef = useRef(new Spring(42, 30, 11));
  const angleRef = useRef(0);
  const rafRef = useRef(0);

  const paint = useCallback((angle) => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty('--mk-a', `${(((angle % 360) + 360) % 360).toFixed(2)}deg`);
  }, []);

  useEffect(() => {
    if (reduced) { paint(40); return; }
    let last = 0;
    const frame = (now) => {
      if (!last) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      angleRef.current += speedRef.current.step(dt) * dt;
      paint(angleRef.current);
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduced, paint]);

  const surge = useCallback(() => { speedRef.current.target = 240; }, []);
  const settle = useCallback(() => { speedRef.current.target = 42; }, []);

  /* Beam gradient uses --brand-primary and --brand-secondary from your design system */
  const css = `
.${cls} { --mk-a: 0deg; }
.${cls} .beam-ring {
  position: absolute; inset: -1px; border-radius: var(--radius-lg); pointer-events: none;
  background: conic-gradient(from var(--mk-a),
    transparent 0deg,
    color-mix(in srgb, var(--brand-secondary) 4%, transparent) 18deg,
    color-mix(in srgb, var(--brand-secondary) 55%, transparent) 46deg,
    var(--brand-primary) 56deg,
    color-mix(in srgb, var(--brand-primary) 22%, #fff) 60deg,
    transparent 63deg,
    transparent 198deg,
    color-mix(in srgb, var(--brand-secondary) 4%, transparent) 216deg,
    color-mix(in srgb, var(--brand-secondary) 50%, transparent) 244deg,
    var(--brand-secondary) 254deg,
    color-mix(in srgb, var(--brand-secondary) 26%, #fff) 258deg,
    transparent 261deg,
    transparent 360deg);
  padding: 1.5px;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
.${cls} .beam-glow {
  position: absolute; inset: -1px; border-radius: var(--radius-lg); pointer-events: none; z-index: -1;
  background: conic-gradient(from var(--mk-a),
    transparent 0deg,
    color-mix(in srgb, var(--brand-secondary) 55%, transparent) 46deg,
    var(--brand-primary) 56deg,
    color-mix(in srgb, var(--brand-primary) 22%, #fff) 60deg,
    transparent 63deg,
    transparent 360deg);
  filter: blur(12px); opacity: 0.22;
}`;

  return (
    <div
      ref={rootRef}
      className={`relative rounded-[var(--radius-lg)] bg-white ${cls} ${className}`}
      style={{ border: '1px solid rgba(0,120,191,0.08)', isolation: 'isolate' }}
      onPointerEnter={surge}
      onPointerLeave={settle}
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div aria-hidden="true" className="beam-glow" />
      <div aria-hidden="true" className="beam-ring" />
      {children}
    </div>
  );
}

/* ─── Services section ─── */
const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="section-container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-eyebrow">What We Do</div>
          {/* Heading overrides the clamp() in section-title to a fixed 30px */}
          <h2 className="section-title" style={{ fontSize: '1.875rem' }}>
            End-to-end solutions to{' '}
            <span className="gradient-text">build, launch & grow</span> your business
          </h2>
          <p className="section-subtitle">
            Six integrated capabilities under one roof every service built to
            work with the next, so nothing gets lost in translation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="h-full"
              >
                <BeamCard className="h-full transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col h-full p-7">

                    {/* Icon — uses service.color → --brand-secondary gradient */}
                    <div className="mb-6">
                      <div
                        className="w-[52px] h-[52px] rounded-[var(--radius-md)] flex items-center justify-center text-white text-[22px]"
                        style={{ background: `linear-gradient(135deg, ${service.color}, var(--brand-secondary))` }}
                      >
                        <Icon />
                      </div>
                    </div>

                    {/* Title — uses h3 which inherits from your h1-h6 rule */}
                    <h3 className="text-[1.1rem] text-[var(--brand-dark)] font-bold mb-2">
                      {service.title}
                    </h3>

                    <p className="text-[13.5px] text-slate-500 leading-relaxed mb-5 flex-grow">
                      {service.desc}
                    </p>

                    {/* Feature tags — use brand-primary color token */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full"
                          style={{
                            background: 'rgba(0,120,191,0.05)',
                            color: 'var(--brand-primary)',
                            border: '1px solid rgba(0,120,191,0.12)',
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA — uses brand-primary color token, font-heading var */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold
                                 text-[var(--brand-primary)] transition-all duration-300
                                 self-start group hover:gap-2.5"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Learn more
                      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                    </a>

                  </div>
                </BeamCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;