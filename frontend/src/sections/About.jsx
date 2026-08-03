import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';
import { TbChessKnight, TbLayersSubtract } from 'react-icons/tb';

const points = [
  {
    icon: <TbChessKnight />,
    title: 'Strategy before everything',
    desc: 'We plan before we design. Your brand gets direction, not just decoration.',
  },
  {
    icon: <TbLayersSubtract />,
    title: 'One team, end to end',
    desc: 'Brand, tech, AI, marketing — no vendor juggling, no handoff friction.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Built for revenue, not applause',
    desc: 'Every deliverable is tied to a metric that moves your business forward.',
  },
];

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="section-container">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-[18px] h-[1.5px] bg-[#0078BF] inline-block" />
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0078BF]">
            About Quebeta
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-16 items-center">

          {/* LEFT — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-[20px] overflow-hidden aspect-[3/4]">

              {/* Replace src with your actual team photo */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                alt="Quebeta team at work"
                className="w-full h-full object-cover"
              />

              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,25,41,0.88) 0%, rgba(10,25,41,0.08) 55%, transparent 100%)' }}
              />

              {/* CEO Quote — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-[14px] leading-[1.65] text-white/90 italic mb-4">
                  "I watched too many smart founders fail — not from bad ideas, but bad execution. We fix that."
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1CBBEE] animate-pulse" />
                  <div>
                    <div className="text-[12px] font-bold text-white tracking-[0.06em]">
                      Rutika Channawar
                    </div>
                    <div className="text-[11px] text-white/50 mt-0.5">
                      Founder & CEO
                    </div>
                  </div>
                </div>
              </div>

              {/* Top pill badge */}
              <div className="absolute top-5 left-5 bg-white/95 rounded-full px-4 py-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0078BF] animate-pulse" />
                <span className="text-[11px] font-bold text-[#0078BF] tracking-[0.06em] uppercase">
                  Est. 2020 · Pune
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Headline */}
            <h2
              className="text-[clamp(32px,4vw,42px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A1929] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We build businesses
              <span className="text-[#0078BF]">that outlast the hype</span>
            </h2>

            {/* Body */}
            <p className="text-[14.5px] leading-[1.8] text-slate-500 mb-10">
              Most agencies hand you a website and disappear. Quebeta stays —
              embedding <strong className="text-[#0A1929] font-semibold">strategy into every pixel, every system,
              every campaign</strong> until your business is built to grow on its own.
            </p>

            {/* Points */}
            <div className="flex flex-col">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  className={`flex items-start gap-4 py-[18px] border-b border-slate-100 ${i === 0 ? 'border-t border-slate-100' : ''}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 * i }}
                >
                  <div
                    className="w-[34px] h-[34px] min-w-[34px] rounded-[9px] flex items-center justify-center text-[16px] text-[#0078BF]"
                    style={{ background: 'rgba(0,120,191,0.08)' }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div
                      className="text-[13.5px] font-bold text-[#0A1929] mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {p.title}
                    </div>
                    <div className="text-[12.5px] leading-[1.6] text-slate-400">
                      {p.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-7 border-t border-slate-100">
              {[
                ['98%', 'Client retention'],
                ['6+', 'Core services'],
                ['1 team', 'No vendor juggling'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div
                    className="text-[26px] font-extrabold text-[#0A1929] tracking-tight leading-none mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {num.includes('%') || num.includes('+') ? (
                      <>
                        {num.replace('%', '').replace('+', '')}
                        <span className="text-[#0078BF]">{num.includes('%') ? '%' : '+'}</span>
                      </>
                    ) : (
                      <>{num}</>
                    )}
                  </div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;