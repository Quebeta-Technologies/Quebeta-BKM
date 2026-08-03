import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiTrendingUp } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const highlights = [
  {
    icon: <FiTarget />,
    title: 'Strategic Vision',
    desc: 'We start with clarity — mapping goals, users, and outcomes before touching a single pixel.',
  },
  {
    icon: <FiZap />,
    title: 'Creative Execution',
    desc: 'Design, code, and content built together — one team, one language, zero handoff friction.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Measurable Growth',
    desc: 'Every campaign, feature, and asset is tied to a metric that moves the business forward.',
  },
];

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-5 h-px bg-[#0078BF] inline-block" />
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078BF]">
            About Quebeta
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="section-eyebrow mb-6">
              <HiSparkles className="text-[13px]" />
              From idea to impact
            </div>

            {/* Heading */}
            <h2 className="section-title text-left">
              A strategic{' '}
              <span className="gradient-text">technology &amp; growth</span>{' '}
              partner
            </h2>

            {/* Body */}
            <p className="section-subtitle mb-12">
              Quebeta transforms ambitious ideas into scalable brands, digital
              products, and intelligent systems — combining strategy, creativity,
              technology, AI, and marketing into one focused engine.
            </p>

            {/* Stats */}
            <div className="flex gap-10 pt-8 border-t border-slate-100">
              {[['98%', 'Client Retention'], ['6+', 'Core Services']].map(([num, label]) => (
                <div key={label}>
                  <div
                    className="text-[34px] font-bold leading-none mb-1.5 text-[#0A1929] tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {num}
                  </div>
                  <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className={`flex items-start gap-5 py-7 border-b border-slate-100 ${i === 0 ? 'border-t border-slate-100' : ''}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 min-w-[40px] rounded-[10px] flex items-center justify-center text-[17px] text-[#0078BF] mt-0.5"
                  style={{ background: 'rgba(0,120,191,0.08)' }}
                >
                  {h.icon}
                </div>

                <div>
                  <h4
                    className="text-[15px] font-semibold text-[#0A1929] mb-1.5 tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {h.title}
                  </h4>
                  <p className="text-[13.5px] leading-relaxed text-slate-500">
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;