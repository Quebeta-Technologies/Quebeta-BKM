import { motion } from 'framer-motion';
import { industries } from '../data/industries';

const Industries = () => {
  return (
    <section className="section relative bg-white">
      {/* Subtle radial bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(0,120,191,0.05) 0%, transparent 30%), radial-gradient(circle at 80% 80%, rgba(28,187,238,0.05) 0%, transparent 30%)',
        }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow"><span>●</span> Industries We Serve</div>
          <h2 className="section-title">
            Deep expertise across <span className="gradient-text">every vertical</span>
          </h2>
          <p className="section-subtitle">
            From bootstrapped startups to established enterprises — we've helped
            teams in every industry ship products that move the needle.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[22px]">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                className="relative p-[28px_24px] bg-white rounded-[24px] transition-all duration-300 cursor-default overflow-hidden group
                           hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,120,191,0.25)]"
                style={{ border: '1px solid rgba(0,120,191,0.1)' }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -8 }}
              >
                {/* Hover overlay gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{ background: 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)' }}
                />

                <div
                  className="w-[54px] h-[54px] rounded-[14px] flex items-center justify-center text-[24px] mb-[18px]
                             relative z-[2] transition-all duration-300
                             group-hover:bg-[rgba(255,255,255,0.2)] group-hover:text-white"
                  style={{ background: 'rgba(0,120,191,0.08)', color: '#0078BF' }}
                >
                  <Icon />
                </div>

                <div className="relative z-[2]">
                  <h4 className="font-bold text-[1.05rem] text-[#0A1929] mb-2 transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}>{industry.name}</h4>
                  <p className="text-[13.5px] text-slate-500 leading-[1.55] transition-colors duration-300 group-hover:text-white">
                    {industry.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-6 text-[22px] text-[#0078BF] z-[2]
                                opacity-0 -translate-x-2 transition-all duration-300
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white">
                  →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
