import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { TbChessKnight, TbLayersSubtract } from 'react-icons/tb';

const points = [
  {
    icon: <TbChessKnight size={20} />,
    title: 'Strategy before everything',
    desc: 'We plan before we design. Your brand gets direction, not just decoration.',
  },
  {
    icon: <TbLayersSubtract size={20} />,
    title: 'One team, end to end',
    desc: 'Brand, tech, AI, marketing — no vendor juggling, no handoff friction.',
  },
  {
    icon: <FiTrendingUp size={20} />,
    title: 'Built for revenue, not applause',
    desc: 'Every deliverable is tied to a metric that moves your business forward.',
  },
];

const About = () => {
  const [activePoint, setActivePoint] = useState(null);

  return (
    <section id="about" className="section bg-white">
      <div className="section-container">

        {/* MAIN GRID — Image left, ALL content right */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 xl:gap-20 items-start">

          {/* LEFT — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative rounded-[24px] overflow-hidden"
              style={{ aspectRatio: '4/5', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Quebeta team at work"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,25,41,0.9) 0%, rgba(10,25,41,0.2) 45%, transparent 100%)',
                }}
              />

              {/* Top pill */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0078BF] animate-pulse" />
                <span className="text-[10.5px] font-bold text-[#0078BF] tracking-[0.07em] uppercase">
                  Est. 2020 · Pune
                </span>
              </div>

              {/* CEO quote */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-[13.5px] leading-[1.7] text-white/90 italic mb-4">
                  "I watched too many smart founders fail — not from bad ideas, but bad execution. We fix that."
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1CBBEE] animate-pulse" />
                  <div>
                    <div className="text-[12px] font-bold text-white tracking-[0.05em]">
                      Rutika Channawar
                    </div>
                    <div className="text-[11px] text-white/50 mt-0.5">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-6 py-4 flex gap-6"
              style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.10)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[['98%', 'Retention'], ['6+', 'Services'], ['5yr', 'Experience']].map(
                ([num, label]) => (
                  <div key={label} className="text-center">
                    <div
                      className="text-[22px] font-extrabold text-[#0A1929] leading-none mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {num.includes('%') ? (
                        <>{num.replace('%', '')}<span className="text-[#0078BF]">%</span></>
                      ) : num.includes('+') ? (
                        <>{num.replace('+', '')}<span className="text-[#0078BF]">+</span></>
                      ) : num}
                    </div>
                    <div className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                      {label}
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT — ALL content */}
          <motion.div
            className="pt-1"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="w-5 h-[1.5px] bg-[#0078BF] inline-block" />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0078BF]">
                About Quebeta
              </span>
            </motion.div>

            {/* Heading — 30px */}
            <h2
              className="font-extrabold leading-[1.12] tracking-[-0.02em] text-[#0A1929] mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '30px' }}
            >
              We build businesses{' '}
              <span className="text-[#0078BF]">that outlast the hype</span>
            </h2>

            {/* Subtext — black */}
            <p className="text-[14.5px] leading-[1.85] text-[#0A1929] mb-8">
              Most agencies hand you a deliverable and disappear. Quebeta embeds —{' '}
              <strong className="font-semibold">
                strategy wired into every pixel, every system, every campaign
              </strong>{' '}
              until growth becomes the default.
            </p>

            <p className="text-[14px] leading-[1.85] text-[#0A1929] mb-10">
              Quebeta was built from frustration. Too many growing companies were stuck cycling
              through agencies that over-promised, under-delivered, and handed off with zero context.
              We're the opposite — a single committed team that thinks like a co-founder and stays
              accountable to your revenue, not your approval.
            </p>

            {/* Three points */}
            <div className="flex flex-col mb-10">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="flex items-start gap-4 py-5 border-b border-slate-100 cursor-default"
                  style={{ borderTop: i === 0 ? '1px solid rgb(241 245 249)' : undefined }}
                  onMouseEnter={() => setActivePoint(i)}
                  onMouseLeave={() => setActivePoint(null)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                >
                  <motion.div
                    className="w-10 h-10 min-w-[40px] rounded-[11px] flex items-center justify-center"
                    animate={{
                      background: activePoint === i ? 'rgba(0,120,191,0.13)' : 'rgba(0,120,191,0.07)',
                      color: activePoint === i ? '#0078BF' : '#93c4dc',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {p.icon}
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      className="text-[14px] font-bold mb-1"
                      animate={{ color: activePoint === i ? '#0078BF' : '#0A1929' }}
                      transition={{ duration: 0.2 }}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {p.title}
                    </motion.div>
                    <div className="text-[13px] leading-[1.65] text-[#0A1929]">{p.desc}</div>
                  </div>

                  <motion.div
                    animate={{ opacity: activePoint === i ? 1 : 0, x: activePoint === i ? 0 : -6 }}
                    transition={{ duration: 0.18 }}
                    className="text-[#0078BF] mt-1"
                  >
                    <FiArrowRight size={15} />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-6">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1CBBEE] text-white text-[13px] font-bold px-6 py-3 rounded-full hover:bg-[#0078BF] transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's talk
                <FiArrowRight size={14} />
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