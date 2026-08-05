import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiUsers } from 'react-icons/fi';
import { TbChessKnight, TbLayersSubtract, TbTrendingUp, TbBuildingSkyscraper, TbRocket } from 'react-icons/tb';

const stats = [
  { value: '98%', label: 'Client Retention', icon: <FiUsers size={14} /> },
  { value: '6+', label: 'Core Services', icon: <TbLayersSubtract size={14} /> },
  { value: '50+', label: 'Brands Built', icon: <FiAward size={14} /> },
  { value: '4', label: 'Years of Growth', icon: <TbTrendingUp size={14} /> },
];

const points = [
  {
    icon: <TbChessKnight size={20} />,
    title: 'Strategy before everything',
    desc: 'We plan before we design. Your brand gets direction, not just decoration — every decision is tied to a business outcome.',
  },
  {
    icon: <TbLayersSubtract size={20} />,
    title: 'One team, end to end',
    desc: 'Brand, tech, AI, marketing — no vendor juggling, no handoff friction. One team accountable for all of it.',
  },
  {
    icon: <TbTrendingUp size={20} />,
    title: 'Built for revenue, not applause',
    desc: 'Every deliverable is tied to a metric that moves your business forward. We track numbers, not compliments.',
  },
];


const About = () => {
  const [activePoint, setActivePoint] = useState(null);

  return (
    <section
      id="about"
      className="relative bg-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #0078BF 40%, #1CBBEE 60%, transparent)' }} />

      <div className="section-container py-24 lg:py-32">

        {/* ── EYEBROW ── */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-[2px] bg-[#0078BF]" />
          <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', color: '#0078BF', textTransform: 'uppercase' }}>
            About Quebeta
          </span>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ══════════ LEFT COLUMN ══════════ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Big headline */}
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#0A1929',
                marginBottom: '28px',
              }}
            >
              We build businesses<br />
              <span style={{ color: '#0078BF' }}>that outlast</span>{' '}
              <span style={{ color: '#0A1929' }}>the hype.</span>
            </h2>

            {/* Body copy */}
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#374151', marginBottom: '16px', fontWeight: 400 }}>
              Most agencies hand you a deliverable and disappear. Quebeta embeds —{' '}
              <strong style={{ fontWeight: 700, color: '#0A1929' }}>strategy wired into every pixel, every system, every campaign</strong>{' '}
              until growth becomes the default.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#374151', marginBottom: '36px', fontWeight: 400 }}>
              We think like co-founders, move like an agency, and stay accountable to your revenue — not your applause. From a single startup idea to a fully scaled brand, we're the team you don't have to manage.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mb-0">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.06 * i }}
                >
                  <div style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, color: '#0078BF', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>

          {/* ══════════ RIGHT COLUMN ══════════ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image block */}
            <div className="relative mb-10">
              {/* Main image */}
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  position: 'relative',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                  alt="Quebeta team at work"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Dark overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(10,25,41,0.4) 0%, transparent 60%)',
                  }}
                />
                {/* Founded badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'white',
                    borderRadius: '10px',
                    padding: '10px 16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <TbBuildingSkyscraper size={16} color="#0078BF" />
                  <div>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Founded</div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#0A1929' }}>2020 · Pune</div>
                  </div>
                </div>
                {/* Bottom label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    background: '#0078BF',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <TbRocket size={14} color="white" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'white', letterSpacing: '0.04em' }}>From Idea to Impact</span>
                </div>
              </div>

              {/* Floating client retention card */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  background: 'white',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.13)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  minWidth: '180px',
                }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(0,120,191,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0078BF',
                    flexShrink: 0,
                  }}
                >
                  <FiUsers size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px' }}>Client Retention</div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#0A1929', lineHeight: 1, letterSpacing: '-0.03em' }}>
                    98<span style={{ color: '#0078BF' }}>%</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Spacer for floating card */}
            <div style={{ height: '20px' }} />

            {/* Why we're different — 3 points */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Why Quebeta
              </div>
              <div className="flex flex-col">
                {points.map((p, i) => (
                  <motion.div
                    key={p.title}
                    className="flex items-start gap-4"
                    style={{
                      padding: '18px 0',
                      borderBottom: i < points.length - 1 ? '1px solid #f1f5f9' : 'none',
                      borderTop: i === 0 ? '1px solid #f1f5f9' : 'none',
                      cursor: 'default',
                    }}
                    onMouseEnter={() => setActivePoint(i)}
                    onMouseLeave={() => setActivePoint(null)}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.07 * i }}
                  >
                    <motion.div
                      style={{
                        width: '40px',
                        height: '40px',
                        minWidth: '40px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.18s',
                        background: activePoint === i ? 'rgba(0,120,191,0.12)' : 'rgba(0,120,191,0.06)',
                        color: activePoint === i ? '#0078BF' : '#93c4dc',
                      }}
                    >
                      {p.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 700,
                          marginBottom: '4px',
                          color: activePoint === i ? '#0078BF' : '#0A1929',
                          transition: 'color 0.18s',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {p.title}
                      </div>
                      <div style={{ fontSize: '13px', lineHeight: 1.65, color: '#64748b' }}>
                        {p.desc}
                      </div>
                    </div>
                    <motion.div
                      animate={{ opacity: activePoint === i ? 1 : 0, x: activePoint === i ? 0 : -6 }}
                      transition={{ duration: 0.16 }}
                      style={{ color: '#0078BF', marginTop: '2px' }}
                    >
                      <FiArrowRight size={14} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-6">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2"
                style={{
                  background: '#0078BF',
                  color: 'white',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  padding: '13px 26px',
                  borderRadius: '100px',
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background 0.2s',
                  fontFamily: "'Montserrat', sans-serif",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={e => e.currentTarget.style.background = '#005fa3'}
                onMouseLeave={e => e.currentTarget.style.background = '#0078BF'}
              >
                Let's talk
                <FiArrowRight size={13} />
              </motion.a>
              <a
                href="#services"
                className="group"
                style={{
                  fontSize: '12.5px',
                  fontWeight: 700,
                  color: '#0A1929',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#0078BF'}
                onMouseLeave={e => e.currentTarget.style.color = '#0A1929'}
              >
                See our services
                <FiArrowRight size={23} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;