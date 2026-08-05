import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { TbBuildingSkyscraper, TbRocket } from 'react-icons/tb';

const About = () => {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #0078BF 40%, #1CBBEE 60%, transparent)' }} />

      <div className="section-container py-24 lg:py-32">

        {/* EYEBROW */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-[2px] bg-[#0078BF]" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0078BF]">
            About Quebeta
          </span>
        </motion.div>

        {/* GRID: IMAGE LEFT | CONTENT RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── LEFT: IMAGE ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative pb-6 pr-6">
              {/* Main image */}
              <div className="relative rounded-[16px] overflow-hidden" style={{ aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                  alt="Quebeta team at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,25,41,0.4) 0%, transparent 60%)' }} />

                {/* Founded badge */}
                <div className="absolute top-5 left-5 bg-white rounded-[10px] flex items-center gap-2.5 px-4 py-2.5" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                  <TbBuildingSkyscraper size={16} color="#0078BF" />
                  <div>
                    <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-slate-400">Founded</div>
                    <div className="text-[13px] font-extrabold text-[#0A1929]">2020 · Pune</div>
                  </div>
                </div>

                {/* Bottom badge */}
                <div className="absolute bottom-5 right-5 flex items-center gap-1.5 px-3.5 py-2 rounded-[8px] bg-[#0078BF]">
                  <TbRocket size={14} color="white" />
                  <span className="text-[12px] font-bold text-white tracking-[0.04em]">From Idea to Impact</span>
                </div>
              </div>

              {/* Floating retention card — bottom right of image */}
              <motion.div
                className="absolute bottom-0 right-0 bg-white rounded-[14px] flex items-center gap-3.5 px-5 py-4"
                style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.13)', minWidth: '180px' }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[#0078BF] shrink-0" style={{ background: 'rgba(0,120,191,0.1)' }}>
                  <FiUsers size={18} />
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-slate-400 mb-0.5">Client Retention</div>
                  <div className="text-[26px] font-extrabold text-[#0A1929] leading-none tracking-[-0.03em]">
                    98<span className="text-[#0078BF]">%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Headline */}
            <h2 className="font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0A1929] mb-7" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              We build businesses<br />
              <span className="text-[#0078BF]">that outlast</span> the hype.
            </h2>

                        {/* CTAs */}
            <div className="flex items-center gap-6">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0078BF] text-white text-[13px] font-bold px-6 py-3 rounded-full hover:bg-[#005fa3] transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's talk <FiArrowRight size={13} />
              </motion.a>
              <a
                href="#services"
                className="text-[13px] font-semibold text-[#0A1929] hover:text-[#0078BF] transition-colors duration-200 flex items-center gap-1.5"
              >
                See our services <FiArrowRight size={13} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;