import { motion } from 'framer-motion';
import { FiUsers, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';

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
    <section
      className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)' }}
    >
      {/* Blobs */}
      <div className="absolute w-[500px] h-[500px] rounded-full top-[-100px] right-[-150px] pointer-events-none"
        style={{ background: 'rgba(0,120,191,0.4)', filter: 'blur(120px)', opacity: 0.35 }} />
      <div className="absolute w-[400px] h-[400px] rounded-full bottom-[-100px] left-[-100px] pointer-events-none"
        style={{ background: 'rgba(28,187,238,0.4)', filter: 'blur(120px)', opacity: 0.35 }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow"><span>●</span> Partnership Models</div>
          <h2 className="section-title">
            Ways to <span className="gradient-text">work with Quebeta</span>
          </h2>
          <p className="section-subtitle">
            Whether you're a founder, an agency, or an enterprise — we shape our
            engagement around your goals, timeline, and appetite for scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px] mb-[60px]">
          {partnershipTypes.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className={`relative p-[40px_32px] rounded-[24px] transition-all duration-300
                  ${p.featured
                    ? 'text-white border-transparent scale-[1.03] shadow-[0_30px_70px_rgba(0,120,191,0.35)] hover:scale-[1.03] hover:-translate-y-[6px]'
                    : 'bg-white hover:-translate-y-[6px] hover:shadow-[0_24px_60px_rgba(0,120,191,0.15)]'
                  }`}
                style={p.featured
                  ? { background: 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)' }
                  : { border: '1px solid rgba(0,120,191,0.1)' }
                }
                onMouseEnter={e => { if (!p.featured) e.currentTarget.style.borderColor = 'rgba(0,120,191,0.25)'; }}
                onMouseLeave={e => { if (!p.featured) e.currentTarget.style.borderColor = 'rgba(0,120,191,0.1)'; }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {p.featured && (
                  <div className="absolute top-4 right-4 px-3 py-[5px] text-white text-[11px] font-bold tracking-[0.06em] uppercase rounded-full border"
                    style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.3)' }}>
                    Most Popular
                  </div>
                )}

                <div className={`w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-[28px] mb-5
                  ${p.featured ? 'bg-white/20 text-white' : 'bg-[rgba(0,120,191,0.1)] text-[#0078BF]'}`}>
                  <Icon />
                </div>

                <div className={`text-xs font-semibold tracking-[0.1em] uppercase mb-2
                  ${p.featured ? 'text-white/80' : 'text-[#0078BF]'}`}>
                  {p.subtitle}
                </div>

                <h3 className={`font-bold text-[1.5rem] mb-6 ${p.featured ? 'text-white' : 'text-[#0A1929]'}`}
                  style={{ fontFamily: 'var(--font-heading)' }}>{p.title}</h3>

                <ul className="mb-[30px] flex flex-col">
                  {p.features.map((f) => (
                    <li key={f}
                      className={`flex items-start gap-[10px] py-[10px] text-[14.5px]
                        ${p.featured ? 'text-white/90 border-white/15' : 'text-slate-600 border-[rgba(0,120,191,0.06)]'}`}
                      style={{ borderBottom: '1px solid' }}
                    >
                      <span
                        className={`w-[22px] h-[22px] min-w-[22px] rounded-full flex items-center justify-center text-[11px] font-bold
                          ${p.featured ? 'bg-white/20 text-white' : 'bg-[rgba(0,120,191,0.1)] text-[#0078BF]'}`}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-6 py-[13px] rounded-full font-semibold text-sm transition-all duration-300
                    ${p.featured
                      ? 'bg-white text-[#0078BF] hover:bg-white/90 hover:-translate-y-0.5'
                      : 'text-[#0078BF] hover:text-white hover:-translate-y-0.5'
                    }`}
                  style={p.featured
                    ? {}
                    : { background: 'rgba(0,120,191,0.08)' }
                  }
                  onMouseEnter={e => { if (!p.featured) e.currentTarget.style.background = 'linear-gradient(135deg, #0078BF, #1CBBEE)'; }}
                  onMouseLeave={e => { if (!p.featured) e.currentTarget.style.background = 'rgba(0,120,191,0.08)'; }}
                >
                  Talk to us <FiArrowRight />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          className="flex flex-wrap md:flex-nowrap items-center gap-6 p-[30px_40px] bg-white rounded-[24px]
                     shadow-[0_20px_60px_rgba(0,120,191,0.1)]"
          style={{ border: '1px solid rgba(0,120,191,0.15)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[60px] h-[60px] min-w-[60px] rounded-[16px] flex items-center justify-center text-white text-[26px] flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #0078BF, #1CBBEE)' }}>
            <FiTrendingUp />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[1.2rem] text-[#0A1929] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
              Not sure which model fits?
            </h4>
            <p className="text-[14.5px] text-slate-500">
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
