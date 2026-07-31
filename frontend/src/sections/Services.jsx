import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="section relative" style={{ background: '#F8FCFF' }}>
      {/* Background orbs */}
      <div className="absolute w-[400px] h-[400px] rounded-full top-[10%] right-[-100px] -z-0 pointer-events-none"
        style={{ background: 'rgba(0,120,191,0.4)', filter: 'blur(100px)', opacity: 0.3 }} />
      <div className="absolute w-[350px] h-[350px] rounded-full bottom-[10%] left-[-80px] -z-0 pointer-events-none"
        style={{ background: 'rgba(28,187,238,0.4)', filter: 'blur(100px)', opacity: 0.3 }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow"><span>●</span> What We Do</div>
          <h2 className="section-title">
            End-to-end solutions to <br />
            <span className="gradient-text">build, launch & grow</span> your business
          </h2>
          <p className="section-subtitle">
            Six integrated capabilities under one roof — every service built to
            work with the next, so nothing gets lost in translation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              >
                <Tilt
                  tiltMaxAngleX={6} tiltMaxAngleY={6}
                  glareEnable glareMaxOpacity={0.15}
                  glareColor="#1CBBEE" glarePosition="all"
                  scale={1.02} transitionSpeed={1500}
                  className="rounded-[24px] h-full"
                >
                  <div
                    className="relative p-[32px_28px] bg-white rounded-[24px] h-full overflow-hidden flex flex-col
                               transition-all duration-300 hover:-translate-y-1
                               hover:shadow-[0_24px_60px_rgba(0,120,191,0.12)]"
                    style={{ border: '1px solid rgba(0,120,191,0.08)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,120,191,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,120,191,0.08)'}
                  >
                    {/* Hover glow */}
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: 'radial-gradient(circle, rgba(28,187,238,0.15), transparent 70%)' }} />

                    {/* Icon row */}
                    <div className="flex items-center justify-between mb-[22px]">
                      <div className="w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-white text-[26px]
                                      transition-transform duration-300 hover:-rotate-[8deg] hover:scale-[1.08]"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}, #1CBBEE)`,
                          boxShadow: '0 8px 24px rgba(0,120,191,0.25)',
                        }}>
                        <Icon />
                      </div>
                      <span className="font-extrabold text-[2.5rem] leading-none"
                        style={{ fontFamily: 'var(--font-heading)', color: 'rgba(0,120,191,0.08)' }}>
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="font-bold text-[1.35rem] text-[#0A1929] mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                    <p className="text-[14.5px] text-slate-500 leading-[1.65] mb-[22px] flex-grow">{service.desc}</p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((f) => (
                        <span key={f}
                          className="px-3 py-[5px] text-xs font-semibold rounded-full"
                          style={{
                            background: 'rgba(0,120,191,0.06)',
                            color: '#0078BF',
                            border: '1px solid rgba(0,120,191,0.1)',
                          }}>
                          {f}
                        </span>
                      ))}
                    </div>

                    <a href="#contact"
                      className="inline-flex items-center gap-[6px] font-semibold text-sm text-[#0078BF]
                                 transition-all duration-300 self-start hover:gap-3 group"
                      style={{ fontFamily: 'var(--font-heading)' }}>
                      Learn more
                      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
                    </a>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
