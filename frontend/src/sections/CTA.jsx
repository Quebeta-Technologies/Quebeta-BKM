import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const CTA = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch (_) {}
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 800);
  };

  const inputCls = `w-full px-4 py-[14px] rounded-[16px] text-white text-[14.5px] transition-all duration-300
    outline-none focus:shadow-[0_0_0_3px_rgba(28,187,238,0.15)] resize-y`;
  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    fontFamily: 'var(--font-body)',
    color: 'white',
  };
  const inputFocusStyle = {
    borderColor: '#1CBBEE',
    background: 'rgba(255,255,255,0.07)',
  };

  return (
    <section
      id="contact"
      className="section relative overflow-hidden text-white"
      style={{ background: '#0A1929' }}
    >
      {/* Radial bg */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(0,120,191,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(28,187,238,0.3), transparent 50%)',
        }} />
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,187,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,187,238,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 70%)',
        }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-[70px] items-center">

          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-eyebrow"
              style={{ background: 'rgba(28,187,238,0.15)', color: '#1CBBEE', borderColor: 'rgba(28,187,238,0.3)' }}>
              <span>●</span> Contact Us
            </div>
            <h2
              className="font-extrabold text-white mb-[22px] leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              Let's turn your <br />
              <span style={{
                background: 'linear-gradient(135deg, #1CBBEE 0%, #00D4FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>idea into impact</span>
            </h2>
            <p className="text-[1.05rem] leading-[1.75] mb-9" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Book a discovery call, drop us a message, or send an email. We
              typically respond within one business day — often faster.
            </p>

            <div className="flex flex-col gap-[18px]">
              {[
                { Icon: FiMail,   label: 'Email',   value: 'sales@quebeta.in',    href: 'mailto:sales@quebeta.in' },
                { Icon: FiPhone,  label: 'Phone',   value: '+91 86989 84443',     href: 'tel:+918698984443' },
                { Icon: FiMapPin, label: 'Address', value: 'Office No. 701 & 702, Sterling Towers,\nBaner, Pune, Maharashtra 411069', href: null },
              ].map(({ Icon, label, value, href }) => {
                const content = (
                  <>
                    <div
                      className="w-[46px] h-[46px] min-w-[46px] rounded-[12px] flex items-center justify-center text-[20px]"
                      style={{ background: 'rgba(28,187,238,0.15)', color: '#1CBBEE', border: '1px solid rgba(28,187,238,0.2)' }}
                    >
                      <Icon />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-[3px]"
                        style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</div>
                      <div className="text-[15px] text-white font-medium leading-[1.4]" style={{ whiteSpace: 'pre-line' }}>
                        {value}
                      </div>
                    </div>
                  </>
                );
                return href
                  ? <a key={label} href={href} className="flex gap-4 items-start text-white transition-transform duration-300 hover:translate-x-[6px]">{content}</a>
                  : <div key={label} className="flex gap-4 items-start text-white">{content}</div>;
              })}
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            className="rounded-[24px] p-[40px_36px]"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                className="text-center py-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <FiCheckCircle className="text-[60px] text-[#1CBBEE] mx-auto mb-5 animate-pulse-glow" />
                <h3 className="text-white font-bold text-[1.5rem] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Message sent!
                </h3>
                <p className="mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Thanks for reaching out. Our team will get back to you within one business day.
                </p>
                <button
                  className="btn btn-outline"
                  style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-[26px]">
                  <h3 className="text-white font-bold text-[1.5rem] mb-[6px]" style={{ fontFamily: 'var(--font-heading)' }}>
                    Start a project
                  </h3>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Tell us a little about what you're building.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mb-[18px]">
                  {[
                    { label: 'Your Name',  name: 'name',  type: 'text',  placeholder: 'Jane Doe',          required: true },
                    { label: 'Email',      name: 'email', type: 'email', placeholder: 'jane@company.com',   required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[12.5px] font-semibold mb-2 tracking-[0.03em]"
                        style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-heading)' }}>{f.label}</label>
                      <input
                        {...f}
                        value={form[f.name]}
                        onChange={handleChange}
                        className={inputCls}
                        style={inputStyle}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, inputStyle)}
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-[18px]">
                  <label className="block text-[12.5px] font-semibold mb-2 tracking-[0.03em]"
                    style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-heading)' }}>Phone (optional)</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 12345 67890"
                    className={inputCls} style={inputStyle}
                    onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={e => Object.assign(e.target.style, inputStyle)}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[12.5px] font-semibold mb-2 tracking-[0.03em]"
                    style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-heading)' }}>Project details</label>
                  <textarea
                    name="message" required rows={4} value={form.message} onChange={handleChange}
                    placeholder="Tell us about your idea, timeline, and goals..."
                    className={inputCls} style={inputStyle}
                    onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={e => Object.assign(e.target.style, inputStyle)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-[15px] px-6 text-white font-semibold text-[15px] rounded-full border-none
                             inline-flex items-center justify-center gap-[10px] transition-all duration-300
                             disabled:opacity-70 disabled:cursor-not-allowed hover:enabled:-translate-y-[3px]"
                  style={{
                    background: 'linear-gradient(135deg, #0078BF 0%, #1CBBEE 100%)',
                    boxShadow: '0 12px 32px rgba(0,120,191,0.35)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {loading ? 'Sending...' : (<>Send Message <FiSend /></>)}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
