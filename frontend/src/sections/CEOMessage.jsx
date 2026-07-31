import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const CEOMessage = () => {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F8FCFF 0%, #E0F5FF 100%)' }}
    >
      {/* Bg pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 30%, rgba(0,120,191,0.1), transparent 40%), radial-gradient(circle at 75% 70%, rgba(28,187,238,0.1), transparent 40%)',
        }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[80px] items-center">

          {/* LEFT — Portrait */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-[340px] h-[340px] max-sm:w-[260px] max-sm:h-[260px]">
              {/* Portrait circle */}
              <div
                className="relative w-full h-full rounded-full p-2 animate-float"
                style={{
                  background: 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)',
                  boxShadow: '0 30px 80px rgba(0,120,191,0.35)',
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #E0F5FF 100%)' }}
                >
                  <span
                    className="font-extrabold text-[6rem] max-sm:text-[4.5rem] relative z-10"
                    style={{ fontFamily: 'var(--font-heading)', color: '#0078BF', letterSpacing: '-0.05em' }}
                  >RC</span>
                </div>
                {/* Glow halo */}
                <div
                  className="absolute inset-[-20px] rounded-full -z-10 animate-pulse-glow"
                  style={{ background: 'radial-gradient(circle, rgba(28,187,238,0.3), transparent 70%)' }}
                />
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-[-30px] rounded-full border-2 border-dashed border-[rgba(0,120,191,0.2)] animate-rotate-slow" />
              <div className="absolute inset-[-60px] rounded-full border-2 border-dashed border-[rgba(28,187,238,0.15)] animate-rotate-slow-rv" />

              {/* Floating credentials */}
              <motion.div
                className="absolute top-5 right-[-30px] px-[18px] py-[10px] bg-white rounded-full font-semibold text-[13px] text-[#0A1929] z-[2] whitespace-nowrap"
                style={{ border: '1px solid rgba(0,120,191,0.1)', boxShadow: '0 12px 30px rgba(0,120,191,0.15)', fontFamily: 'var(--font-heading)' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                💼 CEO & Founder
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-[-50px] px-[18px] py-[10px] bg-white rounded-full font-semibold text-[13px] text-[#0A1929] z-[2] whitespace-nowrap max-sm:left-[-20px]"
                style={{ border: '1px solid rgba(0,120,191,0.1)', boxShadow: '0 12px 30px rgba(0,120,191,0.15)', fontFamily: 'var(--font-heading)' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                🚀 Startup Mentor
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-eyebrow"><span>●</span> CEO Message</div>
            <h2 className="font-extrabold text-[#0A1929] mb-8"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}>
              A note from our <span className="gradient-text">Founder</span>
            </h2>

            {/* Quote card */}
            <div
              className="relative p-[30px_32px_30px_40px] bg-white rounded-[24px] mb-[26px]"
              style={{
                boxShadow: '0 20px 60px rgba(0,120,191,0.08)',
                border: '1px solid rgba(0,120,191,0.08)',
              }}
            >
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-[5px] h-full rounded-[5px_0_0_5px]"
                style={{ background: 'linear-gradient(135deg, #0078BF, #1CBBEE)' }} />
              {/* Big quote mark */}
              <span className="absolute top-3 left-5 font-bold leading-none"
                style={{ fontFamily: 'Georgia, serif', fontSize: '3.5rem', color: 'rgba(0,120,191,0.15)' }}>"</span>

              <p className="text-[1.05rem] text-slate-600 leading-[1.75]">
                I know how tough the startup journey can be. That's why, at
                Quebeta, we make sure you're{' '}
                <em className="font-semibold not-italic text-[#0078BF]">never building alone</em>. We roll
                up our sleeves alongside our clients — strategy, tech, marketing,
                everything — so ambitious ideas actually reach the market.
              </p>
            </div>

            {/* Signature */}
            <div className="mb-6">
              <div className="font-bold text-[1.4rem] text-[#0078BF] mb-[2px]"
                style={{ fontFamily: 'var(--font-heading)' }}>Rutika Channawar</div>
              <div className="text-sm text-slate-500">Chief Executive Officer, Quebeta</div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[FiLinkedin, FiTwitter, FiInstagram].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[17px] text-[#0078BF]
                             transition-all duration-300 hover:-translate-y-[3px]"
                  style={{ border: '1px solid rgba(0,120,191,0.15)', boxShadow: '0 4px 12px rgba(0,120,191,0.1)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0078BF, #1CBBEE)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#0078BF';
                    e.currentTarget.style.borderColor = 'rgba(0,120,191,0.15)';
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
