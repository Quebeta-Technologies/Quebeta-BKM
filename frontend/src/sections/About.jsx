import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { TbChessKnight, TbLayersSubtract } from 'react-icons/tb';

const points = [
  {
    icon: <TbChessKnight size={18} />,
    title: 'Strategy before everything',
    desc: 'We plan before we design. Your brand gets direction, not just decoration.',
  },
  {
    icon: <TbLayersSubtract size={18} />,
    title: 'One team, end to end',
    desc: 'Brand, tech, AI, marketing — no vendor juggling, no handoff friction.',
  },
  {
    icon: <FiTrendingUp size={18} />,
    title: 'Built for revenue, not applause',
    desc: 'Every deliverable is tied to a metric that moves your business forward.',
  },
];

const About = () => {
  const [activePoint, setActivePoint] = useState(null);

  return (
    <section id="about" className="section bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 xl:gap-24 items-center">

          {/* LEFT — Image with floating cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image */}
            <div
              className="relative rounded-[20px] overflow-hidden w-full"
              style={{ aspectRatio: '4/4.2', boxShadow: '0 20px 60px rgba(0,0,0,0.13)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                alt="Quebeta team"
                className="w-full h-full object-cover"
              />
              {/* subtle bottom fade */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,25,41,0.55) 0%, transparent 55%)' }}
              />

              {/* EST pill — top left inside image */}
              <div className="absolute top-5 left-5">
                <div className="bg-white rounded-xl px-4 py-2.5 flex items-center gap-2.5" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0078BF]" />
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">Founded</div>
                    <div className="text-[13px] font-bold text-[#0A1929]">2020 · Pune</div>
                  </div>
                </div>
              </div>

              {/* CEO quote — bottom inside image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[13px] leading-[1.65] text-white/90 italic mb-3">
                  "Too many smart founders fail — not from bad ideas, but bad execution."
                </p>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1CBBEE] animate-pulse" />
                  <span className="text-[11.5px] font-bold text-white">Rutika Channawar</span>
                  <span className="text-[11px] text-white/50">· Founder & CEO</span>
                </div>
              </div>
            </div>

            {/* Floating card — right side, mid */}
            <motion.div
              className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white rounded-xl px-5 py-4"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 mb-1">Client retention</div>
              <div className="text-[26px] font-extrabold text-[#0A1929] leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                98<span className="text-[#0078BF]">%</span>
              </div>
            </motion.div>

            {/* Floating card — bottom left */}
            <motion.div
              className="absolute -bottom-6 left-6 bg-white rounded-xl px-5 py-3.5 flex items-center gap-3"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.11)' }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div
                className="w-8 h-8 rounded-[8px] flex items-center justify-center text-[#0078BF]"
                style={{ background: 'rgba(0,120,191,0.09)' }}
              >
                <TbLayersSubtract size={16} />
              </div>
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">Services</div>
                <div className="text-[13px] font-bold text-[#0A1929]">6+ Core areas</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — All content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-5 h-[1.5px] bg-[#0078BF] inline-block" />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0078BF]">
                About Quebeta
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-extrabold leading-[1.1] tracking-[-0.025em] text-[#0A1929] mb-5"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '30px' }}
            >
              We build businesses{' '}
              <span className="text-[#0078BF]">that outlast the hype</span>
            </h2>

            {/* Body */}
            <p className="text-[14.5px] leading-[1.85] text-[#0A1929] mb-3">
              Most agencies hand you a deliverable and disappear. Quebeta embeds —{' '}
              <strong className="font-semibold">strategy wired into every pixel, every system, every campaign</strong>{' '}
              until growth becomes the default.
            </p>
            <p className="text-[14px] leading-[1.85] text-[#0A1929] mb-10">
              We think like co-founders, move like an agency, and stay accountable to your revenue — not your applause.
            </p>

            {/* Points */}
            <div className="flex flex-col mb-10">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="flex items-start gap-4 py-[18px] border-b border-slate-100 cursor-default"
                  style={{ borderTop: i === 0 ? '1px solid #f1f5f9' : undefined }}
                  onMouseEnter={() => setActivePoint(i)}
                  onMouseLeave={() => setActivePoint(null)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.07 * i }}
                >
                  <motion.div
                    className="w-9 h-9 min-w-[36px] rounded-[10px] flex items-center justify-center"
                    animate={{
                      background: activePoint === i ? 'rgba(0,120,191,0.12)' : 'rgba(0,120,191,0.07)',
                      color: activePoint === i ? '#0078BF' : '#93c4dc',
                    }}
                    transition={{ duration: 0.18 }}
                  >
                    {p.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.div
                      className="text-[13.5px] font-bold mb-1"
                      animate={{ color: activePoint === i ? '#0078BF' : '#0A1929' }}
                      transition={{ duration: 0.18 }}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {p.title}
                    </motion.div>
                    <div className="text-[13px] leading-[1.6] text-[#0A1929]">{p.desc}</div>
                  </div>
                  <motion.div
                    animate={{ opacity: activePoint === i ? 1 : 0, x: activePoint === i ? 0 : -5 }}
                    transition={{ duration: 0.16 }}
                    className="text-[#0078BF] mt-0.5"
                  >
                    <FiArrowRight size={14} />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-6">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0078BF] text-white text-[13px] font-bold px-6 py-3 rounded-full hover:bg-[#005fa3] transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's talk
                <FiArrowRight size={13} />
              </motion.a>
              <a
                href="#services"
                className="text-[13px] font-semibold text-[#0A1929] hover:text-[#0078BF] transition-colors duration-200 flex items-center gap-1.5 group"
              >
                See our services
                <FiArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;