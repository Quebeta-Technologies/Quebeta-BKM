import { motion } from 'framer-motion';
import { FiUsers, FiTrendingUp, FiArrowRight, FiAward } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';

const partnershipTypes = [
  {
    icon: FaHandshake,
    title: 'Startup Partnership',
    subtitle: 'For Founders',
    features: [
      'Equity + retainer models',
      'MVP to Series-A support',
      'Fractional CTO / CMO access',
      'Weekly growth reviews',
    ],
  },
  {
    icon: FiUsers,
    title: 'Agency Whitelabel',
    subtitle: 'For Agencies',
    features: [
      'Development capacity extension',
      'Whitelabel branding & delivery',
      'Dedicated pods per client',
      'Transparent SLAs',
    ],
    featured: true,
  },
  {
    icon: FiAward,
    title: 'Enterprise Retainer',
    subtitle: 'For Established Brands',
    features: [
      'Ongoing product & growth ops',
      'Priority tech + design squad',
      'Quarterly business reviews',
      'Advanced analytics & reporting',
    ],
  },
];

const Partnership = () => {
  return (
    <section id="partnership" className="section bg-white">
      <div className="section-container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-eyebrow">Partnership Models</div>
          <h2 className="section-title">
            Ways to <span className="gradient-text">work with Quebeta</span>
          </h2>
          <p className="section-subtitle">
            Whether you're a founder, an agency, or an enterprise — we shape our
            engagement around your goals, timeline, and appetite for scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {partnershipTypes.map((p, i) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={p.title}
                className={`relative rounded-[var(--radius-lg)] p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1
                  ${p.featured ? 'text-white' : 'bg-white'}`}
                style={p.featured
                  ? { background: 'var(--brand-primary)' }
                  : { border: '1px solid rgba(0,120,191,0.1)' }
                }
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {p.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-[11px] font-bold tracking-[0.06em] uppercase rounded-full"
                    style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}>
                    Most Popular
                  </div>
                )}

                <div className="w-[52px] h-[52px] rounded-[var(--radius-md)] flex items-center justify-center text-[22px] mb-5"
                  style={p.featured
                    ? { background: 'rgba(255,255,255,0.2)', color: '#fff' }
                    : { background: 'rgba(0,120,191,0.08)', color: 'var(--brand-primary)' }
                  }>
                  <Icon />
                </div>

                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-1"
                  style={{ color: p.featured ? 'rgba(255,255,255,0.75)' : 'var(--brand-primary)' }}>
                  {p.subtitle}
                </div>

                <h3 className="font-bold text-[1.3rem] mb-6"
                  style={{ fontFamily: 'var(--font-heading)', color: p.featured ? '#fff' : 'var(--brand-dark)' }}>
                  {p.title}
                </h3>

                <ul className="mb-8 flex flex-col flex-grow">
                  {p.features.map((f) => (
                    <li key={f}
                      className="flex items-center gap-3 py-[10px] text-[14px]"
                      style={{
                        borderBottom: p.featured ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,120,191,0.07)',
                        color: p.featured ? 'rgba(255,255,255,0.9)' : '#475569',
                      }}
                    >
                      <span className="w-[20px] h-[20px] min-w-[20px] rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                        style={p.featured
                          ? { background: 'rgba(255,255,255,0.2)', color: '#fff' }
                          : { background: 'rgba(0,120,191,0.08)', color: 'var(--brand-primary)' }
                        }>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-[11px] rounded-full font-semibold text-sm self-start transition-all duration-300 hover:-translate-y-0.5"
                  style={p.featured
                    ? { background: '#fff', color: 'var(--brand-primary)' }
                    : { background: 'rgba(0,120,191,0.07)', color: 'var(--brand-primary)' }
                  }>
                  Talk to us <FiArrowRight />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          className="flex flex-wrap md:flex-nowrap items-center gap-6 p-8 bg-white rounded-[var(--radius-lg)]"
          style={{ border: '1px solid rgba(0,120,191,0.12)', boxShadow: 'var(--shadow-md)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="w-[52px] h-[52px] min-w-[52px] rounded-[var(--radius-md)] flex items-center justify-center text-white text-[22px] flex-shrink-0"
            style={{ background: 'var(--gradient-primary)' }}>
            <FiTrendingUp />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[1.1rem] mb-1"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--brand-dark)' }}>
              Not sure which model fits?
            </h4>
            <p className="text-[14px] text-slate-500">
              Book a 30-minute discovery call — we'll map the right partnership for your stage.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary flex-shrink-0">
            Book a Call <FiArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Partnership;