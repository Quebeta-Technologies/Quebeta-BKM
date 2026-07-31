import { motion } from 'framer-motion';

const clientRow1 = [
  'Nexora','BrightLoop','Kinetic','Vantage','Meridian',
  'Arcadia','Voltra','Everly','Northstar','Prism',
];
const clientRow2 = [
  'Cloudbase','Silverline','Orbitel','Zenith','Quantum',
  'Emberly','Skyline','Coreflow','Ridgefield','Halcyon',
];

const testimonials = [
  {
    quote: 'Quebeta turned our napkin sketch into a live product in 8 weeks. Their strategy-first approach saved us months of pivoting.',
    name: 'Aditi Sharma',
    role: 'Founder, HealthLoop',
  },
  {
    quote: 'One team, one Slack channel, one invoice — and better output than the three vendors we juggled before. Genuine partners.',
    name: 'Rohan Mehta',
    role: 'COO, ShipRight Logistics',
  },
  {
    quote: 'From branding to the AI dashboard, they built our entire stack. Revenue is up 4x since launch.',
    name: 'Priya Nair',
    role: 'CEO, LearnKart',
  },
];

const Clients = () => {
  return (
    <section id="clients" className="section bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow"><span>●</span> Our Clients</div>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">ambitious teams</span>
          </h2>
          <p className="section-subtitle">
            From bootstrapped startups to global brands — here's what our partners say about working with us.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div
        className="relative my-10 py-10 flex flex-col gap-5"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(0,120,191,0.03), transparent)',
          borderTop: '1px solid rgba(0,120,191,0.08)',
          borderBottom: '1px solid rgba(0,120,191,0.08)',
        }}
      >
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-[150px] z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, white, transparent)' }} />
        <div className="absolute top-0 bottom-0 right-0 w-[150px] z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, white, transparent)' }} />

        {[{ row: clientRow1, cls: 'animate-scroll-fwd' }, { row: clientRow2, cls: 'animate-scroll-rev' }].map(({ row, cls }, ri) => (
          <div key={ri} className="overflow-hidden">
            <div className={`flex gap-[60px] w-max ${cls}`}>
              {[...row, ...row].map((name, i) => (
                <div
                  key={`r${ri}-${i}`}
                  className="font-extrabold text-[1.75rem] whitespace-nowrap py-2 transition-colors duration-300
                             hover:text-[#0078BF] cursor-default"
                  style={{ fontFamily: 'var(--font-heading)', color: 'rgba(0,120,191,0.35)', letterSpacing: '-0.02em' }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative p-[32px_28px] bg-white rounded-[24px] transition-all duration-300
                         hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,120,191,0.12)]"
              style={{ border: '1px solid rgba(0,120,191,0.1)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,120,191,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,120,191,0.1)'}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Decorative quote */}
              <span className="absolute top-[-10px] right-6 leading-none font-bold"
                style={{ fontFamily: 'Georgia, serif', fontSize: '5rem', color: 'rgba(0,120,191,0.1)' }}>"</span>

              <div className="text-[#FFB800] text-[18px] tracking-[2px] mb-4">★★★★★</div>
              <p className="text-[15px] text-slate-600 leading-[1.75] mb-6 italic">"{t.quote}"</p>

              <div
                className="flex items-center gap-[14px] pt-5"
                style={{ borderTop: '1px solid rgba(0,120,191,0.08)' }}
              >
                <div
                  className="w-[46px] h-[46px] rounded-full flex items-center justify-center text-white font-bold text-[14px]"
                  style={{
                    background: 'linear-gradient(135deg, #0078BF, #1CBBEE)',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-[14.5px] text-[#0A1929]" style={{ fontFamily: 'var(--font-heading)' }}>{t.name}</div>
                  <div className="text-[12.5px] text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
