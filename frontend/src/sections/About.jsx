import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiTrendingUp } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import Tilt from 'react-parallax-tilt';

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
    <section id="about" className="section" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FCFF 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">

          {/* LEFT — Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Tilt
              tiltMaxAngleX={8} tiltMaxAngleY={8}
              glareEnable glareMaxOpacity={0.2}
              glareColor="#1CBBEE" glarePosition="all"
              scale={1.02}
              className="rounded-[24px]"
            >
              <div
                className="relative p-[44px_36px] rounded-[24px] text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)',
                  boxShadow: '0 30px 80px rgba(0,120,191,0.35)',
                }}
              >
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.06em] uppercase mb-5 border"
                  style={{ background: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)' }}
                >
                  <HiSparkles /> From Idea to Impact
                </div>

                <div className="font-extrabold text-[1.8rem] leading-[1.2] mb-[14px] relative z-[2]"
                  style={{ fontFamily: 'var(--font-heading)' }}>
                  Turning Vision Into Ventures
                </div>

                <div className="text-[15px] leading-[1.7] opacity-[0.92] mb-7 relative z-[2]">
                  We blend strategy, creativity, technology, AI, and marketing into
                  one unstoppable growth engine.
                </div>

                {/* Stats */}
                <div
                  className="grid grid-cols-2 gap-5 pt-6 relative z-[2]"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
                >
                  {[['98%', 'Client Retention'], ['6+', 'Core Services']].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-[2rem] font-extrabold leading-none mb-1 text-white"
                        style={{ fontFamily: 'var(--font-heading)' }}>{num}</div>
                      <div className="text-[12px] opacity-[0.85] uppercase tracking-[0.05em]">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Orbs */}
                <div className="absolute w-[200px] h-[200px] rounded-full top-[-80px] right-[-60px]"
                  style={{ background: 'rgba(255,255,255,0.15)' }} />
                <div className="absolute w-[150px] h-[150px] rounded-full bottom-[-60px] left-[-40px]"
                  style={{ background: 'rgba(255,255,255,0.15)' }} />
              </div>
            </Tilt>

            {/* Decorative shapes */}
            <div className="absolute w-[200px] h-[200px] rounded-full top-[-40px] left-[-40px] -z-10"
              style={{ background: 'linear-gradient(135deg, #0078BF, #1CBBEE)', opacity: 0.15, filter: 'blur(40px)' }} />
            <div className="absolute w-[160px] h-[160px] rounded-full bottom-[-30px] right-[-30px] -z-10"
              style={{ background: 'linear-gradient(135deg, #0078BF, #1CBBEE)', opacity: 0.15, filter: 'blur(40px)' }} />
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="section-eyebrow"><span>●</span> About Quebeta</div>
            <h2 className="section-title text-left">
              A strategic <span className="gradient-text">technology & growth</span> partner
            </h2>
            <p className="text-[1.05rem] text-slate-500 leading-[1.75] mb-9">
              Quebeta transforms ambitious ideas into scalable brands, digital
              products, and intelligent systems. We combine strategy, creativity,
              technology, AI, and marketing to build solutions that drive
              measurable impact and long-term success.
            </p>

            <div className="flex flex-col gap-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className="flex gap-5 items-start p-[18px_20px] bg-white rounded-[16px] border transition-all duration-300
                             hover:border-[rgba(0,120,191,0.25)] hover:translate-x-[6px] hover:shadow-[0_12px_24px_rgba(0,120,191,0.08)]"
                  style={{ border: '1px solid rgba(0,120,191,0.08)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <div className="w-12 h-12 min-w-[48px] rounded-[12px] text-white flex items-center justify-center text-[22px]"
                    style={{ background: 'linear-gradient(135deg, #0078BF, #1CBBEE)', boxShadow: '0 8px 20px rgba(0,120,191,0.25)' }}>
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.05rem] text-[#0A1929] mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}>{h.title}</h4>
                    <p className="text-sm text-slate-500 leading-[1.6]">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
