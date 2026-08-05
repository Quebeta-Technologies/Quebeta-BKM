import { motion } from 'framer-motion';
import { FiUsers, FiTrendingUp, FiArrowRight, FiAward } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { useRef, useEffect, useCallback, useState, useId } from 'react';

const partnershipTypes = [
  {
    icon: FaHandshake,
    title: 'Startup Partnership',
    subtitle: 'For Founders',
    features: [
      'Equity + retainer models',
      'MVP to Series-A support',
      'Fractional CTO / CMO access',
      'Weekly growth reviews',
    ],
  },
  {
    icon: FiUsers,
    title: 'Agency Whitelabel',
    subtitle: 'For Agencies',
    features: [
      'Development capacity extension',
      'Whitelabel branding & delivery',
      'Dedicated pods per client',
      'Transparent SLAs',
    ],
    featured: true,
  },
  {
    icon: FiAward,
    title: 'Enterprise Retainer',
    subtitle: 'For Established Brands',
    features: [
      'Ongoing product & growth ops',
      'Priority tech + design squad',
      'Quarterly business reviews',
      'Advanced analytics & reporting',
    ],
  },
];

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

/* ─── Beam card for non-featured ─── */
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
      className={`relative bg-white rounded-[var(--radius-lg)] service-card ${cls} ${className}`}
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

const Partnership = () => {
  return (
    <section id="partnership" className="section bg-white">
      <div className="section-container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-eyebrow">Partnership Models</div>
          <h2 className="section-title">
            Ways to <span className="gradient-text">work with Quebeta</span>
          </h2>
          <p className="section-subtitle">
            Whether you're a founder, an agency, or an enterprise — we shape our
            engagement around your goals, timeline, and appetite for scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {partnershipTypes.map((p, i) => {
            const Icon = p.icon;

            if (p.featured) {
              return (
                <motion.div
                  key={p.title}
                  className="relative rounded-[var(--radius-lg)] p-8 text-white transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: 'var(--brand-primary)', isolation: 'isolate' }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Most Popular badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 text-[11px] font-bold tracking-[0.06em] uppercase rounded-full"
                    style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}>
                    Most Popular
                  </div>

                  <div className="w-[52px] h-[52px] rounded-[var(--radius-md)] flex items-center justify-center text-[22px] mb-5"
                    style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                    <Icon />
                  </div>

                  <div className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-1"
                    style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {p.subtitle}
                  </div>

                  <h3 className="font-bold text-[1.3rem] mb-6 text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}>
                    {p.title}
                  </h3>

                  <ul className="mb-8 flex flex-col">
                    {p.features.map((f) => (
                      <li key={f}
                        className="flex items-center gap-3 py-[10px] text-[14px]"
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
                      >
                        <span className="w-[20px] h-[20px] min-w-[20px] rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                          style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-[11px] rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: '#fff', color: 'var(--brand-primary)' }}>
                    Talk to us <FiArrowRight />
                  </a>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <BeamCard className="h-full transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col h-full p-8">

                    <div className="w-[52px] h-[52px] rounded-[var(--radius-md)] flex items-center justify-center text-[22px] mb-5"
                      style={{ background: 'rgba(0,120,191,0.08)', color: 'var(--brand-primary)' }}>
                      <Icon />
                    </div>

                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-1"
                      style={{ color: 'var(--brand-primary)' }}>
                      {p.subtitle}
                    </div>

                    <h3 className="font-bold text-[1.3rem] mb-6"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--brand-dark)' }}>
                      {p.title}
                    </h3>

                    <ul className="mb-8 flex flex-col flex-grow">
                      {p.features.map((f) => (
                        <li key={f}
                          className="flex items-center gap-3 py-[10px] text-[14px] text-slate-600"
                          style={{ borderBottom: '1px solid rgba(0,120,191,0.07)' }}
                        >
                          <span className="w-[20px] h-[20px] min-w-[20px] rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                            style={{ background: 'rgba(0,120,191,0.08)', color: 'var(--brand-primary)' }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-[11px] rounded-full font-semibold text-sm self-start transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: 'rgba(0,120,191,0.07)', color: 'var(--brand-primary)' }}>
                      Talk to us <FiArrowRight />
                    </a>

                  </div>
                </BeamCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          className="flex flex-wrap md:flex-nowrap items-center gap-6 p-8 bg-white rounded-[var(--radius-lg)]"
          style={{ border: '1px solid rgba(0,120,191,0.12)', boxShadow: 'var(--shadow-md)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="w-[52px] h-[52px] min-w-[52px] rounded-[var(--radius-md)] flex items-center justify-center text-white text-[22px] flex-shrink-0"
            style={{ background: 'var(--gradient-primary)' }}>
            <FiTrendingUp />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[1.1rem] mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--brand-dark)' }}>
              Not sure which model fits?
            </h4>
            <p className="text-[14px] text-slate-500">
              Book a 30-minute discovery call — we'll map the right partnership for your stage.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary flex-shrink-0">
            Book a Call <FiArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Partnership;