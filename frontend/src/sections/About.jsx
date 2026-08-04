import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { TbChessKnight, TbLayersSubtract } from 'react-icons/tb';

const points = [
  {
    icon: <TbChessKnight size={18} />,
    title: 'Strategy before everything',
    desc: 'We plan before we design. Your brand gets direction, not just decoration. Every decision has a reason rooted in where you want to go.',
    color: '#0078BF',
    bg: 'rgba(0,120,191,0.10)',
    position: { top: '12%', left: '-22%' },
  },
  {
    icon: <TbLayersSubtract size={18} />,
    title: 'One team, end to end',
    desc: 'Brand, tech, AI, marketing — no vendor juggling, no handoff friction. You work with one team that owns the full picture.',
    color: '#1CBBEE',
    bg: 'rgba(28,187,238,0.10)',
    position: { top: '44%', right: '-22%' },
  },
  {
    icon: <FiTrendingUp size={18} />,
    title: 'Built for revenue, not applause',
    desc: 'Every deliverable is tied to a metric that moves your business forward. We measure success in growth, not compliments.',
    color: '#0078BF',
    bg: 'rgba(0,120,191,0.10)',
    position: { bottom: '8%', left: '-22%' },
  },
];

const FloatingCard = ({ point, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="absolute z-20 cursor-default"
      style={point.position}
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.35 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="w-[200px] rounded-2xl overflow-hidden"
        animate={{
          boxShadow: hovered
            ? '0 20px 48px rgba(0,120,191,0.18), 0 4px 12px rgba(0,0,0,0.08)'
            : '0 8px 32px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.05)',
          y: hovered ? -4 : 0,
        }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)' }}
      >
        {/* Card header — always visible */}
        <div className="px-4 pt-4 pb-3 flex items-center gap-3">
          <motion.div
            className="w-8 h-8 min-w-[32px] rounded-[9px] flex items-center justify-center"
            style={{ background: point.bg, color: point.color }}
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.22 }}
          >
            {point.icon}
          </motion.div>
          <span
            className="text-[12px] font-bold text-[#0A1929] leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {point.title}
          </span>
        </div>

        {/* Expandable desc */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="desc"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4">
                <div className="h-px bg-slate-100 mb-3" />
                <p className="text-[11.5px] leading-[1.65] text-slate-500">{point.desc}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <section id="about" className="section bg-white overflow-x-hidden">
      <div className="section-container">

        {/* Eyebrow — ABOVE heading */}
        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="w-[18px] h-[1.5px] bg-[#0078BF] inline-block" />
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0078BF]">
            About Quebeta
          </span>
        </motion.div>

        {/* Heading — full width, above the grid */}
        <motion.h2
          className="text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0A1929] mb-4 max-w-[780px]"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          We build businesses{' '}
          <span className="text-[#0078BF]">that outlast the hype</span>
        </motion.h2>

        <motion.p
          className="text-[15px] leading-[1.8] text-slate-500 mb-14 max-w-[580px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Most agencies hand you a website and disappear. Quebeta stays —
          embedding{' '}
          <strong className="text-[#0A1929] font-semibold">
            strategy into every pixel, every system, every campaign
          </strong>{' '}
          until your business is built to grow on its own.
        </motion.p>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 xl:gap-20 items-start">

          {/* LEFT — Image with floating cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Extra horizontal space for floating cards */}
            <div className="relative mx-[22%]">

              {/* Image */}
              <motion.div
                className="relative rounded-[22px] overflow-hidden aspect-[3/4] cursor-pointer"
                onMouseEnter={() => setImgHovered(true)}
                onMouseLeave={() => setImgHovered(false)}
                animate={{ scale: imgHovered ? 1.015 : 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  boxShadow: '0 24px 64px rgba(0,0,0,0.13)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                  alt="Quebeta team at work"
                  className="w-full h-full object-cover"
                />

                {/* Always-on dark gradient at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(10,25,41,0.92) 0%, rgba(10,25,41,0.12) 50%, transparent 100%)',
                  }}
                />

                {/* Hover overlay — extra dim */}
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'rgba(0,120,191,0.08)' }}
                  animate={{ opacity: imgHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* CEO quote — slides up on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  animate={{ y: imgHovered ? 0 : 18, opacity: imgHovered ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <p className="text-[13px] leading-[1.7] text-white/90 italic mb-4">
                    "I watched too many smart founders fail — not from bad ideas, but bad execution. We fix that."
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1CBBEE] animate-pulse" />
                    <div>
                      <div className="text-[11.5px] font-bold text-white tracking-[0.06em]">
                        Rutika Channawar
                      </div>
                      <div className="text-[10.5px] text-white/50 mt-0.5">
                        Founder & CEO
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Top pill */}
                <div className="absolute top-5 left-5 bg-white/95 rounded-full px-4 py-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0078BF] animate-pulse" />
                  <span className="text-[10.5px] font-bold text-[#0078BF] tracking-[0.06em] uppercase">
                    Est. 2020 · Pune
                  </span>
                </div>
              </motion.div>

              {/* Floating cards */}
              {points.map((point, i) => (
                <FloatingCard key={point.title} point={point} index={i} />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Extended content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2"
          >

            {/* Story block */}
            <div className="mb-10">
              <h3
                className="text-[15px] font-bold text-[#0A1929] mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Why we exist
              </h3>
              <p className="text-[14px] leading-[1.85] text-slate-500 mb-4">
                Quebeta was born from frustration. Too many growing companies were stuck cycling through agencies that over-promised, under-delivered, and handed off with zero context. The result? Misaligned brands, broken systems, and teams left holding the bag.
              </p>
              <p className="text-[14px] leading-[1.85] text-slate-500">
                We built Quebeta to be the opposite — a single, committed team that thinks like a co-founder, moves like an agency, and stays accountable to your revenue, not your approval.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 mb-10" />

            {/* What makes us different */}
            <div className="mb-10">
              <h3
                className="text-[15px] font-bold text-[#0A1929] mb-5 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                What makes us different
              </h3>
              <div className="flex flex-col gap-0">
                {[
                  {
                    label: 'We don\'t just build — we embed',
                    body: 'We get inside your business, understand your goals, and build systems that outlive the engagement.',
                  },
                  {
                    label: 'Revenue is the only metric that matters',
                    body: 'Every brief we take starts with the same question: what does success look like in rupees?',
                  },
                  {
                    label: 'No silos, no handoffs',
                    body: 'Strategy, brand, tech, and marketing live in one room. What gets built is what was planned.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex gap-4 py-5 border-b border-slate-100 group"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.06 * i }}
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 min-w-[6px] rounded-full bg-[#1CBBEE]" />
                    <div>
                      <div
                        className="text-[13px] font-bold text-[#0A1929] mb-1 group-hover:text-[#0078BF] transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.label}
                      </div>
                      <div className="text-[12.5px] leading-[1.7] text-slate-400">
                        {item.body}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 pt-1">
              {[
                ['98%', 'Client retention'],
                ['6+', 'Core services'],
                ['1 team', 'No silos'],
              ].map(([num, label], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.07 * i }}
                  className="flex flex-col"
                >
                  <div
                    className="text-[28px] font-extrabold text-[#0A1929] tracking-tight leading-none mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {num.includes('%') ? (
                      <>{num.replace('%', '')}<span className="text-[#0078BF]">%</span></>
                    ) : num.includes('+') ? (
                      <>{num.replace('+', '')}<span className="text-[#0078BF]">+</span></>
                    ) : (
                      num
                    )}
                  </div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0078BF] hover:text-[#005fa3] transition-colors duration-200 group"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              Let's talk about your business
              <FiArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;