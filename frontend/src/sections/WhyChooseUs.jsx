import { motion } from 'framer-motion';
import { FiHome, FiZap, FiCompass, FiRadio, FiClock, FiBarChart2 } from 'react-icons/fi';

const reasons = [
  { icon: FiHome,     title: 'Everything Under One Roof',  desc: 'Branding, website, marketing, tools — all handled by one team.' },
  { icon: FiZap,      title: 'From Idea to Market',        desc: 'We take your concept and turn it into a ready-to-sell brand.' },
  { icon: FiCompass,  title: 'Clear Strategy First',       desc: 'We plan before we design, so your brand has direction — not just decoration.' },
  { icon: FiRadio,    title: 'Online + Offline',           desc: 'Your website, ads, social media, and marketing materials work together as one system.' },
  { icon: FiClock,    title: 'Fast, But Organised',        desc: 'Quick execution with proper timelines and structured processes.' },
  { icon: FiBarChart2,title: 'Built for Sales & Growth',   desc: 'Every design, tool, and campaign is created to support revenue — not just look good.' },
];

const WhyChooseUs = () => {
  return (
    <section
      className="section relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(180deg, #0A1929 0%, #063A5F 100%)' }}
    >
      {/* Radial pattern */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(28,187,238,0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,120,191,0.2), transparent 50%)',
        }} />
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,187,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,187,238,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
        }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-[70px] items-center">

          {/* LEFT intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-eyebrow"
              style={{ background: 'rgba(28,187,238,0.15)', color: '#1CBBEE', borderColor: 'rgba(28,187,238,0.3)' }}>
              <span>●</span> Why Choose Us
            </div>
            <h2 className="section-title text-white text-left mb-[22px]"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)' }}>
              Built for businesses that want things done —{' '}
              <span className="gradient-text">clearly, quickly, correctly</span>
            </h2>
            <p className="text-[1.05rem] leading-[1.75] mb-[34px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Instead of managing multiple vendors for branding, website, and
              marketing, you work with one team that handles everything. Strategy,
              design, technology, and marketing — one smooth, organised system.
            </p>

            {/* Quote block */}
            <div className="relative py-6 pr-[26px] pl-[60px] rounded-[16px]"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderLeft: '4px solid #1CBBEE' }}>
              <span className="absolute left-5 top-1 font-bold leading-none"
                style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', color: '#1CBBEE' }}>"</span>
              <p className="font-medium text-[1.05rem] text-white italic leading-[1.5]"
                style={{ fontFamily: 'var(--font-heading)' }}>
                You grow the business. We build the engine behind it.
              </p>
            </div>
          </motion.div>

          {/* RIGHT grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  className="relative p-[26px_24px] rounded-[16px] transition-all duration-300 overflow-hidden group
                             hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(28,187,238,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {/* Top accent line (shows on hover) */}
                  <div className="absolute top-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100
                                  origin-left transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #0078BF, #1CBBEE)' }} />

                  <div className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center text-white text-[22px] mb-[18px]"
                    style={{ background: 'linear-gradient(135deg, #0078BF, #1CBBEE)', boxShadow: '0 8px 24px rgba(28,187,238,0.25)' }}>
                    <Icon />
                  </div>
                  <h4 className="text-white font-bold text-[1.05rem] mb-2 leading-[1.3]"
                    style={{ fontFamily: 'var(--font-heading)' }}>{reason.title}</h4>
                  <p className="text-[13.5px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.65)' }}>{reason.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
